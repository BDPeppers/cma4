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

/***/ "./src/components/features/Calendar/CalendarHelper.tsx":
/*!*************************************************************!*\
  !*** ./src/components/features/Calendar/CalendarHelper.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ renderDates; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//get events - > event cards will display acording to selected date\n//will get an array of events that w\n//render days of the month and handle highlighting\n//the selected date will b highligted\nfunction renderDates(selectedDate) {\n    // returns month start date of current date\n    var monthStart = date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfMonth(new Date());\n    //returns month end date of current date\n    var monthEnd = date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfMonth(monthStart);\n    //returns week start date of current date ~ a sunday\n    var startDate = date_fns__WEBPACK_IMPORTED_MODULE_2__.startOfWeek(monthStart);\n    //returns week end date of current date ~ a saturday\n    var endDate = date_fns__WEBPACK_IMPORTED_MODULE_2__.endOfWeek(monthEnd);\n    var dateFormat = \"d\";\n    var rows = [];\n    var days = [];\n    var day = startDate; //first sunday\n    var formattedDate = \"\";\n    while(day <= endDate){\n        for(var i = 0; i < 7; i++){\n            formattedDate = date_fns__WEBPACK_IMPORTED_MODULE_2__.format(day, dateFormat);\n            var cloneDay = day;\n            days.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-cell \".concat(!date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameMonth(day, monthStart) ? \"disabled\" : date_fns__WEBPACK_IMPORTED_MODULE_2__.isSameDay(day, selectedDate) ? \"selected\" : \"\"),\n                children: formattedDate\n            }, dateFormat, false, {\n                fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Calendar\\\\CalendarHelper.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this));\n            day = date_fns__WEBPACK_IMPORTED_MODULE_2__.addDays(day, 1);\n        }\n        rows.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: days\n        }, dateFormat, false, {\n            fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Calendar\\\\CalendarHelper.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this));\n        days = [];\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"dates\",\n        children: rows\n    }, void 0, false, {\n        fileName: \"C:\\\\webdev\\\\cma4\\\\src\\\\components\\\\features\\\\Calendar\\\\CalendarHelper.tsx\",\n        lineNumber: 53,\n        columnNumber: 10\n    }, this));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9DYWxlbmRhci9DYWxlbmRhckhlbHBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtQztBQUNMO0FBRTlCLEVBQW1FO0FBQ25FLEVBQW9DO0FBRXBDLEVBQWtEO0FBQ2xELEVBQXFDO0FBQ3RCLFFBQVEsQ0FBQ0UsV0FBVyxDQUFDQyxZQUFrQixFQUFFLENBQUM7SUFDdkQsRUFBMkM7SUFDM0MsR0FBSyxDQUFDQyxVQUFVLEdBQUdKLGtEQUFvQixDQUFDLEdBQUcsQ0FBQ00sSUFBSTtJQUNoRCxFQUF3QztJQUN4QyxHQUFLLENBQUNDLFFBQVEsR0FBR1AsZ0RBQWtCLENBQUNJLFVBQVU7SUFDOUMsRUFBb0Q7SUFDcEQsR0FBSyxDQUFDSyxTQUFTLEdBQUdULGlEQUFtQixDQUFDSSxVQUFVO0lBQ2hELEVBQW9EO0lBQ3BELEdBQUssQ0FBQ08sT0FBTyxHQUFHWCwrQ0FBaUIsQ0FBQ08sUUFBUTtJQUMxQyxHQUFLLENBQUNNLFVBQVUsR0FBRyxDQUFHO0lBRXRCLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNmLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHUCxTQUFTLENBQUUsQ0FBYztJQUNuQyxHQUFHLENBQUNRLGFBQWEsR0FBRyxDQUFFO1VBRWZELEdBQUcsSUFBSUwsT0FBTyxDQUFFLENBQUM7UUFDdEIsR0FBRyxDQUFFLEdBQUcsQ0FBQ08sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFJLENBQUM7WUFDM0JELGFBQWEsR0FBR2pCLDRDQUFjLENBQUNnQixHQUFHLEVBQUVILFVBQVU7WUFDOUMsR0FBSyxDQUFDTyxRQUFRLEdBQUdKLEdBQUc7WUFDcEJELElBQUksQ0FBQ00sSUFBSSw2RUFDTkMsQ0FBRztnQkFDRkMsU0FBUyxFQUFHLENBQVMsV0FNcEIsUUFMRXZCLGlEQUFtQixDQUFDZ0IsR0FBRyxFQUFFWixVQUFVLElBQ2hDLENBQVUsWUFDVkosK0NBQWlCLENBQUNnQixHQUFHLEVBQUViLFlBQVksSUFDbkMsQ0FBVSxZQUNWLENBQUU7MEJBS1BjLGFBQWE7ZUFIVEosVUFBVTs7Ozs7WUFNbkJHLEdBQUcsR0FBR2hCLDZDQUFlLENBQUNnQixHQUFHLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBQ0RGLElBQUksQ0FBQ08sSUFBSSw2RUFDTkMsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSztzQkFDakJSLElBQUk7V0FEbUJGLFVBQVU7Ozs7O1FBSXRDRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELE1BQU0sNkVBQUVPLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQU87a0JBQUVULElBQUk7Ozs7OztBQUNyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVzL0NhbGVuZGFyL0NhbGVuZGFySGVscGVyLnRzeD9kZTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGRhdGVGbnMgZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9nZXQgZXZlbnRzIC0gPiBldmVudCBjYXJkcyB3aWxsIGRpc3BsYXkgYWNvcmRpbmcgdG8gc2VsZWN0ZWQgZGF0ZVxyXG4vL3dpbGwgZ2V0IGFuIGFycmF5IG9mIGV2ZW50cyB0aGF0IHdcclxuXHJcbi8vcmVuZGVyIGRheXMgb2YgdGhlIG1vbnRoIGFuZCBoYW5kbGUgaGlnaGxpZ2h0aW5nXHJcbi8vdGhlIHNlbGVjdGVkIGRhdGUgd2lsbCBiIGhpZ2hsaWd0ZWRcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRGF0ZXMoc2VsZWN0ZWREYXRlOiBEYXRlKSB7XHJcbiAgLy8gcmV0dXJucyBtb250aCBzdGFydCBkYXRlIG9mIGN1cnJlbnQgZGF0ZVxyXG4gIGNvbnN0IG1vbnRoU3RhcnQgPSBkYXRlRm5zLnN0YXJ0T2ZNb250aChuZXcgRGF0ZSgpKTtcclxuICAvL3JldHVybnMgbW9udGggZW5kIGRhdGUgb2YgY3VycmVudCBkYXRlXHJcbiAgY29uc3QgbW9udGhFbmQgPSBkYXRlRm5zLmVuZE9mTW9udGgobW9udGhTdGFydCk7XHJcbiAgLy9yZXR1cm5zIHdlZWsgc3RhcnQgZGF0ZSBvZiBjdXJyZW50IGRhdGUgfiBhIHN1bmRheVxyXG4gIGNvbnN0IHN0YXJ0RGF0ZSA9IGRhdGVGbnMuc3RhcnRPZldlZWsobW9udGhTdGFydCk7XHJcbiAgLy9yZXR1cm5zIHdlZWsgZW5kIGRhdGUgb2YgY3VycmVudCBkYXRlIH4gYSBzYXR1cmRheVxyXG4gIGNvbnN0IGVuZERhdGUgPSBkYXRlRm5zLmVuZE9mV2Vlayhtb250aEVuZCk7XHJcbiAgY29uc3QgZGF0ZUZvcm1hdCA9IFwiZFwiO1xyXG5cclxuICBjb25zdCByb3dzID0gW107XHJcbiAgbGV0IGRheXMgPSBbXTtcclxuICBsZXQgZGF5ID0gc3RhcnREYXRlOyAvL2ZpcnN0IHN1bmRheVxyXG4gIGxldCBmb3JtYXR0ZWREYXRlID0gXCJcIjtcclxuXHJcbiAgd2hpbGUgKGRheSA8PSBlbmREYXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZUZucy5mb3JtYXQoZGF5LCBkYXRlRm9ybWF0KTtcclxuICAgICAgY29uc3QgY2xvbmVEYXkgPSBkYXk7XHJcbiAgICAgIGRheXMucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtY2VsbCAke1xyXG4gICAgICAgICAgICAhZGF0ZUZucy5pc1NhbWVNb250aChkYXksIG1vbnRoU3RhcnQpXHJcbiAgICAgICAgICAgICAgPyBcImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICA6IGRhdGVGbnMuaXNTYW1lRGF5KGRheSwgc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgICAgICAgID8gXCJzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIGtleT17ZGF0ZUZvcm1hdH1cclxuICAgICAgICAgIC8vICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkRhdGVDbGljayhjbG9uZURheSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Zvcm1hdHRlZERhdGV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgIGRheSA9IGRhdGVGbnMuYWRkRGF5cyhkYXksIDEpO1xyXG4gICAgfVxyXG4gICAgcm93cy5wdXNoKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17ZGF0ZUZvcm1hdH0+XHJcbiAgICAgICAge2RheXN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIGRheXMgPSBbXTtcclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZXNcIj57cm93c308L2Rpdj47XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhdGVGbnMiLCJSZWFjdCIsInJlbmRlckRhdGVzIiwic2VsZWN0ZWREYXRlIiwibW9udGhTdGFydCIsInN0YXJ0T2ZNb250aCIsIkRhdGUiLCJtb250aEVuZCIsImVuZE9mTW9udGgiLCJzdGFydERhdGUiLCJzdGFydE9mV2VlayIsImVuZERhdGUiLCJlbmRPZldlZWsiLCJkYXRlRm9ybWF0Iiwicm93cyIsImRheXMiLCJkYXkiLCJmb3JtYXR0ZWREYXRlIiwiaSIsImZvcm1hdCIsImNsb25lRGF5IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImlzU2FtZU1vbnRoIiwiaXNTYW1lRGF5IiwiYWRkRGF5cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/features/Calendar/CalendarHelper.tsx\n");

/***/ })

});