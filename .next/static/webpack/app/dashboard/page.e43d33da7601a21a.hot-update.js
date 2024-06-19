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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SidebarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SidebarButton */ \"(app-pages-browser)/./components/SidebarButton.tsx\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constant */ \"(app-pages-browser)/./constant/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remixicon_fonts_remixicon_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remixicon/fonts/remixicon.css */ \"(app-pages-browser)/./node_modules/remixicon/fonts/remixicon.css\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/AuthContext */ \"(app-pages-browser)/./context/AuthContext.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { onSelect, isActive } = param;\n    _s();\n    const { token, setToken } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    async function logOut() {\n        try {\n            const response = await fetch(\"/api/logout\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    token\n                })\n            });\n            if (response.ok) {\n                setToken(null); // Clear the token\n                router.push(\"/\"); // Redirect to the login/register page\n            } else {\n                const result = await response.json();\n                console.error(\"Logout failed:\", result);\n            }\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-primary px-8 py-16 flex flex-col justify-between gap-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 text-white items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ri-service-fill text-6xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-black text-3xl\",\n                                children: \"SINDAR\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-8\",\n                        children: _constant__WEBPACK_IMPORTED_MODULE_2__.sidebar.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SidebarButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                isActive: isActive === item.name,\n                                onSelect: onSelect,\n                                icon: item.icon,\n                                label: item.label,\n                                name: item.name\n                            }, index, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-white gap-4 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[0.5px] bg-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: logOut,\n                        className: \"w-full text-white flex flex-row gap-8 items-center px-6 py-4 hover:bg-white/10 rounded-xl focus:bg-white focus:text-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ri-login-circle-fill text-3xl rotate-180\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl\",\n                                children: \"Log Out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/Sidebar.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"U+fWW4USG7arMVixBWvcXFFIPfw=\", false, function() {\n    return [\n        _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.useAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvKGZyYWdtZW50cykvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDbEI7QUFDWDtBQUNhO0FBQ1M7QUFDSjtBQUU1QyxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUU7O0lBQ3JDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBR04sNkRBQU9BO0lBQ25DLE1BQU1PLFNBQVNOLDBEQUFTQTtJQUV4QixlQUFlTztRQUNiLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZUFBZTtnQkFDMUNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFVjtnQkFBTTtZQUMvQjtZQUVBLElBQUlJLFNBQVNPLEVBQUUsRUFBRTtnQkFDZlYsU0FBUyxPQUFPLGtCQUFrQjtnQkFDbENDLE9BQU9VLElBQUksQ0FBQyxNQUFNLHNDQUFzQztZQUMxRCxPQUFPO2dCQUNMLE1BQU1DLFNBQVMsTUFBTVQsU0FBU1UsSUFBSTtnQkFDbENDLFFBQVFDLEtBQUssQ0FBQyxrQkFBa0JIO1lBQ2xDO1FBQ0YsRUFBRSxPQUFPRyxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyxzQkFBc0JBO1FBQ3RDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBRUYsV0FBVTs7Ozs7OzBDQUNiLDhEQUFDRztnQ0FBR0gsV0FBVTswQ0FBc0I7Ozs7Ozs7Ozs7OztrQ0FFdEMsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNaekIsOENBQU9BLENBQUM2QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2xCLDhEQUFDaEMsaUVBQWFBO2dDQUNaTyxVQUFVQSxhQUFhd0IsS0FBS0UsSUFBSTtnQ0FFaEMzQixVQUFVQTtnQ0FDVjRCLE1BQU1ILEtBQUtHLElBQUk7Z0NBQ2ZDLE9BQU9KLEtBQUtJLEtBQUs7Z0NBQ2pCRixNQUFNRixLQUFLRSxJQUFJOytCQUpWRDs7Ozs7Ozs7Ozs7Ozs7OzswQkFVYiw4REFBQ0w7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDVTt3QkFDQ0MsU0FBUzFCO3dCQUNUZSxXQUFVOzswQ0FFViw4REFBQ0U7Z0NBQUVGLFdBQVU7Ozs7OzswQ0FDYiw4REFBQ1k7Z0NBQUVaLFdBQVU7MENBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtqQztHQTNETXJCOztRQUN3QkYseURBQU9BO1FBQ3BCQyxzREFBU0E7OztLQUZwQkM7QUE2RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC8oZnJhZ21lbnRzKS9TaWRlYmFyLnRzeD80OTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaWRlYmFyQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhckJ1dHRvblwiO1xuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJAL2NvbnN0YW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJyZW1peGljb24vZm9udHMvcmVtaXhpY29uLmNzc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3QgU2lkZWJhciA9ICh7IG9uU2VsZWN0LCBpc0FjdGl2ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdG9rZW4sIHNldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbG9nb3V0XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pLCAvLyBJbmNsdWRlIHRva2VuIGluIHRoZSByZXF1ZXN0IGJvZHlcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgc2V0VG9rZW4obnVsbCk7IC8vIENsZWFyIHRoZSB0b2tlblxuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIFJlZGlyZWN0IHRvIHRoZSBsb2dpbi9yZWdpc3RlciBwYWdlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMb2dvdXQgZmFpbGVkOlwiLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9nZ2luZyBvdXQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXByaW1hcnkgcHgtOCBweS0xNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00IHRleHQtd2hpdGUgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktc2VydmljZS1maWxsIHRleHQtNnhsXCI+PC9pPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJsYWNrIHRleHQtM3hsXCI+U0lOREFSPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxuICAgICAgICAgIHtzaWRlYmFyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTaWRlYmFyQnV0dG9uXG4gICAgICAgICAgICAgIGlzQWN0aXZlPXtpc0FjdGl2ZSA9PT0gaXRlbS5uYW1lfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgZ2FwLTQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVswLjVweF0gYmctd2hpdGVcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBmbGV4IGZsZXgtcm93IGdhcC04IGl0ZW1zLWNlbnRlciBweC02IHB5LTQgaG92ZXI6Ymctd2hpdGUvMTAgcm91bmRlZC14bCBmb2N1czpiZy13aGl0ZSBmb2N1czp0ZXh0LXByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbG9naW4tY2lyY2xlLWZpbGwgdGV4dC0zeGwgcm90YXRlLTE4MFwiPjwvaT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+TG9nIE91dDwvcD5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlNpZGViYXJCdXR0b24iLCJzaWRlYmFyIiwiUmVhY3QiLCJ1c2VBdXRoIiwidXNlUm91dGVyIiwiU2lkZWJhciIsIm9uU2VsZWN0IiwiaXNBY3RpdmUiLCJ0b2tlbiIsInNldFRva2VuIiwicm91dGVyIiwibG9nT3V0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicHVzaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaSIsImgxIiwibWFwIiwiaXRlbSIsImluZGV4IiwibmFtZSIsImljb24iLCJsYWJlbCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/(fragments)/Sidebar.tsx\n"));

/***/ })

});