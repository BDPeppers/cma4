"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/About",{

/***/ "./src/components/About/Services/ServiceCard/ServiceCard.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/About/Services/ServiceCard/ServiceCard.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ServiceCardData\": function() { return /* binding */ ServiceCardData; },\n/* harmony export */   \"default\": function() { return /* binding */ ServiceCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nvar ServiceCardData = function ServiceCardData(title, description, img) {\n    \"use strict\";\n    _classCallCheck(this, ServiceCardData);\n    this.title = title;\n    this.description = description;\n    this.img = img;\n};\nfunction ServiceCard(props) {\n    var cma = false;\n    if (props.data.title.includes(\"cma\")) {\n        cma = true;\n        props.data.title = props.data.title.slice(0, 4);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cma-service-card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"service-img-box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"service-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"header\",\n                    children: [\n                        cma ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"CMA\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 18\n                        }, this) : null,\n                        props.data.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"service-description\",\n                children: props.data.description\n            }, void 0, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_c = ServiceCard;\nvar _c;\n$RefreshReg$(_c, \"ServiceCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC9TZXJ2aWNlcy9TZXJ2aWNlQ2FyZC9TZXJ2aWNlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM4Qjs7Ozs7O0FBRXZCLElBQU1DLGVBQWUsWUFBZkEsZUFBZSxDQUVqQkMsS0FBYSxFQUNiQyxXQUFtQixFQUNuQkMsR0FBVzs7O1NBRlhGLEtBQWEsR0FBYkEsS0FBYTtTQUNiQyxXQUFtQixHQUFuQkEsV0FBbUI7U0FDbkJDLEdBQVcsR0FBWEEsR0FBVzs7QUFRUCxRQUFRLENBQUNDLFdBQVcsQ0FBQ0MsS0FBd0IsRUFBRSxDQUFDO0lBQzdELEdBQUcsQ0FBQ0MsR0FBRyxHQUFHLEtBQUs7SUFDZixFQUFFLEVBQUVELEtBQUssQ0FBQ0UsSUFBSSxDQUFDTixLQUFLLENBQUNPLFFBQVEsQ0FBQyxDQUFLLE9BQUcsQ0FBQztRQUNyQ0YsR0FBRyxHQUFHLElBQUk7UUFDVkQsS0FBSyxDQUFDRSxJQUFJLENBQUNOLEtBQUssR0FBR0ksS0FBSyxDQUFDRSxJQUFJLENBQUNOLEtBQUssQ0FBQ1EsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrQjs7d0ZBQzlCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBaUI7Ozs7Ozt3RkFDL0JELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFnQjtzR0FDNUJDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUFROzt3QkFDbkJMLEdBQUcsK0VBQUlPLENBQUk7c0NBQUMsQ0FBRzs7Ozs7bUNBQVUsSUFBSTt3QkFDN0JSLEtBQUssQ0FBQ0UsSUFBSSxDQUFDTixLQUFLOzs7Ozs7Ozs7Ozs7d0ZBR3BCUyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7MEJBQUVOLEtBQUssQ0FBQ0UsSUFBSSxDQUFDTCxXQUFXOzs7Ozs7Ozs7Ozs7QUFHbEUsQ0FBQztLQWxCdUJFLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQvU2VydmljZXMvU2VydmljZUNhcmQvU2VydmljZUNhcmQudHN4P2ZjZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwicHJvY2Vzc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlQ2FyZERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHB1YmxpYyBpbWc6IHN0cmluZ1xyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2VydmljZUNhcmRQcm9wcyB7XHJcbiAgZGF0YTogU2VydmljZUNhcmREYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlQ2FyZChwcm9wczogSVNlcnZpY2VDYXJkUHJvcHMpIHtcclxuICBsZXQgY21hID0gZmFsc2U7XHJcbiAgaWYgKHByb3BzLmRhdGEudGl0bGUuaW5jbHVkZXMoXCJjbWFcIikpIHtcclxuICAgIGNtYSA9IHRydWU7XHJcbiAgICBwcm9wcy5kYXRhLnRpdGxlID0gcHJvcHMuZGF0YS50aXRsZS5zbGljZSgwLCA0KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY21hLXNlcnZpY2UtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1nLWJveFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAge2NtYSA/IDxzcGFuPkNNQTwvc3Bhbj4gOiBudWxsfVxyXG4gICAgICAgICAge3Byb3BzLmRhdGEudGl0bGV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1kZXNjcmlwdGlvblwiPntwcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTZXJ2aWNlQ2FyZERhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nIiwiU2VydmljZUNhcmQiLCJwcm9wcyIsImNtYSIsImRhdGEiLCJpbmNsdWRlcyIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About/Services/ServiceCard/ServiceCard.tsx\n");

/***/ })

});