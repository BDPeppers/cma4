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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ServiceCardLis\": function() { return /* binding */ ServiceCardLis; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceCard */ \"./src/components/About/Services/ServiceCard/ServiceCard.tsx\");\n\n\n\n\n//imgages\n// import GroupFitness from '../../../../../public/imgs/GroupFitness.png'\nvar cardList = [];\nvar GroupFitness = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Group Fitness\", \"Our passionate instructors lead exhilarating fitness\\nclasses welcoming beginners and pros\", \"\");\ncardList.push(GroupFitness);\nvar PersonalTraining = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Personal Training\", \"One-on-One sessions with certified personal trainers dedicated\\n  to helping you reach your fitness goals.\", \"\");\ncardList.push(PersonalTraining);\nvar BodyBuilding = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Bodybuilding Prep Coaching\", \"We provide contest preparation coaching services and programs\\n  for bikini, figure, women's physique, and men's physique competitions\", \"\");\ncardList.push(BodyBuilding);\nvar CMAKidz = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"CMA Kidz Care\", \"Child care is provided at the gym so that you can \\nfocus on your workout. Kidz Fit classes are available seasonally!\", \"\");\ncardList.push(CMAKidz);\nvar FemaleFitness = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Exclusive Female Fitness\", \"Women-only group fitness classes are offered\\nalong with designated workout areas\", \"\");\ncardList.push(FemaleFitness);\nvar CoedGym = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Coed Gym\", \"During business hours the gym will be open to all, regardless of gender\", \"\");\ncardList.push(CoedGym);\nvar AllTheTime = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"24 Hour Fitness\", \"24 hour key fob access is available\", \"\");\ncardList.push(AllTheTime);\nvar BestCust = new _ServiceCard__WEBPACK_IMPORTED_MODULE_2__.ServiceCardData(\"Best Customer Service In Town\", \"We strive to make sure that our gym, services, and staff provides the\\nbest fitness experience in Warner Robins and the Middle GA area\", \"\");\ncardList.push(BestCust);\n// class ServiceCardList extends React.Component {\n//   public render() {\n//     return (\n//       <>\n//         {cardList.map((card) => {\n//           <ServiceCard data={card} />;\n//         })}\n//       </>\n//     );\n//   }\n// }\n// export default ServiceCardList;\n// import * as React from 'react';\n// export interface IServiceCardListProps {\n// }\nfunction ServiceCardLis() {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: cardList.map(function(card) {\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ServiceCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: card\n            }, void 0, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\About\\\\Services\\\\ServiceCard\\\\ServiceCardList.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n}\n_c = ServiceCardLis;\nvar _c;\n$RefreshReg$(_c, \"ServiceCardLis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BYm91dC9TZXJ2aWNlcy9TZXJ2aWNlQ2FyZC9TZXJ2aWNlQ2FyZExpc3QudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDaUI7QUFDUjtBQUd2QyxFQUFTO0FBQ1QsRUFBeUU7QUFFekUsR0FBSyxDQUFDRyxRQUFRLEdBQTJCLENBQUMsQ0FBQztBQUUzQyxHQUFLLENBQUNDLFlBQVksR0FBRyxHQUFHLENBQUNILHlEQUFlLENBQ3RDLENBQWUsZ0JBQ2QsQ0FDaUMsNkZBQ2xDLENBQUU7QUFFSkUsUUFBUSxDQUFDRSxJQUFJLENBQUNELFlBQVk7QUFFMUIsR0FBSyxDQUFDRSxnQkFBZ0IsR0FBRyxHQUFHLENBQUNMLHlEQUFlLENBQzFDLENBQW1CLG9CQUNsQixDQUN1Qyw2R0FDeEMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0MsZ0JBQWdCO0FBRTlCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHLEdBQUcsQ0FBQ04seURBQWUsQ0FDdEMsQ0FBNEIsNkJBQzNCLENBQ29FLHlJQUNyRSxDQUFFO0FBRUpFLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDRSxZQUFZO0FBRTFCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHLEdBQUcsQ0FBQ1AseURBQWUsQ0FDakMsQ0FBZSxnQkFDZCxDQUM4RCx3SEFDL0QsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0csT0FBTztBQUVyQixHQUFLLENBQUNDLGFBQWEsR0FBRyxHQUFHLENBQUNSLHlEQUFlLENBQ3ZDLENBQTBCLDJCQUN6QixDQUNnQyxvRkFDakMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0ksYUFBYTtBQUUzQixHQUFLLENBQUNDLE9BQU8sR0FBRyxHQUFHLENBQUNULHlEQUFlLENBQ2pDLENBQVUsV0FDVCxDQUF1RSwwRUFDeEUsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ0ssT0FBTztBQUVyQixHQUFLLENBQUNDLFVBQVUsR0FBRyxHQUFHLENBQUNWLHlEQUFlLENBQ3BDLENBQWlCLGtCQUNqQixDQUFxQyxzQ0FDckMsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ00sVUFBVTtBQUV4QixHQUFLLENBQUNDLFFBQVEsR0FBRyxHQUFHLENBQUNYLHlEQUFlLENBQ2xDLENBQStCLGdDQUM5QixDQUM0RCx5SUFDN0QsQ0FBRTtBQUVKRSxRQUFRLENBQUNFLElBQUksQ0FBQ08sUUFBUTtBQUV0QixFQUFrRDtBQUNsRCxFQUFzQjtBQUN0QixFQUFlO0FBQ2YsRUFBVztBQUNYLEVBQW9DO0FBQ3BDLEVBQXlDO0FBQ3pDLEVBQWM7QUFDZCxFQUFZO0FBQ1osRUFBUztBQUNULEVBQU07QUFDTixFQUFJO0FBRUosRUFBa0M7QUFFbEMsRUFBa0M7QUFFbEMsRUFBMkM7QUFDM0MsRUFBSTtBQUVHLFNBQVNDLGNBQWMsR0FBRyxDQUFDOztJQUNoQyxNQUFNO2tCQUVEVixRQUFRLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO3dGQUN0QmIsb0RBQVc7Z0JBQUNjLElBQUksRUFBRUQsSUFBSTs7Ozs7O1FBQ3pCLENBQUM7O0FBR1AsQ0FBQztLQVJlRixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0L1NlcnZpY2VzL1NlcnZpY2VDYXJkL1NlcnZpY2VDYXJkTGlzdC50c3g/MDY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VydmljZUNhcmREYXRhIH0gZnJvbSBcIi4vU2VydmljZUNhcmRcIjtcclxuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gXCIuL1NlcnZpY2VDYXJkXCI7XHJcbmltcG9ydCB7IGRlZmF1bHRNYXBQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9mZWF0dXJlcy9NYXAvTWFwXCI7XHJcblxyXG4vL2ltZ2FnZXNcclxuLy8gaW1wb3J0IEdyb3VwRml0bmVzcyBmcm9tICcuLi8uLi8uLi8uLi8uLi9wdWJsaWMvaW1ncy9Hcm91cEZpdG5lc3MucG5nJ1xyXG5cclxuY29uc3QgY2FyZExpc3Q6IEFycmF5PFNlcnZpY2VDYXJkRGF0YT4gPSBbXTtcclxuXHJcbmNvbnN0IEdyb3VwRml0bmVzcyA9IG5ldyBTZXJ2aWNlQ2FyZERhdGEoXHJcbiAgXCJHcm91cCBGaXRuZXNzXCIsXHJcbiAgYE91ciBwYXNzaW9uYXRlIGluc3RydWN0b3JzIGxlYWQgZXhoaWxhcmF0aW5nIGZpdG5lc3NcclxuY2xhc3NlcyB3ZWxjb21pbmcgYmVnaW5uZXJzIGFuZCBwcm9zYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goR3JvdXBGaXRuZXNzKTtcclxuXHJcbmNvbnN0IFBlcnNvbmFsVHJhaW5pbmcgPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiUGVyc29uYWwgVHJhaW5pbmdcIixcclxuICBgT25lLW9uLU9uZSBzZXNzaW9ucyB3aXRoIGNlcnRpZmllZCBwZXJzb25hbCB0cmFpbmVycyBkZWRpY2F0ZWRcclxuICB0byBoZWxwaW5nIHlvdSByZWFjaCB5b3VyIGZpdG5lc3MgZ29hbHMuYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goUGVyc29uYWxUcmFpbmluZyk7XHJcblxyXG5jb25zdCBCb2R5QnVpbGRpbmcgPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiQm9keWJ1aWxkaW5nIFByZXAgQ29hY2hpbmdcIixcclxuICBgV2UgcHJvdmlkZSBjb250ZXN0IHByZXBhcmF0aW9uIGNvYWNoaW5nIHNlcnZpY2VzIGFuZCBwcm9ncmFtc1xyXG4gIGZvciBiaWtpbmksIGZpZ3VyZSwgd29tZW4ncyBwaHlzaXF1ZSwgYW5kIG1lbidzIHBoeXNpcXVlIGNvbXBldGl0aW9uc2AsXHJcbiAgXCJcIlxyXG4pO1xyXG5jYXJkTGlzdC5wdXNoKEJvZHlCdWlsZGluZyk7XHJcblxyXG5jb25zdCBDTUFLaWR6ID0gbmV3IFNlcnZpY2VDYXJkRGF0YShcclxuICBcIkNNQSBLaWR6IENhcmVcIixcclxuICBgQ2hpbGQgY2FyZSBpcyBwcm92aWRlZCBhdCB0aGUgZ3ltIHNvIHRoYXQgeW91IGNhbiBcclxuZm9jdXMgb24geW91ciB3b3Jrb3V0LiBLaWR6IEZpdCBjbGFzc2VzIGFyZSBhdmFpbGFibGUgc2Vhc29uYWxseSFgLFxyXG4gIFwiXCJcclxuKTtcclxuY2FyZExpc3QucHVzaChDTUFLaWR6KTtcclxuXHJcbmNvbnN0IEZlbWFsZUZpdG5lc3MgPSBuZXcgU2VydmljZUNhcmREYXRhKFxyXG4gIFwiRXhjbHVzaXZlIEZlbWFsZSBGaXRuZXNzXCIsXHJcbiAgYFdvbWVuLW9ubHkgZ3JvdXAgZml0bmVzcyBjbGFzc2VzIGFyZSBvZmZlcmVkXHJcbmFsb25nIHdpdGggZGVzaWduYXRlZCB3b3Jrb3V0IGFyZWFzYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goRmVtYWxlRml0bmVzcyk7XHJcblxyXG5jb25zdCBDb2VkR3ltID0gbmV3IFNlcnZpY2VDYXJkRGF0YShcclxuICBcIkNvZWQgR3ltXCIsXHJcbiAgYER1cmluZyBidXNpbmVzcyBob3VycyB0aGUgZ3ltIHdpbGwgYmUgb3BlbiB0byBhbGwsIHJlZ2FyZGxlc3Mgb2YgZ2VuZGVyYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goQ29lZEd5bSk7XHJcblxyXG5jb25zdCBBbGxUaGVUaW1lID0gbmV3IFNlcnZpY2VDYXJkRGF0YShcclxuICBcIjI0IEhvdXIgRml0bmVzc1wiLFxyXG4gIFwiMjQgaG91ciBrZXkgZm9iIGFjY2VzcyBpcyBhdmFpbGFibGVcIixcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goQWxsVGhlVGltZSk7XHJcblxyXG5jb25zdCBCZXN0Q3VzdCA9IG5ldyBTZXJ2aWNlQ2FyZERhdGEoXHJcbiAgXCJCZXN0IEN1c3RvbWVyIFNlcnZpY2UgSW4gVG93blwiLFxyXG4gIGBXZSBzdHJpdmUgdG8gbWFrZSBzdXJlIHRoYXQgb3VyIGd5bSwgc2VydmljZXMsIGFuZCBzdGFmZiBwcm92aWRlcyB0aGVcclxuYmVzdCBmaXRuZXNzIGV4cGVyaWVuY2UgaW4gV2FybmVyIFJvYmlucyBhbmQgdGhlIE1pZGRsZSBHQSBhcmVhYCxcclxuICBcIlwiXHJcbik7XHJcbmNhcmRMaXN0LnB1c2goQmVzdEN1c3QpO1xyXG5cclxuLy8gY2xhc3MgU2VydmljZUNhcmRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuLy8gICBwdWJsaWMgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPD5cclxuLy8gICAgICAgICB7Y2FyZExpc3QubWFwKChjYXJkKSA9PiB7XHJcbi8vICAgICAgICAgICA8U2VydmljZUNhcmQgZGF0YT17Y2FyZH0gLz47XHJcbi8vICAgICAgICAgfSl9XHJcbi8vICAgICAgIDwvPlxyXG4vLyAgICAgKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNlcnZpY2VDYXJkTGlzdDtcclxuXHJcbi8vIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VDYXJkTGlzdFByb3BzIHtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlcnZpY2VDYXJkTGlzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y2FyZExpc3QubWFwKChjYXJkKSA9PiB7XHJcbiAgICAgICAgPFNlcnZpY2VDYXJkIGRhdGE9e2NhcmR9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2VydmljZUNhcmREYXRhIiwiU2VydmljZUNhcmQiLCJjYXJkTGlzdCIsIkdyb3VwRml0bmVzcyIsInB1c2giLCJQZXJzb25hbFRyYWluaW5nIiwiQm9keUJ1aWxkaW5nIiwiQ01BS2lkeiIsIkZlbWFsZUZpdG5lc3MiLCJDb2VkR3ltIiwiQWxsVGhlVGltZSIsIkJlc3RDdXN0IiwiU2VydmljZUNhcmRMaXMiLCJtYXAiLCJjYXJkIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About/Services/ServiceCard/ServiceCardList.tsx\n");

/***/ })

});