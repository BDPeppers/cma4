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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Testimonial\": function() { return /* binding */ Testimonial; },\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_imgs_Testimonials_Debi_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../public/imgs/Testimonials/Debi.png */ \"./public/imgs/Testimonials/Debi.png\");\n/* harmony import */ var _public_imgs_Testimonials_justinBefore_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/imgs/Testimonials/justinBefore.png */ \"./public/imgs/Testimonials/justinBefore.png\");\n/* harmony import */ var _public_imgs_Testimonials_justinAfter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../public/imgs/Testimonials/justinAfter.png */ \"./public/imgs/Testimonials/justinAfter.png\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n// Import Swiper styles\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Testimonial = function Testimonial(quote, before, after) {\n    \"use strict\";\n    _classCallCheck(this, Testimonial);\n    this.quote = quote;\n    this.before = before;\n    this.after = after;\n};\nvar slideList = [];\nvar T1 = new Testimonial(\"Over 15lbs down in 3 months and best of all - blood pressure no longer high!! \\nNurse said my blood pressure is better than hers!! Sugar levels were back to normal! \\nSo happy because I’ve been dealing with this my entire adult life!!\", _public_imgs_Testimonials_Debi_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nslideList.push(T1);\nvar T2 = new Testimonial(\"Coach Chanda changed my life. \\nDoctors told me it would be impossible to be where I am today and that I needed to be realistic in my overall goals. \\nWell, thanks to her I just competed in my 4th men’s physique competition and it’s only up from here. \\nShe’s constantly teaching me how to improve as an athlete and in doing so has helped me improve in life. \\nOver 100 pounds of fat lost!!!! No surgery!!!! Just a great coach and some work. Love her to death and can’t wait to see what the future holds.\", _public_imgs_Testimonials_justinBefore_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _public_imgs_Testimonials_justinAfter_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nslideList.push(T2);\nvar Carousel = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    _inherits(Carousel, _Component);\n    var _super = _createSuper(Carousel);\n    function Carousel() {\n        _classCallCheck(this, Carousel);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Carousel, [\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                        slidesPerView: 1,\n                        spaceBetween: 30,\n                        loop: true,\n                        pagination: {\n                            clickable: true\n                        },\n                        navigation: true,\n                        modules: [\n                            swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,\n                            swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                        ],\n                        className: \"mySwiper\",\n                        children: slideList.map(function(slide, x) {\n                            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"swiper-slide-wrapper\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: slide.before,\n                                            alt: \"CMA Fitness Testimonials\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, _this),\n                                        slide.after ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: slide.after,\n                                            alt: \"CMA Fitness Testimonials\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, _this) : null,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: slide.quote\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, _this)\n                            }, x, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this));\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Carousel\\\\Carousel.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false));\n            }\n        }\n    ]);\n    return Carousel;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9DYXJvdXNlbC9DYXJvdXNlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNvQjtBQUNIO0FBQ2pCO0FBQ2tDO0FBQ2dCO0FBQ0Y7QUFFOUUsRUFBdUI7QUFDSjtBQUNXO0FBQ0E7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTVMsV0FBVyxZQUFYQSxXQUFXLENBQ0hDLEtBQWEsRUFBU0MsTUFBVyxFQUFTQyxLQUFXOzs7U0FBckRGLEtBQWEsR0FBYkEsS0FBYTtTQUFTQyxNQUFXLEdBQVhBLE1BQVc7U0FBU0MsS0FBVyxHQUFYQSxLQUFXOztBQUcxRSxHQUFLLENBQUNDLFNBQVMsR0FBdUIsQ0FBQyxDQUFDO0FBRXhDLEdBQUssQ0FBQ0MsRUFBRSxHQUFHLEdBQUcsQ0FBQ0wsV0FBVyxDQUN2QixDQUVnRSx1VEFDN0RILEVBQUE7QUFFTk8sU0FBUyxDQUFDRSxJQUFJLENBQUNELEVBQUU7QUFFakIsR0FBSyxDQUFDRSxFQUFFLEdBQUcsR0FBRyxDQUFDUCxXQUFXLENBQ3ZCLENBSTRJLDZrQkFDM0lGLEVBQUFBLGlGQUNBQztBQUVFSyxTQUFILENBQUNFLElBQUksQ0FBQ0MsRUFBRTtJQUVJQyxRQUFRLGlCQUFkLFFBQVE7Ozs7YUFBRkEsUUFBUTs7Ozs7O1lBQ3BCQyxHQUFNLEVBQU5BLENBQU07bUJBQUwsU0FBREEsTUFBTSxHQUFHLENBQUM7O2dCQUNYLE1BQUU7MEdBRURqQixnREFBTTt3QkFDTGtCLGFBQWEsRUFBRSxDQUFDO3dCQUNoQkMsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCQyxJQUFJLEVBQUUsSUFBSTt3QkFDVkMsVUFBVSxFQUFFLENBQUM7NEJBQ1hDLFNBQVMsRUFBRSxJQUFJO3dCQUNqQixDQUFDO3dCQUNEQyxVQUFVLEVBQUUsSUFBSTt3QkFDaEJDLE9BQU8sRUFBRSxDQUFDdEI7NEJBQUFBLDhDQUFVOzRCQUFFQyw4Q0FBVTt3QkFBQSxDQUFDO3dCQUNqQ3NCLFNBQVMsRUFBQyxDQUFVO2tDQUVuQmIsU0FBUyxDQUFDYyxHQUFHLENBQUMsUUFBUUMsQ0FBUEMsS0FBSyxFQUFFRCxDQUFDLEVBQUssQ0FBQzs0QkFDNUIsTUFBTSw2RUFDSDFCLHFEQUFXO3NIQUNUNEIsQ0FBRztvQ0FBQ0osU0FBUyxFQUFDLENBQXNCOztvSEFDbENyQixtREFBSzs0Q0FBQzBCLEdBQUcsRUFBRUYsS0FBSyxDQUFDbEIsTUFBTTs0Q0FBRXFCLEdBQUcsRUFBQyxDQUEwQjs7Ozs7O3dDQUN2REgsS0FBSyxDQUFDakIsS0FBSywrRUFDVFAsbURBQUs7NENBQUMwQixHQUFHLEVBQUVGLEtBQUssQ0FBQ2pCLEtBQUs7NENBQUVvQixHQUFHLEVBQUMsQ0FBMEI7Ozs7O29EQUNyRCxJQUFJO29IQUNQQyxDQUFDO3NEQUFFSixLQUFLLENBQUNuQixLQUFLOzs7Ozs7Ozs7Ozs7K0JBTkRrQixDQUFDOzs7Ozt3QkFVdkIsQ0FBQzs7Ozs7OztZQUlELENBQUQ7Ozs7RUEvQjZCNUIsNENBQWU7QUFBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZXMvQ2Fyb3VzZWwvQ2Fyb3VzZWwudHN4P2UxNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgRGViaSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2ltZ3MvVGVzdGltb25pYWxzL0RlYmkucG5nXCI7XHJcbmltcG9ydCBqdXN0aW5CZWZvcmUgZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9pbWdzL1Rlc3RpbW9uaWFscy9qdXN0aW5CZWZvcmUucG5nXCI7XHJcbmltcG9ydCBqdXN0aW5BZnRlciBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2ltZ3MvVGVzdGltb25pYWxzL2p1c3RpbkFmdGVyLnBuZ1wiO1xyXG5cclxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3Mvc2Nyb2xsYmFyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdGltb25pYWwge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBxdW90ZTogc3RyaW5nLCBwdWJsaWMgYmVmb3JlOiBhbnksIHB1YmxpYyBhZnRlcj86IGFueSkge31cclxufVxyXG5cclxuY29uc3Qgc2xpZGVMaXN0OiBBcnJheTxUZXN0aW1vbmlhbD4gPSBbXTtcclxuXHJcbmNvbnN0IFQxID0gbmV3IFRlc3RpbW9uaWFsKFxyXG4gIGBPdmVyIDE1bGJzIGRvd24gaW4gMyBtb250aHMgYW5kIGJlc3Qgb2YgYWxsIC0gYmxvb2QgcHJlc3N1cmUgbm8gbG9uZ2VyIGhpZ2ghISBcclxuTnVyc2Ugc2FpZCBteSBibG9vZCBwcmVzc3VyZSBpcyBiZXR0ZXIgdGhhbiBoZXJzISEgU3VnYXIgbGV2ZWxzIHdlcmUgYmFjayB0byBub3JtYWwhIFxyXG5TbyBoYXBweSBiZWNhdXNlIEnigJl2ZSBiZWVuIGRlYWxpbmcgd2l0aCB0aGlzIG15IGVudGlyZSBhZHVsdCBsaWZlISFgLFxyXG4gIERlYmlcclxuKTtcclxuc2xpZGVMaXN0LnB1c2goVDEpO1xyXG5cclxuY29uc3QgVDIgPSBuZXcgVGVzdGltb25pYWwoXHJcbiAgYENvYWNoIENoYW5kYSBjaGFuZ2VkIG15IGxpZmUuIFxyXG5Eb2N0b3JzIHRvbGQgbWUgaXQgd291bGQgYmUgaW1wb3NzaWJsZSB0byBiZSB3aGVyZSBJIGFtIHRvZGF5IGFuZCB0aGF0IEkgbmVlZGVkIHRvIGJlIHJlYWxpc3RpYyBpbiBteSBvdmVyYWxsIGdvYWxzLiBcclxuV2VsbCwgdGhhbmtzIHRvIGhlciBJIGp1c3QgY29tcGV0ZWQgaW4gbXkgNHRoIG1lbuKAmXMgcGh5c2lxdWUgY29tcGV0aXRpb24gYW5kIGl04oCZcyBvbmx5IHVwIGZyb20gaGVyZS4gXHJcblNoZeKAmXMgY29uc3RhbnRseSB0ZWFjaGluZyBtZSBob3cgdG8gaW1wcm92ZSBhcyBhbiBhdGhsZXRlIGFuZCBpbiBkb2luZyBzbyBoYXMgaGVscGVkIG1lIGltcHJvdmUgaW4gbGlmZS4gXHJcbk92ZXIgMTAwIHBvdW5kcyBvZiBmYXQgbG9zdCEhISEgTm8gc3VyZ2VyeSEhISEgSnVzdCBhIGdyZWF0IGNvYWNoIGFuZCBzb21lIHdvcmsuIExvdmUgaGVyIHRvIGRlYXRoIGFuZCBjYW7igJl0IHdhaXQgdG8gc2VlIHdoYXQgdGhlIGZ1dHVyZSBob2xkcy5gLFxyXG4gIGp1c3RpbkJlZm9yZSxcclxuICBqdXN0aW5BZnRlclxyXG4pO1xyXG5zbGlkZUxpc3QucHVzaChUMik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFN3aXBlclxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17MX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgICBsb29wPXt0cnVlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cclxuICAgICAgICAgIG1vZHVsZXM9e1tQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uXX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15U3dpcGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7c2xpZGVMaXN0Lm1hcCgoc2xpZGUsIHgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXt4fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2xpZGUuYmVmb3JlfSBhbHQ9XCJDTUEgRml0bmVzcyBUZXN0aW1vbmlhbHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7c2xpZGUuYWZ0ZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2xpZGUuYWZ0ZXJ9IGFsdD1cIkNNQSBGaXRuZXNzIFRlc3RpbW9uaWFsc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8cD57c2xpZGUucXVvdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJJbWFnZSIsIkRlYmkiLCJqdXN0aW5CZWZvcmUiLCJqdXN0aW5BZnRlciIsIlRlc3RpbW9uaWFsIiwicXVvdGUiLCJiZWZvcmUiLCJhZnRlciIsInNsaWRlTGlzdCIsIlQxIiwicHVzaCIsIlQyIiwiQ2Fyb3VzZWwiLCJyZW5kZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibW9kdWxlcyIsImNsYXNzTmFtZSIsIm1hcCIsIngiLCJzbGlkZSIsImRpdiIsInNyYyIsImFsdCIsInAiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/features/Carousel/Carousel.tsx\n");

/***/ })

});