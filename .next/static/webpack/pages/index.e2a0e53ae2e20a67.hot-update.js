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

/***/ "./src/components/features/Carousel/Carousel.tsx":
/*!*******************************************************!*\
  !*** ./src/components/features/Carousel/Carousel.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Carousel = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Carousel, _Component);\n    var _super = _createSuper(Carousel);\n    function Carousel() {\n        _classCallCheck(this, Carousel);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Carousel, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                        slidesPerView: 1,\n                        spaceBetween: 30,\n                        loop: true,\n                        pagination: {\n                            clickable: true\n                        },\n                        navigation: true,\n                        modules: [\n                            swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,\n                            swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                        ],\n                        className: \"mySwiper\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 3\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 5\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 6\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 7\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 8\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: \"Slide 9\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false));\n            }\n        }\n    ]);\n    return Carousel;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9DYXJvdXNlbC9DYXJvdXNlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEI7QUFDb0I7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFXMUJLLFFBQVEsaUJBQWQsUUFBUTs7OzthQUFGQSxRQUFROzs7Ozs7WUFDcEJDLEdBQU0sRUFBTkEsQ0FBTTttQkFBYixRQUFRLENBQURBLE1BQU0sR0FBRyxDQUFDO2dCQUNmLE1BQU07MEdBRURMLGdEQUFNO3dCQUNMTSxhQUFhLEVBQUUsQ0FBQzt3QkFDaEJDLFlBQVksRUFBRSxFQUFFO3dCQUNoQkMsSUFBSSxFQUFFLElBQUk7d0JBQ1ZDLFVBQVUsRUFBRSxDQUFDOzRCQUNYQyxTQUFTLEVBQUUsSUFBSTt3QkFDakIsQ0FBQzt3QkFDREMsVUFBVSxFQUFFLElBQUk7d0JBQ2hCQyxPQUFPLEVBQUUsQ0FBQ1Y7NEJBQUFBLDhDQUFVOzRCQUFFQyw4Q0FBVTt3QkFBQSxDQUFDO3dCQUNqQ1UsU0FBUyxFQUFDLENBQVU7O3dHQUVuQloscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7O3dHQUNuQkEscURBQVc7MENBQUMsQ0FBTzs7Ozs7Ozs7Ozs7OztZQUk1QixDQUFDOzs7O0VBM0JtQ0YsNENBQWU7QUFBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwudHN4P2UxNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcblxyXG50eXBlIHNsaWRlID0ge1xyXG4gIHF1b3RlOiBzdHJpbmc7XHJcbiAgLy8gaW1nOiBwbmcgdHlwZVxyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2Fyb3VzZWxQcm9wcyB7XHJcbiAgc2xpZGVzOiBBcnJheTxzdHJpbmc+OyAvL2FycmF5IG9mIGltYWdlcyBhbmQgcXVvdGVzXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElDYXJvdXNlbFByb3BzPiB7XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgICBsb29wPXt0cnVlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uXX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgMTwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgMjwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgMzwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgNDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgNTwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgNjwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgNzwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgODwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGU+U2xpZGUgOTwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsIkNhcm91c2VsIiwicmVuZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJjbGFzc05hbWUiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/features/Carousel/Carousel.tsx\n");

/***/ })

});