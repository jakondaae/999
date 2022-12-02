/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Main.jsx":
/*!*****************************!*\
  !*** ./components/Main.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/Header.jsx\");\n/* harmony import */ var _Scores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Scores */ \"./components/Scores.jsx\");\n/* harmony import */ var _Transitions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transitions */ \"./components/Transitions.jsx\");\n/* harmony import */ var _Transitions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Transitions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context */ \"./Context.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Main = ()=>{\n    _s();\n    const { Data  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: Data.title,\n                imageSrc: Data.img\n            }, void 0, false, {\n                fileName: \"D:\\\\Etherpay\\\\Etherpay\\\\components\\\\Main.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Scores__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: Data.title\n            }, void 0, false, {\n                fileName: \"D:\\\\Etherpay\\\\Etherpay\\\\components\\\\Main.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Transitions__WEBPACK_IMPORTED_MODULE_3___default()), {\n                title: Data.title\n            }, void 0, false, {\n                fileName: \"D:\\\\Etherpay\\\\Etherpay\\\\components\\\\Main.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Etherpay\\\\Etherpay\\\\components\\\\Main.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"LOEeclGxvpVjhYyR5x8gAWtR47U=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEI7QUFDQTtBQUNVO0FBRUw7QUFDSDtBQUVoQyxNQUFNSyxPQUFPLElBQU07O0lBQ2pCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdILGlEQUFVQSxDQUFDQyxnREFBTUE7SUFDbEMscUJBQ0UsOERBQUNHOzswQkFFQyw4REFBQ1AsK0NBQU1BO2dCQUFDUSxPQUFPRixLQUFLRSxLQUFLO2dCQUFFQyxVQUFVSCxLQUFLSSxHQUFHOzs7Ozs7MEJBRTdDLDhEQUFDVCwrQ0FBTUE7Z0JBQUNPLE9BQU9GLEtBQUtFLEtBQUs7Ozs7OzswQkFFekIsOERBQUNOLHFEQUFXQTtnQkFBQ00sT0FBT0YsS0FBS0UsS0FBSzs7Ozs7Ozs7Ozs7O0FBR3BDO0dBWk1IO0tBQUFBO0FBY04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzeD85ZGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgU2NvcmVzIGZyb20gXCIuL1Njb3Jlc1wiO1xuaW1wb3J0IFRyYW5zaXRpb25zIGZyb20gXCIuL1RyYW5zaXRpb25zXCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFuZ2UgZnJvbSBcIi4uL0NvbnRleHRcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBEYXRhIH0gPSB1c2VDb250ZXh0KENoYW5nZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiBIRUFERVIgKi99XG4gICAgICA8SGVhZGVyIHRpdGxlPXtEYXRhLnRpdGxlfSBpbWFnZVNyYz17RGF0YS5pbWd9IC8+XG4gICAgICB7LyogU0NPUkUgQk9BUkQgKi99XG4gICAgICA8U2NvcmVzIHRpdGxlPXtEYXRhLnRpdGxlfSAvPlxuICAgICAgey8qIFRSQU5TSVRJT05TICovfVxuICAgICAgPFRyYW5zaXRpb25zIHRpdGxlPXtEYXRhLnRpdGxlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTY29yZXMiLCJUcmFuc2l0aW9ucyIsInVzZUNvbnRleHQiLCJDaGFuZ2UiLCJNYWluIiwiRGF0YSIsImRpdiIsInRpdGxlIiwiaW1hZ2VTcmMiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.jsx\n"));

/***/ }),

/***/ "./components/Transitions.jsx":
/*!************************************!*\
  !*** ./components/Transitions.jsx ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});