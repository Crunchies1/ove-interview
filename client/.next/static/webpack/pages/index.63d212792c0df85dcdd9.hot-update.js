webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "../node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "../node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _state_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/calculator */ "./src/pages/state/calculator.js");
/* harmony import */ var _api_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/actions */ "./src/pages/api/actions.js");
/* harmony import */ var _components_layouts_Default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/Default */ "./src/components/layouts/Default.js");
/* harmony import */ var _components_CurrencyStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CurrencyStack */ "./src/components/CurrencyStack.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\HP\\Documents\\ove-interview\\client\\src\\pages\\index.js",
    _s = $RefreshSig$();










function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      rateData = _useState[0],
      setRateData = _useState[1]; // At the start, we want to display the rates in terms of EUR


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])( /*#__PURE__*/Object(C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var data;
    return C_Users_HP_Documents_ove_interview_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_state_calculator__WEBPACK_IMPORTED_MODULE_7__["calculator"])(_state_calculator__WEBPACK_IMPORTED_MODULE_7__["FETCH_DATA"], _api_actions__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_BASE"], 7);

          case 2:
            data = _context.sent;
            setRateData(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_Default__WEBPACK_IMPORTED_MODULE_9__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Rates Imperial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
          as: "h1",
          size: "2xl",
          mb: "2",
          children: ["Welcome to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Link"], {
            color: "teal.500",
            children: "Rates Imperial!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          fontSize: "xl",
          mt: "2",
          children: "See the exchange rates for most currencies here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          maxW: "800px",
          mt: "10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CurrencyStack__WEBPACK_IMPORTED_MODULE_10__["default"], {
            rows: rateData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default.a.footer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
          target: "_blank",
          rel: "noopener noreferrer",
          children: ["Powered by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
            src: "/vercel.svg" // Route of the image file
            ,
            height: 70 // Desired size with correct aspect ratio
            ,
            width: 70 // Desired size with correct aspect ratio
            ,
            alt: "Vercel Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(Home, "F7Fnp2Qi8azpfk2R99s5EFjsuhg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInJhdGVEYXRhIiwic2V0UmF0ZURhdGEiLCJ1c2VFZmZlY3QiLCJjYWxjdWxhdG9yIiwiRkVUQ0hfREFUQSIsIkRFRkFVTFRfQkFTRSIsImRhdGEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ3RCQyxRQURzQjtBQUFBLE1BQ1pDLFdBRFksaUJBRzdCOzs7QUFDQUMseURBQVMsOFJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDU0Msb0VBQVUsQ0FBQ0MsNERBQUQsRUFBYUMseURBQWIsRUFBMkIsQ0FBM0IsQ0FEbkI7O0FBQUE7QUFDSkMsZ0JBREk7QUFFUkwsdUJBQVcsQ0FBQ0ssSUFBRCxDQUFYOztBQUZRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUFBLDJCQUNFLHFFQUFDLG9EQUFEO0FBQUssZUFBUyxFQUFFQywrREFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBTSxpQkFBUyxFQUFFRCwrREFBTSxDQUFDRSxJQUF4QjtBQUFBLGdDQUNFLHFFQUFDLHdEQUFEO0FBQVMsWUFBRSxFQUFDLElBQVo7QUFBaUIsY0FBSSxFQUFDLEtBQXRCO0FBQTRCLFlBQUUsRUFBQyxHQUEvQjtBQUFBLGlEQUNhLHFFQUFDLHFEQUFEO0FBQU0saUJBQUssRUFBQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFLHFFQUFDLHFEQUFEO0FBQU0sa0JBQVEsRUFBQyxJQUFmO0FBQW9CLFlBQUUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLHFFQUFDLHFEQUFEO0FBQU0sa0JBQVEsRUFBQyxNQUFmO0FBQXNCLG9CQUFVLEVBQUMsUUFBakM7QUFBMEMsd0JBQWMsRUFBQyxRQUF6RDtBQUFrRSxjQUFJLEVBQUMsT0FBdkU7QUFBK0UsWUFBRSxFQUFDLElBQWxGO0FBQUEsaUNBQ0UscUVBQUMsa0VBQUQ7QUFDRSxnQkFBSSxFQUFFVDtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBc0JFO0FBQVEsaUJBQVMsRUFBRU8sK0RBQU0sQ0FBQ0csTUFBMUI7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBQyx3R0FEUDtBQUVFLGdCQUFNLEVBQUMsUUFGVDtBQUdFLGFBQUcsRUFBQyxxQkFITjtBQUFBLG1DQUthLEdBTGIsZUFNRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFBQyxhQUROLENBQ29CO0FBRHBCO0FBRUUsa0JBQU0sRUFBRSxFQUZWLENBRWM7QUFGZDtBQUdFLGlCQUFLLEVBQUUsRUFIVCxDQUdhO0FBSGI7QUFJRSxlQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMENEOztHQW5EdUJaLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjNkMjEyNzkyYzBkZjg1ZGNkZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEhlYWRpbmcsIExpbmssIFRleHQsIEZsZXgsIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBjYWxjdWxhdG9yLCBGRVRDSF9EQVRBIH0gZnJvbSAnLi9zdGF0ZS9jYWxjdWxhdG9yJ1xuaW1wb3J0IHsgREVGQVVMVF9CQVNFIH0gZnJvbSAnLi9hcGkvYWN0aW9ucydcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0J1xuaW1wb3J0IEN1cnJlbmN5U3RhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9DdXJyZW5jeVN0YWNrJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcmF0ZURhdGEsIHNldFJhdGVEYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIC8vIEF0IHRoZSBzdGFydCwgd2Ugd2FudCB0byBkaXNwbGF5IHRoZSByYXRlcyBpbiB0ZXJtcyBvZiBFVVJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGNhbGN1bGF0b3IoRkVUQ0hfREFUQSwgREVGQVVMVF9CQVNFLCA3KVxuICAgIHNldFJhdGVEYXRhKGRhdGEpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRMYXlvdXQ+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SYXRlcyBJbXBlcmlhbDwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCIyeGxcIiBtYj1cIjJcIj5cbiAgICAgICAgICAgIFdlbGNvbWUgdG8gPExpbmsgY29sb3I9XCJ0ZWFsLjUwMFwiPlJhdGVzIEltcGVyaWFsITwvTGluaz5cbiAgICAgICAgICA8L0hlYWRpbmc+XG5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgbXQ9XCIyXCI+XG4gICAgICAgICAgICBTZWUgdGhlIGV4Y2hhbmdlIHJhdGVzIGZvciBtb3N0IGN1cnJlbmNpZXMgaGVyZSFcbiAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICA8RmxleCBmbGV4V3JhcD1cIndyYXBcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtYXhXPVwiODAwcHhcIiBtdD1cIjEwXCI+XG4gICAgICAgICAgICA8Q3VycmVuY3lTdGFja1xuICAgICAgICAgICAgICByb3dzPXtyYXRlRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L21haW4+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiIC8vIFJvdXRlIG9mIHRoZSBpbWFnZSBmaWxlXG4gICAgICAgICAgICAgIGhlaWdodD17NzB9IC8vIERlc2lyZWQgc2l6ZSB3aXRoIGNvcnJlY3QgYXNwZWN0IHJhdGlvXG4gICAgICAgICAgICAgIHdpZHRoPXs3MH0gLy8gRGVzaXJlZCBzaXplIHdpdGggY29ycmVjdCBhc3BlY3QgcmF0aW9cbiAgICAgICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9Cb3g+XG4gICAgPC9EZWZhdWx0TGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9