webpackHotUpdate_N_E("pages/[...slug]",{

/***/ "./src/modules/seminars/components/SeminarCard.tsx":
/*!*********************************************************!*\
  !*** ./src/modules/seminars/components/SeminarCard.tsx ***!
  \*********************************************************/
/*! exports provided: SeminarCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeminarCard", function() { return SeminarCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _seminars_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seminars.styled */ "./src/modules/seminars/components/seminars.styled.tsx");
/* harmony import */ var _shared_components_texts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/texts */ "./src/shared/components/texts.tsx");
/* harmony import */ var _shared_components_DefaultAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/DefaultAvatar */ "./src/shared/components/DefaultAvatar.ts");

var _jsxFileName = "C:\\Users\\Public.DESKTOP-5K819ES\\Documents\\GitHub\\dojoplus\\src\\modules\\seminars\\components\\SeminarCard.tsx";





const SeminarCard = ({
  data
}) => {
  var _coverImage$;

  const title = data === null || data === void 0 ? void 0 : data.eventTitle;
  const address = data === null || data === void 0 ? void 0 : data.address;
  const coverImage = data === null || data === void 0 ? void 0 : data.coverImage;
  const imgUrl = coverImage && ((_coverImage$ = coverImage[0]) === null || _coverImage$ === void 0 ? void 0 : _coverImage$.url);
  const date = data === null || data === void 0 ? void 0 : data.startDate;
  const fetcheddate = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).format('dddd-MMMM D-YYYY');
  const formatedDate = fetcheddate.split('-');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["SeminarCardContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["PosterContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["PosterImg"], {
        src: imgUrl || _shared_components_DefaultAvatar__WEBPACK_IMPORTED_MODULE_5__["DefaultAvatar"],
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["PosterText"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextWhite16CapitalizeThin"], {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["DescriptionContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["DateContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextOrange12Regular"], {
          children: formatedDate[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextWhite20UppercaseRegular"], {
          children: formatedDate[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextWhite12UppercaseBold"], {
          children: formatedDate[2]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_seminars_styled__WEBPACK_IMPORTED_MODULE_3__["DetailContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextWhite12Regular"], {
          children: "Martial arts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_4__["TextGray12"], {
            children: address === null || address === void 0 ? void 0 : address.split('\\n').join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};
_c = SeminarCard;

var _c;

$RefreshReg$(_c, "SeminarCard");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/modules/seminars/index.tsx":
/*!****************************************!*\
  !*** ./src/modules/seminars/index.tsx ***!
  \****************************************/
/*! exports provided: Seminars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seminars", function() { return Seminars; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_components_TabLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/TabLoading */ "./src/shared/components/TabLoading.tsx");
/* harmony import */ var _shared_components_ProfileTabEmptyMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/ProfileTabEmptyMessage */ "./src/shared/components/ProfileTabEmptyMessage.tsx");
/* harmony import */ var _components_SeminarCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SeminarCard */ "./src/modules/seminars/components/SeminarCard.tsx");
/* harmony import */ var _shared_components_texts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/texts */ "./src/shared/components/texts.tsx");



var _jsxFileName = "C:\\Users\\Public.DESKTOP-5K819ES\\Documents\\GitHub\\dojoplus\\src\\modules\\seminars\\index.tsx",
    _s = $RefreshSig$();








const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "seminars__Container",
  componentId: "sc-pl01el-0"
})(["display:flex;flex-wrap:wrap;padding:16px;@media screen and (max-width:600px){justify-content:center;}"]);
_c = Container;
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "seminars__Heading",
  componentId: "sc-pl01el-1"
})(["display:flex;position:relative;justify-content:center;align-items:center;background:black;padding:1rem 0;"]);
_c2 = Heading;
const Seminars = () => {
  _s();

  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: seminars,
    1: setSeminars
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios__WEBPACK_IMPORTED_MODULE_3___default()('/api/Seminars').then(res => {
      setSeminars(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_TabLoading__WEBPACK_IMPORTED_MODULE_4__["ProfileTabLoading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }, undefined);
  }

  if (!seminars || seminars.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_ProfileTabEmptyMessage__WEBPACK_IMPORTED_MODULE_5__["ProfileTabEmptyMessage"], {
      value: "There is no achievements to show"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Heading, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared_components_texts__WEBPACK_IMPORTED_MODULE_7__["TextWhite18UppercaseRegular"], {
        children: "Upcoming Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: seminars && seminars.seminars.map(data => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SeminarCard__WEBPACK_IMPORTED_MODULE_6__["SeminarCard"], {
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 20
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Seminars, "tKdWaWFMXL6LmGx1toSrYfEGRhE=");

_c3 = Seminars;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Heading");
$RefreshReg$(_c3, "Seminars");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvc2VtaW5hcnMvY29tcG9uZW50cy9TZW1pbmFyQ2FyZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL3NlbWluYXJzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTZW1pbmFyQ2FyZCIsImRhdGEiLCJ0aXRsZSIsImV2ZW50VGl0bGUiLCJhZGRyZXNzIiwiY292ZXJJbWFnZSIsImltZ1VybCIsInVybCIsImRhdGUiLCJzdGFydERhdGUiLCJmZXRjaGVkZGF0ZSIsImRheWpzIiwiZm9ybWF0IiwiZm9ybWF0ZWREYXRlIiwic3BsaXQiLCJEZWZhdWx0QXZhdGFyIiwiam9pbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkhlYWRpbmciLCJTZW1pbmFycyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInNlbWluYXJzIiwic2V0U2VtaW5hcnMiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsZW5ndGgiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBU0E7QUFRQTtBQU9PLE1BQU1BLFdBQW9DLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUNoRSxRQUFNQyxLQUFLLEdBQUdELElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFRSxVQUFwQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0gsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVHLE9BQXRCO0FBRUEsUUFBTUMsVUFBVSxHQUFHSixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUksVUFBekI7QUFDQSxRQUFNQyxNQUFNLEdBQUdELFVBQVUscUJBQUlBLFVBQVUsQ0FBQyxDQUFELENBQWQsaURBQUksYUFBZUUsR0FBbkIsQ0FBekI7QUFFQSxRQUFNQyxJQUFJLEdBQUdQLElBQUgsYUFBR0EsSUFB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QUE7QUFBQSxpQkFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0csUUFBRCxJQUFhQSxRQUFRLENBQUNNLE1BQVQsS0FBb0IsQ0FBckMsRUFBd0M7QUFDdEMsd0JBQU8scUVBQUMsZ0dBQUQ7QUFBd0IsV0FBSyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLE9BQUQ7QUFBQSw2QkFDRSxxRUFBQyxvRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRSxxRUFBQyxTQUFEO0FBQUEsZ0JBQ0dOLFFBQVEsSUFDUEEsUUFBUSxDQUFDQSxRQUFULENBQWtCTyxHQUFsQixDQUF1Qi9CLElBQUQsSUFBVTtBQUM5Qiw0QkFBTyxxRUFBQyxtRUFBRDtBQUFhLGNBQUksRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELE9BRkQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsa0JBREY7QUFlRCxDQW5DTTs7R0FBTW9CLFE7O01BQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvWy4uLnNsdWddLmJmMmFkODU3ZDI2MjZkM2I4OWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCB7XG4gIFNlbWluYXJDYXJkQ29udGFpbmVyLFxuICBQb3N0ZXJDb250YWluZXIsXG4gIFBvc3RlckltZyxcbiAgUG9zdGVyVGV4dCxcbiAgRGVzY3JpcHRpb25Db250YWluZXIsXG4gIERhdGVDb250YWluZXIsXG4gIERldGFpbENvbnRhaW5lcixcbn0gZnJvbSAnLi9zZW1pbmFycy5zdHlsZWQnO1xuaW1wb3J0IHtcbiAgVGV4dFdoaXRlMjBVcHBlcmNhc2VSZWd1bGFyLFxuICBUZXh0T3JhbmdlMTJSZWd1bGFyLFxuICBUZXh0V2hpdGUxMlJlZ3VsYXIsXG4gIFRleHRHcmF5MTIsXG4gIFRleHRXaGl0ZTE2Q2FwaXRhbGl6ZVRoaW4sXG4gIFRleHRXaGl0ZTEyVXBwZXJjYXNlQm9sZCxcbn0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvdGV4dHMnO1xuaW1wb3J0IHsgRGVmYXVsdEF2YXRhciB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL0RlZmF1bHRBdmF0YXInO1xuaW1wb3J0IHsgU2VtaW5hckRhdGEgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvbW9kZWxzL1NlbWluYXIubW9kZWwnO1xuXG50eXBlIFNlbWluYXJzUHJvcHMgPSB7XG4gIGRhdGE6IFNlbWluYXJEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlbWluYXJDYXJkOiBSZWFjdC5GQzxTZW1pbmFyc1Byb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCB0aXRsZSA9IGRhdGE/LmV2ZW50VGl0bGU7XG4gIGNvbnN0IGFkZHJlc3MgPSBkYXRhPy5hZGRyZXNzO1xuXG4gIGNvbnN0IGNvdmVySW1hZ2UgPSBkYXRhPy5jb3ZlckltYWdlO1xuICBjb25zdCBpbWdVcmwgPSBjb3ZlckltYWdlICYmIGNvdmVySW1hZ2VbMF0/LnVybDtcblxuICBjb25zdCBkYXRlID0gZGF0YT8uc3RhcnREYXRlO1xuICBjb25zdCBmZXRjaGVkZGF0ZSA9IGRheWpzKGRhdGUpLmZvcm1hdCgnZGRkZC1NTU1NIEQtWVlZWScpO1xuICBjb25zdCBmb3JtYXRlZERhdGUgPSBmZXRjaGVkZGF0ZS5zcGxpdCgnLScpO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbWluYXJDYXJkQ29udGFpbmVyPlxuICAgICAgPFBvc3RlckNvbnRhaW5lcj5cbiAgICAgICAgPFBvc3RlckltZyBzcmM9e2ltZ1VybCB8fCBEZWZhdWx0QXZhdGFyfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8UG9zdGVyVGV4dD5cbiAgICAgICAgICA8VGV4dFdoaXRlMTZDYXBpdGFsaXplVGhpbj57dGl0bGV9PC9UZXh0V2hpdGUxNkNhcGl0YWxpemVUaGluPlxuICAgICAgICA8L1Bvc3RlclRleHQ+XG4gICAgICA8L1Bvc3RlckNvbnRhaW5lcj5cbiAgICAgIDxEZXNjcmlwdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPERhdGVDb250YWluZXI+XG4gICAgICAgICAgPFRleHRPcmFuZ2UxMlJlZ3VsYXI+e2Zvcm1hdGVkRGF0ZVsxXX08L1RleHRPcmFuZ2UxMlJlZ3VsYXI+XG4gICAgICAgICAgPFRleHRXaGl0ZTIwVXBwZXJjYXNlUmVndWxhcj5cbiAgICAgICAgICAgIHtmb3JtYXRlZERhdGVbMF19XG4gICAgICAgICAgPC9UZXh0V2hpdGUyMFVwcGVyY2FzZVJlZ3VsYXI+XG4gICAgICAgICAgPFRleHRXaGl0ZTEyVXBwZXJjYXNlQm9sZD57Zm9ybWF0ZWREYXRlWzJdfTwvVGV4dFdoaXRlMTJVcHBlcmNhc2VCb2xkPlxuICAgICAgICA8L0RhdGVDb250YWluZXI+XG4gICAgICAgIDxEZXRhaWxDb250YWluZXI+XG4gICAgICAgICAgPFRleHRXaGl0ZTEyUmVndWxhcj5NYXJ0aWFsIGFydHM8L1RleHRXaGl0ZTEyUmVndWxhcj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxUZXh0R3JheTEyPnthZGRyZXNzPy5zcGxpdCgnXFxcXG4nKS5qb2luKCcgJyl9PC9UZXh0R3JheTEyPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9EZXRhaWxDb250YWluZXI+XG4gICAgICA8L0Rlc2NyaXB0aW9uQ29udGFpbmVyPlxuICAgIDwvU2VtaW5hckNhcmRDb250YWluZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQcm9maWxlVGFiTG9hZGluZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1RhYkxvYWRpbmcnO1xuaW1wb3J0IHsgUHJvZmlsZVRhYkVtcHR5TWVzc2FnZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL1Byb2ZpbGVUYWJFbXB0eU1lc3NhZ2UnO1xuaW1wb3J0IHsgU2VtaW5hcnNEYXRhIH0gZnJvbSAnLi4vLi4vc2hhcmVkL21vZGVscy9TZW1pbmFyLm1vZGVsJztcbmltcG9ydCB7IFNlbWluYXJDYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL1NlbWluYXJDYXJkJztcbmltcG9ydCB7IFRleHRXaGl0ZTE4VXBwZXJjYXNlUmVndWxhciB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL3RleHRzJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxNnB4O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5gO1xuY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VtaW5hcnM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbc2VtaW5hcnMsIHNldFNlbWluYXJzXSA9IHVzZVN0YXRlPFNlbWluYXJzRGF0YVtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgYXhpb3MoJy9hcGkvU2VtaW5hcnMnKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFNlbWluYXJzKHJlcy5kYXRhKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8UHJvZmlsZVRhYkxvYWRpbmcgLz47XG4gIH1cblxuICBpZiAoIXNlbWluYXJzIHx8IHNlbWluYXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiA8UHJvZmlsZVRhYkVtcHR5TWVzc2FnZSB2YWx1ZT1cIlRoZXJlIGlzIG5vIGFjaGlldmVtZW50cyB0byBzaG93XCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgPFRleHRXaGl0ZTE4VXBwZXJjYXNlUmVndWxhcj5cbiAgICAgICAgICBVcGNvbWluZyBFdmVudHNcbiAgICAgICAgPC9UZXh0V2hpdGUxOFVwcGVyY2FzZVJlZ3VsYXI+XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7c2VtaW5hcnMgJiZcbiAgICAgICAgICBzZW1pbmFycy5zZW1pbmFycy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8U2VtaW5hckNhcmQgZGF0YT17ZGF0YX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9