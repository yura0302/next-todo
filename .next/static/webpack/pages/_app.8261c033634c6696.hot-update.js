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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_TODO: function() { return /* binding */ ADD_TODO; },\n/* harmony export */   DELETE_TODO: function() { return /* binding */ DELETE_TODO; },\n/* harmony export */   ISCOMPLETE_TODO: function() { return /* binding */ ISCOMPLETE_TODO; },\n/* harmony export */   addTodo: function() { return /* binding */ addTodo; },\n/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; }\n/* harmony export */ });\nconst ADD_TODO = \"ADD_TODO\";\nconst DELETE_TODO = \"DELETE_TODO\";\nconst ISCOMPLETE_TODO = \"ISCOMPO\";\nlet id = 1;\nconst addTodo = (todo)=>{\n    return {\n        type: ADD_TODO,\n        payload: {\n            todo: {\n                id: id++,\n                title: todo.title,\n                isComplete: todo.isComplete\n            }\n        }\n    };\n};\nconst deleteTodo = (id)=>{\n    return {\n        type: DELETE_TODO,\n        payload: {\n            id\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9uL3RvZG9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsV0FBVyxXQUFXO0FBQzVCLE1BQU1DLGNBQWMsY0FBYztBQUNsQyxNQUFNQyxrQkFBZ0IsVUFBUztBQUV0QyxJQUFJQyxLQUFLO0FBT0YsTUFBTUMsVUFBVSxDQUFDQztJQUN0QixPQUFPO1FBQ0xDLE1BQU1OO1FBQ05PLFNBQVM7WUFDUEYsTUFBTTtnQkFDSkYsSUFBSUE7Z0JBQ0pLLE9BQU9ILEtBQUtHO2dCQUNaQyxZQUFZSixLQUFLSTtZQUNuQjtRQUNGO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsYUFBYSxDQUFDUDtJQUN6QixPQUFPO1FBQ0xHLE1BQU1MO1FBQ05NLFNBQVM7WUFDUEo7UUFDRjtJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvYWN0aW9uL3RvZG9zLnRzP2Q1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gXCJBRERfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9UT0RPID0gXCJERUxFVEVfVE9ET1wiO1xuZXhwb3J0IGNvbnN0IElTQ09NUExFVEVfVE9ETz1cIklTQ09NUE9cIlxuXG5sZXQgaWQgPSAxO1xuXG5pbnRlcmZhY2UgVG9kb1R5cGUge1xuICB0aXRsZTogc3RyaW5nO1xuICBpc0NvbXBsZXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9ICh0b2RvOiBUb2RvVHlwZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERF9UT0RPLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIHRvZG86IHtcbiAgICAgICAgaWQ6IGlkKyssXG4gICAgICAgIHRpdGxlOiB0b2RvLnRpdGxlLFxuICAgICAgICBpc0NvbXBsZXRlOiB0b2RvLmlzQ29tcGxldGUsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX1RPRE8sXG4gICAgcGF5bG9hZDoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFjdGlvbnNUeXBlID1cbiAgfCBSZXR1cm5UeXBlPHR5cGVvZiBhZGRUb2RvPlxuICB8IFJldHVyblR5cGU8dHlwZW9mIGRlbGV0ZVRvZG8+O1xuIl0sIm5hbWVzIjpbIkFERF9UT0RPIiwiREVMRVRFX1RPRE8iLCJJU0NPTVBMRVRFX1RPRE8iLCJpZCIsImFkZFRvZG8iLCJ0b2RvIiwidHlwZSIsInBheWxvYWQiLCJ0aXRsZSIsImlzQ29tcGxldGUiLCJkZWxldGVUb2RvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/action/todos.ts\n"));

/***/ })

});