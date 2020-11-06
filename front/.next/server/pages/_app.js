module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_app.css":
/*!******************!*\
  !*** ./_app.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_app.css */ "./_app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configure */ "./store/configure.js");


var _jsxFileName = "D:\\PTPR1\\front\\pages\\_app.js";







const Base = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "title"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

Base.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configure__WEBPACK_IMPORTED_MODULE_6__["default"].withRedux(Base));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review */ "./reducers/review.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./reducers/store.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  //reducer 합쳐주는 redux메서드
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        //this is for after serverside-rendering
        console.log('i came here hydrate');
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        console.log('i came here case:default');
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  Reviews: _review__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/review.js":
/*!****************************!*\
  !*** ./reducers/review.js ***!
  \****************************/
/*! exports provided: initialState, LOAD_REVIEWS_REQUEST, LOAD_REVIEWS_SUCCESS, LOAD_REVIEWS_FAILURE, ADD_REVIEWS_REQUEST, ADD_REVIEWS_SUCCESS, ADD_REVIEWS_FAILURE, REMOVE_REVIEWS_REQUEST, REMOVE_REVIEWS_SUCCESS, REMOVE_REVIEWS_FAILURE, addReviews, dummpyReviewFaker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS_REQUEST", function() { return LOAD_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS_SUCCESS", function() { return LOAD_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_REVIEWS_FAILURE", function() { return LOAD_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEWS_REQUEST", function() { return ADD_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEWS_SUCCESS", function() { return ADD_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_REVIEWS_FAILURE", function() { return ADD_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_REVIEWS_REQUEST", function() { return REMOVE_REVIEWS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_REVIEWS_SUCCESS", function() { return REMOVE_REVIEWS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_REVIEWS_FAILURE", function() { return REMOVE_REVIEWS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReviews", function() { return addReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummpyReviewFaker", function() { return dummpyReviewFaker; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainReview: [],
  imagePaths: [],
  loadReviewLoading: false,
  loadReviewDone: false,
  loadReviewError: null,
  addReviewLoading: false,
  addReviewDone: false,
  addReviewError: null,
  removeReviewLoading: false,
  removeReviewDone: false,
  removeReviewError: null //todo remove is not develop now

};
const LOAD_REVIEWS_REQUEST = 'LOAD_REVIEWS_REQUEST';
const LOAD_REVIEWS_SUCCESS = 'LOAD_REVIEWS_SUCCESS';
const LOAD_REVIEWS_FAILURE = 'LOAD_REVIEWS_FAILURE';
const ADD_REVIEWS_REQUEST = 'ADD_REVIEWS_REQUEST';
const ADD_REVIEWS_SUCCESS = 'ADD_REVIEWS_SUCCESS';
const ADD_REVIEWS_FAILURE = 'ADD_REVIEWS_FAILURE';
const REMOVE_REVIEWS_REQUEST = 'REMOVE_REVIEWS_REQUEST';
const REMOVE_REVIEWS_SUCCESS = 'REMOVE_REVIEWS_SUCCESS';
const REMOVE_REVIEWS_FAILURE = 'REMOVE_REVIEWS_FAILURE';
const addReviews = data => ({
  type: ADD_REVIEWS_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    name: 'hyeon'
  },
  Images: []
});

const dummpyReviewFaker = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  user: {
    id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
    name: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }]
}));

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case LOAD_REVIEWS_REQUEST:
      // load the review of store
      draft.loadReviewLoading = true;
      draft.loadReviewDone = false;
      draft.loadReviewError = null;
      break;

    case LOAD_REVIEWS_REQUEST:
      draft.loadReviewLoading = false;
      draft.loadReviewDone = true;
      draft.mainReview = action.data.concat(draft.mainReview);
      break;

    case LOAD_REVIEWS_FAILURE:
      draft.loadReviewLoading = false;
      draft.loadReviewError = action.error;
      break;

    case ADD_REVIEWS_REQUEST:
      // add the review of store
      draft.addReviewLoading = true;
      draft.addReviewDone = false;
      draft.addReviewError = null;
      break;

    case ADD_REVIEWS_REQUEST:
      draft.addReviewLoading = false;
      draft.addReviewDone = true;
      draft.mainReview = action.data.unshift(dummyPost(action.data));
      break;

    case ADD_REVIEWS_FAILURE:
      draft.addReviewLoading = false;
      draft.addReviewError = action.error;
      break;

    case REMOVE_REVIEWS_REQUEST:
      //remove the reviews
      draft.removeReviewLoading = true;
      draft.removeReviewDone = false;
      draft.removeReviewError = null;
      break;

    case REMOVE_REVIEWS_SUCCESS:
      draft.removeReviewLoading = false;
      draft.removeReviewDone = true;
      draft.mainReview = draft.mainReview.filter(v => v.id !== action.data);
      break;

    case REMOVE_REVIEWS_FAILURE:
      draft.removeReviewLoading = false;
      draft.removeReviewError = action.error;
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/store.js":
/*!***************************!*\
  !*** ./reducers/store.js ***!
  \***************************/
/*! exports provided: initialState, SIGNUP_STORE_REQUEST, SIGNUP_STORE_SUCCESS, SIGNUP_STORE_FAILURE, dummpyStoreFaker, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_REQUEST", function() { return SIGNUP_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_SUCCESS", function() { return SIGNUP_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_FAILURE", function() { return SIGNUP_STORE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummpyStoreFaker", function() { return dummpyStoreFaker; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  signupStoreLoading: false,
  signupStoreDone: false,
  signupStoreError: null
};
const SIGNUP_STORE_REQUEST = 'SIGNUP_STORE_REQUEST';
const SIGNUP_STORE_SUCCESS = 'SIGNUP_STORE_SUCCESS';
const SIGNUP_STORE_FAILURE = 'SIGNUP_STORE_FAILURE';
const dummpyStoreFaker = number => Array(number).fill().map(() => ({
  storeId: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
  storeName: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName(),
  storeAddress: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
}));

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    case SIGNUP_STORE_REQUEST:
      draft.signupStoreLoading = true;
      draft.signupStoreDone = false;
      draft.signupStoreError = null;
      break;

    case SIGNUP_STORE_SUCCESS:
      draft.signupStoreLoading = false;
      draft.signupStoreDone = true;
      break;

    case SIGNUP_STORE_FAILURE:
      draft.signupStoreLoading = false;
      draft.signupStoreError = action.error;
      break;

    default:
      return state;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, FOLLOW_STORE_REQUEST, FOLLOW_STORE_SUCCESS, FOLLOW_STORE_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, UNFOLLOW_STORE_REQUEST, UNFOLLOW_STORE_SUCCESS, UNFOLLOW_STORE_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_STORE_REQUEST", function() { return FOLLOW_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_STORE_SUCCESS", function() { return FOLLOW_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_STORE_FAILURE", function() { return FOLLOW_STORE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_STORE_REQUEST", function() { return UNFOLLOW_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_STORE_SUCCESS", function() { return UNFOLLOW_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_STORE_FAILURE", function() { return UNFOLLOW_STORE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  followStoreLoading: false,
  followStoreDone: false,
  followStoreError: null,
  unfollowStoreLoading: false,
  unfollowStoreDone: false,
  unfollowStoreError: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const FOLLOW_STORE_REQUEST = 'FOLLOW_STORE_REQUEST';
const FOLLOW_STORE_SUCCESS = 'FOLLOW_STORE_SUCCESS';
const FOLLOW_STORE_FAILURE = 'FOLLOW_STORE_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const UNFOLLOW_STORE_REQUEST = 'UNFOLLOW_STORE_REQUEST';
const UNFOLLOW_STORE_SUCCESS = 'UNFOLLOW_STORE_SUCCESS';
const UNFOLLOW_STORE_FAILURE = 'UNFOLLOW_STORE_FAILURE';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  isLoggedIn: false,
  name: 'test',
  id: 1,
  Reviews: [{
    id: 1
  }],
  FollowingStore: [{
    name: 'macdonald'
  }, {
    name: 'hansin'
  }, {
    name: 'dentist'
  }]
});

const dummyStore = data => _objectSpread(_objectSpread({}, data), {}, {
  storeId: 1,
  storeName: 'Store1',
  storeEmail: 'hihi@test.test',
  storeAddress: 'where is address',
  storePart: "hospital",
  followUser: []
});

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = initialState, action) => Object(_util_produce__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
  switch (action.type) {
    //store follow
    case FOLLOW_STORE_REQUEST:
      draft.followStoreLoading = true;
      draft.followStoreError = null;
      draft.followStoreDone = false;
      break;

    case FOLLOW_STORE_SUCCESS:
      draft.followStoreLoading = false;
      draft.followStoreDone = true;
      draft.me.FollowingStore.push({
        id: action.data
      });
      break;

    case FOLLOW_STORE_FAILURE:
      draft.followStoreError = action.error;
      draft.followStoreLoading = false;
      break;
    //store unfollow

    case UNFOLLOW_STORE_REQUEST:
      draft.unfollowStoreLoading = true;
      draft.unfollowStoreError = null;
      draft.unfollowStoreDone = false;
      break;

    case UNFOLLOW_STORE_SUCCESS:
      draft.unfollowStoreLoading = false;
      draft.unfollowStoreDone = true;
      draft.me.FollowingStore = draft.me.FollowingStore.filter(v => v.id !== action.data);
      break;

    case UNFOLLOW_STORE_FAILURE:
      draft.unfollowStoreError = action.error;
      draft.unfollowStoreLoading = false;
      break;
    //signup user

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpError = action.error;
      draft.signUpLoading = false;
      break;
    //login

    case LOG_IN_REQUEST:
      console.log('here is login request from reducer');
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      console.log('here is login success from reducer');
      draft.logInLoading = false;
      draft.me = dummyUser(action.data);
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;
    //logout

    case LOG_OUT_REQUEST:
      console.log('here is logout request');
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      console.log('here is logout success bye~');
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./saga/index.js":
/*!***********************!*\
  !*** ./saga/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review */ "./saga/review.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./saga/user.js");



function* rootSaga() {
  console.log('i came rootsaga~ index');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_review__WEBPACK_IMPORTED_MODULE_1__["default"])]);
}

/***/ }),

/***/ "./saga/review.js":
/*!************************!*\
  !*** ./saga/review.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/review */ "./reducers/review.js");




function loadReviewsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/Reviews', data);
}

function* loadReviews(action) {
  try {
    // const result = yield call(loadReviewsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEWS_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function addReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/Review', data);
}

function* addReview(action) {
  try {
    // const result = yield call(addReviewAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    const id = shortId.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEWS_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function removeReviewAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete('/api/Review', data);
}

function* removeReview(action) {
  try {
    // const result = yield call(removeReviewAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["REMOVE_REVIEWS_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_review__WEBPACK_IMPORTED_MODULE_2__["REMOVE_REVIEWS_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_review__WEBPACK_IMPORTED_MODULE_2__["LOAD_REVIEWS_REQUEST"], loadReviews);
}

function* watchAddReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["ADD_REVIEWS_REQUEST"], addReview);
}

function* watchRemoveReviews() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_review__WEBPACK_IMPORTED_MODULE_2__["REMOVE_REVIEWS_REQUEST"], removeReview);
}

function* ReviewSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddReviews), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadReviews), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemoveReviews)]);
}

/***/ }),

/***/ "./saga/user.js":
/*!**********************!*\
  !*** ./saga/user.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn i came here'); // const result = yield call(logInAPI);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.log('it occur login error');
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3065/user', data);
}

function* signUp(action) {
  try {
    console.log('i came saga');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followStoreAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/followStore');
}

function* followStore(action) {
  try {
    // const result = yield call(followStoreAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_STORE_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_STORE_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowStoreAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/unfollowStore');
}

function* unfollowStore(action) {
  try {
    // const result = yield call(unfollowStoreAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_STORE_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_STORE_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchStoreUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_STORE_REQUEST"], unfollowStore);
}

function* watchStoreFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_STORE_REQUEST"], followStore);
}

function* watchLogIn() {
  console.log('here is watchLogin saga');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchStoreFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchStoreUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configure.js":
/*!****************************!*\
  !*** ./store/configure.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../saga */ "./saga/index.js");







const configure = context => {
  console.log(context);
  console.log('here is configure store');
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware]; //배열로 빼서 여기에 saga나 thunk가 들어감

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)); //redux dev tools usage tool and use only develop mode

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configure, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./util/produce.js":
/*!*************************!*\
  !*** ./util/produce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((...args) => {
  Object(immer__WEBPACK_IMPORTED_MODULE_0__["enableES5"])();
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["produce"])(...args);
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2EvcmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NhZ2EvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJCYXNlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiUmV2aWV3cyIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwibWFpblJldmlldyIsImltYWdlUGF0aHMiLCJsb2FkUmV2aWV3TG9hZGluZyIsImxvYWRSZXZpZXdEb25lIiwibG9hZFJldmlld0Vycm9yIiwiYWRkUmV2aWV3TG9hZGluZyIsImFkZFJldmlld0RvbmUiLCJhZGRSZXZpZXdFcnJvciIsInJlbW92ZVJldmlld0xvYWRpbmciLCJyZW1vdmVSZXZpZXdEb25lIiwicmVtb3ZlUmV2aWV3RXJyb3IiLCJMT0FEX1JFVklFV1NfUkVRVUVTVCIsIkxPQURfUkVWSUVXU19TVUNDRVNTIiwiTE9BRF9SRVZJRVdTX0ZBSUxVUkUiLCJBRERfUkVWSUVXU19SRVFVRVNUIiwiQUREX1JFVklFV1NfU1VDQ0VTUyIsIkFERF9SRVZJRVdTX0ZBSUxVUkUiLCJSRU1PVkVfUkVWSUVXU19SRVFVRVNUIiwiUkVNT1ZFX1JFVklFV1NfU1VDQ0VTUyIsIlJFTU9WRV9SRVZJRVdTX0ZBSUxVUkUiLCJhZGRSZXZpZXdzIiwiZGF0YSIsImR1bW15UG9zdCIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuYW1lIiwiSW1hZ2VzIiwiZHVtbXB5UmV2aWV3RmFrZXIiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJmYWtlciIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJzcmMiLCJpbWFnZSIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2Iiwic2lnbnVwU3RvcmVMb2FkaW5nIiwic2lnbnVwU3RvcmVEb25lIiwic2lnbnVwU3RvcmVFcnJvciIsIlNJR05VUF9TVE9SRV9SRVFVRVNUIiwiU0lHTlVQX1NUT1JFX1NVQ0NFU1MiLCJTSUdOVVBfU1RPUkVfRkFJTFVSRSIsImR1bW1weVN0b3JlRmFrZXIiLCJzdG9yZUlkIiwic3RvcmVOYW1lIiwic3RvcmVBZGRyZXNzIiwiZm9sbG93U3RvcmVMb2FkaW5nIiwiZm9sbG93U3RvcmVEb25lIiwiZm9sbG93U3RvcmVFcnJvciIsInVuZm9sbG93U3RvcmVMb2FkaW5nIiwidW5mb2xsb3dTdG9yZURvbmUiLCJ1bmZvbGxvd1N0b3JlRXJyb3IiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkZPTExPV19TVE9SRV9SRVFVRVNUIiwiRk9MTE9XX1NUT1JFX1NVQ0NFU1MiLCJGT0xMT1dfU1RPUkVfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlVORk9MTE9XX1NUT1JFX1JFUVVFU1QiLCJVTkZPTExPV19TVE9SRV9TVUNDRVNTIiwiVU5GT0xMT1dfU1RPUkVfRkFJTFVSRSIsImR1bW15VXNlciIsImlzTG9nZ2VkSW4iLCJGb2xsb3dpbmdTdG9yZSIsImR1bW15U3RvcmUiLCJzdG9yZUVtYWlsIiwic3RvcmVQYXJ0IiwiZm9sbG93VXNlciIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJwdXNoIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsImxvZ0luRG9uZSIsImxvZ091dExvYWRpbmciLCJsb2dPdXRFcnJvciIsImxvZ091dERvbmUiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsIlJldmlld1NhZ2EiLCJsb2FkUmV2aWV3c0FQSSIsImF4aW9zIiwiZ2V0IiwibG9hZFJldmlld3MiLCJkZWxheSIsInB1dCIsImVyciIsInJlc3BvbnNlIiwiYWRkUmV2aWV3QVBJIiwicG9zdCIsImFkZFJldmlldyIsInJlbW92ZVJldmlld0FQSSIsImRlbGV0ZSIsInJlbW92ZVJldmlldyIsIndhdGNoTG9hZFJldmlld3MiLCJ0aHJvdHRsZSIsIndhdGNoQWRkUmV2aWV3cyIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVJldmlld3MiLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwicmVzdWx0IiwiY2FsbCIsImZvbGxvd1N0b3JlQVBJIiwiZm9sbG93U3RvcmUiLCJ1bmZvbGxvd1N0b3JlQVBJIiwidW5mb2xsb3dTdG9yZSIsIndhdGNoU3RvcmVVbmZvbGxvdyIsIndhdGNoU3RvcmVGb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImNvbmZpZ3VyZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFyZ3MiLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICcuLi9fYXBwLmNzcydcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVwiO1xyXG5jb25zdCBCYXNlID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+dGl0bGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5CYXNlLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCggQmFzZSk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4vcmV2aWV3JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7Ly9yZWR1Y2VyIO2VqeyzkOyjvOuKlCByZWR1eOuplOyEnOuTnFxyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTovL3RoaXMgaXMgZm9yIGFmdGVyIHNlcnZlcnNpZGUtcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaSBjYW1lIGhlcmUgaHlkcmF0ZScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpIGNhbWUgaGVyZSBjYXNlOmRlZmF1bHQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgUmV2aWV3cyxcclxuICAgIHN0b3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gXCJzaG9ydGlkXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgbWFpblJldmlldzpbXSxcclxuICAgIGltYWdlUGF0aHM6W10sXHJcbiAgICBsb2FkUmV2aWV3TG9hZGluZzpmYWxzZSxcclxuICAgIGxvYWRSZXZpZXdEb25lOmZhbHNlLFxyXG4gICAgbG9hZFJldmlld0Vycm9yOm51bGwsXHJcbiAgICBhZGRSZXZpZXdMb2FkaW5nOmZhbHNlLFxyXG4gICAgYWRkUmV2aWV3RG9uZTpmYWxzZSxcclxuICAgIGFkZFJldmlld0Vycm9yOm51bGwsXHJcbiAgICByZW1vdmVSZXZpZXdMb2FkaW5nOmZhbHNlLFxyXG4gICAgcmVtb3ZlUmV2aWV3RG9uZTpmYWxzZSxcclxuICAgIHJlbW92ZVJldmlld0Vycm9yOm51bGwsLy90b2RvIHJlbW92ZSBpcyBub3QgZGV2ZWxvcCBub3dcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVWSUVXU19SRVFVRVNUPSdMT0FEX1JFVklFV1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFVklFV1NfU1VDQ0VTUz0nTE9BRF9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRVZJRVdTX0ZBSUxVUkU9J0xPQURfUkVWSUVXU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUkVWSUVXU19SRVFVRVNUPSdBRERfUkVWSUVXU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVZJRVdTX1NVQ0NFU1M9J0FERF9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1JFVklFV1NfRkFJTFVSRT0nQUREX1JFVklFV1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1JFVklFV1NfUkVRVUVTVD0nUkVNT1ZFX1JFVklFV1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUkVWSUVXU19TVUNDRVNTPSdSRU1PVkVfUkVWSUVXU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9SRVZJRVdTX0ZBSUxVUkU9J1JFTU9WRV9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZXZpZXdzPShkYXRhKT0+KHtcclxuICAgIHR5cGU6QUREX1JFVklFV1NfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcbmNvbnN0IGR1bW15UG9zdD0oZGF0YSk9Pih7XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5hbWU6J2h5ZW9uJ1xyXG4gICAgfSxcclxuICAgIEltYWdlczpbXVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW1weVJldmlld0Zha2VyPShudW1iZXIpPT5BcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCk9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgdXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH1dLFxyXG59KSlcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX1JFVklFV1NfUkVRVUVTVDovLyBsb2FkIHRoZSByZXZpZXcgb2Ygc3RvcmVcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUkVWSUVXU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblJldmlldz1hY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblJldmlldyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9SRVZJRVdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfUkVWSUVXU19SRVFVRVNUOi8vIGFkZCB0aGUgcmV2aWV3IG9mIHN0b3JlXHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0xvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUkVWSUVXU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdEb25lPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5SZXZpZXc9YWN0aW9uLmRhdGEudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1JFVklFV1NfUkVRVUVTVDovL3JlbW92ZSB0aGUgcmV2aWV3c1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1JFVklFV1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblJldmlldyA9IGRyYWZ0Lm1haW5SZXZpZXcuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1JFVklFV1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgc2lnbnVwU3RvcmVMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnbnVwU3RvcmVEb25lOmZhbHNlLFxyXG4gICAgc2lnbnVwU3RvcmVFcnJvcjpudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NUT1JFX1JFUVVFU1Q9J1NJR05VUF9TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NUT1JFX1NVQ0NFU1M9J1NJR05VUF9TVE9SRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0lHTlVQX1NUT1JFX0ZBSUxVUkU9J1NJR05VUF9TVE9SRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGR1bW1weVN0b3JlRmFrZXI9KG51bWJlcik9PkFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKT0+KHtcclxuICAgIHN0b3JlSWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgc3RvcmVOYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIHN0b3JlQWRkcmVzczpmYWtlci5uYW1lLmZpbmROYW1lKClcclxufSkpXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0lHTlVQX1NUT1JFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ251cFN0b3JlTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ251cFN0b3JlRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOVVBfU1RPUkVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbnVwU3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOVVBfU1RPUkVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbnVwU3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBmb2xsb3dTdG9yZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dTdG9yZURvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dTdG9yZUVycm9yOm51bGwsXHJcbiAgICB1bmZvbGxvd1N0b3JlTG9hZGluZzpmYWxzZSxcclxuICAgIHVuZm9sbG93U3RvcmVEb25lOmZhbHNlLFxyXG4gICAgdW5mb2xsb3dTdG9yZUVycm9yOm51bGwsXHJcbiAgICBsb2dpbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dpbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dpbkVycm9yOm51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPSdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPSdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPSdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9J0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz0nTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPSdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1JFUVVFU1Q9J0ZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1NVQ0NFU1M9J0ZPTExPV19TVE9SRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX0ZBSUxVUkU9J0ZPTExPV19TVE9SRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVD0nU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTPSdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkU9J1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVE9SRV9SRVFVRVNUPSdVTkZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUz0nVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NUT1JFX0ZBSUxVUkU9J1VORk9MTE9XX1NUT1JFX0ZBSUxVUkUnXHJcblxyXG5jb25zdCBkdW1teVVzZXI9KGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICBuYW1lOid0ZXN0JyxcclxuICAgIGlkOjEsXHJcbiAgICBSZXZpZXdzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nU3RvcmU6W3tuYW1lOidtYWNkb25hbGQnfSx7bmFtZTonaGFuc2luJ30se25hbWU6J2RlbnRpc3QnfV0sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVN0b3JlPShkYXRhKT0+KHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBzdG9yZUlkOjEsXHJcbiAgICBzdG9yZU5hbWU6J1N0b3JlMScsXHJcbiAgICBzdG9yZUVtYWlsOidoaWhpQHRlc3QudGVzdCcsXHJcbiAgICBzdG9yZUFkZHJlc3M6J3doZXJlIGlzIGFkZHJlc3MnLFxyXG4gICAgc3RvcmVQYXJ0OlwiaG9zcGl0YWxcIixcclxuICAgIGZvbGxvd1VzZXI6W10sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuY29uc3QgcmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PnByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbi8vc3RvcmUgZm9sbG93XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1RPUkVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlRG9uZT10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdTdG9yZS5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVE9SRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbi8vc3RvcmUgdW5mb2xsb3dcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NUT1JFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dTdG9yZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5nU3RvcmU9ZHJhZnQubWUuRm9sbG93aW5nU3RvcmUuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVE9SRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4vL3NpZ251cCB1c2VyXHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vbG9naW5cclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZSBpcyBsb2dpbiByZXF1ZXN0IGZyb20gcmVkdWNlcicpXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgbG9naW4gc3VjY2VzcyBmcm9tIHJlZHVjZXInKVxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vbG9nb3V0XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGxvZ291dCByZXF1ZXN0JylcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgbG9nb3V0IHN1Y2Nlc3MgYnllficpXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgUmV2aWV3U2FnYSBmcm9tICcuL3Jldmlldyc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2kgY2FtZSByb290c2FnYX4gaW5kZXgnKTtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhSZXZpZXdTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQUREX1JFVklFV1NfRkFJTFVSRSxcclxuICAgIEFERF9SRVZJRVdTX1JFUVVFU1QsXHJcbiAgICBBRERfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgTE9BRF9SRVZJRVdTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1JFVklFV1NfUkVRVUVTVCxcclxuICAgIExPQURfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1JFVklFV1NfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9SRVZJRVdTX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUkVWSUVXU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFJldmlld3NBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9SZXZpZXdzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUmV2aWV3cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUmV2aWV3c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUmV2aWV3QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL1JldmlldycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUmV2aWV3KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFJldmlld0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9SRVZJRVdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFVklFV1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL1JldmlldycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUmV2aWV3KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVJldmlld0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9SRVZJRVdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9SRVZJRVdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmV2aWV3cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUkVWSUVXU19SRVFVRVNULCBsb2FkUmV2aWV3cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFJldmlld3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9SRVZJRVdTX1JFUVVFU1QsIGFkZFJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVJldmlld3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9SRVZJRVdTX1JFUVVFU1QsIHJlbW92ZVJldmlldyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBSZXZpZXdTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUmV2aWV3cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRSZXZpZXdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUmV2aWV3cylcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0e1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1NUT1JFX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfU1RPUkVfU1VDQ0VTUyxcclxuICAgIEZPTExPV19TVE9SRV9GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfU1RPUkVfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NUT1JFX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19TVE9SRV9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFXHJcbn1mcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dJbiBpIGNhbWUgaGVyZScpO1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpdCBvY2N1ciBsb2dpbiBlcnJvcicpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyJyxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2kgY2FtZSBzYWdhJylcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6cmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBmb2xsb3dTdG9yZUFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvd1N0b3JlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3dTdG9yZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dTdG9yZUFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NUT1JFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVE9SRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93U3RvcmVBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvd1N0b3JlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvd1N0b3JlKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93U3RvcmVBUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NUT1JFX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NUT1JFX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFN0b3JlVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1NUT1JFX1JFUVVFU1QsIHVuZm9sbG93U3RvcmUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTdG9yZUZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1NUT1JFX1JFUVVFU1QsIGZvbGxvd1N0b3JlKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnaGVyZSBpcyB3YXRjaExvZ2luIHNhZ2EnKVxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaFN0b3JlRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoU3RvcmVVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2EnO1xyXG5cclxuY29uc3QgY29uZmlndXJlID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgY29uc29sZS5sb2coJ2hlcmUgaXMgY29uZmlndXJlIHN0b3JlJyk7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07Ly/rsLDsl7TroZwg67m87IScIOyXrOq4sOyXkCBzYWdh64KYIHRodW5r6rCAIOuTpOyWtOqwkFxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKFxyXG4gICAgICAgICAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpLFxyXG4gICAgICAgICk7Ly9yZWR1eCBkZXYgdG9vbHMgdXNhZ2UgdG9vbCBhbmQgdXNlIG9ubHkgZGV2ZWxvcCBtb2RlXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZSwgeyBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsImltcG9ydCB7IGVuYWJsZUVTNSwgcHJvZHVjZSB9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJcbiAgICBlbmFibGVFUzUoKTtcclxuICAgIHJldHVybiBwcm9kdWNlKC4uLmFyZ3MpO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZha2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==