"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Stories.js":
/*!*******************************!*\
  !*** ./components/Stories.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Stories() {\n    _s();\n    //useEffect is a piece of code that runs at a certain point in a lifecycle of a function/component it render a screen\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        //populating list of stories\n        var suggestions = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Array(20)).map(function(_, i) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.helpers.contextualCard()), {\n                id: i\n            });\n        });\n        console.log(suggestions);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/aniketmunim/Documents/Assesments/instagram/components/Stories.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(Stories, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Stories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stories);\nvar _c;\n$RefreshReg$(_c, \"Stories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0b3JpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXdDO0FBQ0E7QUFFeEMsU0FBU0csT0FBTyxHQUFHOztJQUdmLHFIQUFxSDtJQUNySEYsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osNEJBQTRCO1FBQzVCLElBQU1HLFdBQVcsR0FBRyxxRkFBSUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFUQSxDQUFXQyxHQUFHLENBQUMsU0FBQ0MsQ0FBQyxFQUFFQyxDQUFDO21CQUFNLHdLQUUzQ04seUVBQTRCLEVBQUU7Z0JBQ2pDUyxFQUFFLEVBQUNILENBQUM7Y0FDUDtTQUFDLENBQUM7UUFDSEksT0FBTyxDQUFDQyxHQUFHLENBQUNULFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDSSw4REFBQ1UsS0FBRzs7OztZQU1FLENBQ1Q7QUFDTCxDQUFDO0dBdkJRWCxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUF5QmhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3Rvcmllcy5qcz83YWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcblxuZnVuY3Rpb24gU3RvcmllcygpIHtcblxuICAgIFxuICAgIC8vdXNlRWZmZWN0IGlzIGEgcGllY2Ugb2YgY29kZSB0aGF0IHJ1bnMgYXQgYSBjZXJ0YWluIHBvaW50IGluIGEgbGlmZWN5Y2xlIG9mIGEgZnVuY3Rpb24vY29tcG9uZW50IGl0IHJlbmRlciBhIHNjcmVlblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vcG9wdWxhdGluZyBsaXN0IG9mIHN0b3JpZXNcbiAgICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBbLi4uQXJyYXkoMjApXS5tYXAoKF8sIGkpID0+ICh7XG4gICAgICAgICAgICAvL2NvbnRleHR1YWxDYXJkIGdlbmVyYXRlcyBidW5jaCBvZiBmYWtlIGluZm9ybWF0aW9uIHN1Y2ggYXMge25hbWU6LCB1c2VybmFtZTosIGF2YXRhcjosIGRvYjosIHBob25lOiwgYWRkcmVzczosfVxuICAgICAgICAgICAgLi4uZmFrZXIuaGVscGVycy5jb250ZXh0dWFsQ2FyZCgpLFxuICAgICAgICAgICAgaWQ6aSxcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHN1Z2dlc3Rpb25zKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogU3RvcnkgKi99XG4gICAgICAgICAgICB7LyogU3RvcnkgKi99XG4gICAgICAgICAgICB7LyogU3RvcnkgKi99XG4gICAgICAgICAgICB7LyogU3RvcnkgKi99XG4gICAgICAgICAgICB7LyogU3RvcnkgKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Rvcmllc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZmFrZXIiLCJTdG9yaWVzIiwic3VnZ2VzdGlvbnMiLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwiaGVscGVycyIsImNvbnRleHR1YWxDYXJkIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Stories.js\n"));

/***/ })

});