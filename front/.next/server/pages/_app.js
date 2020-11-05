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
/* harmony import */ var _store_configure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/configure */ "./store/configure.js");


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
/* harmony default export */ __webpack_exports__["default"] = (_store_configure__WEBPACK_IMPORTED_MODULE_7__["default"].withRedux(Base));

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
/*! exports provided: initialState, LOAD_REVIEWS_REQUEST, LOAD_REVIEWS_SUCCESS, LOAD_REVIEWS_FAILURE, ADD_REVIEWS_REQUEST, ADD_REVIEWS_SUCCESS, ADD_REVIEWS_FAILURE, REMOVE_REVIEWS_REQUEST, REMOVE_REVIEWS_SUCCESS, REMOVE_REVIEWS_FAILURE, addReviews, default */
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
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

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
  removeReviewError: null
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
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  signupStoreLoading: false,
  signupStoreDone: false,
  signupStoreError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, FOLLOW_STORE_REQUEST, FOLLOW_STORE_SUCCESS, FOLLOW_STORE_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, UNFOLLOW_STORE_REQUEST, UNFOLLOW_STORE_SUCCESS, UNFOLLOW_STORE_FAILURE, loginRequestAction, logoutRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_REQUEST", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_SUCCESS", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_USER_FAILURE", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_REQUEST", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_SUCCESS", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_USER_FAILURE", function() { return FOLLOW_USER_FAILURE; });
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
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
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
const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
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
  }],
  FollowingUser: [{
    name: 'su'
  }, {
    name: 'hn'
  }, {
    name: 'dtttt'
  }],
  FollowerUser: [{
    name: 'suyomi'
  }, {
    name: 'backjong'
  }, {
    name: 'shef'
  }]
});

const dummyUser2 = data => _objectSpread(_objectSpread({}, data), {}, {
  isLoggedIn: false,
  name: 'test2',
  id: 2,
  Reviews: [{
    id: 1
  }],
  FollowingStore: [{
    name: 'lonald'
  }, {
    name: 'hansin'
  }, {
    name: 'dentist'
  }],
  FollowingUser: [{
    name: 'sudf'
  }, {
    name: 'hn'
  }, {
    name: 'dtttt'
  }],
  FollowerUser: [{
    name: 'yomi'
  }, {
    name: 'b100'
  }, {
    name: 'shef'
  }]
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
    //user follow
    case FOLLOW_USER_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_USER_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.me.FollowingUser.push({
        id: action.data
      });
      break;

    case FOLLOW_USER_FAILURE:
      draft.followError = action.error;
      draft.followLoading = false;
      break;
    //user unfollow

    case UNFOLLOW_USER_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_USER_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.me.FollowingUser = draft.me.FollowerUser.filter(v => v.id !== action.data);
      break;

    case UNFOLLOW_USER_FAILURE:
      draft.unfollowError = action.error;
      draft.unfollowLoading = false;
      break;
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
      console.log('here is login request');
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      console.log('here is login success');
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
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");





const configure = context => {
  console.log(context);
  console.log('here is configure store');
  const middlewares = []; //배열로 빼서 여기에 saga나 thunk가 들어감

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)); //redux dev tools usage tool and use only develop mode

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJCYXNlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiUmV2aWV3cyIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwibWFpblJldmlldyIsImltYWdlUGF0aHMiLCJsb2FkUmV2aWV3TG9hZGluZyIsImxvYWRSZXZpZXdEb25lIiwibG9hZFJldmlld0Vycm9yIiwiYWRkUmV2aWV3TG9hZGluZyIsImFkZFJldmlld0RvbmUiLCJhZGRSZXZpZXdFcnJvciIsInJlbW92ZVJldmlld0xvYWRpbmciLCJyZW1vdmVSZXZpZXdEb25lIiwicmVtb3ZlUmV2aWV3RXJyb3IiLCJMT0FEX1JFVklFV1NfUkVRVUVTVCIsIkxPQURfUkVWSUVXU19TVUNDRVNTIiwiTE9BRF9SRVZJRVdTX0ZBSUxVUkUiLCJBRERfUkVWSUVXU19SRVFVRVNUIiwiQUREX1JFVklFV1NfU1VDQ0VTUyIsIkFERF9SRVZJRVdTX0ZBSUxVUkUiLCJSRU1PVkVfUkVWSUVXU19SRVFVRVNUIiwiUkVNT1ZFX1JFVklFV1NfU1VDQ0VTUyIsIlJFTU9WRV9SRVZJRVdTX0ZBSUxVUkUiLCJhZGRSZXZpZXdzIiwiZGF0YSIsImR1bW15UG9zdCIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuYW1lIiwiSW1hZ2VzIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJzaWdudXBTdG9yZUxvYWRpbmciLCJzaWdudXBTdG9yZURvbmUiLCJzaWdudXBTdG9yZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJmb2xsb3dTdG9yZUxvYWRpbmciLCJmb2xsb3dTdG9yZURvbmUiLCJmb2xsb3dTdG9yZUVycm9yIiwidW5mb2xsb3dTdG9yZUxvYWRpbmciLCJ1bmZvbGxvd1N0b3JlRG9uZSIsInVuZm9sbG93U3RvcmVFcnJvciIsImxvZ2luTG9hZGluZyIsImxvZ2luRG9uZSIsImxvZ2luRXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiVU5GT0xMT1dfVVNFUl9SRVFVRVNUIiwiVU5GT0xMT1dfVVNFUl9TVUNDRVNTIiwiVU5GT0xMT1dfVVNFUl9GQUlMVVJFIiwiRk9MTE9XX1VTRVJfUkVRVUVTVCIsIkZPTExPV19VU0VSX1NVQ0NFU1MiLCJGT0xMT1dfVVNFUl9GQUlMVVJFIiwiRk9MTE9XX1NUT1JFX1JFUVVFU1QiLCJGT0xMT1dfU1RPUkVfU1VDQ0VTUyIsIkZPTExPV19TVE9SRV9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiVU5GT0xMT1dfU1RPUkVfUkVRVUVTVCIsIlVORk9MTE9XX1NUT1JFX1NVQ0NFU1MiLCJVTkZPTExPV19TVE9SRV9GQUlMVVJFIiwiZHVtbXlVc2VyIiwiaXNMb2dnZWRJbiIsIkZvbGxvd2luZ1N0b3JlIiwiRm9sbG93aW5nVXNlciIsIkZvbGxvd2VyVXNlciIsImR1bW15VXNlcjIiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicHVzaCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJsb2dPdXREb25lIiwiY29uZmlndXJlIiwiY29udGV4dCIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsImNyZWF0ZVN0b3JlIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwiYXJncyIsImVuYWJsZUVTNSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7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SixDQURFLENBRnpCLENBSjJCLENBUXJCOztBQUNOLFFBQU1wRyxLQUFLLEdBQUd5Ryx5REFBVyxDQUFDM0UsaURBQUQsRUFBVXVFLFFBQVYsQ0FBekI7QUFDQSxTQUFPckcsS0FBUDtBQUNILENBWEQ7O0FBYUEsTUFBTWQsT0FBTyxHQUFHd0gsd0VBQWEsQ0FBQ1IsU0FBRCxFQUFZO0FBQUVTLE9BQUs7QUFBUCxDQUFaLENBQTdCO0FBRWV6SCxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFFZSxnRUFBQyxHQUFHMEgsSUFBSixLQUFhO0FBQ3hCQyx5REFBUztBQUNULFNBQU85RSxxREFBTyxDQUFDLEdBQUc2RSxJQUFKLENBQWQ7QUFDSCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0ICcuLi9fYXBwLmNzcydcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVwiO1xyXG5jb25zdCBCYXNlID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+dGl0bGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5CYXNlLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCggQmFzZSk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4vcmV2aWV3JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7Ly9yZWR1Y2VyIO2VqeyzkOyjvOuKlCByZWR1eOuplOyEnOuTnFxyXG4gICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgSFlEUkFURTovL3RoaXMgaXMgZm9yIGFmdGVyIHNlcnZlcnNpZGUtcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaSBjYW1lIGhlcmUgaHlkcmF0ZScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpIGNhbWUgaGVyZSBjYXNlOmRlZmF1bHQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgUmV2aWV3cyxcclxuICAgIHN0b3JlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIG1haW5SZXZpZXc6W10sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG4gICAgbG9hZFJldmlld0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2FkUmV2aWV3RG9uZTpmYWxzZSxcclxuICAgIGxvYWRSZXZpZXdFcnJvcjpudWxsLFxyXG4gICAgYWRkUmV2aWV3TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZFJldmlld0RvbmU6ZmFsc2UsXHJcbiAgICBhZGRSZXZpZXdFcnJvcjpudWxsLFxyXG4gICAgcmVtb3ZlUmV2aWV3TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVJldmlld0RvbmU6ZmFsc2UsXHJcbiAgICByZW1vdmVSZXZpZXdFcnJvcjpudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRVZJRVdTX1JFUVVFU1Q9J0xPQURfUkVWSUVXU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVWSUVXU19TVUNDRVNTPSdMT0FEX1JFVklFV1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFVklFV1NfRkFJTFVSRT0nTE9BRF9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9SRVZJRVdTX1JFUVVFU1Q9J0FERF9SRVZJRVdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1JFVklFV1NfU1VDQ0VTUz0nQUREX1JFVklFV1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUkVWSUVXU19GQUlMVVJFPSdBRERfUkVWSUVXU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUkVWSUVXU19SRVFVRVNUPSdSRU1PVkVfUkVWSUVXU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9SRVZJRVdTX1NVQ0NFU1M9J1JFTU9WRV9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1JFVklFV1NfRkFJTFVSRT0nUkVNT1ZFX1JFVklFV1NfRkFJTFVSRSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJldmlld3M9KGRhdGEpPT4oe1xyXG4gICAgdHlwZTpBRERfUkVWSUVXU19SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuY29uc3QgZHVtbXlQb3N0PShkYXRhKT0+KHtcclxuICAgIGlkOmRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmFtZTonaHllb24nXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOltdXHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9SRVZJRVdTX1JFUVVFU1Q6Ly8gbG9hZCB0aGUgcmV2aWV3IG9mIHN0b3JlXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1JFVklFV1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdEb25lPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5SZXZpZXc9YWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5SZXZpZXcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUkVWSUVXU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQUREX1JFVklFV1NfUkVRVUVTVDovLyBhZGQgdGhlIHJldmlldyBvZiBzdG9yZVxyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0RvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0Vycm9yPW51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1JFVklFV1NfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3RG9uZT10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tYWluUmV2aWV3PWFjdGlvbi5kYXRhLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfUkVWSUVXU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIFJFTU9WRV9SRVZJRVdTX1JFUVVFU1Q6Ly9yZW1vdmUgdGhlIHJldmlld3NcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9SRVZJRVdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5SZXZpZXcgPSBkcmFmdC5tYWluUmV2aWV3LmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9SRVZJRVdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUmV2aWV3RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgc2lnbnVwU3RvcmVMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnbnVwU3RvcmVEb25lOmZhbHNlLFxyXG4gICAgc2lnbnVwU3RvcmVFcnJvcjpudWxsLFxyXG5cclxufVxyXG5cclxuY29uc3QgcmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnLi4vdXRpbC9wcm9kdWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgZm9sbG93TG9hZGluZzpmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjpudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgdW5mb2xsb3dEb25lOmZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjpudWxsLFxyXG4gICAgZm9sbG93U3RvcmVMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93U3RvcmVEb25lOmZhbHNlLFxyXG4gICAgZm9sbG93U3RvcmVFcnJvcjpudWxsLFxyXG4gICAgdW5mb2xsb3dTdG9yZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bmZvbGxvd1N0b3JlRG9uZTpmYWxzZSxcclxuICAgIHVuZm9sbG93U3RvcmVFcnJvcjpudWxsLFxyXG4gICAgbG9naW5Mb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9naW5Eb25lOmZhbHNlLFxyXG4gICAgbG9naW5FcnJvcjpudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjpudWxsLFxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVD0nTE9HX0lOX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUz0nTE9HX0lOX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRT0nTE9HX0lOX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUPSdMT0dfT1VUX1JFUVVFU1QnXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1M9J0xPR19PVVRfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRT0nTE9HX09VVF9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1VTRVJfUkVRVUVTVD0nVU5GT0xMT1dfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfVVNFUl9TVUNDRVNTPSdVTkZPTExPV19VU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19VU0VSX0ZBSUxVUkU9J1VORk9MTE9XX1VTRVJfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfVVNFUl9SRVFVRVNUPSdGT0xMT1dfVVNFUl9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1VTRVJfU1VDQ0VTUz0nRk9MTE9XX1VTRVJfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IEZPTExPV19VU0VSX0ZBSUxVUkU9J0ZPTExPV19VU0VSX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1JFUVVFU1Q9J0ZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1NVQ0NFU1M9J0ZPTExPV19TVE9SRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX0ZBSUxVUkU9J0ZPTExPV19TVE9SRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVD0nU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTPSdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkU9J1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVE9SRV9SRVFVRVNUPSdVTkZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUz0nVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NUT1JFX0ZBSUxVUkU9J1VORk9MTE9XX1NUT1JFX0ZBSUxVUkUnXHJcblxyXG5jb25zdCBkdW1teVVzZXI9KGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICBuYW1lOid0ZXN0JyxcclxuICAgIGlkOjEsXHJcbiAgICBSZXZpZXdzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nU3RvcmU6W3tuYW1lOidtYWNkb25hbGQnfSx7bmFtZTonaGFuc2luJ30se25hbWU6J2RlbnRpc3QnfV0sXHJcbiAgICBGb2xsb3dpbmdVc2VyOlt7bmFtZTonc3UnfSx7bmFtZTonaG4nfSx7bmFtZTonZHR0dHQnfV0sXHJcbiAgICBGb2xsb3dlclVzZXI6W3tuYW1lOidzdXlvbWknfSx7bmFtZTonYmFja2pvbmcnfSx7bmFtZTonc2hlZid9XSxcclxufSlcclxuY29uc3QgZHVtbXlVc2VyMj0oZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgaXNMb2dnZWRJbjpmYWxzZSxcclxuICAgIG5hbWU6J3Rlc3QyJyxcclxuICAgIGlkOjIsXHJcbiAgICBSZXZpZXdzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nU3RvcmU6W3tuYW1lOidsb25hbGQnfSx7bmFtZTonaGFuc2luJ30se25hbWU6J2RlbnRpc3QnfV0sXHJcbiAgICBGb2xsb3dpbmdVc2VyOlt7bmFtZTonc3VkZid9LHtuYW1lOidobid9LHtuYW1lOidkdHR0dCd9XSxcclxuICAgIEZvbGxvd2VyVXNlcjpbe25hbWU6J3lvbWknfSx7bmFtZTonYjEwMCd9LHtuYW1lOidzaGVmJ31dLFxyXG59KVxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuY29uc3QgcmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PnByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7Ly91c2VyIGZvbGxvd1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5nVXNlci5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4vL3VzZXIgdW5mb2xsb3dcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5nVXNlcj1kcmFmdC5tZS5Gb2xsb3dlclVzZXIuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuLy9zdG9yZSBmb2xsb3dcclxuICAgICAgICBjYXNlIEZPTExPV19TVE9SRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUxvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NUT1JFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVEb25lPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ1N0b3JlLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NUT1JFX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuLy9zdG9yZSB1bmZvbGxvd1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1RPUkVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dTdG9yZUxvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dTdG9yZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NUT1JFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlRG9uZT10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdTdG9yZT1kcmFmdC5tZS5Gb2xsb3dpbmdTdG9yZS5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NUT1JFX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbi8vc2lnbnVwIHVzZXJcclxuICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuLy9sb2dpblxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGxvZ2luIHJlcXVlc3QnKVxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGxvZ2luIHN1Y2Nlc3MnKVxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vbG9nb3V0XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGNvbmZpZ3VyZSBzdG9yZScpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbXTsvL+uwsOyXtOuhnCDrubzshJwg7Jes6riw7JeQIHNhZ2HrgpggdGh1bmvqsIAg65Ok7Ja06rCQXHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoXHJcbiAgICAgICAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgICAgICAgKTsvL3JlZHV4IGRldiB0b29scyB1c2FnZSB0b29sIGFuZCB1c2Ugb25seSBkZXZlbG9wIG1vZGVcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwiaW1wb3J0IHsgZW5hYmxlRVM1LCBwcm9kdWNlIH0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtcclxuICAgIGVuYWJsZUVTNSgpO1xyXG4gICAgcmV0dXJuIHByb2R1Y2UoLi4uYXJncyk7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==