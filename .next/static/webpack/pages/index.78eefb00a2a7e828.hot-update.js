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

/***/ "./src/components/ScrollObserver.tsx":
/*!*******************************************!*\
  !*** ./src/components/ScrollObserver.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ScrollSection = (param)=>{\n    let { title, items } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const observer = new IntersectionObserver((param)=>{\n            let [entry] = param;\n            setIsVisible(entry.isIntersecting);\n        }, {\n            threshold: 0.1\n        });\n        if (sectionRef.current) {\n            observer.observe(sectionRef.current);\n        }\n        return ()=>{\n            if (sectionRef.current) {\n                observer.unobserve(sectionRef.current);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: sectionRef,\n        className: \"flex flex-col pd-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-sky-400 text-3xl transition-transform duration-700 ease-in-out \".concat(isVisible ? \"translate-x-0 opacity-100\" : \"translate-x-10 opacity-0\"),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/max/Documents/Delivery/Portfolio/src/components/ScrollObserver.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-3 pt-6 text-xl\",\n                children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"transition-transform duration-700 ease-in-out delay-\".concat(index * 100, \" \").concat(isVisible ? \"translate-x-0 opacity-100\" : \"translate-x-10 opacity-0\"),\n                        children: item\n                    }, index, false, {\n                        fileName: \"/home/max/Documents/Delivery/Portfolio/src/components/ScrollObserver.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/max/Documents/Delivery/Portfolio/src/components/ScrollObserver.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/max/Documents/Delivery/Portfolio/src/components/ScrollObserver.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollSection, \"t6xTCIDW8wBKaEAVt1RBRErIU/M=\");\n_c = ScrollSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollSection);\nvar _c;\n$RefreshReg$(_c, \"ScrollSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxPYnNlcnZlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBT3BELE1BQU1HLGdCQUE4QztRQUFDLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFOztJQUNuRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTU0sYUFBYVAsNkNBQU1BLENBQWlCO0lBRTFDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLFdBQVcsSUFBSUMscUJBQ25CO2dCQUFDLENBQUNDLE1BQU07WUFDTkosYUFBYUksTUFBTUMsY0FBYztRQUNuQyxHQUNBO1lBQ0VDLFdBQVc7UUFDYjtRQUdGLElBQUlMLFdBQVdNLE9BQU8sRUFBRTtZQUN0QkwsU0FBU00sT0FBTyxDQUFDUCxXQUFXTSxPQUFPO1FBQ3JDO1FBRUEsT0FBTztZQUNMLElBQUlOLFdBQVdNLE9BQU8sRUFBRTtnQkFDdEJMLFNBQVNPLFNBQVMsQ0FBQ1IsV0FBV00sT0FBTztZQUN2QztRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNHO1FBQUlDLEtBQUtWO1FBQVlXLFdBQVU7OzBCQUM5Qiw4REFBQ0M7Z0JBQ0NELFdBQVcsdUVBRVYsT0FEQ2IsWUFBWSw4QkFBOEI7MEJBRzNDRjs7Ozs7OzBCQUdILDhEQUFDYTtnQkFBSUUsV0FBVTswQkFDWmQsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDO3dCQUVDTCxXQUFXLHVEQUNUYixPQURnRWlCLFFBQVEsS0FBSSxLQUU3RSxPQURDakIsWUFBWSw4QkFBOEI7a0NBRzNDZ0I7dUJBTElDOzs7Ozs7Ozs7Ozs7Ozs7O0FBV2pCO0dBakRNcEI7S0FBQUE7QUFtRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2Nyb2xsT2JzZXJ2ZXIudHN4P2RiMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2Nyb2xsU2VjdGlvblByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBTY3JvbGxTZWN0aW9uOiBSZWFjdC5GQzxTY3JvbGxTZWN0aW9uUHJvcHM+ID0gKHsgdGl0bGUsIGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIChbZW50cnldKSA9PiB7XG4gICAgICAgIHNldElzVmlzaWJsZShlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKHNlY3Rpb25SZWYuY3VycmVudCkge1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uUmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2VjdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShzZWN0aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtzZWN0aW9uUmVmfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBkLThcIj5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNreS00MDAgdGV4dC0zeGwgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0ICR7XG4gICAgICAgICAgaXNWaXNpYmxlID8gJ3RyYW5zbGF0ZS14LTAgb3BhY2l0eS0xMDAnIDogJ3RyYW5zbGF0ZS14LTEwIG9wYWNpdHktMCdcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMyBwdC02IHRleHQteGxcIj5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8cFxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dCBkZWxheS0ke2luZGV4ICogMTAwfSAke1xuICAgICAgICAgICAgICBpc1Zpc2libGUgPyAndHJhbnNsYXRlLXgtMCBvcGFjaXR5LTEwMCcgOiAndHJhbnNsYXRlLXgtMTAgb3BhY2l0eS0wJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgPC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNjcm9sbFNlY3Rpb24iLCJ0aXRsZSIsIml0ZW1zIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwic2VjdGlvblJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGhyZXNob2xkIiwiY3VycmVudCIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ScrollObserver.tsx\n"));

/***/ })

});