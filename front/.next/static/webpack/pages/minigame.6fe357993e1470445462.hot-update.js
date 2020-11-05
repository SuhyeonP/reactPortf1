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
        lineNumber: 73,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "main-title",
      children: "This is my portfolio "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
              lineNumber: 79,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "explainPort",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: htmlcss
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: mysql
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: java
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: sf
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "\u25BCChanges to React\u25BC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: react
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: node
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: ts
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
            setSkill: js
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/lol",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "Change to React Breath"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 39
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
              lineNumber: 96,
              columnNumber: 28
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "explainPort",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SkillCard__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
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
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "it will be update to React or React+Typescript"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, _this);
};

_s(MiniGame, "RtmTWRmXX9OXyJZbcTpR5Vb7Plg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWluaWdhbWUuanMiXSwibmFtZXMiOlsibXlTcWwiLCJza2lsbFRpdGxlIiwic2tpbGxJbWFnZSIsInNraWxsQWJpbGl0eSIsImphdmEiLCJqYXZhU2NyaXB0IiwidHlwZVNjcmlwdCIsIm5vZGUiLCJyZWFjdCIsIm1vbmdvZGIiLCJDIiwiaHRtbENzcyIsInNmIiwiTWluaUdhbWUiLCJteXNxbCIsInVzZVN0YXRlIiwianMiLCJodG1sY3NzIiwidHMiLCJtb25nbyIsIkFwcExheW91dCIsInByb3BUeXBlcyIsInNldFNraWxsIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxLQUFLLEdBQUM7QUFDUkMsWUFBVSxFQUFDLE9BREg7QUFFUkMsWUFBVSxFQUFDLHVHQUZIO0FBR1JDLGNBQVksRUFBQztBQUhMLENBQVo7QUFLQSxJQUFNQyxJQUFJLEdBQUM7QUFDUEgsWUFBVSxFQUFDLE1BREo7QUFFUEMsWUFBVSxFQUFDLG9wS0FGSjtBQUdQQyxjQUFZLEVBQUM7QUFITixDQUFYO0FBS0EsSUFBTUUsVUFBVSxHQUFDO0FBQ2JKLFlBQVUsRUFBQyxZQURFO0FBRWJDLFlBQVUsRUFBQywrRUFGRTtBQUdiQyxjQUFZLEVBQUM7QUFIQSxDQUFqQjtBQUtBLElBQU1HLFVBQVUsR0FBQztBQUNiTCxZQUFVLEVBQUMsWUFERTtBQUViQyxZQUFVLEVBQUMsNEpBRkU7QUFHYkMsY0FBWSxFQUFDO0FBSEEsQ0FBakI7QUFLQSxJQUFNSSxJQUFJLEdBQUM7QUFDUE4sWUFBVSxFQUFDLFNBREo7QUFFUEMsWUFBVSxFQUFDLDhDQUZKO0FBR1BDLGNBQVksRUFBQztBQUhOLENBQVg7QUFLQSxJQUFNSyxLQUFLLEdBQUM7QUFDUlAsWUFBVSxFQUFDLE9BREg7QUFF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Q0gsQ0FsREQ7O0dBQU1ILFE7O0tBQUFBLFE7QUFvRE5PLDZEQUFTLENBQUNDLFNBQVYsR0FBc0I7QUFDbEJDLFVBQVEsRUFBRUMsaURBQVMsQ0FBQ2hCLElBQVYsQ0FBZWlCLFVBQWYsQ0FBMEJDO0FBRGxCLENBQXRCO0FBSWVaLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21pbmlnYW1lLjZmZTM1Nzk5M2UxNDcwNDQ1NDYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHtCdXR0b24sIENvbCwgSW5wdXQsIE1lbnUsIFJvd30gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFNraWxsQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1NraWxsQ2FyZCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5jb25zdCBteVNxbD17XHJcbiAgICBza2lsbFRpdGxlOidNeVNxbCcsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1NwaWJZVjJDS1NVbWIzMU44NG5lYjRzT1JmS0R2UklXRzV5dyZ1c3FwPUNBVScsXHJcbiAgICBza2lsbEFiaWxpdHk6J2Jhc2ljfkp1bmlvcicsXHJcbn1cclxuY29uc3QgamF2YT17XHJcbiAgICBza2lsbFRpdGxlOidKYXZhJyxcclxuICAgIHNraWxsSW1hZ2U6J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBT0VBQUFEaENBTUFBQUFKYlNKSUFBQUF6MUJNVkVYLy8vL2hIeUlBYXJRTGI3WUFiTFhoSFNBQWFiTUFaN1AzeDhmZ0doM2ZBQUQrOS9mNi9mN3p0cmJ2a1pQZ0NnL3htcHp0OWZyZ0ZCamdBQUQvKy9zQVk3SDUwTkRuVUZMaUppbkUyK3dBY3JqZkFBZmxRa1g2M3Q3Z0R4VGk3dlpXazhmUTQvRDJ2cjl5bjh6NzR1TGtPVHp4b3FNNWlNTWRlYnZqTVRUbVNVdnpyYTc5Nysvbzh2bDBxZFA2MmRydGdJSHFiM0dweXVPQ3N0ZVd2ZDNwWFdEdWlJcnFaMm50ZTN5NDAraFltY296aE1HT3U5ek00TzhBWHEvd2xaZW54K0pHbHNwcXB0RmlsTWJvV0ZvY3FkQS9BQUFPU1VsRVFWUjRuTzFkQ1ZmaVNoTWxPNEZnSU1xV1FCWUVFcFJGU1VRVDVKUGgrZjkvMDlkTHlJTG9PRStZaEg2NXh6bEhBODNwUzNWWDNlcnVxUzZWQ2hRb1VLQkFnUUlGQ2hRb1VLQkFnYXh4azNVSHpvN0JJdXNlbkJ1TE52Rld2TDdQdWdmblJxZGR6Ym9MWjBhN1VzNjZDMmZHVStVaDZ5NmNHVS82S09zdW5CbnYrbVNhZFIvT2k0NUk5YlB1dzFseGM4MTF5R1pZcm5DRTI3QXVjNTFoMXAwNEo2cHRSWndRSGZMTE9xZThaOTJKcytKWm9lUzNyRHR4VHJSa2p0Tkp6cC9BTEtTVWQ1S240WlhNVWZvNDYxNmNFV0NNVXVLSVlNM1dINGtVcFJGc3d1bWRRbEhLaU54Wk9IMldLWXBUQmxuMzQyeW9Rb0tVL0pKMVA4NkdZUnQ0R1VxNUk5Yk45TnM2c0tCSUVidEVVNTRBZ2h4WHFXWGRrWE9oeGlrVVIzSDYxY2VYcWlRTTIrcnFXZ1FHcE9UVjRTdlQ4c01EQVNKMStxd0RIME54bFplRDVmelcxYVJUSXlBNm9pa0lDVDZrQ1BicnZjcjFBd2xEOUo1U0VFRjlsU1RZZXVoVUttMFNIR3YxUlJZaFFWR3VKNTZXbjNSWnA5NElHS0NsNFJNTTh5RFFVNG45cHRhenJvamFPd0VlQm5CQlVSQ00wRkU4SHZ1UG1zNHBZcDJJVGNUYUJFOUIrU2xhUGF5T0p6TEh5WGV0TFB0MU10empLY2hwajVISEhMN0xJc2RwenlTNDBGS3BYa0ZSa05OakgzUGZBWkZSRkFsSmdjZll4M0RYTVo4cmFGUlJKaVJCSE91aEJTTW5XbjNSWVBvMElTRUlBcFJEQzhxUkJhdVBrS0RZSWNQSGxCWVQ3R1QwZUhWN3BjRUh4T1NIejBpS1V2cFRKRnRxeU85VUNIRXlwZnRyTkViRmVEZTczNEZHVlo2eTdOVXAwUXZIYUN6VkhxRGpJV2VNbHJFZlZlSXh1dWlJMEk4K0V5SFZBT29hbW9XSndIZUZubFNJT2U3MWlGYWR4RW44Qks3bWcxRkxTS1FvbGQ2UjROYmp0ZCtoeUpIRjhFa0JKa3l1SExZVURsSzhKa1N2bFVvdk9uSTBzZU1FREpGVmlUblBkby9rUzBLZmhRekZDU21uVENBaE1Ddy9NS1IwWW80bzlLQ3IwZU5ST3VVd1EwNG1JL1VGcVJNY3Bsb2krclgzUm53a0pPWlBvV3hMaXRCUUE2U0UzR1hqSHNaOEpWNFBYWFN3RGNseE5qY3dmWklUcWRJalRxZkFPQ1hsTU0yUUVpa3hzZCs3Q0gwTmxWeVl1bXpBaGFqa3BIdVJReU55Q2ltSFMxZHlNZ011VGZHNkJsSCs5RjFQYllrTzlQMDRKZWFFOFBCT1NXcFRlRFk0TkNJcEVhUFU1MFRsTHZhY040L2hWRHkybTMraFdJekU1RGlGSnk4Und3L2IrWmVMc3FLSWlaeXdwWkZtUTBDUlN2My9tRWVjL0JOMXFLWXNWaElIMmU2aEFDZEd1SVVvajY1amsvVkJxRGh5cXViQ3NWRGlNOEZUd0ZEVVNja1JJL1I3MFRqdGN4eEgxaXpFR0xiM0lnYk13MC9HcURRekxNdVkvYjFPL1FSU1l6YVRVayttKzRqeG9oOC9RR3ZOYlpYL1g1TnhUQy9uSkJ0ZHp3MXNPMWdlNzJkZlB6ajVGZUxWQ1Z4dnZtWnBsdVdkclhUa0hibUE0Yzl0V2hDYytTZjBBSjdsbzdsaG80dElTZDJBWmhtV0R4cm42dUpQTVBOdkhWWm9ydDN1RjkwYmozNnp1U1o1TE1zd3dtM3VyQ2haZ1NQUUxHOS9iajJJOGpjT0lucUFJY043Sit2YVNTRDVwZ0JIbDdQOStuMDN4ODZ4U1kxR3l1aFNRRFBnbzNMbGJpd2JqaXpRTGY4UEcwcVd2M1dEWDl2MHNPN0NEeFArOUxQT0NVdWxHUVIyWjMycmdkUXdOcENhN2FoczA5a2VUdHZHR2xEazU2ZnY2TCtHTDdDWUlVT3I5bnhwR2Nhc0lRR0VMOE5mWjdPWkFjTDVacmwxZDhGNjdhaU1JUEFBQXVNZWNVc20rTWJvNEs5eStBMldEc3VISkZsZWFETHFlbTBDM0NMOEEzOWRyOWNxc0ZjVDhxSkJ5QU5CajJjYzhIVVl4ejdQWlBQR0VBU0t3R2tDazdCb1BySWhhTUFGL3V6L1JxL1F5SFNzdmR0MnJVOGlnbVRuanlIRXpQZm1wdTB3ZTJib0g0ME1obG1DZjhDMnQzTnYrVlhBTE1GNURTUGk5dTkwK3c4QjVLaGhkUDN0OXRWMTNUa2VwWFB3cTd2MXR0MHVucCsvL3hTUGgrUDllMDdySW1FNCtSeWtwNE1MQXo2YmJ4TTJmaUlxZlJoYytlMnArbklPV083ckR4aGFjSXp5dTlOMTUrU3dBdGIrUWVvRENiTDhQSGVaUlF4UDVYK1NGbGhyR3N4QjkzVDlPVG04SmpDQmZWU29KQ0UxTE4vYmVSOHM1VE1zdzYvenBMa1BnVFF6eUh6bS9tWjJmS2hDelEyVUFSQ21OTS91RHQ3anFpd3R6SC83L1dRSktSQ3dPT1VaVlhYc1g3dWQ2M21lMysxdVBlOTF2dnNGa2dtR0Jkb1VxenVHVjcwRXg0MHQ4RXl3eWE3MzM0S3gza3R3QnN0clhvaUFaT3YrVmZ3T1FURDNGbXQ0YWxNTnVwbjIvbHRvdUE3Tkoya2NCODR0VEs4Ylp2S1M3d2lPbSs4b0g2SGgzem8wemFmTmxhREdndlNKVmsxM3VZa2RqV1U2YmpmSEVlSURKQXM0azdYRG95U1hEb0VUWHNjT1FISmhwVlZQdzl0Y0VyMFFNTTBBYmhNNEdJeFg0SEY4bEYxazNiTUNCZjRqa0xvL1NTL3lEMm03Vmk4a3RQMDdHS2JBcWwrTEUrbWlQYXBrQ2xCOHUvNG5DdHJ3dDBCNVg0SSsrd3d6T2hUZkxPdllRSG43UUhnaitNdlgrUzhITFppeUlJZkl2Y2IrRkpMSnh4S05oc283L0F0cjcwaS8wVXh3VVVJdGdVUitrZENqUnlTcTBEeE1FQzhGcy9udjB3c3dUTm5BdjFDQ0FJYUxqaHg4eW81bDE3dmxoUTFSdzlwc05sWnNrMGJYTlIwdzg4SnRHUWI5d05SSkVGVDcxdHRjbFBVa1k3bXpWWUZXMTBIS0xwSmhiZDFnN1RncWh1TTQ2MkMrN1JwZnM4dGRxRFE4azJrS2FyQzBQdW00MURCQ2ZLL3Z4aTVQTy9pU0g0REFSLy9tQU1ZZjRwZVpIeXY2SnR3YXRQMlQ5bWptcUhsWlQyenNhTGhMOUpNMS9DT3c3R1plVGdzMVRDUlc2RlAyUjlxNHFtRG1aUjY2b1JxanplVnByRGp6WFZ0b09sNWVBb20wam82WTBHcXcvVkdBYTFqK2RyZG0rR2JUanZsbFB4azllTTVyTDFMUTBaSHR4dnBOckVzQmhCRnI0M3N3Wktvc1hCUjNkZ21mNWVkZ0M3RnJxZ21TV0s0NHRuazdmd1VaazJWWktBUW1NSU1Qd0hQZjMzcnUvUFlmMjBiTWdPeWhCZG94M2VRd2FMaDBIbmFnSkdzYnJORlNMOVNnYkpndjBXeDR6QVJvR01kT1lBMGZBSFBUMFFFYnZMTkIwNzljUDNXMlJ0cmF6U0FuRGhYQTZLSVRhbkNzMHFtOUYvWWo5bDhEUG5QRE1HdHp2ajFjQzREK3RDbmtLT29qU0kyRzBWMit1cmVCdlZZWmVMZ0w3VFh4a2JYbzhDd1VRTFBKcW1zN21MOUNoZnFCaDdVMVZmREdIRzl6QTY2ekdaaHFlRGwvWjBZSTROSys1eTM5alRGckhGV29rdUhQMTJCcUF4VjRzUXNjbjBLU2pPM2Nob2VNYVlFeFQ2c0NUNGgvczBRb1NiUE4wcHZiWU9aQm4wcXJwcGZqbGRiR2E3RHovSzcxTGRFRlltRTNQRVRMSUFjRjVxZ1RlSjhkVjh3TEduQWkwUXlNaWpzNDU3cmQ3c2FLc0lFcmloNEloWUVKWXJ3S2o2SUtQTjVZVklGVFhSbzVaeGRDTWpab2Q1VGgvNGNnaEFkTG9icHJOdmRlVmtCdWxXZFZCM2hWRnpqVnZJanQ3Mk1HeHFBUGoxL3NiTk5Fb1Q0R2RLdzdKSHpBaUw0TXUzMEo2Uml5N2xTQkFnVUtGQ2h3UWl4V0NNUlVRdnlJc2k0RGtIdXJDcXg0QWF2TmFBWERDMGJCOFBMeG4yRElFYytRZkJ2KzV4amVURnUxKzNxOVBxNjE0aEptVllSVXVZOGIvQ3orZTFpdWpaUHRwcXUzaDBYMkJmZ1BHRlpiYjArVGpxTExtaVlybmQ1YldBcHEyaDVCcE9wZDNrL2dvL0RpNm1xNS9qNmhGRm1UWWJ1N09ubzZHRHc5UFA1RkxzZVJZcmhZalhSWkVmZGxBemxSRnNPNmVpK3lDQ0FuUzM2c05QQkVRU1hBRmc4akdiYmo5dTAwQ3RxdTNCcXNzcS9MbDJLNHFtQjJIQVN1eEtyaFFpMkQ2OE1hZERmUHNLUVpMckgvR0xlanduYm8wcFliOUpNeFVneGhsVElSV2hFWVIxZkNvc2dvN2NBMWtzVjJQRXhSQmQ2d0tuU3RRc1h0Y09WSVRzekwvUWtwaGkxUnE0eGV4b1BXWWxHK2Y4U1hJT2w0SmlHTGNVcGNvZzFWb0EvckNTK1VJKzJlTTJCekRDbUcxY2UzUld5bEFTb2F6RTFRL2FzeEtxK2JLQzZFcW54eU9ucXgrbkxWVDdSREg1bWJpdGhmeGNPeEhGLytnR3NrSzdGaHJpQkQ4ZWlsd0crd0hhZmxwUHIrVnd5SGlCWE9qcXZvb2dTdUUxVmxSYlVUOWFQQkFGK2hJR2NmQ2hHKzFEVG9PZ3NabDVqSEJvM0tsMC92eEU5WlZQRnJPU21sL0NWRDVDNWxYTVN6aFh5azhoNitORVRUa0R2cU1LdnRpMlJZUWlXU3VVN29Qd1lWNnJOcGVDRU1vZXE4U1RGODBXTy9BeThOZ2hiOU9BMWh1Mm5lR1U0SDQ0Zm51N3NPMVVFeGY4K3dqRDBybGpYWVRPa3ZCcmZyVWZ0MmVXVTRlQVRDV3dmeVpLL2M5Z3l4aUJGN2FHQ2k0TUZ4aWNwbTVVUzdQRE5zdlFQVnhhV2s2WjVoZUNrTGRpNDFEYkdOUHFaMXArdEllWE5Sd3p3eDVDS0dOUVZmTFNOclNnY0FzWThZSWxhaCtrWVhza1d2QUVHTFJaMFd0c3NidzhpR05RWGRxc2E5MTh1dGZyOC9IQ1U5VFdtS0JBQWVwckFWcCszM0FtbzZhdGQ1QjlJVXRGdmtOaDVPMGJWeCtsMTVuL0trZkNtNkhRbmU2VHlFd1JGeTNkK1pnR3Z0NjcxVzJPNG10NzRVWFcwbzNzVXAzUUZEZko4bDFEaFhNcnJkT1h5K2dsNVdhVWRLTzdmeEVBa3hUa2xFZ0FPR2ZYVExEQWlDcUNwN1ZHei9CZzNteE9aT2JobWkyemtTMnZvRHd4dWt2c1hSdEFXbHRiaXZ0ZC9IbVdLY0xPV1dZZXNhcFlPSk91UUhETEg2NXJSK1BlVkp5d3E2RS9FU0dGYVE4RXhFOFVPRytFWXJ1ZjR1aGg0SFlZRFdPK1JMWUtpaGFSYXZqdFhTOGJDMHZ4MndCOE5HbEdVQUcxTHBlWGlQMitXUElhb2xIMSs1TW55VVU2b040Z0ZwVXpUdjVPaWJ3QW12MkF0dDJ0KzN5d25EZ1JneERPK3RVSHExYWJYYVduVms3Z05EYkM0Sys1dm82UjIrS3FFM0FPM0tLMHJPbHk2OVI3M0Q4YkJld1oyWDlSSDRCOVNjY2poS3Nmbys1RDNXd25aS3FsMWVHS0lvWGtIdXBYcUg3NnZpT0NpaVFUL2ZvTXRJY29sdXRPS29oRU9hOXRMdDlESDhJdkxDRUMrL1lJYWxSVStPbHZRVnJkMENoRGd1eGJDbTRlUWh2UVNWYWllRGRzK2duWllUaGc4NEpkcnZ3THhNZEZsUkZGMm0yalVRMEZkY3A2TWtMenNjVGpvWTZRTTQwNnVKak5wcEhkeE83SFRFbkRCc0sybTNNYXhkUFQ4OVBkeVhrV0FadGdCU1Y1RXNXZ2lMdy8ySVlXMEYyNDFibjdUTERGUDlZS0dYT0t6a1BMbTlNNkNNZ3pXVmp3RjFCdlR4R2loeGQrSkVLRTlDRVVQSVpZMkhxSTdScWd5bFRFZzlldmxXd2RlSWo0NWQ1MEFFcHM4eTFKSnRVbTR4UElKcVQ1Y240K3lQRXB3UmkvYzNZc05FQ0tMdFY2QkFnUUlGQ2hRb1VLQkFnUUlGeU1IL0FXTk5hZFZpZFZnQkFBQUFBRWxGVGtTdVFtQ0MnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidiYXNpYycsXHJcbn1cclxuY29uc3QgamF2YVNjcmlwdD17XHJcbiAgICBza2lsbFRpdGxlOidKYXZhU2NyaXB0JyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vYmxvZy5rYWthb2Nkbi5uZXQvZG4vbFJSQVEvYnRxeVFNdU5KOGsvMDhudmZ5SEh2OTdUVjdURWFyNVlyay9pbWcucG5nJyxcclxuICAgIHNraWxsQWJpbGl0eTonanVuaW9yfnNlbmlvcicsXHJcbn1cclxuY29uc3QgdHlwZVNjcmlwdD17XHJcbiAgICBza2lsbFRpdGxlOidUeXBlU2NyaXB0JyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vaW1nMS5kYXVtY2RuLm5ldC90aHVtYi9SODAweDAvP3Njb2RlPW10aXN0b3J5MiZmbmFtZT1odHRwcyUzQSUyRiUyRmJsb2cua2FrYW9jZG4ubmV0JTJGZG4lMkZsZ1pZSCUyRmJ0cUFjTUdpQ3cyJTJGbU5KczRSNWdqTnJCT0o0cVltclRnMSUyRmltZy5qcGcnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidqdW5pb3InLFxyXG59XHJcbmNvbnN0IG5vZGU9e1xyXG4gICAgc2tpbGxUaXRsZTonTm9kZS5qcycsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL3VzZWZ1bGFuZ2xlLmNvbS9pbWcvdGh1bWIvbm9kZWpzLnBuZycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2Jhc2ljfmp1bmlvcicsXHJcbn1cclxuY29uc3QgcmVhY3Q9e1xyXG4gICAgc2tpbGxUaXRsZTonUmVhY3QnLFxyXG4gICAgc2tpbGxJbWFnZTonaHR0cHM6Ly9taXJvLm1lZGl1bS5jb20vbWF4LzYwMC8xKmpucVhMNFEtaVcwcXhvZEZEVHh5RlEuanBlZycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2Jhc2ljfmp1bmlvcicsXHJcbn1cclxuY29uc3QgbW9uZ29kYj17XHJcbiAgICBza2lsbFRpdGxlOidtb25nb2RiJyxcclxuICAgIHNraWxsSW1hZ2U6J2h0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjUjlhc1JEdGhEeGRMa2ZibmlyTm9kSjRYQVpzdXd4OG9rNXJBJnVzcXA9Q0FVJyxcclxuICAgIHNraWxsQWJpbGl0eTonYmFzaWMnLFxyXG59XHJcbmNvbnN0IEM9e1xyXG4gICAgc2tpbGxUaXRsZTonQycsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL2Jsb2cua2FrYW9jZG4ubmV0L2RuL2Q1VkpDQy9idHF5NlR0d25MYS9QWkpSa0RFYWdDRnBNRGk4TXIwQnMwL2ltZy5wbmcnLFxyXG4gICAgc2tpbGxBYmlsaXR5OidiYXNpYycsXHJcbn1cclxuY29uc3QgaHRtbENzcz17XHJcbiAgICBza2lsbFRpdGxlOidIVE1ML0NTUycsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL2ltZzEuZGF1bWNkbi5uZXQvdGh1bWIvUjgwMHgwLz9zY29kZT1tdGlzdG9yeTImZm5hbWU9aHR0cHMlM0ElMkYlMkZibG9nLmtha2FvY2RuLm5ldCUyRmRuJTJGSFl4ejIlMkZidHF6eTZ5MUZyQSUyRnppaWZ5VnFmWVFPNE5oWHBuZ3hXcmslMkZpbWcuanBnJyxcclxuICAgIHNraWxsQWJpbGl0eTonSnVuaW9yflNlbmlvcicsXHJcbn1cclxuY29uc3Qgc2Y9e1xyXG4gICAgc2tpbGxUaXRsZTonU3ByaW5nIEZyYW1lV29yaycsXHJcbiAgICBza2lsbEltYWdlOidodHRwczovL3BlcmZlY3RhY2xlLmdpdGh1Yi5pby9pbWFnZXMvc3ByaW5nLWRpLXYxL3RodW1iLnBuZycsXHJcbiAgICBza2lsbEFiaWxpdHk6J2p1bmlvcidcclxufVxyXG5cclxuY29uc3QgTWluaUdhbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBteXNxbD11c2VTdGF0ZShteVNxbClcclxuICAgIGNvbnN0IGpzPXVzZVN0YXRlKGphdmFTY3JpcHQpXHJcbiAgICBjb25zdCBqYXZhPXVzZVN0YXRlKGphdmEpXHJcbiAgICBjb25zdCBodG1sY3NzPXVzZVN0YXRlKGh0bWxDc3MpXHJcbiAgICBjb25zdCBub2RlPXVzZVN0YXRlKG5vZGUpXHJcbiAgICBjb25zdCB0cz11c2VTdGF0ZSh0eXBlU2NyaXB0KVxyXG4gICAgY29uc3QgbW9uZ289dXNlU3RhdGUobW9uZ29kYilcclxuICAgIGNvbnN0IHJlYWN0PXVzZVN0YXRlKHJlYWN0KVxyXG4gICAgY29uc3Qgc2Y9dXNlU3RhdGUoc2YpXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk1pbmlHYW1lPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlRoaXMgaXMgbXkgcG9ydGZvbGlvIDwvaDE+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImdhbWVTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9haGFoMTJrLmNhZmUyNC5jb20vcHRwMi9cInRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGgyIGNsYXNzTmFtZT1cImdhbWVUaXRsZVwiPkZpbmQgeW91ciBCcmVhdGgoT3JpZ2luKSAoT25seSBtb2JpbGUpPC9oMj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbGFpblBvcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17aHRtbGNzc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtteXNxbH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtqYXZhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQgc2V0U2tpbGw9e3NmfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7ilrxDaGFuZ2VzIHRvIFJlYWN04pa8PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17cmVhY3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZCBzZXRTa2lsbD17bm9kZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXt0c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkIHNldFNraWxsPXtqc30vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9sXCI+PGE+Q2hhbmdlIHRvIFJlYWN0IEJyZWF0aDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9haGFoMTJrLmNhZmUyNC5jb20vcHRwMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxoMiBjbGFzc05hbWU9XCJnYW1lVGl0bGVcIj5GaW5kIHlvdXIgTE9MIGNoYXJhY3RlcjwvaDI+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGxhaW5Qb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxDYXJkLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsQ2FyZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbENhcmQvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5pdCB3aWxsIGJlIHVwZGF0ZSB0byBSZWFjdCBvciBSZWFjdCtUeXBlc2NyaXB0PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgKVxyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICAgIHNldFNraWxsOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLm9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUdhbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==