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

/***/ "./src/components/About/Services/ServiceCard/ServiceCardList.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/About/Services/ServiceCard/ServiceCardList.tsx ***!
  \***********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ServiceCardList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceCard */ \"./src/components/About/Services/ServiceCard/ServiceCard.tsx\");\n\n\n\n\n//imgages\n// import GroupFitness from '../../../../../public/imgs/GroupFitness.png'\nvar cardList = [];\nvar GroupFitness = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Group Fitness\", \"Our passionate instructors lead exhilarating fitness\\nclasses welcoming beginners and pros\", \"\");\ncardList.push(GroupFitness);\nvar PersonalTraining = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Personal Training\", \"One-on-One sessions with certified personal trainers dedicated\\n  to helping you reach your fitness goals.\", \"\");\ncardList.push(PersonalTraining);\nvar BodyBuilding = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Bodybuilding Prep Coaching\", \"We provide contest preparation coaching services and programs\\n  for bikini, figure, women's physique, and men's physique competitions\", \"\");\ncardList.push(BodyBuilding);\nvar CMAKidz = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"CMA Kidz Care\", \"Child care is provided at the gym so that you can \\nfocus on your workout. Kidz Fit classes are available seasonally!\", \"\");\ncardList.push(CMAKidz);\nvar FemaleFitness = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Exclusive Female Fitness\", \"Women-only group fitness classes are offered\\nalong with designated workout areas\", \"\");\ncardList.push(FemaleFitness);\nvar CoedGym = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Coed Gym\", \"During business hours the gym will be open to all, regardless of gender\", \"\");\ncardList.push(CoedGym);\nvar AllTheTime = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"24 Hour Fitness\", \"24 hour key fob access is available\", \"\");\ncardList.push(AllTheTime);\nvar BestCust = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Best Customer Service In Town\", \"We strive to make sure that our gym, services, and staff provides the\\nbest fitness experience in Warner Robins and the Middle GA area\", \"\");\ncardList.push(BestCust);\nconsole.log(cardList);\nfunction ServiceCardList() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cardList.map(function(card, x) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: card\n            }, x, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCardList.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n};\n_c = ServiceCardList;\nvar _c;\n$RefreshReg$(_c, \"ServiceCardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC9TZXJ2aWNlcy9TZXJ2aWNlQ2FyZC9TZXJ2aWNlQ2FyZExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDaUI7QUFDUjtBQUN2QyxFQUFTO0FBQ1QsRUFBeUU7QUFFekUsR0FBSyxDQUFDRyxRQUFRLEdBQTJCLENBQUMsQ0FBQztBQUUzQyxHQUFLLENBQUNDLFlBQVksR0FBRyxHQUFHLENBQUNILHlEQUFlLENBQ3RDLENBQWUsZ0JBQ2QsQ0FDaUMsNkZBQ2xDLENBQUU7QUFFSkUsUUFBUSxDQUFDRSxJQUFJLENBQUNELFlBQVk7QUFFMUIsR0FBSyxDQUFDRSxnQkFBZ0IsR0FBRyxHQUFHLENBQUNMLHlEQUFlLENBQzFDLENBQW1CLG9CQUNsQixDQUN1Qyw2R0FDeEMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0MsZ0JBQWdCO0FBRTlCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUcsQ0FBQ04seURBQWUsQ0FDdEMsQ0FBNEIsNkJBQzNCLENBQ29FLHlJQUNyRSxDQUFFO0FBRUpFLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDRSxZQUFZO0FBRTFCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsQ0FBQ1AseURBQWUsQ0FDakMsQ0FBZSxnQkFDZCxDQUM4RCx3SEFDL0QsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0csT0FBTztBQUVyQixHQUFLLENBQUNDLGFBQWEsR0FBRyxHQUFHLENBQUNSLHlEQUFlLENBQ3ZDLENBQTBCLDJCQUN6QixDQUNnQyxvRkFDakMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0ksYUFBYTtBQUUzQixHQUFLLENBQUNDLE9BQU8sR0FBRyxHQUFHLENBQUNULHlEQUFlLENBQ2pDLENBQVUsV0FDVCxDQUF1RSwwRUFDeEUsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0ssT0FBTztBQUVyQixHQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNWLHlEQUFlLENBQ3BDLENBQWlCLGtCQUNqQixDQUFxQyxzQ0FDckMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ00sVUFBVTtBQUV4QixHQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNYLHlEQUFlLENBQ2xDLENBQStCLGdDQUM5QixDQUM0RCx5SUFDN0QsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ08sUUFBUTtBQUV0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNYLFFBQVE7QUFDTCxRQUFRLENBQUNZLGVBQWUsR0FBRyxDQUFDOztJQUN6QyxNQUFNO2tCQUVEWixRQUFRLENBQUNhLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsQ0FBQyxFQUFLLENBQUM7d0ZBQ3pCaEIsb0RBQVc7Z0JBQUNpQixJQUFJLEVBQUVGLElBQUk7ZUFBT0MsQ0FBQzs7Ozs7UUFDakMsQ0FBQzs7QUFHUCxDQUFDO0tBUnVCSCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0L1NlcnZpY2VzL1NlcnZpY2VDYXJkL1NlcnZpY2VDYXJkTGlzdC50c3g/MDY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VydmljZUNhcmREYXRhIH0gZnJvbSBcIi4vU2VydmljZUNhcmRcIjtcclxuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gXCIuL1NlcnZpY2VDYXJkXCI7XHJcbi8vaW1nYWdlc1xyXG4vLyBpbXBvcnQgR3JvdXBGaXRuZXNzIGZyb20gJy4uLy4uLy4uLy4uLy4uL3B1YmxpYy9pbWdzL0dyb3VwRml0bmVzcy5wbmcnXHJcblxyXG5jb25zdCBjYXJkTGlzdDogQXJyYXk8U2VydmljZUNhcmREYXRhPiA9IFtdO1xyXG5cclxuY29uc3QgR3JvdXBGaXRuZXNzID0gbmV3IFNlcnZpY2VDYXJkRGF0YShcclxuICBcIkdyb3VwIEZpdG5lc3NcIixcclxuICBgT3VyIHBhc3Npb25hdGUgaW5zdHJ1Y3RvcnMgbGVhZCBleGhpbGFyYXRpbmcgZml0bmVzc1xyXG5jbGFzc2VzIHdlbGNvbWluZyBiZWdpbm5lcnMgYW5kIHByb3NgLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChHcm91cEZpdG5lc3MpO1xyXG5cclxuY29uc3QgUGVyc29uYWxUcmFpbmluZyA9IG5ldyBTZXJ2aWNlQ2FyZERhdGEoXHJcbiAgXCJQZXJzb25hbCBUcmFpbmluZ1wiLFxyXG4gIGBPbmUtb24tT25lIHNlc3Npb25zIHdpdGggY2VydGlmaWVkIHBlcnNvbmFsIHRyYWluZXJzIGRlZGljYXRlZFxyXG4gIHRvIGhlbHBpbmcgeW91IHJlYWNoIHlvdXIgZml0bmVzcyBnb2Fscy5gLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChQZXJzb25hbFRyYWluaW5nKTtcclxuXHJcbmNvbnN0IEJvZHlCdWlsZGluZyA9IG5ldyBTZXJ2aWNlQ2FyZERhdGEoXHJcbiAgXCJCb2R5YnVpbGRpbmcgUHJlcCBDb2FjaGluZ1wiLFxyXG4gIGBXZSBwcm92aWRlIGNvbnRlc3QgcHJlcGFyYXRpb24gY29hY2hpbmcgc2VydmljZXMgYW5kIHByb2dyYW1zXHJcbiAgZm9yIGJpa2luaSwgZmlndXJlLCB3b21lbidzIHBoeXNpcXVlLCBhbmQgbWVuJ3MgcGh5c2lxdWUgY29tcGV0aXRpb25zYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goQm9keUJ1aWxkaW5nKTtcclxuXHJcbmNvbnN0IENNQUtpZHogPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiQ01BIEtpZHogQ2FyZVwiLFxyXG4gIGBDaGlsZCBjYXJlIGlzIHByb3ZpZGVkIGF0IHRoZSBneW0gc28gdGhhdCB5b3UgY2FuIFxyXG5mb2N1cyBvbiB5b3VyIHdvcmtvdXQuIEtpZHogRml0IGNsYXNzZXMgYXJlIGF2YWlsYWJsZSBzZWFzb25hbGx5IWAsXHJcbiAgXCJcIlxyXG4pO1xyXG5jYXJkTGlzdC5wdXNoKENNQUtpZHopO1xyXG5cclxuY29uc3QgRmVtYWxlRml0bmVzcyA9IG5ldyBTZXJ2aWNlQ2FyZERhdGEoXHJcbiAgXCJFeGNsdXNpdmUgRmVtYWxlIEZpdG5lc3NcIixcclxuICBgV29tZW4tb25seSBncm91cCBmaXRuZXNzIGNsYXNzZXMgYXJlIG9mZmVyZWRcclxuYWxvbmcgd2l0aCBkZXNpZ25hdGVkIHdvcmtvdXQgYXJlYXNgLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChGZW1hbGVGaXRuZXNzKTtcclxuXHJcbmNvbnN0IENvZWRHeW0gPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiQ29lZCBHeW1cIixcclxuICBgRHVyaW5nIGJ1c2luZXNzIGhvdXJzIHRoZSBneW0gd2lsbCBiZSBvcGVuIHRvIGFsbCwgcmVnYXJkbGVzcyBvZiBnZW5kZXJgLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChDb2VkR3ltKTtcclxuXHJcbmNvbnN0IEFsbFRoZVRpbWUgPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiMjQgSG91ciBGaXRuZXNzXCIsXHJcbiAgXCIyNCBob3VyIGtleSBmb2IgYWNjZXNzIGlzIGF2YWlsYWJsZVwiLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChBbGxUaGVUaW1lKTtcclxuXHJcbmNvbnN0IEJlc3RDdXN0ID0gbmV3IFNlcnZpY2VDYXJkRGF0YShcclxuICBcIkJlc3QgQ3VzdG9tZXIgU2VydmljZSBJbiBUb3duXCIsXHJcbiAgYFdlIHN0cml2ZSB0byBtYWtlIHN1cmUgdGhhdCBvdXIgZ3ltLCBzZXJ2aWNlcywgYW5kIHN0YWZmIHByb3ZpZGVzIHRoZVxyXG5iZXN0IGZpdG5lc3MgZXhwZXJpZW5jZSBpbiBXYXJuZXIgUm9iaW5zIGFuZCB0aGUgTWlkZGxlIEdBIGFyZWFgLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChCZXN0Q3VzdCk7XHJcblxyXG5jb25zb2xlLmxvZyhjYXJkTGlzdCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VDYXJkTGlzdCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NhcmRMaXN0Lm1hcCgoY2FyZCwgeCkgPT4ge1xyXG4gICAgICAgIDxTZXJ2aWNlQ2FyZCBkYXRhPXtjYXJkfSBrZXk9e3h9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VydmljZUNhcmREYXRhIiwiU2VydmljZUNhcmQiLCJjYXJkTGlzdCIsIkdyb3VwRml0bmVzcyIsInB1c2giLCJQZXJzb25hbFRyYWluaW5nIiwiQm9keUJ1aWxkaW5nIiwiQ01BS2lkeiIsIkZlbWFsZUZpdG5lc3MiLCJDb2VkR3ltIiwiQWxsVGhlVGltZSIsIkJlc3RDdXN0IiwiY29uc29sZSIsImxvZyIsIlNlcnZpY2VDYXJkTGlzdCIsIm1hcCIsImNhcmQiLCJ4IiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About/Services/ServiceCard/ServiceCardList.tsx\n");

/***/ })

});