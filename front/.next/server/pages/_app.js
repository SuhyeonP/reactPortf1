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
/*! exports provided: initialState, SIGNUP_STORE_REQUEST, SIGNUP_STORE_SUCCESS, SIGNUP_STORE_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_REQUEST", function() { return SIGNUP_STORE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_SUCCESS", function() { return SIGNUP_STORE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_STORE_FAILURE", function() { return SIGNUP_STORE_FAILURE; });
/* harmony import */ var _util_produce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/produce */ "./util/produce.js");

const initialState = {
  signupStoreLoading: false,
  signupStoreDone: false,
  signupStoreError: null
};
const SIGNUP_STORE_REQUEST = 'SIGNUP_STORE_REQUEST';
const SIGNUP_STORE_SUCCESS = 'SIGNUP_STORE_SUCCESS';
const SIGNUP_STORE_FAILURE = 'SIGNUP_STORE_FAILURE';

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

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2EvcmV2aWV3LmpzIiwid2VicGFjazovLy8uL3NhZ2EvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9wcm9kdWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJCYXNlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwiUmV2aWV3cyIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwibWFpblJldmlldyIsImltYWdlUGF0aHMiLCJsb2FkUmV2aWV3TG9hZGluZyIsImxvYWRSZXZpZXdEb25lIiwibG9hZFJldmlld0Vycm9yIiwiYWRkUmV2aWV3TG9hZGluZyIsImFkZFJldmlld0RvbmUiLCJhZGRSZXZpZXdFcnJvciIsInJlbW92ZVJldmlld0xvYWRpbmciLCJyZW1vdmVSZXZpZXdEb25lIiwicmVtb3ZlUmV2aWV3RXJyb3IiLCJMT0FEX1JFVklFV1NfUkVRVUVTVCIsIkxPQURfUkVWSUVXU19TVUNDRVNTIiwiTE9BRF9SRVZJRVdTX0ZBSUxVUkUiLCJBRERfUkVWSUVXU19SRVFVRVNUIiwiQUREX1JFVklFV1NfU1VDQ0VTUyIsIkFERF9SRVZJRVdTX0ZBSUxVUkUiLCJSRU1PVkVfUkVWSUVXU19SRVFVRVNUIiwiUkVNT1ZFX1JFVklFV1NfU1VDQ0VTUyIsIlJFTU9WRV9SRVZJRVdTX0ZBSUxVUkUiLCJhZGRSZXZpZXdzIiwiZGF0YSIsImR1bW15UG9zdCIsImlkIiwiY29udGVudCIsIlVzZXIiLCJuYW1lIiwiSW1hZ2VzIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJzaWdudXBTdG9yZUxvYWRpbmciLCJzaWdudXBTdG9yZURvbmUiLCJzaWdudXBTdG9yZUVycm9yIiwiU0lHTlVQX1NUT1JFX1JFUVVFU1QiLCJTSUdOVVBfU1RPUkVfU1VDQ0VTUyIsIlNJR05VUF9TVE9SRV9GQUlMVVJFIiwiZm9sbG93U3RvcmVMb2FkaW5nIiwiZm9sbG93U3RvcmVEb25lIiwiZm9sbG93U3RvcmVFcnJvciIsInVuZm9sbG93U3RvcmVMb2FkaW5nIiwidW5mb2xsb3dTdG9yZURvbmUiLCJ1bmZvbGxvd1N0b3JlRXJyb3IiLCJsb2dpbkxvYWRpbmciLCJsb2dpbkRvbmUiLCJsb2dpbkVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkZPTExPV19TVE9SRV9SRVFVRVNUIiwiRk9MTE9XX1NUT1JFX1NVQ0NFU1MiLCJGT0xMT1dfU1RPUkVfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIlVORk9MTE9XX1NUT1JFX1JFUVVFU1QiLCJVTkZPTExPV19TVE9SRV9TVUNDRVNTIiwiVU5GT0xMT1dfU1RPUkVfRkFJTFVSRSIsImR1bW15VXNlciIsImlzTG9nZ2VkSW4iLCJGb2xsb3dpbmdTdG9yZSIsImR1bW15U3RvcmUiLCJzdG9yZUlkIiwic3RvcmVOYW1lIiwic3RvcmVFbWFpbCIsInN0b3JlQWRkcmVzcyIsInN0b3JlUGFydCIsImZvbGxvd1VzZXIiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicHVzaCIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJsb2dPdXREb25lIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwidXNlclNhZ2EiLCJSZXZpZXdTYWdhIiwibG9hZFJldmlld3NBUEkiLCJheGlvcyIsImdldCIsImxvYWRSZXZpZXdzIiwiZGVsYXkiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZFJldmlld0FQSSIsInBvc3QiLCJhZGRSZXZpZXciLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJyZW1vdmVSZXZpZXdBUEkiLCJkZWxldGUiLCJyZW1vdmVSZXZpZXciLCJ3YXRjaExvYWRSZXZpZXdzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFJldmlld3MiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVSZXZpZXdzIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd1N0b3JlQVBJIiwiZm9sbG93U3RvcmUiLCJ1bmZvbGxvd1N0b3JlQVBJIiwidW5mb2xsb3dTdG9yZSIsIndhdGNoU3RvcmVVbmZvbGxvdyIsIndhdGNoU3RvcmVGb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImNvbmZpZ3VyZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsImFyZ3MiLCJlbmFibGVFUzUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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LENBQUNqSCxpREFBRCxFQUFVNkcsUUFBVixDQUF6QjtBQUNBM0ksT0FBSyxDQUFDZ0osUUFBTixHQUFpQlIsY0FBYyxDQUFDUyxHQUFmLENBQW1CcEQsNkNBQW5CLENBQWpCO0FBQ0EsU0FBTzdGLEtBQVA7QUFDSCxDQWJEOztBQWVBLE1BQU1kLE9BQU8sR0FBR2dLLHdFQUFhLENBQUNaLFNBQUQsRUFBWTtBQUFFYSxPQUFLO0FBQVAsQ0FBWixDQUE3QjtBQUVlakssc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBRWUsZ0VBQUMsR0FBR2tLLElBQUosS0FBYTtBQUN4QkMseURBQVM7QUFDVCxTQUFPdEgscURBQU8sQ0FBQyxHQUFHcUgsSUFBSixDQUFkO0FBQ0gsQ0FIRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCAnLi4vX2FwcC5jc3MnXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVcIjtcclxuY29uc3QgQmFzZSA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnRpdGxlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQmFzZS5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoIEJhc2UpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgUmV2aWV3cyBmcm9tICcuL3Jldmlldyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoey8vcmVkdWNlciDtlanss5Dso7zripQgcmVkdXjrqZTshJzrk5xcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6Ly90aGlzIGlzIGZvciBhZnRlciBzZXJ2ZXJzaWRlLXJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2kgY2FtZSBoZXJlIGh5ZHJhdGUnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaSBjYW1lIGhlcmUgY2FzZTpkZWZhdWx0JylcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIFJldmlld3MsXHJcbiAgICBzdG9yZSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBtYWluUmV2aWV3OltdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSxcclxuICAgIGxvYWRSZXZpZXdMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFJldmlld0RvbmU6ZmFsc2UsXHJcbiAgICBsb2FkUmV2aWV3RXJyb3I6bnVsbCxcclxuICAgIGFkZFJldmlld0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBhZGRSZXZpZXdEb25lOmZhbHNlLFxyXG4gICAgYWRkUmV2aWV3RXJyb3I6bnVsbCxcclxuICAgIHJlbW92ZVJldmlld0xvYWRpbmc6ZmFsc2UsXHJcbiAgICByZW1vdmVSZXZpZXdEb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlUmV2aWV3RXJyb3I6bnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVWSUVXU19SRVFVRVNUPSdMT0FEX1JFVklFV1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFVklFV1NfU1VDQ0VTUz0nTE9BRF9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRVZJRVdTX0ZBSUxVUkU9J0xPQURfUkVWSUVXU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUkVWSUVXU19SRVFVRVNUPSdBRERfUkVWSUVXU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9SRVZJRVdTX1NVQ0NFU1M9J0FERF9SRVZJRVdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1JFVklFV1NfRkFJTFVSRT0nQUREX1JFVklFV1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1JFVklFV1NfUkVRVUVTVD0nUkVNT1ZFX1JFVklFV1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUkVWSUVXU19TVUNDRVNTPSdSRU1PVkVfUkVWSUVXU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9SRVZJRVdTX0ZBSUxVUkU9J1JFTU9WRV9SRVZJRVdTX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZXZpZXdzPShkYXRhKT0+KHtcclxuICAgIHR5cGU6QUREX1JFVklFV1NfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcbmNvbnN0IGR1bW15UG9zdD0oZGF0YSk9Pih7XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5hbWU6J2h5ZW9uJ1xyXG4gICAgfSxcclxuICAgIEltYWdlczpbXVxyXG59KVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfUkVWSUVXU19SRVFVRVNUOi8vIGxvYWQgdGhlIHJldmlldyBvZiBzdG9yZVxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0Vycm9yPW51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9SRVZJRVdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUmV2aWV3RG9uZT10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tYWluUmV2aWV3PWFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUmV2aWV3KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1JFVklFV1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFJldmlld0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRSZXZpZXdFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdTX1JFUVVFU1Q6Ly8gYWRkIHRoZSByZXZpZXcgb2Ygc3RvcmVcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3TG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRSZXZpZXdFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9SRVZJRVdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFJldmlld0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblJldmlldz1hY3Rpb24uZGF0YS51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1JFVklFV1NfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUmV2aWV3RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUkVWSUVXU19SRVFVRVNUOi8vcmVtb3ZlIHRoZSByZXZpZXdzXHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUkVWSUVXU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tYWluUmV2aWV3ID0gZHJhZnQubWFpblJldmlldy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUkVWSUVXU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVSZXZpZXdMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVJldmlld0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJy4uL3V0aWwvcHJvZHVjZSc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIHNpZ251cFN0b3JlTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ251cFN0b3JlRG9uZTpmYWxzZSxcclxuICAgIHNpZ251cFN0b3JlRXJyb3I6bnVsbCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVE9SRV9SRVFVRVNUPSdTSUdOVVBfU1RPUkVfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVE9SRV9TVUNDRVNTPSdTSUdOVVBfU1RPUkVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFNJR05VUF9TVE9SRV9GQUlMVVJFPSdTSUdOVVBfU1RPUkVfRkFJTFVSRSdcclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0lHTlVQX1NUT1JFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ251cFN0b3JlTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ251cFN0b3JlRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOVVBfU1RPUkVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbnVwU3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOVVBfU1RPUkVfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnbnVwU3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWdudXBTdG9yZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICcuLi91dGlsL3Byb2R1Y2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBmb2xsb3dTdG9yZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dTdG9yZURvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dTdG9yZUVycm9yOm51bGwsXHJcbiAgICB1bmZvbGxvd1N0b3JlTG9hZGluZzpmYWxzZSxcclxuICAgIHVuZm9sbG93U3RvcmVEb25lOmZhbHNlLFxyXG4gICAgdW5mb2xsb3dTdG9yZUVycm9yOm51bGwsXHJcbiAgICBsb2dpbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dpbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dpbkVycm9yOm51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPSdMT0dfSU5fUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTPSdMT0dfSU5fU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFPSdMT0dfSU5fRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1Q9J0xPR19PVVRfUkVRVUVTVCdcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUz0nTE9HX09VVF9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFPSdMT0dfT1VUX0ZBSUxVUkUnXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1JFUVVFU1Q9J0ZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX1NVQ0NFU1M9J0ZPTExPV19TVE9SRV9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUT1JFX0ZBSUxVUkU9J0ZPTExPV19TVE9SRV9GQUlMVVJFJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVD0nU0lHTl9VUF9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTPSdTSUdOX1VQX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkU9J1NJR05fVVBfRkFJTFVSRSdcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVE9SRV9SRVFVRVNUPSdVTkZPTExPV19TVE9SRV9SRVFVRVNUJ1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUz0nVU5GT0xMT1dfU1RPUkVfU1VDQ0VTUydcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NUT1JFX0ZBSUxVUkU9J1VORk9MTE9XX1NUT1JFX0ZBSUxVUkUnXHJcblxyXG5jb25zdCBkdW1teVVzZXI9KGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIGlzTG9nZ2VkSW46ZmFsc2UsXHJcbiAgICBuYW1lOid0ZXN0JyxcclxuICAgIGlkOjEsXHJcbiAgICBSZXZpZXdzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nU3RvcmU6W3tuYW1lOidtYWNkb25hbGQnfSx7bmFtZTonaGFuc2luJ30se25hbWU6J2RlbnRpc3QnfV0sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVN0b3JlPShkYXRhKT0+KHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBzdG9yZUlkOjEsXHJcbiAgICBzdG9yZU5hbWU6J1N0b3JlMScsXHJcbiAgICBzdG9yZUVtYWlsOidoaWhpQHRlc3QudGVzdCcsXHJcbiAgICBzdG9yZUFkZHJlc3M6J3doZXJlIGlzIGFkZHJlc3MnLFxyXG4gICAgc3RvcmVQYXJ0OlwiaG9zcGl0YWxcIixcclxuICAgIGZvbGxvd1VzZXI6W10sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuY29uc3QgcmVkdWNlcj0oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PnByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbi8vc3RvcmUgZm9sbG93XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1RPUkVfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd1N0b3JlRG9uZT10cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdTdG9yZS5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEZPTExPV19TVE9SRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dTdG9yZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93U3RvcmVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbi8vc3RvcmUgdW5mb2xsb3dcclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NUT1JFX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93U3RvcmVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVE9SRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dTdG9yZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5nU3RvcmU9ZHJhZnQubWUuRm9sbG93aW5nU3RvcmUuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVE9SRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd1N0b3JlTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4vL3NpZ251cCB1c2VyXHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbi8vbG9naW5cclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZSBpcyBsb2dpbiByZXF1ZXN0IGZyb20gcmVkdWNlcicpXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgbG9naW4gc3VjY2VzcyBmcm9tIHJlZHVjZXInKVxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vbG9nb3V0XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGxvZ291dCByZXF1ZXN0JylcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgaXMgbG9nb3V0IHN1Y2Nlc3MgYnllficpXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgUmV2aWV3U2FnYSBmcm9tICcuL3Jldmlldyc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2kgY2FtZSByb290c2FnYX4gaW5kZXgnKTtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgZm9yayhSZXZpZXdTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgQUREX1JFVklFV1NfRkFJTFVSRSxcclxuICAgIEFERF9SRVZJRVdTX1JFUVVFU1QsXHJcbiAgICBBRERfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgTE9BRF9SRVZJRVdTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1JFVklFV1NfUkVRVUVTVCxcclxuICAgIExPQURfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1JFVklFV1NfRkFJTFVSRSxcclxuICAgIFJFTU9WRV9SRVZJRVdTX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUkVWSUVXU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Jldmlldyc7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZFJldmlld3NBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL2FwaS9SZXZpZXdzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUmV2aWV3cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUmV2aWV3c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVWSUVXU19TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVWSUVXU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUmV2aWV3QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL1JldmlldycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUmV2aWV3KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFJldmlld0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IGlkID0gc2hvcnRJZC5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9SRVZJRVdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1JFVklFV1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVJldmlld0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL1JldmlldycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUmV2aWV3KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVJldmlld0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9SRVZJRVdTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9SRVZJRVdTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmV2aWV3cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUkVWSUVXU19SRVFVRVNULCBsb2FkUmV2aWV3cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFJldmlld3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9SRVZJRVdTX1JFUVVFU1QsIGFkZFJldmlldyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVJldmlld3MoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9SRVZJRVdTX1JFUVVFU1QsIHJlbW92ZVJldmlldyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBSZXZpZXdTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUmV2aWV3cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRSZXZpZXdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUmV2aWV3cylcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydHtcclxuICAgIExPR19JTl9SRVFVRVNULFxyXG4gICAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIEZPTExPV19TVE9SRV9SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NUT1JFX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfU1RPUkVfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1NUT1JFX1JFUVVFU1QsXHJcbiAgICBVTkZPTExPV19TVE9SRV9TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfU1RPUkVfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRVxyXG59ZnJvbSAnLi4vcmVkdWNlcnMvdXNlcidcclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgbG9nSW4gaSBjYW1lIGhlcmUnKTtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaXQgb2NjdXIgbG9naW4gZXJyb3InKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZm9sbG93U3RvcmVBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9mb2xsb3dTdG9yZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93U3RvcmUoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZm9sbG93U3RvcmVBUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19TVE9SRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1RPUkVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd1N0b3JlQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdW5mb2xsb3dTdG9yZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3dTdG9yZShhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmZvbGxvd1N0b3JlQVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVE9SRV9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVE9SRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTdG9yZVVuZm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19TVE9SRV9SRVFVRVNULCB1bmZvbGxvd1N0b3JlKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU3RvcmVGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19TVE9SRV9SRVFVRVNULCBmb2xsb3dTdG9yZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2hlcmUgaXMgd2F0Y2hMb2dpbiBzYWdhJylcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hTdG9yZUZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFN0b3JlVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhJztcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKCdoZXJlIGlzIGNvbmZpZ3VyZSBzdG9yZScpO1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdOy8v67Cw7Je066GcIOu5vOyEnCDsl6zquLDsl5Agc2FnYeuCmCB0aHVua+qwgCDrk6TslrTqsJBcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhcclxuICAgICAgICAgICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSxcclxuICAgICAgICApOy8vcmVkdXggZGV2IHRvb2xzIHVzYWdlIHRvb2wgYW5kIHVzZSBvbmx5IGRldmVsb3AgbW9kZVxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJpbXBvcnQgeyBlbmFibGVFUzUsIHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyXG4gICAgZW5hYmxlRVM1KCk7XHJcbiAgICByZXR1cm4gcHJvZHVjZSguLi5hcmdzKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9