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

/***/ "./src/domTaskHandler.js":
/*!*******************************!*\
  !*** ./src/domTaskHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domTaskHandler: () => (/* binding */ domTaskHandler),\n/* harmony export */   makeTask: () => (/* binding */ makeTask)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\n\n\n\n\nconst taskSorter = function(taskArray)\n{\n       \n        const highPriority = taskArray.querySelectorAll('.highPriority')\n        const mediumPriority = taskArray.querySelectorAll('.mediumPriority')\n        const lowPriority = taskArray.querySelectorAll('.lowPriority')\n        for(let i = 0; i<highPriority.length;i++)\n        { \n            taskArray.appendChild(highPriority[i].parentElement)\n        }\n        for(let i = 0; i<mediumPriority.length;i++)\n        {\n            taskArray.appendChild(mediumPriority[i].parentElement)\n        }\n        for(let i = 0; i<lowPriority.length;i++)\n        {\n            taskArray.appendChild(lowPriority[i].parentElement)\n        }\n}\nconst taskDetailMaker = function(name,description,date,priority)\n{\n    const taskDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskdetails','',document.body)\n    const topDetails = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','topDetails','',taskDiv)\n    const bottomDetails = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','bottomDetails','',taskDiv)\n    _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskName',name,topDetails)\n    _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskDescription',description,topDetails)\n    _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskDate',\"Date:\"+date,bottomDetails)\n    _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskPriority',\"Priority:\"+priority,bottomDetails)\n\n    taskDiv.addEventListener('click',function()\n    {\n        document.body.removeChild(taskDiv)\n    })\n\n}\nconst checkLocalProjects = function(projectArray,project)\n{\n    let isProjectAlreadyIn = false;\n    if(projectArray.length == 0)\n    {\n        projectArray.push(project)\n        console.log(projectArray[0].getName())\n    }\n    for(let i = 0; i < projectArray.length;i++)\n    {\n        if(project.projectName == projectArray[i].projectName)\n        {\n            projectArray[i] = project\n            isProjectAlreadyIn = true\n\n        }\n    }\n    if(isProjectAlreadyIn == false)\n    {\n        projectArray.push(project)\n    }\n}\n\nconst domTaskHandler = (function()\n{\n    let localProjects = [];\n    const taskDisplay = document.querySelector('.tasks')\n    const displayTasks = function()\n    {\n        taskDisplay.style.flexDirection = \"column\";\n        taskDisplay.style.justifyContent = \"flex-start\";\n        taskDisplay.style.flexWrap = \"nowrap\";\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.task')\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(taskDisplay,'.note')\n\n        const tasks = _index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks()\n\n\n        for(let i = 0; i< tasks.length;i++)\n        {\n           taskMaker(taskDisplay,tasks[i])\n           \n        }\n        taskSorter(taskDisplay)\n\n        if (!localStorage.getItem(\"Projects\"))\n        { \n            localStorage.setItem(\"Projects\",JSON.stringify(localProjects))\n            JSON.parse(localStorage.getItem(\"Projects\"))\n            localProjects = JSON.parse(localStorage.getItem(\"Projects\"))\n            checkLocalProjects(localProjects,_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject());\n        }\n        else\n        {\n            localProjects = JSON.parse(localStorage.getItem(\"Projects\"))\n            checkLocalProjects(localProjects,_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject());\n            localStorage.setItem(\"Projects\",JSON.stringify(localProjects))\n        }\n        \n\n\n    };\n    const taskMaker = function(taskDisplay,tasks)\n        {\n           const taskDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','task','',taskDisplay)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div',tasks.getTaskPriority()+'Priority','',taskDiv)\n           const taskContentDiv = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskContent','',taskDiv)\n           const checkMark = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','checkMark','',taskContentDiv)\n           const taskTitle = _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTitle',tasks.getTaskName(),taskContentDiv)\n           _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','taskTime',tasks.getTaskDate(),taskContentDiv)\n           taskDisplay.appendChild(taskDiv)\n\n           checkMark.addEventListener('click',function()\n           {\n            _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.deleteTask(Array.from(taskDisplay.children).indexOf(taskDiv),_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n            taskDisplay.removeChild(taskDiv)\n            displayTasks()\n           })\n           taskTitle.addEventListener(\"click\",function()\n           {\n            taskDetailMaker(tasks.getTaskName(),tasks.getTaskDescription(),tasks.getTaskDate(),tasks.getTaskPriority())\n           })\n        }\n    \n    return{displayTasks}\n})();\n\nconst makeTask = function(inputname,inputDescription,inputDate,inputPriority)\n{\n        let test = _index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject()\n        const task = (0,_objects__WEBPACK_IMPORTED_MODULE_2__.dataTaskMaker)(inputname,inputDescription,inputDate,inputPriority)\n        _index__WEBPACK_IMPORTED_MODULE_1__.taskHandler.setTask(task,_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject().getTasks())\n        domTaskHandler.displayTasks(_index__WEBPACK_IMPORTED_MODULE_1__.programData.getCurrentProject())\n}\n\n\n//# sourceURL=webpack://odin-notepad/./src/domTaskHandler.js?");

/***/ }),

/***/ "./src/domhandler.js":
/*!***************************!*\
  !*** ./src/domhandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProjectHandler: () => (/* binding */ domProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _generalFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalFunctions */ \"./src/generalFunctions.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _domTaskHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domTaskHandler */ \"./src/domTaskHandler.js\");\n\n\n\n\nconst domProjectHandler = (function(){\n\n     //comment\n    let Projects = [];\n    const page = document.querySelector('.content')\n    const projectHolder = page.querySelector(\".projectHolder\")\n    const mainProjectHolder = page.querySelector('.mainProjectHolder')\n    const projectAddBtn = page.querySelector(\".addProjectBtn\")\n\n    const deleteProject = function(ProjectId)\n    {\n        Projects.splice(ProjectId,1);\n        displayProjects(Projects)\n\n    }\n\n    const addProject = function(Project)\n    {\n        Projects.push(Project)\n        displayProjects(Projects)\n    }\n\n    const displayProjects = function()\n    {\n        let ProjectDiv;\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(projectHolder,\".Project\")\n        _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.clearDom(mainProjectHolder,\".Project\")\n        for(let i = 0; i<Projects.length;i++)\n        {\n            if(i < 3)\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),mainProjectHolder);\n                ProjectDiv.classList.add(\"projectView\");\n          \n            }\n            else\n            {\n                ProjectDiv =  _generalFunctions__WEBPACK_IMPORTED_MODULE_0__.generalFuncModule.insertElement('div','Project',Projects[i].getName(),projectHolder);\n            }\n            ProjectDiv.addEventListener(\"click\",function()\n            {\n                _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[i])\n                _index__WEBPACK_IMPORTED_MODULE_1__.programData.setTaskStatus(true)\n                _domTaskHandler__WEBPACK_IMPORTED_MODULE_2__.domTaskHandler.displayTasks()        \n            })\n        }\n        _index__WEBPACK_IMPORTED_MODULE_1__.programData.setProject(Projects[0])\n        projectHolder.appendChild(projectAddBtn)\n    }\n    \n\n    return{deleteProject,addProject}\n\n\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/domhandler.js?");

/***/ }),

/***/ "./src/generalFunctions.js":
/*!*********************************!*\
  !*** ./src/generalFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generalFuncModule: () => (/* binding */ generalFuncModule)\n/* harmony export */ });\nconst generalFuncModule = (function()\n{\n    const bodyElem = document.body;\n    const doc = document;\n\n\n\n    const insertElement = function(elementType,elementClass,elementContent,elementParrent,elementImgSrc)\n    {\n         //comment\n       let element = doc.createElement(elementType);\n        element.className = elementClass;\n        element.textContent = elementContent\n        if(elementType === \"img\")\n        {\n            element.src = elementImgSrc;\n        }\n        elementParrent.appendChild(element)\n        return element\n        \n    }\n    const clearDom = function(parrent,inputClass)\n{\n       const elementArray = parrent.querySelectorAll(inputClass)\n       for(let i = 0; i<elementArray.length;i++)\n       {\n        parrent.removeChild(elementArray[i])\n       }\n}\n    return{insertElement,clearDom}\n})();\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/generalFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   programData: () => (/* binding */ programData),\n/* harmony export */   taskHandler: () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n\nconst taskHandler = (function()\n{\n    const setTask = (task,taskArray)=>{taskArray.push(task)}\n    const deleteTask = (taskSpot,taskArray)=>{taskArray.splice(taskSpot,1)}\n    return{setTask,deleteTask}\n})();\n\n\nconst programData = (function()\n{\n     //comment\n    let currentProject;\n    let areTasksDisplaying = true;\n    let notesProject = (0,_objects__WEBPACK_IMPORTED_MODULE_0__.projectMaker)(\"Notes\");\n    const setProject = function(project){currentProject = project}\n    const getCurrentProject = function(){return currentProject}\n    const getTaskStatus = function(){return areTasksDisplaying}\n    const setTaskStatus = function(input){areTasksDisplaying = input}\n    const getNoteProject = function(){return notesProject}\n\n    return{setProject,getCurrentProject,getTaskStatus,setTaskStatus,getNoteProject}\n})();\n\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/index.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataTaskMaker: () => (/* binding */ dataTaskMaker),\n/* harmony export */   projectMaker: () => (/* binding */ projectMaker)\n/* harmony export */ });\nconst dataTaskMaker = function(inputName,inputDescription,inputDate,inputPriority)\n{\n    let taskName = inputName;\n    let taskDescription = inputDescription;\n    let taskDate = inputDate;\n    let taskPriority = inputPriority\n\n    const getTaskName = ()=>{return taskName}\n    const getTaskDescription = ()=>{return taskDescription}\n    const getTaskDate = ()=>{return taskDate}\n    const getTaskPriority = ()=>{return taskPriority}\n    const isTaskCompleted = ()=>{return isComplete}\n\n    return{getTaskName,getTaskDescription,getTaskDate,getTaskPriority,isTaskCompleted,taskName,taskDescription,taskDate,taskPriority}\n}\n\nconst projectMaker = function(inputName)\n{\n    let projectName = inputName;\n    let tasks = [];\n\n    const getName = ()=>{return projectName}\n    const getTasks = ()=>{return tasks}\n\n    return{getName,getTasks,tasks,projectName}\n}\n\n\n\n//# sourceURL=webpack://odin-notepad/./src/objects.js?");

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