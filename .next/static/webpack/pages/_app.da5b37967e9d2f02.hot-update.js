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

/***/ "./src/components/navigation/Navbar/MobileNav/MobileNav.tsx":
/*!******************************************************************!*\
  !*** ./src/components/navigation/Navbar/MobileNav/MobileNav.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Drawer */ \"./node_modules/@mui/material/Drawer/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/List/index.js\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/ListItem */ \"./node_modules/@mui/material/ListItem/index.js\");\n/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/ListItemIcon */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemText */ \"./node_modules/@mui/material/ListItemText/index.js\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"./node_modules/@mui/icons-material/MoveToInbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction MobileNav() {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState({\n        top: false,\n        left: false,\n        bottom: false,\n        right: false\n    }), 2), state = ref[0], setState = ref[1];\n    var toggleDrawer = function(anchor, open) {\n        return function(event) {\n            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {\n                return;\n            }\n            setState(_objectSpread({}, state, _defineProperty({}, anchor, open)));\n        };\n    };\n    var list = function(anchor) {\n        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(anchor, false),\n            onKeyDown: toggleDrawer(anchor, false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    'Inbox',\n                    'Starred',\n                    'Send email',\n                    'Drafts'\n                ].map(function(text, index) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        button: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 34\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 50\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                primary: text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, text, true, {\n                        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n            lineNumber: 38,\n            columnNumber: 5\n        }, _this);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            'left',\n            'right',\n            'top',\n            'bottom'\n        ].map(function(anchor) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        onClick: toggleDrawer(anchor, true),\n                        children: anchor\n                    }, void 0, false, {\n                        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        anchor: anchor,\n                        open: state[anchor],\n                        onClose: toggleDrawer(anchor, false),\n                        children: list(anchor)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, anchor, true, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\navigation\\\\Navbar\\\\MobileNav\\\\MobileNav.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this));\n};\n_s(MobileNav, \"mrP2scG11YaBBfM2gqRg58YN+SA=\");\n_c = MobileNav;\nvar _c;\n$RefreshReg$(_c, \"MobileNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdmJhci9Nb2JpbGVOYXYvTW9iaWxlTmF2LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDSztBQUNNO0FBQ0E7QUFDSjtBQUVRO0FBQ1E7QUFDQTtBQUNFO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsUUFBUSxDQUFDVSxTQUFTLEdBQUcsQ0FBQzs7O0lBQ25DLEdBQUssQ0FBcUJWLEdBS3hCLGtCQUx3QkEsMkNBQWMsQ0FBQyxDQUFDO1FBQ3hDWSxHQUFHLEVBQUUsS0FBSztRQUNWQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxLQUFLLEVBQUUsS0FBSztJQUNkLENBQUMsT0FMTUMsS0FBSyxHQUFjaEIsR0FLeEIsS0FMWWlCLFFBQVEsR0FBSWpCLEdBS3hCO0lBRUYsR0FBSyxDQUFDa0IsWUFBWSxHQUNoQixRQUFRLENBQVBDLE1BQWMsRUFBRUMsSUFBYTtRQUM5QixNQUFNLENBQU4sUUFBUSxDQUFQQyxLQUE2QyxFQUFLLENBQUM7WUFDbEQsRUFBRSxFQUNBQSxLQUFLLENBQUNDLElBQUksS0FBSyxDQUFTLGFBQ3RCRCxLQUFLLENBQXlCRSxHQUFHLEtBQUssQ0FBSyxRQUMxQ0YsS0FBSyxDQUF5QkUsR0FBRyxLQUFLLENBQU8sU0FDaEQsQ0FBQztnQkFDRCxNQUFNO1lBQ1IsQ0FBQztZQUVETixRQUFRLG1CQUFNRCxLQUFLLHNCQUFHRyxNQUFNLEVBQUdDLElBQUk7UUFDckMsQ0FBQzs7SUFFSCxHQUFLLENBQUNJLElBQUksR0FBRyxRQUFRLENBQVBMLE1BQWM7c0JBQzFCLE1BQ0osQ0FBQyw4REFESWxCLHlEQUFHO1lBQ0Z3QixFQUFFLEVBQUUsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFUCxNQUFNLEtBQUssQ0FBSyxRQUFJQSxNQUFNLEtBQUssQ0FBUSxVQUFHLENBQU0sUUFBRyxHQUFHO1lBQUMsQ0FBQztZQUNyRVEsSUFBSSxFQUFDLENBQWM7WUFDbkJDLE9BQU8sRUFBRVYsWUFBWSxDQUFDQyxNQUFNLEVBQUUsS0FBSztZQUNuQ1UsU0FBUyxFQUFFWCxZQUFZLENBQUNDLE1BQU0sRUFBRSxLQUFLO2tHQUVwQ2YsMERBQUk7MEJBQ0YsQ0FBQztvQkFBQSxDQUFPO29CQUFFLENBQVM7b0JBQUUsQ0FBWTtvQkFBRSxDQUFRO2dCQUFBLENBQUMsQ0FBQzBCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSztrQ0FDNUQsTUFBTSwrREFBTDNCLDhEQUFRO3dCQUFDNEIsTUFBTTs7d0dBQ2IzQixrRUFBWTswQ0FDVjBCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQywrRUFBSXhCLHVFQUFTOzs7O3dIQUFPQyxnRUFBUTs7Ozs7Ozs7Ozt3R0FFN0NGLGtFQUFZO2dDQUFDMkIsT0FBTyxFQUFFSCxJQUFJOzs7Ozs7O3VCQUpQQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztJQVdsQyxNQUFNLDZFQUNISSxDQUFHO2tCQUNBLENBQUM7WUFBQSxDQUFNO1lBQUUsQ0FBTztZQUFFLENBQUs7WUFBRSxDQUFRO1FBQUEsQ0FBQyxDQUFXTCxHQUFHLENBQUMsUUFBUSxDQUFQWCxNQUFNOzBCQUN4RCxNQUFNLCtEQUFMbkIsMkNBQWM7O2dHQUNaRyw0REFBTTt3QkFBQ3lCLE9BQU8sRUFBRVYsWUFBWSxDQUFDQyxNQUFNLEVBQUUsSUFBSTtrQ0FBSUEsTUFBTTs7Ozs7O2dHQUNuRGpCLDZEQUFNO3dCQUNMaUIsTUFBTSxFQUFFQSxNQUFNO3dCQUNkQyxJQUFJLEVBQUVKLEtBQUssQ0FBQ0csTUFBTTt3QkFDbEJrQixPQUFPLEVBQUVuQixZQUFZLENBQUNDLE1BQU0sRUFBRSxLQUFLO2tDQUVsQ0ssSUFBSSxDQUFDTCxNQUFNOzs7Ozs7O2VBUEtBLE1BQU07Ozs7Ozs7Ozs7O0FBYW5DLENBQUM7R0ExRHVCVCxTQUFTO0tBQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZiYXIvTW9iaWxlTmF2L01vYmlsZU5hdi50c3g/ZDQwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtJztcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcclxuXHJcbnR5cGUgQW5jaG9yID0gJ3RvcCcgfCAnbGVmdCcgfCAnYm90dG9tJyB8ICdyaWdodCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGVOYXYoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB0b3A6IGZhbHNlLFxyXG4gICAgbGVmdDogZmFsc2UsXHJcbiAgICBib3R0b206IGZhbHNlLFxyXG4gICAgcmlnaHQ6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPVxyXG4gICAgKGFuY2hvcjogQW5jaG9yLCBvcGVuOiBib29sZWFuKSA9PlxyXG4gICAgKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50IHwgUmVhY3QuTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmXHJcbiAgICAgICAgKChldmVudCBhcyBSZWFjdC5LZXlib2FyZEV2ZW50KS5rZXkgPT09ICdUYWInIHx8XHJcbiAgICAgICAgICAoZXZlbnQgYXMgUmVhY3QuS2V5Ym9hcmRFdmVudCkua2V5ID09PSAnU2hpZnQnKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFthbmNob3JdOiBvcGVuIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgY29uc3QgbGlzdCA9IChhbmNob3I6IEFuY2hvcikgPT4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17eyB3aWR0aDogYW5jaG9yID09PSAndG9wJyB8fCBhbmNob3IgPT09ICdib3R0b20nID8gJ2F1dG8nIDogMjUwIH19XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCBmYWxzZSl9XHJcbiAgICAgIG9uS2V5RG93bj17dG9nZ2xlRHJhd2VyKGFuY2hvciwgZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICB7WydJbmJveCcsICdTdGFycmVkJywgJ1NlbmQgZW1haWwnLCAnRHJhZnRzJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3RleHR9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG4gICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsoWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSBhcyBjb25zdCkubWFwKChhbmNob3IpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXthbmNob3J9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoYW5jaG9yLCB0cnVlKX0+e2FuY2hvcn08L0J1dHRvbj5cclxuICAgICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgICAgYW5jaG9yPXthbmNob3J9XHJcbiAgICAgICAgICAgIG9wZW49e3N0YXRlW2FuY2hvcl19XHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZURyYXdlcihhbmNob3IsIGZhbHNlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xpc3QoYW5jaG9yKX1cclxuICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIk1vYmlsZU5hdiIsInVzZVN0YXRlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInRvZ2dsZURyYXdlciIsImFuY2hvciIsIm9wZW4iLCJldmVudCIsInR5cGUiLCJrZXkiLCJsaXN0Iiwic3giLCJ3aWR0aCIsInJvbGUiLCJvbkNsaWNrIiwib25LZXlEb3duIiwibWFwIiwidGV4dCIsImluZGV4IiwiYnV0dG9uIiwicHJpbWFyeSIsImRpdiIsIkZyYWdtZW50Iiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/navigation/Navbar/MobileNav/MobileNav.tsx\n");

/***/ })

});