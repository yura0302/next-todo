"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/action/todos.ts":
/*!***********************************!*\
  !*** ./src/store/action/todos.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_TODO: function() { return /* binding */ ADD_TODO; },\n/* harmony export */   DELETE_TODO: function() { return /* binding */ DELETE_TODO; },\n/* harmony export */   ISCOMPLETE_TODO: function() { return /* binding */ ISCOMPLETE_TODO; },\n/* harmony export */   UPDATE_TODO: function() { return /* binding */ UPDATE_TODO; },\n/* harmony export */   addTodo: function() { return /* binding */ addTodo; },\n/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; },\n/* harmony export */   isCompleteTodo: function() { return /* binding */ isCompleteTodo; }\n/* harmony export */ });\nconst ADD_TODO = \"ADD_TODO\";\nconst DELETE_TODO = \"DELETE_TODO\";\nconst ISCOMPLETE_TODO = \"ISCOMPLETE_TODO\";\nconst UPDATE_TODO = \"UPDATE_TODO\";\nlet id = 1;\nconst addTodo = (todo)=>{\n    return {\n        type: ADD_TODO,\n        payload: {\n            todo: {\n                id: id++,\n                title: todo.title,\n                isComplete: todo.isComplete\n            }\n        }\n    };\n};\nconst deleteTodo = (id)=>{\n    return {\n        type: DELETE_TODO,\n        payload: {\n            id\n        }\n    };\n};\nconst isCompleteTodo = (id)=>{\n    return {\n        type: ISCOMPLETE_TODO,\n        payload\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9uL3RvZG9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLFdBQVc7QUFDNUIsTUFBTUMsY0FBYyxjQUFjO0FBQ2xDLE1BQU1DLGtCQUFrQixrQkFBa0I7QUFDMUMsTUFBTUMsY0FBYyxjQUFjO0FBRXpDLElBQUlDLEtBQUs7QUFPRixNQUFNQyxVQUFVLENBQUNDO0lBQ3RCLE9BQU87UUFDTEMsTUFBTVA7UUFDTlEsU0FBUztZQUNQRixNQUFNO2dCQUNKRixJQUFJQTtnQkFDSkssT0FBT0gsS0FBS0c7Z0JBQ1pDLFlBQVlKLEtBQUtJO1lBQ25CO1FBQ0Y7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxhQUFhLENBQUNQO0lBQ3pCLE9BQU87UUFDTEcsTUFBTU47UUFDTk8sU0FBUztZQUNQSjtRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTVEsaUJBQWUsQ0FBQ1I7SUFDM0IsT0FBTztRQUNMRyxNQUFLTDtRQUNMTTtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9uL3RvZG9zLnRzP2Q1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9UT0RPID0gXCJERUxFVEVfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IElTQ09NUExFVEVfVE9ETyA9IFwiSVNDT01QTEVURV9UT0RPXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1RPRE8gPSBcIlVQREFURV9UT0RPXCI7XG5cbmxldCBpZCA9IDE7XG5cbmludGVyZmFjZSBUb2RvVHlwZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzQ29tcGxldGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb2RvID0gKHRvZG86IFRvZG9UeXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUREX1RPRE8sXG4gICAgcGF5bG9hZDoge1xuICAgICAgdG9kbzoge1xuICAgICAgICBpZDogaWQrKyxcbiAgICAgICAgdGl0bGU6IHRvZG8udGl0bGUsXG4gICAgICAgIGlzQ29tcGxldGU6IHRvZG8uaXNDb21wbGV0ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvID0gKGlkOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBERUxFVEVfVE9ETyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGlzQ29tcGxldGVUb2RvPShpZDpudW1iZXIpPT57XG4gIHJldHVybiB7XG4gICAgdHlwZTpJU0NPTVBMRVRFX1RPRE8sXG4gICAgcGF5bG9hZFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFjdGlvbnNUeXBlID1cbiAgfCBSZXR1cm5UeXBlPHR5cGVvZiBhZGRUb2RvPlxuICB8IFJldHVyblR5cGU8dHlwZW9mIGRlbGV0ZVRvZG8+O1xuIl0sIm5hbWVzIjpbIkFERF9UT0RPIiwiREVMRVRFX1RPRE8iLCJJU0NPTVBMRVRFX1RPRE8iLCJVUERBVEVfVE9ETyIsImlkIiwiYWRkVG9kbyIsInRvZG8iLCJ0eXBlIiwicGF5bG9hZCIsInRpdGxlIiwiaXNDb21wbGV0ZSIsImRlbGV0ZVRvZG8iLCJpc0NvbXBsZXRlVG9kbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/action/todos.ts\n"));

/***/ })

});