webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/NavHeader.js":
/*!*************************************!*\
  !*** ./src/components/NavHeader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "../node_modules/@chakra-ui/react/dist/esm/index.js");


var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\NavHeader.js",
    _this = undefined;




var NavHeader = function NavHeader() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    px: 6,
    py: 4,
    bg: "teal.500",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h1",
      size: "lg",
      color: "white",
      letterSpacing: '-.1rem',
      children: "Rates Imperial"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = NavHeader;
/* harmony default export */ __webpack_exports__["default"] = (NavHeader);

var _c;

$RefreshReg$(_c, "NavHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/layouts/Default.js":
/*!*******************************************!*\
  !*** ./src/components/layouts/Default.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "../node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _NavHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../NavHeader */ "./src/components/NavHeader.js");



var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\components\\layouts\\Default.js",
    _this = undefined;





var DefaultLayout = function DefaultLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    minHeight: "100vh",
    height: "100%",
    flexDirection: "column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NavHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: children
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = DefaultLayout;
/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

var _c;

$RefreshReg$(_c, "DefaultLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/Default */ "./src/components/layouts/Default.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\pages\\index.js";



function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_Default__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Box, {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Rates Imperial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
          as: "h1",
          size: "2xl",
          mb: "2",
          children: ["Welcome to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Link, {
            color: "teal.500",
            children: "Rates Imperial!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Text, {
          fontSize: "xl",
          mt: "2",
          children: "See the exchange rates for most currencies here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/vercel.svg",
            alt: "Vercel Logo",
            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "../node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2SGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYXZIZWFkZXIiLCJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImZvb3RlciIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxzQkFDZCxxRUFBQyxvREFBRDtBQUNJLFdBQU8sRUFBQyxNQURaO0FBRUksaUJBQWEsRUFBQyxLQUZsQjtBQUdJLGtCQUFjLEVBQUMsZUFIbkI7QUFJSSxNQUFFLEVBQUUsQ0FKUjtBQUtJLE1BQUUsRUFBRSxDQUxSO0FBTUksTUFBRSxFQUFDLFVBTlA7QUFBQSwyQkFRSSxxRUFBQyx3REFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQWlCLFVBQUksRUFBQyxJQUF0QjtBQUEyQixXQUFLLEVBQUMsT0FBakM7QUFBeUMsbUJBQWEsRUFBRSxRQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWxCOztLQUFNQSxTO0FBZVNBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLHNCQUNsQixxRUFBQyxvREFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGFBQVMsRUFBQyxPQUE5QjtBQUFzQyxVQUFNLEVBQUMsTUFBN0M7QUFBb0QsaUJBQWEsRUFBQyxRQUFsRTtBQUFBLDRCQUNJLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUEsZ0JBQUdBO0FBQUgscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGtCO0FBQUEsQ0FBdEI7O0tBQU1ELGE7QUFPU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUVlLFNBQVNFLElBQVQsR0FBZ0I7QUFDN0Isc0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxHQUFEO0FBQUssZUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBTSxpQkFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLGdDQUNFLHFFQUFDLE9BQUQ7QUFBUyxZQUFFLEVBQUMsSUFBWjtBQUFpQixjQUFJLEVBQUMsS0FBdEI7QUFBNEIsWUFBRSxFQUFDLEdBQS9CO0FBQUEsaURBQ2EscUVBQUMsSUFBRDtBQUFNLGlCQUFLLEVBQUMsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRSxxRUFBQyxJQUFEO0FBQU0sa0JBQVEsRUFBQyxJQUFmO0FBQW9CLFlBQUUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQWdCRTtBQUFRLGlCQUFTLEVBQUVGLDhEQUFNLENBQUNHLE1BQTFCO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsd0dBRFA7QUFFRSxnQkFBTSxFQUFDLFFBRlQ7QUFHRSxhQUFHLEVBQUMscUJBSE47QUFBQSxtQ0FLYSxHQUxiLGVBTUU7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUMsYUFBM0I7QUFBeUMscUJBQVMsRUFBRUgsOERBQU0sQ0FBQ0k7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDtLQWhDdUJMLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZjMTY0ZGExMWUwMDM2MTc0ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IE5hdkhlYWRlciA9ICgpID0+IChcclxuICAgIDxCb3hcclxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBweD17Nn1cclxuICAgICAgICBweT17NH1cclxuICAgICAgICBiZz1cInRlYWwuNTAwXCJcclxuICAgID5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgY29sb3I9XCJ3aGl0ZVwiIGxldHRlclNwYWNpbmc9eyctLjFyZW0nfT5cclxuICAgICAgICAgIFJhdGVzIEltcGVyaWFsXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgPC9Cb3g+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IE5hdkhlYWRlciBmcm9tICcuLi9OYXZIZWFkZXInXHJcblxyXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIG1pbkhlaWdodD1cIjEwMHZoXCIgaGVpZ2h0PVwiMTAwJVwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICA8TmF2SGVhZGVyIC8+XHJcbiAgICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICA8L0JveD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxEZWZhdWx0TGF5b3V0PlxuICAgICAgPEJveCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmF0ZXMgSW1wZXJpYWw8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwiMnhsXCIgbWI9XCIyXCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIDxMaW5rIGNvbG9yPVwidGVhbC41MDBcIj5SYXRlcyBJbXBlcmlhbCE8L0xpbms+XG4gICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIG10PVwiMlwiPlxuICAgICAgICAgICAgU2VlIHRoZSBleGNoYW5nZSByYXRlcyBmb3IgbW9zdCBjdXJyZW5jaWVzIGhlcmUhXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvQm94PlxuICAgIDwvRGVmYXVsdExheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==