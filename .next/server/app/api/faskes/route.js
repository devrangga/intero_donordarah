"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/faskes/route";
exports.ids = ["app/api/faskes/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffaskes%2Froute&page=%2Fapi%2Ffaskes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffaskes%2Froute.ts&appDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffaskes%2Froute&page=%2Fapi%2Ffaskes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffaskes%2Froute.ts&appDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dewiekamurniati_Documents_intero_donordarah_app_api_faskes_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/faskes/route.ts */ \"(rsc)/./app/api/faskes/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/faskes/route\",\n        pathname: \"/api/faskes\",\n        filename: \"route\",\n        bundlePath: \"app/api/faskes/route\"\n    },\n    resolvedPagePath: \"/Users/dewiekamurniati/Documents/intero_donordarah/app/api/faskes/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dewiekamurniati_Documents_intero_donordarah_app_api_faskes_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/faskes/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZmYXNrZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZhc2tlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZhc2tlcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmRld2lla2FtdXJuaWF0aSUyRkRvY3VtZW50cyUyRmludGVyb19kb25vcmRhcmFoJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmRld2lla2FtdXJuaWF0aSUyRkRvY3VtZW50cyUyRmludGVyb19kb25vcmRhcmFoJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMwQjtBQUN2RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyb19kb25vcmRhcmFoLz9lNzJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9kZXdpZWthbXVybmlhdGkvRG9jdW1lbnRzL2ludGVyb19kb25vcmRhcmFoL2FwcC9hcGkvZmFza2VzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9mYXNrZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9mYXNrZXNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Zhc2tlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9kZXdpZWthbXVybmlhdGkvRG9jdW1lbnRzL2ludGVyb19kb25vcmRhcmFoL2FwcC9hcGkvZmFza2VzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9mYXNrZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffaskes%2Froute&page=%2Fapi%2Ffaskes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffaskes%2Froute.ts&appDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/faskes/route.ts":
/*!*********************************!*\
  !*** ./app/api/faskes/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function PUT(request) {\n    try {\n        // const {\n        // name ,\n        // address ,\n        // phone_number ,\n        // email ,\n        // } = await request.json();\n        // if (!requester_donor_id || typeof requester_donor_id !== 'number') {\n        //   return NextResponse.json({ error: 'Invalid requester_donor_id' }, { status: 400 });\n        // }\n        // if (!stock_id || typeof stock_id !== 'number') {\n        //   return NextResponse.json({ error: 'Invalid stock_id' }, { status: 400 });\n        // }\n        // if (!purpose || typeof purpose !== 'string') {\n        //   return NextResponse.json({ error: 'Invalid purpose' }, { status: 400 });\n        // }\n        // if (!date || typeof date !== 'string') {\n        //   return NextResponse.json({ error: 'Invalid date' }, { status: 400 });\n        // }\n        const authorizationHeader = request.headers.get(\"Authorization\");\n        const res = await fetch(\"http://127.0.0.1:8000/api/faskes\", {\n            method: \"PUT\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: authorizationHeader\n            },\n            body: JSON.stringify({\n                name: \"IKI LHO GANTI\",\n                address: \"Karangawru Bos\",\n                phone_number: \"081234455678\",\n                email: \"GANTIMANEHCOK@gmail.com\"\n            })\n        });\n        if (!res.ok) {\n            const error = await res.json();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error\n            }, {\n                status: res.status\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Data posted successfully\"\n        });\n    } catch (error) {\n        console.error(\"Error processing POST request:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to process request\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function GET(request) {\n    const authorizationHeader = request.headers.get(\"Authorization\");\n    if (!authorizationHeader) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Authorization header is missing\"\n        }, {\n            status: 400\n        });\n    }\n    const res = await fetch(`http://127.0.0.1:8000/api/faskes`, {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: authorizationHeader\n        }\n    });\n    if (!res.ok) {\n        const error = await res.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error\n        }, {\n            status: res.status\n        });\n    }\n    const data = await res.json();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        data\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Zhc2tlcy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFFcEMsZUFBZUMsSUFBSUMsT0FBZ0I7SUFDeEMsSUFBSTtRQUNGLFVBQVU7UUFDVixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsNEJBQTRCO1FBRTVCLHVFQUF1RTtRQUN2RSx3RkFBd0Y7UUFDeEYsSUFBSTtRQUNKLG1EQUFtRDtRQUNuRCw4RUFBOEU7UUFDOUUsSUFBSTtRQUNKLGlEQUFpRDtRQUNqRCw2RUFBNkU7UUFDN0UsSUFBSTtRQUNKLDJDQUEyQztRQUMzQywwRUFBMEU7UUFDMUUsSUFBSTtRQUVKLE1BQU1DLHNCQUFzQkQsUUFBUUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFFaEQsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLG9DQUFvQztZQUMxREMsUUFBUTtZQUNSSixTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJLLGVBQWVOO1lBQ2pCO1lBQ0FPLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1RDLGNBQWM7Z0JBQ2RDLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSSxDQUFDVixJQUFJVyxFQUFFLEVBQUU7WUFDWCxNQUFNQyxRQUFRLE1BQU1aLElBQUlhLElBQUk7WUFDNUIsT0FBT25CLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUFDO2dCQUFFRDtZQUFNLEdBQUc7Z0JBQUVFLFFBQVFkLElBQUljLE1BQU07WUFBQztRQUMzRDtRQUVBLE9BQU9wQixxREFBWUEsQ0FBQ21CLElBQUksQ0FBQztZQUFFRSxTQUFTO1FBQTJCO0lBQ2pFLEVBQUUsT0FBT0gsT0FBTztRQUNkSSxRQUFRSixLQUFLLENBQUMsa0NBQWtDQTtRQUNoRCxPQUFPbEIscURBQVlBLENBQUNtQixJQUFJLENBQ3RCO1lBQUVELE9BQU87UUFBNEIsR0FDckM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0Y7QUFFTyxlQUFlRyxJQUFJckIsT0FBZ0I7SUFDeEMsTUFBTUMsc0JBQXNCRCxRQUFRRSxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUVoRCxJQUFJLENBQUNGLHFCQUFxQjtRQUN4QixPQUFPSCxxREFBWUEsQ0FBQ21CLElBQUksQ0FDdEI7WUFBRUQsT0FBTztRQUFrQyxHQUMzQztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNZCxNQUFNLE1BQU1DLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO1FBQzFEQyxRQUFRO1FBQ1JKLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEJLLGVBQWVOO1FBQ2pCO0lBQ0Y7SUFFQSxJQUFJLENBQUNHLElBQUlXLEVBQUUsRUFBRTtRQUNYLE1BQU1DLFFBQVEsTUFBTVosSUFBSWEsSUFBSTtRQUM1QixPQUFPbkIscURBQVlBLENBQUNtQixJQUFJLENBQUM7WUFBRUQ7UUFBTSxHQUFHO1lBQUVFLFFBQVFkLElBQUljLE1BQU07UUFBQztJQUMzRDtJQUVBLE1BQU1JLE9BQU8sTUFBTWxCLElBQUlhLElBQUk7SUFDM0IsT0FBT25CLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUFDO1FBQUVLO0lBQUs7QUFDbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcm9fZG9ub3JkYXJhaC8uL2FwcC9hcGkvZmFza2VzL3JvdXRlLnRzP2E5NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHtcbiAgICAvLyBuYW1lICxcbiAgICAvLyBhZGRyZXNzICxcbiAgICAvLyBwaG9uZV9udW1iZXIgLFxuICAgIC8vIGVtYWlsICxcbiAgICAvLyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgICAvLyBpZiAoIXJlcXVlc3Rlcl9kb25vcl9pZCB8fCB0eXBlb2YgcmVxdWVzdGVyX2Rvbm9yX2lkICE9PSAnbnVtYmVyJykge1xuICAgIC8vICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHJlcXVlc3Rlcl9kb25vcl9pZCcgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICAvLyB9XG4gICAgLy8gaWYgKCFzdG9ja19pZCB8fCB0eXBlb2Ygc3RvY2tfaWQgIT09ICdudW1iZXInKSB7XG4gICAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgc3RvY2tfaWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgLy8gfVxuICAgIC8vIGlmICghcHVycG9zZSB8fCB0eXBlb2YgcHVycG9zZSAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCBwdXJwb3NlJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoIWRhdGUgfHwgdHlwZW9mIGRhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgZGF0ZScgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICAvLyB9XG5cbiAgICBjb25zdCBhdXRob3JpemF0aW9uSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkF1dGhvcml6YXRpb25cIik7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZmFza2VzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lOiBcIklLSSBMSE8gR0FOVElcIixcbiAgICAgICAgYWRkcmVzczogXCJLYXJhbmdhd3J1IEJvc1wiLFxuICAgICAgICBwaG9uZV9udW1iZXI6IFwiMDgxMjM0NDU1Njc4XCIsXG4gICAgICAgIGVtYWlsOiBcIkdBTlRJTUFORUhDT0tAZ21haWwuY29tXCIsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvciB9LCB7IHN0YXR1czogcmVzLnN0YXR1cyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkRhdGEgcG9zdGVkIHN1Y2Nlc3NmdWxseVwiIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIFBPU1QgcmVxdWVzdDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiRmFpbGVkIHRvIHByb2Nlc3MgcmVxdWVzdFwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBhdXRob3JpemF0aW9uSGVhZGVyID0gcmVxdWVzdC5oZWFkZXJzLmdldChcIkF1dGhvcml6YXRpb25cIik7XG5cbiAgaWYgKCFhdXRob3JpemF0aW9uSGVhZGVyKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogXCJBdXRob3JpemF0aW9uIGhlYWRlciBpcyBtaXNzaW5nXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS9mYXNrZXNgLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbkhlYWRlcixcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvciB9LCB7IHN0YXR1czogcmVzLnN0YXR1cyB9KTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBkYXRhIH0pO1xufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlBVVCIsInJlcXVlc3QiLCJhdXRob3JpemF0aW9uSGVhZGVyIiwiaGVhZGVycyIsImdldCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImFkZHJlc3MiLCJwaG9uZV9udW1iZXIiLCJlbWFpbCIsIm9rIiwiZXJyb3IiLCJqc29uIiwic3RhdHVzIiwibWVzc2FnZSIsImNvbnNvbGUiLCJHRVQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/faskes/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ffaskes%2Froute&page=%2Fapi%2Ffaskes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffaskes%2Froute.ts&appDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdewiekamurniati%2FDocuments%2Fintero_donordarah&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();