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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_TODO: function() { return /* binding */ ADD_TODO; },\n/* harmony export */   DELETE_TODO: function() { return /* binding */ DELETE_TODO; },\n/* harmony export */   ISCOMPLETE_TODO: function() { return /* binding */ ISCOMPLETE_TODO; },\n/* harmony export */   UPDATE_TODO: function() { return /* binding */ UPDATE_TODO; },\n/* harmony export */   addTodo: function() { return /* binding */ addTodo; },\n/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; }\n/* harmony export */ });\nconst ADD_TODO = \"ADD_TODO\";\nconst DELETE_TODO = \"DELETE_TODO\";\nconst ISCOMPLETE_TODO = \"ISCOMPLETE_TODO\";\nconst UPDATE_TODO = \"UPDATE_TODO\";\nlet id = 1;\nconst addTodo = (todo)=>{\n    return {\n        type: ADD_TODO,\n        payload: {\n            todo: {\n                id: id++,\n                title: todo.title,\n                isComplete: todo.isComplete\n            }\n        }\n    };\n};\nconst deleteTodo = (id)=>{\n    return {\n        type: DELETE_TODO,\n        payload: {\n            id\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9uL3RvZG9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLFdBQVcsV0FBVztBQUM1QixNQUFNQyxjQUFjLGNBQWM7QUFDbEMsTUFBTUMsa0JBQWdCLGtCQUFrQjtBQUN4QyxNQUFNQyxjQUFZLGNBQWE7QUFFdEMsSUFBSUMsS0FBSztBQU9GLE1BQU1DLFVBQVUsQ0FBQ0M7SUFDdEIsT0FBTztRQUNMQyxNQUFNUDtRQUNOUSxTQUFTO1lBQ1BGLE1BQU07Z0JBQ0pGLElBQUlBO2dCQUNKSyxPQUFPSCxLQUFLRztnQkFDWkMsWUFBWUosS0FBS0k7WUFDbkI7UUFDRjtJQUNGO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLGFBQWEsQ0FBQ1A7SUFDekIsT0FBTztRQUNMRyxNQUFNTjtRQUNOTyxTQUFTO1lBQ1BKO1FBQ0Y7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2FjdGlvbi90b2Rvcy50cz9kNTIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBRERfVE9ETyA9IFwiQUREX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfVE9ETyA9IFwiREVMRVRFX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBJU0NPTVBMRVRFX1RPRE89XCJJU0NPTVBMRVRFX1RPRE9cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfVE9ETz1cIlVQREFURV9UT0RPXCJcblxubGV0IGlkID0gMTtcblxuaW50ZXJmYWNlIFRvZG9UeXBlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNDb21wbGV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSAodG9kbzogVG9kb1R5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBRERfVE9ETyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICB0b2RvOiB7XG4gICAgICAgIGlkOiBpZCsrLFxuICAgICAgICB0aXRsZTogdG9kby50aXRsZSxcbiAgICAgICAgaXNDb21wbGV0ZTogdG9kby5pc0NvbXBsZXRlLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERFTEVURV9UT0RPLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBBY3Rpb25zVHlwZSA9XG4gIHwgUmV0dXJuVHlwZTx0eXBlb2YgYWRkVG9kbz5cbiAgfCBSZXR1cm5UeXBlPHR5cGVvZiBkZWxldGVUb2RvPjtcbiJdLCJuYW1lcyI6WyJBRERfVE9ETyIsIkRFTEVURV9UT0RPIiwiSVNDT01QTEVURV9UT0RPIiwiVVBEQVRFX1RPRE8iLCJpZCIsImFkZFRvZG8iLCJ0b2RvIiwidHlwZSIsInBheWxvYWQiLCJ0aXRsZSIsImlzQ29tcGxldGUiLCJkZWxldGVUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/action/todos.ts\n"));

/***/ })

});