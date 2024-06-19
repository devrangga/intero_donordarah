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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public */ \"(app-pages-browser)/./public/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AuthContext */ \"(app-pages-browser)/./context/AuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Navbar = (param)=>{\n    let { header } = param;\n    _s();\n    const { token } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n    const [profile, setProfile] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    async function getFaskes() {\n        const response = await fetch(\"/api/faskes\", {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        const result = await response.json();\n        console.log(result.data);\n        return result.data;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchProfile = async ()=>{\n            const data = await getFaskes();\n            setProfile(data.name);\n        };\n        fetchProfile();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-between items-center text-primary\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-3xl\",\n                children: header\n            }, void 0, false, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row gap-8 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"ri-notification-3-fill text-3xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _public__WEBPACK_IMPORTED_MODULE_1__.Ambulance,\n                                alt: \"Ambulance\",\n                                width: 50,\n                                height: 50,\n                                className: \"rounded-full overflow-hidden\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl font-medium\",\n                                children: profile\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"ri-arrow-down-s-fill text-3xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Navbar.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"MwnZFiJjf2mqvbH1W8bXNXQFFAY=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__.useAuth\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvKGZyYWdtZW50cykvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDTjtBQUNvQjtBQUNIO0FBRWhELE1BQU1NLFNBQVM7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3hCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdILDZEQUFPQTtJQUN6QixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQVM7SUFFL0MsZUFBZU87UUFDYixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZUFBZTtZQUMxQ0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJDLGVBQWUsVUFBZ0IsT0FBTlI7WUFDM0I7UUFDRjtRQUVBLE1BQU1TLFNBQVMsTUFBTUwsU0FBU00sSUFBSTtRQUNsQ0MsUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO1FBQ3ZCLE9BQU9KLE9BQU9JLElBQUk7SUFDcEI7SUFFQWxCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLGVBQWU7WUFDbkIsTUFBTUQsT0FBTyxNQUFNVjtZQUNuQkQsV0FBV1csS0FBS0UsSUFBSTtRQUN0QjtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNCbEI7Ozs7OzswQkFDcEMsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVOzs7Ozs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3hCLGtEQUFLQTtnQ0FDSjJCLEtBQUs1Qiw4Q0FBU0E7Z0NBQ2Q2QixLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSTixXQUFVOzs7Ozs7MENBRVosOERBQUNDO2dDQUFHRCxXQUFVOzBDQUF1QmhCOzs7Ozs7Ozs7Ozs7a0NBRXZDLDhEQUFDa0I7d0JBQUVGLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtHQTdDTW5COztRQUNjRCx5REFBT0E7OztLQURyQkM7QUErQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC8oZnJhZ21lbnRzKS9OYXZiYXIudHN4P2FjYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW1idWxhbmNlIH0gZnJvbSBcIkAvcHVibGljXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvY29udGV4dC9BdXRoQ29udGV4dFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoeyBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RmFza2VzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Zhc2tlc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZhc2tlcygpO1xuICAgICAgc2V0UHJvZmlsZShkYXRhLm5hbWUpO1xuICAgIH07XG4gICAgZmV0Y2hQcm9maWxlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtcHJpbWFyeVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPntoZWFkZXJ9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtOCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbm90aWZpY2F0aW9uLTMtZmlsbCB0ZXh0LTN4bFwiPjwvaT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtBbWJ1bGFuY2V9XG4gICAgICAgICAgICBhbHQ9XCJBbWJ1bGFuY2VcIlxuICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj57cHJvZmlsZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktYXJyb3ctZG93bi1zLWZpbGwgdGV4dC0zeGxcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJBbWJ1bGFuY2UiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBdXRoIiwiTmF2YmFyIiwiaGVhZGVyIiwidG9rZW4iLCJwcm9maWxlIiwic2V0UHJvZmlsZSIsImdldEZhc2tlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoUHJvZmlsZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/(fragments)/Navbar.tsx\n"));

/***/ })

});