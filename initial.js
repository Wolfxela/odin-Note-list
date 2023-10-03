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

/***/ "./src/domNoteHandler.js":
/*!*******************************!*\
  !*** ./src/domNoteHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domNoteHandler: () => (/* binding */ domNoteHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nconst domNoteHandler = (function()\n{\n    const taskDisplay = document.querySelector('.tasks')\n\n    \n\n    const displayNotes = function()\n    {\n        taskDisplay.style.flexDirection = \"row\";\n        taskDisplay.style.justifyContent = \"center\";\n        taskDisplay.style.flexWrap = \"wrap\";\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.task')\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.note')\n\n        const tasks = _index__WEBPACK_IMPORTED_MODULE_1__.programData.getNoteProject().getTasks()\n\n        for(let i = 0; i< tasks.length;i++)\n        {\n            noteMaker(taskDisplay,tasks[i])\n           \n        }\n    };\n    \n    return{displayNotes}\n})();\n\nconst noteMaker = function(taskDisplay,tasks)\n{\n           const noteDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','note',tasks.getTaskDescription(),taskDisplay)\n           const deleteNote = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','deleteNote','X',noteDiv)\n\n\n           deleteNote.addEventListener('click',function()\n           {\n            _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(noteDiv),_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n            taskDisplay.removeChild(noteDiv)\n           })\n}\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domNoteHandler.js?");

/***/ }),

/***/ "./src/domTaskHandler.js":
/*!*******************************!*\
  !*** ./src/domTaskHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domTaskHandler: () => (/* binding */ domTaskHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst taskMaker = function(taskDisplay,tasks)\n{\n           const taskDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','task','',taskDisplay)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div',tasks.getTaskPriority()+'Priority','',taskDiv)\n           const taskContentDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskContent','',taskDiv)\n           const checkMark = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','checkMark','',taskContentDiv)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTitle',tasks.getTaskName(),taskContentDiv)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTime',tasks.getTaskDate(),taskContentDiv)\n           taskDisplay.appendChild(taskDiv)\n\n           checkMark.addEventListener('click',function()\n           {\n            _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(taskDiv),_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n            taskDisplay.removeChild(taskDiv)\n           })\n}\n\nconst taskSorter = function(taskArray)\n{\n       \n        const highPriority = taskArray.querySelectorAll('.highPriority')\n        const mediumPriority = taskArray.querySelectorAll('.mediumPriority')\n        const lowPriority = taskArray.querySelectorAll('.lowPriority')\n        for(let i = 0; i<highPriority.length;i++)\n        { \n            taskArray.appendChild(highPriority[i].parentElement)\n        }\n        for(let i = 0; i<mediumPriority.length;i++)\n        {\n            taskArray.appendChild(mediumPriority[i].parentElement)\n        }\n        for(let i = 0; i<lowPriority.length;i++)\n        {\n            taskArray.appendChild(lowPriority[i].parentElement)\n        }\n}\n\nconst domTaskHandler = (function()\n{\n    const taskDisplay = document.querySelector('.tasks')\n\n    const displayTasks = function()\n    {\n        taskDisplay.style.flexDirection = \"column\";\n        taskDisplay.style.justifyContent = \"flex-start\";\n        taskDisplay.style.flexWrap = \"nowrap\";\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.task')\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.note')\n\n        const tasks = _index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks()\n\n        for(let i = 0; i< tasks.length;i++)\n        {\n           taskMaker(taskDisplay,tasks[i])\n           \n        }\n        taskSorter(taskDisplay)\n    };\n    \n    return{displayTasks}\n})();\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domTaskHandler.js?");

/***/ }),

/***/ "./src/domhandler.js":
/*!***************************!*\
  !*** ./src/domhandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProjectHandler: () => (/* binding */ domProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _domTaskHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domTaskHandler */ \"./src/domTaskHandler.js\");\n\n\n\n\nconst domProjectHandler = (function(){\n\n    \n    let Projects = [];\n    const page = document.querySelector('.content')\n    const projectHolder = page.querySelector(\".projectHolder\")\n    const mainProjectHolder = page.querySelector('.mainProjectHolder')\n    const projectAddBtn = page.querySelector(\".addProjectBtn\")\n\n    const deleteProject = function(ProjectId)\n    {\n        Projects.splice(ProjectId,1);\n        displayProjects(Projects)\n\n    }\n\n    const addProject = function(Project)\n    {\n        Projects.push(Project)\n        displayProjects(Projects)\n    }\n\n    const displayProjects = function()\n    {\n        let ProjectDiv;\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(projectHolder,\".Project\")\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(mainProjectHolder,\".Project\")\n        for(let i = 0; i<Projects.length;i++)\n        {\n            if(i < 3)\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),mainProjectHolder);\n                ProjectDiv.classList.add(\"projectView\");\n          \n            }\n            else\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),projectHolder);\n            }\n            ProjectDiv.addEventListener(\"click\",function()\n            {\n                _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[i])\n                _index__WEBPACK_IMPORTED_MODULE_1__.programData.setTaskStatus(true)\n                _domTaskHandler__WEBPACK_IMPORTED_MODULE_2__.domTaskHandler.displayTasks()        \n            })\n        }\n        _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[0])\n        projectHolder.appendChild(projectAddBtn)\n    }\n    \n\n    return{deleteProject,addProject}\n\n\n})();\n\n\n\n\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domhandler.js?");

/***/ }),

/***/ "./src/generalFunctions.js":
/*!*********************************!*\
  !*** ./src/generalFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generalFuncModule: () => (/* binding */ generalFuncModule)\n/* harmony export */ });\nconst generalFuncModule = (function()\n{\n    const bodyElem = document.body;\n    const doc = document;\n\n\n\n    const insertElement = function(elementType,elementClass,elementContent,elementParrent,elementImgSrc)\n    {\n       let element = doc.createElement(elementType);\n        element.className = elementClass;\n        element.textContent = elementContent\n        if(elementType === \"img\")\n        {\n            element.src = elementImgSrc;\n        }\n        elementParrent.appendChild(element)\n        return element\n        \n    }\n    const clearDom = function(parrent,inputClass)\n{\n       const elementArray = parrent.querySelectorAll(inputClass)\n       for(let i = 0; i<elementArray.length;i++)\n       {\n        parrent.removeChild(elementArray[i])\n       }\n}\n    return{insertElement,clearDom}\n})();\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/generalFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   programData: () => (/* binding */ programData),\n/* harmony export */   taskHandler: () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\nconst taskHandler = (function()\n{\n    const setTask = (task,taskArray)=>{taskArray.push(task)}\n    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}\n    return{setTask,deleteTask}\n})();\n\n\nconst programData = (function()\n{\n    let currentProject;\n    let areTasksDisplaying = true;\n    let notesProject = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.projectMaker)(\"Notes\");\n    const setProject = function(project){currentProject = project}\n    const getCurrentProject = function(){return currentProject}\n    const getTaskStatus = function(){return areTasksDisplaying}\n    const setTaskStatus = function(input){areTasksDisplaying = input}\n    const getNoteProject = function(){return notesProject}\n\n    return{setProject,getCurrentProject,getTaskStatus,setTaskStatus,getNoteProject}\n})();\n\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/index.js?");

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domhandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domhandler */ \"./src/domhandler.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _domTaskHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domTaskHandler */ \"./src/domTaskHandler.js\");\n/* harmony import */ var _domNoteHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domNoteHandler */ \"./src/domNoteHandler.js\");\n\n\n\n\n\n\nconst addMainProjects = function()\n{\n    const todayProject = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.projectMaker)(\"Today\")\n    const weeklyProject = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.projectMaker)(\"Weekly\")\n    const monthlyProject = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.projectMaker)(\"Monthly\")\n    _domhandler__WEBPACK_IMPORTED_MODULE_0__.domProjectHandler.addProject(todayProject)\n    _domhandler__WEBPACK_IMPORTED_MODULE_0__.domProjectHandler.addProject(weeklyProject)\n    _domhandler__WEBPACK_IMPORTED_MODULE_0__.domProjectHandler.addProject(monthlyProject)\n\n    _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(todayProject)\n     makeTask(\"do dishes\",\"date\",\"high\")\n     makeTask(\"do grab trash\",\"date\",\"medium\")\n     makeTask(\"do homework\",\"date\",\"high\")\n     makeTask(\"buy cat food\",\"date\",\"high\")\n     makeTask(\"clean your room\",\"date\",\"low\")\n     makeTask(\"go touch grass\",\"date\",\"low\")\n}\nconst initialiseApp = function()\n{\n\n    const btnProject = document.querySelector('.addProjectBtn')\n    const btnTask = document.querySelector('.addTaskBtn')\n    const btnNotes = document.querySelector('.notes')\n    //how we should add the project and the tasks\n    btnProject.addEventListener(\"click\",function()\n    {\n       \n        makeProject()\n\n    });\n    btnTask.addEventListener(\"click\",function()\n    {\n\n        if(_index__WEBPACK_IMPORTED_MODULE_1__.programData.getTaskStatus() === true)\n        {\n            makeTask(\"name\",\"date\",\"high\")\n        }\n        else\n        {\n            const task = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.dataTaskMaker)('','hello i am a fox note ','','')\n            _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.setTask(task,_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n            _domNoteHandler__WEBPACK_IMPORTED_MODULE_4__.domNoteHandler.displayNotes(_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject())\n        }\n        \n\n    });\n    btnNotes.addEventListener(\"click\",function()\n    {\n        _index__WEBPACK_IMPORTED_MODULE_1__.programData.setTaskStatus(false)\n        _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(_index__WEBPACK_IMPORTED_MODULE_1__.programData.getNoteProject())\n        _domNoteHandler__WEBPACK_IMPORTED_MODULE_4__.domNoteHandler.displayNotes()\n    })\n    \n    \n}\nconst makeTask = function(inputname,inputDate,inputPriority)\n{\n        const task = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.dataTaskMaker)(inputname,'description',inputDate,inputPriority)\n        _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.setTask(task,_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n        _domTaskHandler__WEBPACK_IMPORTED_MODULE_3__.domTaskHandler.displayTasks(_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject())\n}\nconst makeProject = function(projectName)\n{\n    const project = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.projectMaker)(\"Jimmy\")\n    _domhandler__WEBPACK_IMPORTED_MODULE_0__.domProjectHandler.addProject(project)\n}\naddMainProjects()\ninitialiseApp()\n\n//# sourceURL=webpack://odin-notepad/./src/initial.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataTaskMaker: () => (/* binding */ dataTaskMaker),\n/* harmony export */   projectMaker: () => (/* binding */ projectMaker)\n/* harmony export */ });\nconst dataTaskMaker = function(inputName,inputDescription,inputDate,inputPriority)\n{\n    let taskName = inputName;\n    let taskDescription = inputDescription;\n    let taskDate = inputDate;\n    let taskPriority = inputPriority\n    let isComplete = false;\n\n    const getTaskName = ()=>{return taskName}\n    const getTaskDescription = ()=>{return taskDescription}\n    const getTaskDate = ()=>{return taskDate}\n    const getTaskPriority = ()=>{return taskPriority}\n    const isTaskCompleted = ()=>{return isComplete}\n\n    return{getTaskName,getTaskDescription,getTaskDate,getTaskPriority,isTaskCompleted}\n}\n\nconst projectMaker = function(inputName)\n{\n    let projectName = inputName;\n    let tasks = [];\n\n    const getName = ()=>{return projectName}\n    const getTasks = ()=>{return tasks}\n\n    return{getName,getTasks}\n}\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/objects.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/initial.js");
/******/ 	
/******/ })()
;