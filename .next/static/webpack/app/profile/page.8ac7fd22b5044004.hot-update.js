"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-client)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"(app-client)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Profile = (props)=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"nothing\");\n    const logout = async ()=>{\n        await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/logout\");\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logout successful.\");\n        router.push(\"/login\");\n        try {} catch (error) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);\n        }\n    };\n    const getUserDetails = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/users/me\");\n        setData(res.data.data.user);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Profile\"\n            }, void 0, false, {\n                fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Profile page\"\n            }, void 0, false, {\n                fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: data === \"nothing\" ? \"Nothing\" : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 mt-4text-white rounded py-2 px-4\",\n                onClick: ()=>logout(),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/im/Desktop/code/nextjs-prisma-mongo-jwt/src/app/profile/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"euEk539JupyXDBKu4CUyc7N+VNo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDa0I7QUFDSjtBQUNBO0FBSXhDLE1BQU1LLFVBQVUsQ0FBQ0M7O0lBQ2YsTUFBTUMsU0FBU04sMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTyxTQUFTO1FBQ2IsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQztRQUNoQlAsa0RBQUtBLENBQUNRLE9BQU8sQ0FBQztRQUNkTCxPQUFPTSxJQUFJLENBQUM7UUFDWixJQUFJLENBQ0osRUFBRSxPQUFPQyxPQUFZO1lBQ25CVixrREFBS0EsQ0FBQ1UsS0FBSyxDQUFDQSxNQUFNQyxPQUFPO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNQyxpQkFBaUI7UUFDckIsTUFBTUMsTUFBTSxNQUFNakIsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQztRQUM1QkYsUUFBUVEsSUFBSVQsSUFBSSxDQUFDQSxJQUFJLENBQUNVLElBQUk7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7MEJBQUloQixTQUFTLFlBQVksWUFBWTs7Ozs7OzBCQUN0Qyw4REFBQ2lCO2dCQUNDTCxXQUFVO2dCQUNWTSxTQUFTLElBQU1oQjswQkFDaEI7Ozs7Ozs7Ozs7OztBQUtQO0dBaENNTDs7UUFDV0osc0RBQVNBOzs7S0FEcEJJO0FBa0NOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeD9jNGU2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxudHlwZSBQcm9wcyA9IHt9O1xuXG5jb25zdCBQcm9maWxlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJub3RoaW5nXCIpO1xuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9sb2dvdXRcIik7XG4gICAgdG9hc3Quc3VjY2VzcyhcIkxvZ291dCBzdWNjZXNzZnVsLlwiKTtcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICB0cnkge1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRVc2VyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3VzZXJzL21lXCIpO1xuICAgIHNldERhdGEocmVzLmRhdGEuZGF0YS51c2VyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIHB5LTJcIj5cbiAgICAgIDxoMT5Qcm9maWxlPC9oMT5cbiAgICAgIDxociAvPlxuICAgICAgPHA+UHJvZmlsZSBwYWdlPC9wPlxuICAgICAgPGgyPntkYXRhID09PSBcIm5vdGhpbmdcIiA/IFwiTm90aGluZ1wiIDogXCJcIn08L2gyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCBtdC00dGV4dC13aGl0ZSByb3VuZGVkIHB5LTIgcHgtNFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ291dCgpfVxuICAgICAgPlxuICAgICAgICBMb2dvdXRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ0b2FzdCIsIlByb2ZpbGUiLCJwcm9wcyIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwibG9nb3V0IiwiZ2V0Iiwic3VjY2VzcyIsInB1c2giLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRVc2VyRGV0YWlscyIsInJlcyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhyIiwicCIsImgyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/profile/page.tsx\n"));

/***/ })

});