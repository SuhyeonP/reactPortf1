webpackHotUpdate_N_E("pages/minigame",{

/***/ "./pages/minigame.js":
/*!***************************!*\
  !*** ./pages/minigame.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SkillCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SkillCard */ "./components/SkillCard.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\PTPR1\\front\\pages\\minigame.js",
    _this = undefined,
    _s = $RefreshSig$();








var mySql = {
  skillTitle: 'MySql',
  skillImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpibYV2CKSUmb31N84neb4sORfKDvRIWG5yw&usqp=CAU',
  skillAbility: 'basic~Junior'
};
var java = {
  skillTitle: 'Java',
  skillImage: 'data:image/png;base64,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',
  skillAbility: 'basic'
};
var javaScript = {
  skillTitle: 'JavaScript',
  skillImage: 'https://blog.kakaocdn.net/dn/lRRAQ/btqyQMuNJ8k/08nvfyHHv97TV7TEar5Yrk/img.png',
  skillAbility: 'junior~senior'
};
var typeScript = {
  skillTitle: 'TypeScript',
  skillImage: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlgZYH%2FbtqAcMGiCw2%2FmNJs4R5gjNrBOJ4qYmrTg1%2Fimg.jpg',
  skillAbility: 'junior'
};
var node = {
  skillTitle: 'Node.js',
  skillImage: 'https://usefulangle.com/img/thumb/nodejs.png',
  skillAbility: 'basic~junior'
};
var react = {
  skillTitle: 'React',
  skillImage: 'https://miro.medium.com/max/600/1*jnqXL4Q-iW0qxodFDTxyFQ.jpeg',
  skillAbility: 'basic~junior'
};
var mongodb = {
  skillTitle: 'mongodb',
  skillImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9asRDthDxdLkfbnirNodJ4XAZsuwx8ok5rA&usqp=CAU',
  skillAbility: 'basic'
};
var C = {
  skillTitle: 'C',
  skillImage: 'https://blog.kakaocdn.net/dn/d5VJCC/btqy6TtwnLa/PZJRkDEagCFpMDi8Mr0Bs0/img.png',
  skillAbility: 'basic'
};
var htmlCss = {
  skillTitle: 'HTML/CSS',
  skillImage: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHYxz2%2Fbtqzy6y1FrA%2FziifyVqfYQO4NhXpngxWrk%2Fimg.jpg',
  skillAbility: 'Junior~Senior'
};
var sf = {
  skillTitle: 'Spring FrameWork',
  skillImage: 'https://perfectacle.github.io/images/spring-di-v1/thumb.png',
  skillAbility: 'junior'
};

var MiniGame = function MiniGame() {
  _s();

  var cl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(C);
  var mysql = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(mySql);
  var js = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(javaScript);
  var java = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(java);
  var htmlcss = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(htmlCss);
  var node = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(node);
  var ts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(typeScript);
  var mongo = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(mongodb);
  var react = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(react);
  var sf = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(sf);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "MiniGame"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "main-title",
      children: "This is my portfolio "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "gameSection",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "gical",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "http://ahah12k.cafe24.com/ptp2/",
          target: "_blank",
          rel: "noreferrer noopener",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "gameTitle",
              children: "Find your Breath(Origin) (Only mobile)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "explainPort",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: htmlcss
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: mysql
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: java
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: sf
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u25BCChanges to React\u25BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: react
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: node
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: ts
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: js
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/lol",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Change to React Breath"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lol",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "http://ahah12k.cafe24.com/ptp1/",
          target: "_blank",
          rel: "noreferrer noopener",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "gameTitle",
              children: "Find your LOL character"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "explainPort",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "it will be update to React or React+Typescript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, _this);
};

_s(MiniGame, "iGV4OcmNjV1yIlEmEXpW8+6lguA=");

_c = MiniGame;
_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes = {
  setSkill: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node.isRequired.object
};
/* harmony default export */ __webpack_exports__["default"] = (MiniGame);

var _c;

$RefreshReg$(_c, "MiniGame");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWluaWdhbWUuanMiXSwibmFtZXMiOlsibXlTcWwiLCJza2lsbFRpdGxlIiwic2tpbGxJbWFnZSIsInNraWxsQWJpbGl0eSIsImphdmEiLCJqYXZhU2NyaXB0IiwidHlwZVNjcmlwdCIsIm5vZGUiLCJyZWFjdCIsIm1vbmdvZGIiLCJDIiwiaHRtbENzcyIsInNmIiwiTWluaUdhbWUiLCJjbCIsInVzZVN0YXRlIiwibXlzcWwiLCJqcyIsImh0bWxjc3MiLCJ0cyIsIm1vbmdvIiwiQXBwTGF5b3V0IiwicHJvcFR5cGVzIiwic2V0U2tpbGwiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLEtBQUssR0FBQztBQUNSQyxZQUFVLEVBQUMsT0FESDtBQUVSQyxZQUFVLEVBQUMsdUdBRkg7QUFHUkMsY0FBWSxFQUFDO0FBSEwsQ0FBWjtBQUtBLElBQU1DLElBQUksR0FBQztBQUNQSCxZQUFVLEVBQUMsTUFESjtBQUVQQyxZQUFVLEVBQUMsb3BLQUZKO0FBR1BDLGNBQVksRUFBQztBQUhOLENBQVg7QUFLQSxJQUFNRSxVQUFVLEdBQUM7QUFDYkosWUFBVSxFQUFDLFlBREU7QUFFYkMsWUFBVSxFQUFDLCtFQUZFO0FBR2JDLGNBQVksRUFBQztBQUhBLENBQWpCO0FBS0EsSUFBTUcsVUFBVSxHQUFDO0FBQ2JMLFlBQVUsRUFBQyxZQURFO0FBRWJDLFlBQVUsRUFBQyw0SkFGRTtBQUdiQyxjQUFZLEVBQUM7QUFIQSxDQUFqQjtBQUtBLElBQU1JLElBQUksR0FBQztBQUNQTixZQUFVLEVBQUMsU0FESjtBQUVQQyxZQUFVLEVBQUMsOENBRko7QUFHUEMsY0FBWSxFQUFDO0FBSE4sQ0FBWDtBQUtBLElBQU1LLEtBQUssR0FBQztBQUNSUCxZQUFVLEVBQUMsT0FE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QTtBQUFBO0FBQUEsYUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVDSCxDQW5ERDs7R0FBTUosUTs7S0FBQUEsUTtBQXFETlEsNkRBQVMsQ0FBQ0MsU0FBVixHQUFzQjtBQUNsQkMsVUFBUSxFQUFFQyxpREFBUyxDQUFDakIsSUFBVixDQUFla0IsVUFBZixDQUEwQkM7QUFEbEIsQ0FBdEI7QUFJZWIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWluaWdhbWUuYTE0NjllODU2OWRjMDgyYzZhZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ29sLCBJbnB1dCwgTWVudSwgUm93fSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgU2tpbGxDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2tpbGxDYXJkJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmNvbnN0IG15U3FsPXtcclxuICAgIHNraWxsVGl0bGU6J015U3FsJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjU3BpYllWMkNLU1VtYjMxTjg0bmViNHNPUmZLRHZSSVdHNXl3JnVzcXA9Q0FVJyxcclxuICAgIHNraWxsQWJpbGl0eTonYmFzaWN+SnVuaW9yJyxcclxufVxyXG5jb25zdCBqYXZhPXtcclxuICAgIHNraWxsVGl0bGU6J0phdmEnLFxyXG4gICAgc2tpbGxJbWFnZTonZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FNQUFBQUpiU0pJQUFBQXoxQk1WRVgvLy8vaEh5SUFhclFMYjdZQWJMWGhIU0FBYWJNQVo3UDN4OGZnR2gzZkFBRCs5L2Y2L2Y3enRyYnZrWlBnQ2cveG1wenQ5ZnJnRkJqZ0FBRC8rL3NBWTdINTBORG5VRkxpSmluRTIrd0FjcmpmQUFmbFFrWDYzdDdnRHhUaTd2WldrOGZRNC9EMnZyOXluOHo3NHVMa09UenhvcU01aU1NZGVidmpNVFRtU1V2enJhNzk3Ky9vOHZsMHFkUDYyZHJ0Z0lIcWIzR3B5dU9Dc3RlV3ZkM3BYV0R1aUlycVoybnRlM3k0MCtoWW1jb3poTUdPdTl6TTRPOEFYcS93bFplbngrSkdsc3BxcHRGaWxNYm9XRm9jcWRBL0FBQU9TVWxFUVZSNG5PMWRDVmZpU2hNbE80RmdJTXFXUUJZRUVwUkZTVVFUNUpQaCtmOS8wOWRMeUlMb09FK1loSDY1eHpsSEE4M3BTM1ZYM2VydXFTNlZDaFFvVUtCQWdRSUZDaFFvVUtCQWdheHhrM1VIem83Qkl1c2VuQnVMTnZGV3ZMN1B1Z2ZuUnFkZHpib0xaMGE3VXM2NkMyZkdVK1VoNnk2Y0dVLzZLT3N1bkJudittU2FkUi9PaTQ1STliUHV3MWx4YzgxMXlHWllybkNFMjdBdWM1MWgxcDA0SjZwdFJad1FIZkxMT3FlOFo5MkpzK0pab2VTM3JEdHhUclJranROSnpwL0FMS1NVZDVLbjRaWE1VZm80NjE2Y0VXQ01VdUtJWU0zV0g0a1VwUkZzd3VtZFFsSEtpTnhaT0gyV0tZcFRCbG4zNDJ5b1FvS1UvSkoxUDg2R1lSdDRHVXE1STliTjlOczZzS0JJRWJ0RVU1NEFnaHhYcVdYZGtYT2h4aWtVUjNINjFjZVhxaVFNMitycVdnUUdwT1RWNFN2VDhzTURBU0oxK3F3REgwTnhsWmVENWZ6VzFhUlRJeUE2b2lrSUNUNmtDUGJydmNyMUF3bEQ5SjVTRUVGOWxTVFlldWhVS20wU0hHdjFSUlloUVZHdUo1NlduM1JacDk0SUdLQ2w0Uk1NOHlEUVU0bjlwdGF6cm9qYU93RWVCbkJCVVJDTTBGRThIdnVQbXM0cFlwMklUY1RhQkU5QitTbGFQYXlPSnpMSHlYZXRMUHQxTXR6aktjaHBqNUhISEw3TElzZHB6eVM0MEZLcFhrRlJrTk5qSDNQZkFaRlJGQWxKZ2NmWXgzRFhNWjhyYUZSUkppUkJIT3VoQlNNblduM1JZUG8wSVNFSUFwUkRDOHFSQmF1UGtLRFlJY1BIbEJZVDdHVDBlSFY3cGNFSHhPU0h6MGlLVXZwVEpGdHF5TzlVQ0hFeXBmdHJORWJGZURlNzM0RkdWWjZ5N05VcDBRdkhhQ3pWSHFEaklXZU1sckVmVmVJeHV1aUkwSTgrRXlIVkFPb2Ftb1dKd0hlRm5sU0lPZTcxaUZhZHhFbjhCSzdtZzFGTFNLUW9sZDZSNE5ianRkK2h5SkhGOEVrQkpreXVITFlVRGxLOEprU3ZsVW92T25JMHNlTUVESkZWaVRuUGRvL2tTMEtmaFF6RkNTbW5UQ0FoTUN3L01LUjBZbzRvOUtDcjBlTlJPdVV3UTA0bUkvVUZxUk1jcGxvaStyWDNSbndrSk9aUG9XeExpdEJRQTZTRTNHWGpIc1o4SlY0UFhYU3dEY2x4Tmpjd2ZaSVRxZElqVHFmQU9DWGxNTTJRRWlreHNkKzdDSDBObFZ5WXVtekFoYWprcEh1UlF5TnlDaW1IUzFkeU1nTXVUZkc2QmxIKzlGMVBiWWtPOVAwNEplYUU4UEJPU1dwVGVEWTROQ0lwRWFQVTUwVGxMdmFjTjQvaFZEeTJtMytoV0l6RTVEaUZKeThSd3cvYitaZUxzcUtJaVp5d3BaRm1RMENSU3YzL21FZWMvQk4xcUtZc1ZoSUgyZTZoQUNkR3VJVW9qNjVqay9WQnFEaHlxdWJDc1ZEaU04RlR3RkRVU2NrUkkvUjcwVGp0Y3h4SDFpekVHTGIzSWdiTXcwL0dxRFF6TE11WS9iMU8vUVJTWXphVFVrK20rNGp4b2g4L1FHdk5iWlgvWDVOeFRDL25KQnRkencxc08xZ2U3MmRmUHpqNUZlTFZDVnh2dm1acGx1V2RyWFRrSGJtQTRjOXRXaENjK1NmMEFKN2xvN2xobzR0SVNkMkFaaG1XRHhybjZ1SlBNUE52SFZab3J0M3VGOTBiajM2enVTWjVMTXN3d20zdXJDaFpnU1BRTEc5L2JqMkk4amNPSW5xQUljTjdKK3ZhU1NENXBnQkhsN1A5K24wM3g4NnhTWTFHeXVoU1FEUGdvM0xsYml3YmppelFMZjhQRzBxV3YzV0RYOXYwc083Q0R4UCs5TFBPQ1V1bEdRUjJaMzJyZ2RRd05wQ2E3YWhzMDlrZVR0dkdHbERrNTZmdjZMK0dMN0NZSVVPcjlueHBHY2FzSVFHRUw4TmZaN09aQWNMNVpybDFkOEY2N2FpTUlQQUFBdU1lY1VzbStNYm80Szl5K0EyV0RzdUhKRmxlYURMcWVtMEMzQ0w4QTM5ZHI5Y3FzRmNUOHFKQnlBTkJqMmNjOEhVWXh6N1BaUFBHRUFTS3dHa0NrN0JvUHJJaGFNQUYvdXovUnEvUXlIU3N2ZHQyclU4aWdtVG5qeUhFelBmbXB1MHdlMmJvSDQwTWhsbUNmOEMydDNOditWWEFMTUY1RFNQaTl1OTArdzhCNUtoaGRQM3Q5dFYxM1RrZXBYUHdxN3YxdHQwdW5wKy8veFNQaCtQOWUwN3JJbUU0K1J5a3A0TUxBejZiYnhNMmZpSXFmUmhjK2UycCtuSU9XTzdyRHhoYWNJenl1OU4xNStTd0F0YitRZW9EQ2JMOFBIZVpSUXhQNVgrU0ZsaHJHc3hCOTNUOU9UbThKakNCZlZTb0pDRTFMTi9iZVI4czVUTXN3Ni96cExrUGdUUXp5SHptL21aMmZLaEN6UTJVQVJDbU5NL3VEdDdqcWl3dHpILzcvV1FKS1JDd09PVVpWWFhzWDd1ZDYzbWUzKzF1UGU5MXZ2c0ZrZ21HQmRvVXF6dUdWNzBFeDQwdDhFeXd5YTczMzRLeDNrdHdCc3RyWG9pQVpPditWZndPUVREM0ZtdDRhbE1OdXBuMi9sdG91QTdOSjJrY0I4NHRUSzhiWnZLUzd3aU9tKzhvSDZIaDN6bzB6YWZObGFER2d2U0pWazEzdVlrZGpXVTZiamZIRWVJREpBczRrN1hEb3lTWERvRVRYc2NPUUhKaHBWVlB3OXRjRXIwUU1NMEFiaE00R0l4WDRIRjhsRjFrM2JNQ0JmNGprTG8vU1MveUQybTdWaThrdFAwN0dLYkFxbCtMRSttaVBhcGtDbEI4dS80bkN0cnd0MEI1WDRJKyt3d3pPaFRmTE92WVFIbjdRSGdqK012WCtTOEhMWml5SUlmSXZjYitGSkxKeHhLTmhzbzcvQXRyNzBpLzBVeHdVVUl0Z1VSK2tkQ2pSeVNxMER4TUVDOEZzL252MHdzd1RObkF2MUNDQUlhTGpoeDh5bzVsMTd2bGhRMVJ3OXBzTmxac2swYlhOUjB3ODhKdEdRYjl3TlJKRUZUNzF0dGNsUFVrWTdtelZZRlcxMEhLTHBKaGJkMWc3VGdxaHVNNDYyQys3UnBmczh0ZHFEUThrMmtLYXJDMFB1bTQxREJDZksvdnhpNVBPL2lTSDREQVIvL21BTVlmNHBlWkh5djZKdHdhdFAyVDltam1xSGxaVDJ6c2FMaEw5Sk0xL0NPdzdHWmVUZ3MxVENSVzZGUDJSOXE0cW1EbVpSNjZvUnFqemVWcHJEanpYVnRvT2w1ZUFvbTBqbzZZMEdxdy9WR0FhMWorZHJkbStHYlRqdmxsUHhrOWVNNXJMMUxRMFpIdHh2cE5yRXNCaEJGcjQzc3daS29zWEJSM2RnbWY1ZWRnQzdGcnFnbVNXSzQ0dG5rN2Z3VVprMlZaS0FRbU1JTVB3SFBmMzNydS9QWWYyMGJNZ095aEJkb3gzZVF3YUxoMEhuYWdKR3Nick5GU0w5U2diSmd2MFd4NHpBUm9HTWRPWUEwZkFIUFQwUUVidkxOQjA3OWNQM1cyUnRyYXpTQW5EaFhBNktJVGFuQ3MwcW05Ri9ZajlsOERQblBETUd0enZqMWNDNEQrdENua0tPb2pTSTJHMFYyK3VyZUJ2VllaZUxnTDdUWHhrYlhvOEN3VVFMUEpxbXM3bUw5Q2hmcUJoN1UxVmZER0hHOXpBNjZ6R1pocWVEbC9aMFlJNE5LKzV5MzlqVEZySEZXb2t1SFAxMkJxQXhWNHNRc2NuMEtTak8zY2hvZU1hWUV4VDZzQ1Q0aC9zMFFvU2JQTjBwdmJZT1pCbjBxcnBwZmpsZGJHYTdEei9LNzFMZEVGWW1FM1BFVExJQWNGNXFnVGVKOGRWOHdMR25BaTBReU1panM0NTdyZDdzYUtzSUVyaWg0SWhZRUpZcndLajZJS1BONVlWSUZUWFJvNVp4ZENNalpvZDVUaC80Y2doQWRMb2Jwck52ZGVWa0J1bFdkVkIzaFZGempWdklqdDcyTUd4cUFQajEvc2JOTkVvVDRHZEt3N0pIekFpTDRNdTMwSjZSaXk3bFNCQWdVS0ZDaHdRaXhXQ01SVVF2eUlzaTREa0h1ckNxeDRBYXZOYUFYREMwYkI4UEx4bjJESUVjK1FmQnYrNXhqZVRGdTErM3E5UHE2MTRoSm1WWVJVdVk4Yi9DeitlMWl1alpQdHBxdTNoMFgyQmZnUEdGWmJiMCtUanFMTG1pWXJuZDViV0FwcTJoNUJwT3BkM2svZ28vRGk2bXE1L2o2aEZGbVRZYnU3T25vNkdEdzlQUDVGTHNlUllyaFlqWFJaRWZkbEF6bFJGc082ZWkreUNDQW5TMzZzTlBCRVFTWEFGZzhqR2Jiajl1MDBDdHF1M0Jxc3NxL0xsMks0cW1CMkhBU3V4S3JoUWkyRDY4TWFkRGZQc0tRWkxySC9HTGVqd25ibzBwWWI5Sk14VWd4aGxUSVJXaEVZUjFmQ29zZ283Y0Exa3NWMlBFeFJCZDZ3S25TdFFzWHRjT1ZJVHN6TC9Ra3BoaTFScTR4ZXhvUFdZbEcrZjhTWElPbDRKaUdMY1VwY29nMVZvQS9yQ1MrVUkrMmVNMkJ6RENtRzFjZTNSV3lsQVNvYXpFMVEvYXN4S3ErYktDNkVxbnh5T25xeCtuTFZUN1JESDVtYml0aGZ4Y094SEYvK2dHc2tLN0ZocmlCRDhlaWx3Ryt3SGFmbHBQcitWd3lIaUJYT2pxdm9vZ1N1RTFWbFJiVVQ5YVBCQUYraElHY2ZDaEcrMURUb09nc1psNWpIQm8zS2wwL3Z4RTlaVlBGck9TbWwvQ1ZENUM1bFhNU3poWHlrOGg2K05FVFRrRHZxTUt2dGkyUllRaVdTdVU3b1B3WVY2ck5wZUNFTW9lcThTVEY4MFdPL0F5OE5naGI5T0ExaHUybmVHVTRINDRmbnU3c08xVUV4Zjgrd2pEMHJsalhZVE9rdkJyZnJVZnQyZVdVNGVBVENXd2Z5WksvYzlneXhpQkY3YUdDaTRNRnhpY3BtNVVTN1BETnN2UVBWeGFXazZaNWhlQ2tMZGk0MURiR05QcVoxcCt0SWVYTlJ3end4NUNLR05RVmZMU05yU2djQXNZOFlJbGFoK2tZWHNrV3ZBRUdMUlowV3Rzc2J3OGlHTlFYZHFzYTkxOHV0ZnI4L0hDVTlUV21LQkFBZXByQVZwKzMzQW1vNmF0ZDVCOUlVdEZ2a05oNU8wYlZ4K2wxNW4vS2tmQ202SFFuZTZUeUV3UkZ5M2QrWmdHdnQ2NzFXMk80bXQ3NFVYVzBvM3NVcDNRRkRmSjhsMURoWE1ycmRPWHkrZ2w1V2FVZEtPN2Z4RUFreFRrbEVnQU9HZlhUTERBaUNxQ3A3Vkd6L0JnM214T1pPYmhtaTJ6a1Mydm9Ed3h1a3ZzWFJ0QVdsdGJpdnRkL0htV0tjTE9XV1llc2FwWU9KT3VRSERMSDY1clIrUGVWSnl3cTZFL0VTR0ZhUThFeEU4VU9HK0VZcnVmNHVoaDRIWVlEV08rUkxZS2loYVJhdmp0WFM4YkMwdngyd0I4TkdsR1VBRzFMcGVYaVAyK1dQSWFvbEgxKzVNbnlVVTZvTjRnRnBVelR2NU9pYndBbXYyQXR0MnQrM3l3bkRnUmd4RE8rdFVIcTFhYlhhV25WazdnTkRiQzRLKzV2bzZSMitLcUUzQU8zS0swck9seTY5UjczRDhiQmV3WjJYOVJINEI5U2NjamhLc2ZvKzVEM1d3blpLcWwxZUdLSW9Ya0h1cFhxSDc2dmlPQ2lpUVQvZm9NdEljb2x1dE9Lb2hFT2E5dEx0OURIOEl2TENFQysvWUlhbFJVK09sdlFWcmQwQ2hEZ3V4YkNtNGVRaHZRU1ZhaWVEZHMrZ25aWVRoZzg0SmRydndMeE1kRmxSRkYybTJqVVEwRmRjcDZNa0x6c2NUam9ZNlFNNDA2dUpqTnBwSGR4TzdIVEVuREJzSzJtM01heGRQVDg5UGR5WGtXQVp0Z0JTVjVFc1dnaUx3LzJJWVcwRjI0MWJuN1RMREZQOVlLR1hPS3prUExtOU02Q01neldWandGMUJ2VHhHaWh4ZCtKRUtFOUNFVVBJWlkySHFJN1JxZ3lsVEVnOWV2bFd3ZGVJajQ1ZDUwQUVwczh5MUpKdFVtNHhQSUpxVDVjbjQreVBFcHdSaS9jM1lzTkVDS0x0VjZCQWdRSUZDaFFvVUtCQWdRSUZ5TUgvQVdOTmFkVmlkVmdCQUFBQUFFbEZUa1N1UW1DQycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2Jhc2ljJyxcclxufVxyXG5jb25zdCBqYXZhU2NyaXB0PXtcclxuICAgIHNraWxsVGl0bGU6J0phdmFTY3JpcHQnLFxyXG4gICAgc2tpbGxJbWFnZTonaHR0cHM6Ly9ibG9nLmtha2FvY2RuLm5ldC9kbi9sUlJBUS9idHF5UU11Tko4ay8wOG52ZnlISHY5N1RWN1RFYXI1WXJrL2ltZy5wbmcnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidqdW5pb3J+c2VuaW9yJyxcclxufVxyXG5jb25zdCB0eXBlU2NyaXB0PXtcclxuICAgIHNraWxsVGl0bGU6J1R5cGVTY3JpcHQnLFxyXG4gICAgc2tpbGxJbWFnZTonaHR0cHM6Ly9pbWcxLmRhdW1jZG4ubmV0L3RodW1iL1I4MDB4MC8/c2NvZGU9bXRpc3RvcnkyJmZuYW1lPWh0dHBzJTNBJTJGJTJGYmxvZy5rYWthb2Nkbi5uZXQlMkZkbiUyRmxnWllIJTJGYnRxQWNNR2lDdzIlMkZtTkpzNFI1Z2pOckJPSjRxWW1yVGcxJTJGaW1nLmpwZycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2p1bmlvcicsXHJcbn1cclxuY29uc3Qgbm9kZT17XHJcbiAgICBza2lsbFRpdGxlOidOb2RlLmpzJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vdXNlZnVsYW5nbGUuY29tL2ltZy90aHVtYi9ub2RlanMucG5nJyxcclxuICAgIHNraWxsQWJpbGl0eTonYmFzaWN+anVuaW9yJyxcclxufVxyXG5jb25zdCByZWFjdD17XHJcbiAgICBza2lsbFRpdGxlOidSZWFjdCcsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL21pcm8ubWVkaXVtLmNvbS9tYXgvNjAwLzEqam5xWEw0US1pVzBxeG9kRkRUeHlGUS5qcGVnJyxcclxuICAgIHNraWxsQWJpbGl0eTonYmFzaWN+anVuaW9yJyxcclxufVxyXG5jb25zdCBtb25nb2RiPXtcclxuICAgIHNraWxsVGl0bGU6J21vbmdvZGInLFxyXG4gICAgc2tpbGxJbWFnZTonaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NSOWFzUkR0aER4ZExrZmJuaXJOb2RKNFhBWnN1d3g4b2s1ckEmdXNxcD1DQVUnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidiYXNpYycsXHJcbn1cclxuY29uc3QgQz17XHJcbiAgICBza2lsbFRpdGxlOidDJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vYmxvZy5rYWthb2Nkbi5uZXQvZG4vZDVWSkNDL2J0cXk2VHR3bkxhL1BaSlJrREVhZ0NGcE1EaThNcjBCczAvaW1nLnBuZycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2Jhc2ljJyxcclxufVxyXG5jb25zdCBodG1sQ3NzPXtcclxuICAgIHNraWxsVGl0bGU6J0hUTUwvQ1NTJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vaW1nMS5kYXVtY2RuLm5ldC90aHVtYi9SODAweDAvP3Njb2RlPW10aXN0b3J5MiZmbmFtZT1odHRwcyUzQSUyRiUyRmJsb2cua2FrYW9jZG4ubmV0JTJGZG4lMkZIWXh6MiUyRmJ0cXp5NnkxRnJBJTJGemlpZnlWcWZZUU80TmhYcG5neFdyayUyRmltZy5qcGcnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidKdW5pb3J+U2VuaW9yJyxcclxufVxyXG5jb25zdCBzZj17XHJcbiAgICBza2lsbFRpdGxlOidTcHJpbmcgRnJhbWVXb3JrJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vcGVyZmVjdGFjbGUuZ2l0aHViLmlvL2ltYWdlcy9zcHJpbmctZGktdjEvdGh1bWIucG5nJyxcclxuICAgIHNraWxsQWJpbGl0eTonanVuaW9yJ1xyXG59XHJcblxyXG5jb25zdCBNaW5pR2FtZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsPXVzZVN0YXRlKEMpXHJcbiAgICBjb25zdCBteXNxbD11c2VTdGF0ZShteVNxbClcclxuICAgIGNvbnN0IGpzPXVzZVN0YXRlKGphdmFTY3JpcHQpXHJcbiAgICBjb25zdCBqYXZhPXVzZVN0YXRlKGphdmEpXHJcbiAgICBjb25zdCBodG1sY3NzPXVzZVN0YXRlKGh0bWxDc3MpXHJcbiAgICBjb25zdCBub2RlPXVzZVN0YXRlKG5vZGUpXHJcbiAgICBjb25zdCB0cz11c2VTdGF0ZSh0eXBlU2NyaXB0KVxyXG4gICAgY29uc3QgbW9uZ289dXNlU3RhdGUobW9uZ29kYilcclxuICAgIGNvbnN0IHJlYWN0PXVzZVN0YXRlKHJlYWN0KVxyXG4gICAgY29uc3Qgc2Y9dXNlU3RhdGUoc2YpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1pbmlHYW1lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlRoaXMgaXMgbXkgcG9ydGZvbGlvIDwvaDE+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWVTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9haGFoMTJrLmNhZmUyNC5jb20vcHRwMi9cInRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGgyIGNsYXNzTmFtZT1cImdhbWVUaXRsZVwiPkZpbmQgeW91ciBCcmVhdGgoT3JpZ2luKSAoT25seSBtb2JpbGUpPC9oMj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFpblBvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17aHRtbGNzc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtteXNxbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtqYXZhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQgc2V0U2tpbGw9e3NmfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7ilrxDaGFuZ2VzIHRvIFJlYWN04pa8PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17cmVhY3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17bm9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXt0c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtqc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9sXCI+PGE+Q2hhbmdlIHRvIFJlYWN0IEJyZWF0aDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9haGFoMTJrLmNhZmUyNC5jb20vcHRwMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxoMiBjbGFzc05hbWU9XCJnYW1lVGl0bGVcIj5GaW5kIHlvdXIgTE9MIGNoYXJhY3RlcjwvaDI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhaW5Qb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5pdCB3aWxsIGJlIHVwZGF0ZSB0byBSZWFjdCBvciBSZWFjdCtUeXBlc2NyaXB0PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHNldFNraWxsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLm9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==