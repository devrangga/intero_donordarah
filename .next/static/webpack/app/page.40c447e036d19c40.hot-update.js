"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./constant/index.ts":
/*!***************************!*\
  !*** ./constant/index.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   login: function() { return /* binding */ login; },\n/* harmony export */   register: function() { return /* binding */ register; },\n/* harmony export */   sidebar: function() { return /* binding */ sidebar; }\n/* harmony export */ });\nconst register = [\n    {\n        title: \"Name\",\n        placeholder: \"Masukkan Nama Faskes\",\n        name: \"name\",\n        logo: \"nurse\",\n        isPassword: false\n    },\n    {\n        title: \"Address\",\n        placeholder: \"Masukkan Username\",\n        name: \"address\",\n        logo: \"user\",\n        isPassword: false\n    },\n    {\n        title: \"Phone Number\",\n        placeholder: \"Masukkan Nama Faskes\",\n        name: \"phone_number\",\n        logo: \"phone\",\n        isPassword: false\n    },\n    {\n        title: \"Email\",\n        placeholder: \"Masukkan Nama Faskes\",\n        name: \"email\",\n        logo: \"phone\",\n        isPassword: false\n    },\n    {\n        title: \"Password\",\n        placeholder: \"Masukkan Password\",\n        name: \"password\",\n        logo: \"lock\",\n        isPassword: true\n    }\n];\nconst login = [\n    {\n        title: \"Email\",\n        placeholder: \"Masukkan Email\",\n        name: \"email\",\n        logo: \"user\",\n        isPassword: false\n    },\n    {\n        title: \"Password\",\n        placeholder: \"Masukkan Password\",\n        name: \"password\",\n        logo: \"lock\",\n        isPassword: true\n    }\n];\nconst sidebar = [\n    {\n        name: \"Dashboard\",\n        label: \"Dashboard\",\n        icon: \"dashboard\"\n    },\n    {\n        name: \"Kelola Kadar\",\n        label: \"Kelola Kadar\",\n        icon: \"medicine-bottle\"\n    },\n    {\n        name: \"Permintaan Kadar\",\n        label: \"Permintaan Kadar\",\n        icon: \"hand-heart\"\n    },\n    {\n        name: \"profile\",\n        label: \"Profile\",\n        icon: \"user\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnN0YW50L2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVFPLE1BQU1BLFdBQXVCO0lBQ2xDO1FBQ0VDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsWUFBWTtJQUNkO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFlBQVk7SUFDZDtJQUNBO1FBQ0VKLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsWUFBWTtJQUNkO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7Q0FDRCxDQUFDO0FBVUssTUFBTUMsUUFBaUI7SUFDNUI7UUFDRUwsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFSixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFlBQVk7SUFDZDtDQUNELENBQUM7QUFRSyxNQUFNRSxVQUFxQjtJQUNoQztRQUNFSixNQUFNO1FBQ05LLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRU4sTUFBTTtRQUNOSyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VOLE1BQU07UUFDTkssT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTixNQUFNO1FBQ05LLE9BQU87UUFDUEMsTUFBTTtJQUNSO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudC9pbmRleC50cz8zZTI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXIge1xuICB0aXRsZTogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxvZ286IFwibnVyc2VcIiB8IFwidXNlclwiIHwgXCJwaG9uZVwiIHwgXCJsb2NrXCI7XG4gIGlzUGFzc3dvcmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlcjogUmVnaXN0ZXJbXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk5hbWVcIixcbiAgICBwbGFjZWhvbGRlcjogXCJNYXN1a2thbiBOYW1hIEZhc2tlc1wiLFxuICAgIG5hbWU6IFwibmFtZVwiLFxuICAgIGxvZ286IFwibnVyc2VcIixcbiAgICBpc1Bhc3N3b3JkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcbiAgICBwbGFjZWhvbGRlcjogXCJNYXN1a2thbiBVc2VybmFtZVwiLFxuICAgIG5hbWU6IFwiYWRkcmVzc1wiLFxuICAgIGxvZ286IFwidXNlclwiLFxuICAgIGlzUGFzc3dvcmQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGhvbmUgTnVtYmVyXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiTWFzdWtrYW4gTmFtYSBGYXNrZXNcIixcbiAgICBuYW1lOiBcInBob25lX251bWJlclwiLFxuICAgIGxvZ286IFwicGhvbmVcIixcbiAgICBpc1Bhc3N3b3JkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkVtYWlsXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiTWFzdWtrYW4gTmFtYSBGYXNrZXNcIixcbiAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgbG9nbzogXCJwaG9uZVwiLFxuICAgIGlzUGFzc3dvcmQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGFzc3dvcmRcIixcbiAgICBwbGFjZWhvbGRlcjogXCJNYXN1a2thbiBQYXNzd29yZFwiLFxuICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICBsb2dvOiBcImxvY2tcIixcbiAgICBpc1Bhc3N3b3JkOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dpbiB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9nbzogXCJ1c2VyXCIgfCBcImxvY2tcIjtcbiAgaXNQYXNzd29yZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luOiBMb2dpbltdID0gW1xuICB7XG4gICAgdGl0bGU6IFwiRW1haWxcIixcbiAgICBwbGFjZWhvbGRlcjogXCJNYXN1a2thbiBFbWFpbFwiLFxuICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICBsb2dvOiBcInVzZXJcIixcbiAgICBpc1Bhc3N3b3JkOiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBhc3N3b3JkXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiTWFzdWtrYW4gUGFzc3dvcmRcIixcbiAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgbG9nbzogXCJsb2NrXCIsXG4gICAgaXNQYXNzd29yZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhciB7XG4gIG5hbWU6IFwiZGFzaGJvYXJkXCIgfCBcImtlbG9sYWthZGFyXCIgfCBcInBlcm1pbnRhYW5rYWRhclwiIHwgXCJwcm9maWxlXCI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGljb246IFwiZGFzaGJvYXJkXCIgfCBcIm1lZGljaW5lLWJvdHRsZVwiIHwgXCJoYW5kLWhlYXJ0XCIgfCBcInVzZXJcIjtcbn1cblxuZXhwb3J0IGNvbnN0IHNpZGViYXI6IFNpZGViYXJbXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiRGFzaGJvYXJkXCIsXG4gICAgbGFiZWw6IFwiRGFzaGJvYXJkXCIsXG4gICAgaWNvbjogXCJkYXNoYm9hcmRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2Vsb2xhIEthZGFyXCIsXG4gICAgbGFiZWw6IFwiS2Vsb2xhIEthZGFyXCIsXG4gICAgaWNvbjogXCJtZWRpY2luZS1ib3R0bGVcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGVybWludGFhbiBLYWRhclwiLFxuICAgIGxhYmVsOiBcIlBlcm1pbnRhYW4gS2FkYXJcIixcbiAgICBpY29uOiBcImhhbmQtaGVhcnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwicHJvZmlsZVwiLFxuICAgIGxhYmVsOiBcIlByb2ZpbGVcIixcbiAgICBpY29uOiBcInVzZXJcIixcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJ0aXRsZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxvZ28iLCJpc1Bhc3N3b3JkIiwibG9naW4iLCJzaWRlYmFyIiwibGFiZWwiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./constant/index.ts\n"));

/***/ })

});