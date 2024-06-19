"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/(fragments)/Navbar.tsx":
/*!**********************************************!*\
  !*** ./app/dashboard/(fragments)/Navbar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Navbar = (param)=>{\n    let { header } = param;\n    async function getFaskes() {\n        const response = await fetch(\"/api/faskes\", {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        const result = await response.json();\n        console.log(result.data);\n        return result;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between items-center text-primary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: header\n            }, void 0, false, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-8 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"ri-notification-3-fill text-3xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _public__WEBPACK_IMPORTED_MODULE_1__.Ambulance,\n                                alt: \"Ambulance\",\n                                width: 50,\n                                height: 50,\n                                className: \"rounded-full overflow-hidden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl font-medium\",\n                                children: \"Maritza Angel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"ri-arrow-down-s-fill text-3xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvKGZyYWdtZW50cykvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXFDO0FBQ047QUFDTDtBQUcxQixNQUFNRyxTQUFTO1FBQUMsRUFBRUMsTUFBTSxFQUFFO0lBQ3RCLGVBQWVDO1FBQ2IsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGVBQWU7WUFDMUNDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxlQUFlLFVBQWdCLE9BQU5DO1lBQzNCO1FBQ0Y7UUFFQSxNQUFNQyxTQUFTLE1BQU1OLFNBQVNPLElBQUk7UUFDbENDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0ksSUFBSTtRQUN2QixPQUFPSjtJQUNUO0lBQ0YscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0JkOzs7Ozs7MEJBQ3BDLDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVOzs7Ozs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2pCLGtEQUFLQTtnQ0FDSm9CLEtBQUtyQiw4Q0FBU0E7Z0NBQ2RzQixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSTixXQUFVOzs7Ozs7MENBRVosOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFzQjs7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ0U7d0JBQUVGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtLQWpDTWY7QUFtQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC8oZnJhZ21lbnRzKS9OYXZiYXIudHN4P2FjYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW1idWxhbmNlIH0gZnJvbSBcIkAvcHVibGljXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5cbmNvbnN0IE5hdmJhciA9ICh7IGhlYWRlciB9KSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0RmFza2VzKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZmFza2VzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1wcmltYXJ5XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+e2hlYWRlcn08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC04IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJyaS1ub3RpZmljYXRpb24tMy1maWxsIHRleHQtM3hsXCI+PC9pPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e0FtYnVsYW5jZX1cbiAgICAgICAgICAgIGFsdD1cIkFtYnVsYW5jZVwiXG4gICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPk1hcml0emEgQW5nZWw8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctZG93bi1zLWZpbGwgdGV4dC0zeGxcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJBbWJ1bGFuY2UiLCJJbWFnZSIsIlJlYWN0IiwiTmF2YmFyIiwiaGVhZGVyIiwiZ2V0RmFza2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/(fragments)/Navbar.tsx\n"));

/***/ })

});