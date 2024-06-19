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

/***/ "(app-pages-browser)/./app/dashboard/(fragments)/PermintaanKadar.tsx":
/*!*******************************************************!*\
  !*** ./app/dashboard/(fragments)/PermintaanKadar.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_api_animeTest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/api/animeTest */ \"(app-pages-browser)/./app/api/animeTest.ts\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./components/SearchBar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_PermintaanDarahCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/PermintaanDarahCell */ \"(app-pages-browser)/./components/PermintaanDarahCell.tsx\");\n/* harmony import */ var _components_Penolakan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Penolakan */ \"(app-pages-browser)/./components/Penolakan.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PermintaanKadar = ()=>{\n    _s();\n    const [datas, setDatas] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [allData, setAllData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const itemsPerPage = 6;\n    const fetchData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{\n        const res = await (0,_app_api_animeTest__WEBPACK_IMPORTED_MODULE_1__.FetchData)();\n        setAllData(res);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchData();\n    }, [\n        fetchData\n    ]);\n    async function getPendonor() {\n        const response = await fetch(\"/api/donor\", {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            }\n        });\n        const result = await response.json();\n        console.log(result.data);\n        return result.data;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await getPendonor();\n            setAllData(res);\n        };\n        fetchData();\n    }, [\n        token\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const filteredData = allData.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()));\n        setDatas(filteredData);\n        setCurrentPage(1);\n    }, [\n        searchQuery,\n        allData\n    ]);\n    const displayedItems = datas.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);\n    const handleNext = ()=>{\n        setCurrentPage((prev)=>prev + 1);\n    };\n    const handlePrevious = ()=>{\n        if (currentPage > 1) {\n            setCurrentPage((prev)=>prev - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                setSearchQuery: setSearchQuery,\n                                label: \"Cari Faskes\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    allData.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"w-full h-full justify-center items-center flex text-lg text-gray-500 my-auto\",\n                        children: \"Data Is Loading...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full rounded-2xl overflow-hidden\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden bg-gray-300 w-full grid grid-cols-[1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,2fr] px-8 py-6 text-primary font-bold\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Nama Faskes\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Asal Faskes\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Golongan Darah\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Rhesus Type\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Alamat\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-start\",\n                                        children: \"Aksi\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined),\n                            displayedItems.map((item, index)=>{\n                                var _item_aired_prop_to, _item_aired_prop, _item_aired;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PermintaanDarahCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    date: item === null || item === void 0 ? void 0 : (_item_aired = item.aired) === null || _item_aired === void 0 ? void 0 : (_item_aired_prop = _item_aired.prop) === null || _item_aired_prop === void 0 ? void 0 : (_item_aired_prop_to = _item_aired_prop.to) === null || _item_aired_prop_to === void 0 ? void 0 : _item_aired_prop_to.year,\n                                    stocks: item === null || item === void 0 ? void 0 : item.favorites,\n                                    title: item === null || item === void 0 ? void 0 : item.title,\n                                    isOdd: index % 2 !== 0,\n                                    handleClick: setShowModal\n                                }, index, false, {\n                                    fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4 ml-auto \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handlePrevious,\n                                disabled: currentPage === 1,\n                                className: \"px-4 py-2 bg-white border-2 rounded-xl overflow-hidden border-gray-100 text-gray-400\",\n                                children: \"Previous\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleNext,\n                                disabled: currentPage * itemsPerPage >= datas.length,\n                                className: \"px-4 py-2 bg-white border-2 rounded-xl overflow-hidden border-gray-100 text-gray-400\",\n                                children: \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Penolakan__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isShowed: showModal,\n                setShowModal: setShowModal\n            }, void 0, false, {\n                fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/dashboard/(fragments)/PermintaanKadar.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PermintaanKadar, \"KDWB3FjDwxo6prBbM03X7i8GrR8=\");\n_c = PermintaanKadar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PermintaanKadar);\nvar _c;\n$RefreshReg$(_c, \"PermintaanKadar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvKGZyYWdtZW50cykvUGVybWludGFhbkthZGFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdEO0FBQ0Q7QUFDaUI7QUFDRztBQUNwQjtBQUUvQyxNQUFNUSxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNTLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDekMsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1lLGVBQWU7SUFFckIsTUFBTUMsWUFBWWYsa0RBQVdBLENBQUM7UUFDNUIsTUFBTWdCLE1BQU0sTUFBTXJCLDZEQUFTQTtRQUMzQmdCLFdBQVdLO0lBQ2IsR0FBRyxFQUFFO0lBRUxsQixnREFBU0EsQ0FBQztRQUNSaUI7SUFDRixHQUFHO1FBQUNBO0tBQVU7SUFFWixlQUFlRTtRQUNiLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxjQUFjO1lBQ3pDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFnQixPQUFOQztZQUMzQjtRQUNGO1FBRUEsTUFBTUMsU0FBUyxNQUFNTixTQUFTTyxJQUFJO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNILE9BQU9JLElBQUk7UUFDdkIsT0FBT0osT0FBT0ksSUFBSTtJQUNwQjtJQUVBOUIsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsWUFBWTtZQUNoQixNQUFNQyxNQUFNLE1BQU1DO1lBQ2xCTixXQUFXSztRQUNiO1FBQ0FEO0lBQ0YsR0FBRztRQUFDUTtLQUFNO0lBRVp6QixnREFBU0EsQ0FBQztRQUNSLE1BQU0rQixlQUFlbkIsUUFBUW9CLE1BQU0sQ0FBQyxDQUFDQyxPQUNuQ0EsS0FBS0MsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQzVCLFlBQVkyQixXQUFXO1FBRTNENUIsU0FBU3dCO1FBQ1RwQixlQUFlO0lBQ2pCLEdBQUc7UUFBQ0g7UUFBYUk7S0FBUTtJQUV6QixNQUFNeUIsaUJBQWlCL0IsTUFBTWdDLEtBQUssQ0FDaEMsQ0FBQzVCLGNBQWMsS0FBS00sY0FDcEJOLGNBQWNNO0lBR2hCLE1BQU11QixhQUFhO1FBQ2pCNUIsZUFBZSxDQUFDNkIsT0FBU0EsT0FBTztJQUNsQztJQUVBLE1BQU1DLGlCQUFpQjtRQUNyQixJQUFJL0IsY0FBYyxHQUFHO1lBQ25CQyxlQUFlLENBQUM2QixPQUFTQSxPQUFPO1FBQ2xDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDN0MsNkRBQVNBO2dDQUFDVyxnQkFBZ0JBO2dDQUFnQm9DLE9BQU87Ozs7Ozs0QkFBa0I7Ozs7Ozs7b0JBR3JFakMsUUFBUWtDLE1BQU0sR0FBRyxrQkFDaEIsOERBQUNDO3dCQUFHSixXQUFVO2tDQUErRTs7Ozs7a0RBSTdGLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0k7d0NBQUdKLFdBQVU7a0RBQWE7Ozs7OztrREFDM0IsOERBQUNJO3dDQUFHSixXQUFVO2tEQUFhOzs7Ozs7a0RBQzNCLDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBYTs7Ozs7O2tEQUMzQiw4REFBQ0k7d0NBQUdKLFdBQVU7a0RBQWE7Ozs7OztrREFDM0IsOERBQUNJO3dDQUFHSixXQUFVO2tEQUFhOzs7Ozs7a0RBQzNCLDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBYTs7Ozs7Ozs7Ozs7OzRCQUc1Qk4sZUFBZVcsR0FBRyxDQUFDLENBQUNmLE1BQU1nQjtvQ0FFakJoQixxQkFBQUEsa0JBQUFBO3FEQURSLDhEQUFDOUIsdUVBQW1CQTtvQ0FDbEIrQyxJQUFJLEVBQUVqQixpQkFBQUEsNEJBQUFBLGNBQUFBLEtBQU1rQixLQUFLLGNBQVhsQixtQ0FBQUEsbUJBQUFBLFlBQWFtQixJQUFJLGNBQWpCbkIsd0NBQUFBLHNCQUFBQSxpQkFBbUJvQixFQUFFLGNBQXJCcEIsMENBQUFBLG9CQUF1QnFCLElBQUk7b0NBQ2pDQyxNQUFNLEVBQUV0QixpQkFBQUEsMkJBQUFBLEtBQU11QixTQUFTO29DQUN2QnRCLEtBQUssRUFBRUQsaUJBQUFBLDJCQUFBQSxLQUFNQyxLQUFLO29DQUVsQnVCLE9BQU9SLFFBQVEsTUFBTTtvQ0FDckJTLGFBQWEzQzttQ0FGUmtDOzs7Ozs7Ozs7Ozs7a0NBUWIsOERBQUNMO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ2dCO2dDQUNDQyxTQUFTbkI7Z0NBQ1RvQixVQUFVbkQsZ0JBQWdCO2dDQUMxQmlDLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2dCO2dDQUNDQyxTQUFTckI7Z0NBQ1RzQixVQUFVbkQsY0FBY00sZ0JBQWdCVixNQUFNd0MsTUFBTTtnQ0FDcERILFdBQVU7MENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNTCw4REFBQ3ZDLDZEQUFTQTtnQkFBQzBELFVBQVVoRDtnQkFBV0MsY0FBY0E7Ozs7Ozs7Ozs7OztBQUdwRDtHQXZITVY7S0FBQUE7QUF5SE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC8oZnJhZ21lbnRzKS9QZXJtaW50YWFuS2FkYXIudHN4PzIzYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmV0Y2hEYXRhIH0gZnJvbSBcIkAvYXBwL2FwaS9hbmltZVRlc3RcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIkAvY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBlcm1pbnRhYW5EYXJhaENlbGwgZnJvbSBcIkAvY29tcG9uZW50cy9QZXJtaW50YWFuRGFyYWhDZWxsXCI7XG5pbXBvcnQgUGVub2xha2FuIGZyb20gXCJAL2NvbXBvbmVudHMvUGVub2xha2FuXCI7XG5cbmNvbnN0IFBlcm1pbnRhYW5LYWRhciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGFzLCBzZXREYXRhc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpdGVtc1BlclBhZ2UgPSA2O1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBGZXRjaERhdGEoKTtcbiAgICBzZXRBbGxEYXRhKHJlcyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbZmV0Y2hEYXRhXSk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQZW5kb25vcigpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Rvbm9yXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFBlbmRvbm9yKCk7XG4gICAgICAgIHNldEFsbERhdGEocmVzKTtcbiAgICAgIH07XG4gICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbdG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGFsbERhdGEuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgaXRlbS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgICBzZXREYXRhcyhmaWx0ZXJlZERhdGEpO1xuICAgIHNldEN1cnJlbnRQYWdlKDEpO1xuICB9LCBbc2VhcmNoUXVlcnksIGFsbERhdGFdKTtcblxuICBjb25zdCBkaXNwbGF5ZWRJdGVtcyA9IGRhdGFzLnNsaWNlKFxuICAgIChjdXJyZW50UGFnZSAtIDEpICogaXRlbXNQZXJQYWdlLFxuICAgIGN1cnJlbnRQYWdlICogaXRlbXNQZXJQYWdlXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZSgocHJldikgPT4gcHJldiArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVByZXZpb3VzID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgIHNldEN1cnJlbnRQYWdlKChwcmV2KSA9PiBwcmV2IC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPFNlYXJjaEJhciBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IGxhYmVsPXtcIkNhcmkgRmFza2VzXCJ9IC8+e1wiIFwifVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7YWxsRGF0YS5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IHRleHQtbGcgdGV4dC1ncmF5LTUwMCBteS1hdXRvXCI+XG4gICAgICAgICAgICBEYXRhIElzIExvYWRpbmcuLi5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gYmctZ3JheS0zMDAgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLVsxLjVmciwxLjVmciwxLjVmciwxLjVmciwxLjVmciwyZnJdIHB4LTggcHktNiB0ZXh0LXByaW1hcnkgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+TmFtYSBGYXNrZXM8L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPkFzYWwgRmFza2VzPC9oMT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtc3RhcnRcIj5Hb2xvbmdhbiBEYXJhaDwvaDE+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+Umhlc3VzIFR5cGU8L2gxPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zdGFydFwiPkFsYW1hdDwvaDE+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0XCI+QWtzaTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2Rpc3BsYXllZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFBlcm1pbnRhYW5EYXJhaENlbGxcbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtPy5haXJlZD8ucHJvcD8udG8/LnllYXJ9XG4gICAgICAgICAgICAgICAgc3RvY2tzPXtpdGVtPy5mYXZvcml0ZXN9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0/LnRpdGxlfVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgaXNPZGQ9e2luZGV4ICUgMiAhPT0gMH1cbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17c2V0U2hvd01vZGFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00IG1sLWF1dG8gXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXN9XG4gICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctd2hpdGUgYm9yZGVyLTIgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWdyYXktMTAwIHRleHQtZ3JheS00MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSAqIGl0ZW1zUGVyUGFnZSA+PSBkYXRhcy5sZW5ndGh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctd2hpdGUgYm9yZGVyLTIgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyLWdyYXktMTAwIHRleHQtZ3JheS00MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFBlbm9sYWthbiBpc1Nob3dlZD17c2hvd01vZGFsfSBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbH0gLz5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJtaW50YWFuS2FkYXI7XG4iXSwibmFtZXMiOlsiRmV0Y2hEYXRhIiwiU2VhcmNoQmFyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiUGVybWludGFhbkRhcmFoQ2VsbCIsIlBlbm9sYWthbiIsIlBlcm1pbnRhYW5LYWRhciIsImRhdGFzIiwic2V0RGF0YXMiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaXRlbXNQZXJQYWdlIiwiZmV0Y2hEYXRhIiwicmVzIiwiZ2V0UGVuZG9ub3IiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsIml0ZW0iLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXNwbGF5ZWRJdGVtcyIsInNsaWNlIiwiaGFuZGxlTmV4dCIsInByZXYiLCJoYW5kbGVQcmV2aW91cyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImxlbmd0aCIsImgxIiwibWFwIiwiaW5kZXgiLCJkYXRlIiwiYWlyZWQiLCJwcm9wIiwidG8iLCJ5ZWFyIiwic3RvY2tzIiwiZmF2b3JpdGVzIiwiaXNPZGQiLCJoYW5kbGVDbGljayIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImlzU2hvd2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/(fragments)/PermintaanKadar.tsx\n"));

/***/ })

});