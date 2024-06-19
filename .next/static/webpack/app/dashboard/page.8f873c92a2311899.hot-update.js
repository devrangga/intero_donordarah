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

/***/ "(app-pages-browser)/./app/dashboard/(fragments)/Sidebar.tsx":
/*!***********************************************!*\
  !*** ./app/dashboard/(fragments)/Sidebar.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SidebarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SidebarButton */ \"(app-pages-browser)/./components/SidebarButton.tsx\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constant */ \"(app-pages-browser)/./constant/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var remixicon_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remixicon/fonts/remixicon.css */ \"(app-pages-browser)/./node_modules/remixicon/fonts/remixicon.css\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/AuthContext */ \"(app-pages-browser)/./context/AuthContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { onSelect, isActive } = param;\n    _s();\n    const { token } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    async function logOut() {\n        const response = await fetch(\"/api/logout\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        const result = await response.json();\n        console.log(result);\n        return result;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-primary px-8 py-16 flex flex-col justify-between  gap-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 text-white items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ri-service-fill text-6xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-black text-3xl\",\n                                children: \"SINDAR\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8 \",\n                        children: _constant__WEBPACK_IMPORTED_MODULE_2__.sidebar.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SidebarButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                isActive: isActive === item.name,\n                                onSelect: onSelect,\n                                icon: item.icon,\n                                label: item.label,\n                                name: item.name\n                            }, index, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-white gap-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[0.5px] bg-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full text-white  flex flex-row gap-8 items-center px-6 py-4 hover:bg-white/10 rounded-xl focus:bg-white focus:text-primary\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"ri-login-circle-fill text-3xl rotate-180\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl\",\n                                    children: \"Log Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"ZpOvj47KCDv4EW5BIUHQHDAsr3M=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__.useAuth\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvKGZyYWdtZW50cykvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDbEI7QUFDUjtBQUNIO0FBQ2E7QUFDUztBQUVoRCxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdKLDZEQUFPQTtJQUN6QixlQUFlSztRQUNiLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxlQUFlO1lBQzFDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFnQixPQUFOTjtZQUMzQjtRQUNGO1FBRUEsTUFBTU8sU0FBUyxNQUFNTCxTQUFTTSxJQUFJO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBT0E7SUFDVDtJQUNBLHFCQUNFLDhEQUFDSTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFFRixXQUFVOzs7Ozs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUFzQjs7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1puQiw4Q0FBT0EsQ0FBQ3VCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbEIsOERBQUMxQixpRUFBYUE7Z0NBQ1pPLFVBQVVBLGFBQWFrQixLQUFLRSxJQUFJO2dDQUVoQ3JCLFVBQVVBO2dDQUNWc0IsTUFBTUgsS0FBS0csSUFBSTtnQ0FDZkMsT0FBT0osS0FBS0ksS0FBSztnQ0FDakJGLE1BQU1GLEtBQUtFLElBQUk7K0JBSlZEOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVViLDhEQUFDTDtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNsQixpREFBSUE7d0JBQUM0QixNQUFLO2tDQUNULDRFQUFDQzs0QkFBT1gsV0FBVTs7OENBQ2hCLDhEQUFDRTtvQ0FBRUYsV0FBVTs7Ozs7OzhDQUNiLDhEQUFDWTtvQ0FBRVosV0FBVTs4Q0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkM7R0EvQ01mOztRQUNjRCx5REFBT0E7OztLQURyQkM7QUFpRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC8oZnJhZ21lbnRzKS9TaWRlYmFyLnRzeD80OTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhckJ1dHRvblwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJAL2NvbnN0YW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJyZW1peGljb24vZm9udHMvcmVtaXhpY29uLmNzc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2NvbnRleHQvQXV0aENvbnRleHRcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uU2VsZWN0LCBpc0FjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgYXN5bmMgZnVuY3Rpb24gbG9nT3V0KCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ291dFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcHgtOCBweS0xNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiAgZ2FwLTE2XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTE2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNCB0ZXh0LXdoaXRlIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInJpLXNlcnZpY2UtZmlsbCB0ZXh0LTZ4bFwiPjwvaT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ibGFjayB0ZXh0LTN4bFwiPlNJTkRBUjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggXCI+XG4gICAgICAgICAge3NpZGViYXIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNpZGViYXJCdXR0b25cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e2lzQWN0aXZlID09PSBpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgbmFtZT17aXRlbS5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBnYXAtNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzAuNXB4XSBiZy13aGl0ZVwiPjwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgIGZsZXggZmxleC1yb3cgZ2FwLTggaXRlbXMtY2VudGVyIHB4LTYgcHktNCBob3ZlcjpiZy13aGl0ZS8xMCByb3VuZGVkLXhsIGZvY3VzOmJnLXdoaXRlIGZvY3VzOnRleHQtcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbG9naW4tY2lyY2xlLWZpbGwgdGV4dC0zeGwgcm90YXRlLTE4MFwiPjwvaT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5Mb2cgT3V0PC9wPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlNpZGViYXJCdXR0b24iLCJzaWRlYmFyIiwiTGluayIsIlJlYWN0IiwidXNlQXV0aCIsIlNpZGViYXIiLCJvblNlbGVjdCIsImlzQWN0aXZlIiwidG9rZW4iLCJsb2dPdXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJpIiwiaDEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiaWNvbiIsImxhYmVsIiwiaHJlZiIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/(fragments)/Sidebar.tsx\n"));

/***/ })

});