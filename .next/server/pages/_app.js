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

/***/ "./firebaseConfig.ts":
/*!***************************!*\
  !*** ./firebaseConfig.ts ***!
  \***************************/
/*! exports provided: googleAuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleAuthProvider", function() { return googleAuthProvider; });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ "firebase/compat/app");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ "firebase/compat/auth");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ "firebase/compat/firestore");
/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__);



const firebaseConfig = {
  apiKey: "AIzaSyA_xOyRnR15tG5Ghxr-S3EW7pSwD-DYqVo",
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: "dojo-plus-bravo-prod",
  storageBucket: "dojo-plus-bravo-prod.appspot.com",
  messagingSenderId: "178409897743",
  appId: "1:178409897743:web:631d6c20580bc703ff087a",
  measurementId: "G-FDM98B6SHP"
}; // if a Firebase instance doesn't exist, create one

if (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default.a.apps.length) {
  firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
}

const googleAuthProvider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth.GoogleAuthProvider();
/* harmony default export */ __webpack_exports__["default"] = (firebase_compat_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./ni18n.config.ts":
/*!*************************!*\
  !*** ./ni18n.config.ts ***!
  \*************************/
/*! exports provided: ni18nConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ni18nConfig", function() { return ni18nConfig; });
const supportedLngs = ['en', 'es', 'pt'];
const ni18nConfig = {
  fallbackLng: supportedLngs,
  supportedLngs,
  ns: ['common'],
  react: {
    useSuspense: false
  }
};

/***/ }),

/***/ "./src/context/FirebaseContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/FirebaseContext.tsx ***!
  \*****************************************/
/*! exports provided: FireBaseAuthProvider, useFireBaseAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseAuthProvider", function() { return FireBaseAuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFireBaseAuth", function() { return useFireBaseAuth; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useFirebaseAuth */ "./src/hooks/useFirebaseAuth.ts");

var _jsxFileName = "C:\\Users\\Public.DESKTOP-5K819ES\\Documents\\GitHub\\dojoplus\\src\\context\\FirebaseContext.tsx";


const FireBaseContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  passwordReset: async () => {},
  signOut: async () => {},
  getAuthToken: async () => {},
  sendVerificationEmail: async () => {}
});
/**
 * @description - get Profile after send page to browser.
 * @param props - 
 * @param props.children - Children.
 * @returns - Return user profile basic data like username and avatar.
 */

function FireBaseAuthProvider({
  children
}) {
  const auth = Object(_hooks_useFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FireBaseContext.Provider, {
    value: auth,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
const useFireBaseAuth = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(FireBaseContext);

/***/ }),

/***/ "./src/environment.ts":
/*!****************************!*\
  !*** ./src/environment.ts ***!
  \****************************/
/*! exports provided: PORT, EIGHT_BASE_BASE_URL, EIGHT_BASE_API_TOKEN, EIGHT_BASE_WORKSPACE_ID, EIGHT_BASE_BRANCH_NAME, AUTH0_SECRET, AUTH0_BASE_URL, AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, NEXT_PUBLIC_EIGHT_BASE_BASE_URL, NEXT_PUBLIC_EIGHT_BASE_API_TOKEN, NEXT_PUBLIC_EIGHT_BASE_WORKSPACE_ID, NEXT_PUBLIC_EIGHT_BASE_BRANCH_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT_BASE_BASE_URL", function() { return EIGHT_BASE_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT_BASE_API_TOKEN", function() { return EIGHT_BASE_API_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT_BASE_WORKSPACE_ID", function() { return EIGHT_BASE_WORKSPACE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT_BASE_BRANCH_NAME", function() { return EIGHT_BASE_BRANCH_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0_SECRET", function() { return AUTH0_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0_BASE_URL", function() { return AUTH0_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0_ISSUER_BASE_URL", function() { return AUTH0_ISSUER_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0_CLIENT_ID", function() { return AUTH0_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH0_CLIENT_SECRET", function() { return AUTH0_CLIENT_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PUBLIC_EIGHT_BASE_BASE_URL", function() { return NEXT_PUBLIC_EIGHT_BASE_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PUBLIC_EIGHT_BASE_API_TOKEN", function() { return NEXT_PUBLIC_EIGHT_BASE_API_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PUBLIC_EIGHT_BASE_WORKSPACE_ID", function() { return NEXT_PUBLIC_EIGHT_BASE_WORKSPACE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT_PUBLIC_EIGHT_BASE_BRANCH_NAME", function() { return NEXT_PUBLIC_EIGHT_BASE_BRANCH_NAME; });
const PORT = '';
const EIGHT_BASE_BASE_URL = 'https://api.8base.com';
const EIGHT_BASE_API_TOKEN = '9b781a83-863f-4b48-b30a-420d6387b549';
const EIGHT_BASE_WORKSPACE_ID = 'cktiv4ywg02hi08mz7m572vib';
const EIGHT_BASE_BRANCH_NAME = 'main';
const AUTH0_SECRET = '81df89aa-d854-4866-a178-930abc9a212b';
const AUTH0_BASE_URL = 'http://localhost:3000';
const AUTH0_ISSUER_BASE_URL = 'https://dojo-plus-main.us.auth0.com';
const AUTH0_CLIENT_ID = 'GgduPBN2mllKXCIIZqbRkKwpZ57AR1Re';
const AUTH0_CLIENT_SECRET = 'STsa301m_GueWOB_Vlys8oP1srq2HQqxlj5pB_4R8MDDKuwvdf0i-Hz5teA3bim_';
const NEXT_PUBLIC_EIGHT_BASE_BASE_URL = 'https://api.8base.com';
const NEXT_PUBLIC_EIGHT_BASE_API_TOKEN = '9b781a83-863f-4b48-b30a-420d6387b549';
const NEXT_PUBLIC_EIGHT_BASE_WORKSPACE_ID = 'cktiv4ywg02hi08mz7m572vib';
const NEXT_PUBLIC_EIGHT_BASE_BRANCH_NAME = 'main';

/***/ }),

/***/ "./src/hooks/useFirebaseAuth.ts":
/*!**************************************!*\
  !*** ./src/hooks/useFirebaseAuth.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFirebaseAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebaseConfig */ "./firebaseConfig.ts");
/* eslint-disable @typescript-eslint/explicit-function-return-type */



const formatAuthUser = user => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  emailVerified: user.emailVerified,
  isAnonymous: user.isAnonymous,
  metadata: user.metadata,
  phoneNumber: user.phoneNumber,
  photoURL: user.photoURL,
  providerData: user.providerData,
  providerId: user.providerId,
  refreshToken: user.refreshToken,
  tenantId: user.tenantId
});
/**
 * @description - firebase hook.
 * @returns - Return different methods of firebase.
 */


function useFirebaseAuth() {
  const {
    0: authUser,
    1: setAuthUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const authStateChanged = async authState => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const signInWithEmailAndPassword = async (email, password) => {
    return _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signInWithPopup(_firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["googleAuthProvider"]);

  const createUserWithEmailAndPassword = (email, password) => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(email, password);

  const passwordReset = email => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().sendPasswordResetEmail(email);

  const signOut = () => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().signOut().then(clear);

  const getAuthToken = async () => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.getIdToken(true);

  const sendVerificationEmail = async () => _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser.sendEmailVerification(); // listen for Firebase state change


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _firebaseConfig__WEBPACK_IMPORTED_MODULE_1__["default"].auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []); // On Login, Fetch user token

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (authUser) {
      getAuthToken().then(token => {
        localStorage.setItem('AUTH_TOKEN', token);
      });
    }
  }, [authUser]);
  return {
    signInWithGoogle,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    passwordReset,
    signOut,
    getAuthToken,
    sendVerificationEmail,
    authUser,
    loading
  };
}

/***/ }),

/***/ "./src/modules/apollo/ApolloProvider.tsx":
/*!***********************************************!*\
  !*** ./src/modules/apollo/ApolloProvider.tsx ***!
  \***********************************************/
/*! exports provided: ApolloProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client */ "./src/modules/apollo/client.ts");

var _jsxFileName = "C:\\Users\\Public.DESKTOP-5K819ES\\Documents\\GitHub\\dojoplus\\src\\modules\\apollo\\ApolloProvider.tsx";



/**
 * Component that handle the logic of get the token.
 *
 * @param {object} props - Props.
 * @param {object} props.children - Children.
 * @returns {JSX.Element} - Component.
 */

function ApolloProvider({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
    client: _client__WEBPACK_IMPORTED_MODULE_3__["client"],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/modules/apollo/client.ts":
/*!**************************************!*\
  !*** ./src/modules/apollo/client.ts ***!
  \**************************************/
/*! exports provided: createApolloClient, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApolloClient", function() { return createApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/shared/constants/index.ts");
/* harmony import */ var _shared_events_token_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/events/token-event */ "./src/shared/events/token-event.ts");



/**
 * @param {Function} getToken - Function to get the token.
 * @returns {object} Apollo client.
 */

function createApolloClient(getToken) {
  const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
    uri: _shared_constants__WEBPACK_IMPORTED_MODULE_1__["WORKSPACE_ENDPOINT"],
    headers: {
      authorization: `Bearer ${getToken()}`
    }
  });
  const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    uri: _shared_constants__WEBPACK_IMPORTED_MODULE_1__["WORKSPACE_ENDPOINT"],
    link: httpLink,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
  });
  return client;
}
const client = createApolloClient(() => {
  var _OnTokenEvent$get;

  const token = ((_OnTokenEvent$get = _shared_events_token_event__WEBPACK_IMPORTED_MODULE_2__["OnTokenEvent"].get()) === null || _OnTokenEvent$get === void 0 ? void 0 : _OnTokenEvent$get.token) || _shared_constants__WEBPACK_IMPORTED_MODULE_1__["EIGHT_BASE_PUBLIC_TOKEN"];
  return token;
});

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ni18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ni18n */ "ni18n");
/* harmony import */ var ni18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ni18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/GlobalStyles */ "@mui/material/GlobalStyles");
/* harmony import */ var _mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ "@mui/material/CssBaseline");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nextjs-progressbar */ "nextjs-progressbar");
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ni18n_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ni18n.config */ "./ni18n.config.ts");
/* harmony import */ var _shared_styles_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/styles/colors */ "./src/shared/styles/colors.ts");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs/locale/es */ "dayjs/locale/es");
/* harmony import */ var dayjs_locale_es__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_es__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dayjs_locale_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dayjs/locale/pt */ "dayjs/locale/pt");
/* harmony import */ var dayjs_locale_pt__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs_locale_pt__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_styles_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/styles/theme */ "./src/shared/styles/theme.ts");
/* harmony import */ var _shared_config_createEmotionCache__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/config/createEmotionCache */ "./src/shared/config/createEmotionCache.ts");
/* harmony import */ var _modules_apollo_ApolloProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/apollo/ApolloProvider */ "./src/modules/apollo/ApolloProvider.tsx");
/* harmony import */ var _shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/styles/globals.css */ "./src/shared/styles/globals.css");
/* harmony import */ var _shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_shared_styles_globals_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _shared_utils_language_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/utils/language-utils */ "./src/shared/utils/language-utils.ts");
/* harmony import */ var _context_FirebaseContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../context/FirebaseContext */ "./src/context/FirebaseContext.tsx");

var _jsxFileName = "C:\\Users\\Public.DESKTOP-5K819ES\\Documents\\GitHub\\dojoplus\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/require-default-props */


















 // Client-side cache, shared for the whole session of the user in the browser.

const clientSideEmotionCache = Object(_shared_config_createEmotionCache__WEBPACK_IMPORTED_MODULE_15__["createEmotionCache"])();

/**
 *
 * @param {AppProps} prop - Props.
 * @param {AppProps} prop.Component - Component.
 * @param {AppProps} prop.pageProps - PageProps.
 * @returns {JSX.Element} - Main app component.
 */
function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache
}) {
  const {
    i18n
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_shared_utils_language_utils__WEBPACK_IMPORTED_MODULE_18__["initLanguage"])({
      i18n,
      language: window.navigator.language
    });
  }, [i18n]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["CacheProvider"], {
    value: emotionCache,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_FirebaseContext__WEBPACK_IMPORTED_MODULE_19__["FireBaseAuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_5__["UserProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_apollo_ApolloProvider__WEBPACK_IMPORTED_MODULE_16__["ApolloProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
            theme: _shared_styles_theme__WEBPACK_IMPORTED_MODULE_14__["theme"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_GlobalStyles__WEBPACK_IMPORTED_MODULE_4___default.a, {
              styles: {
                html: {
                  height: '100%'
                },
                body: {
                  height: '100%',
                  overflowY: 'scroll'
                },
                '#__next': {
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_9___default.a, {
              color: _shared_styles_colors__WEBPACK_IMPORTED_MODULE_11__["COLOR_BUTTON_RED"]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
} // eslint-disable-next-line import/no-default-export


/* harmony default export */ __webpack_exports__["default"] = (Object(ni18n__WEBPACK_IMPORTED_MODULE_3__["appWithI18Next"])(App, _ni18n_config__WEBPACK_IMPORTED_MODULE_10__["ni18nConfig"]));

/***/ }),

/***/ "./src/shared/config/createEmotionCache.ts":
/*!*************************************************!*\
  !*** ./src/shared/config/createEmotionCache.ts ***!
  \*************************************************/
/*! exports provided: createEmotionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmotionCache", function() { return createEmotionCache; });
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ "@emotion/cache");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);

const createEmotionCache = () => {
  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({
    key: 'css'
  });
};

/***/ }),

/***/ "./src/shared/constants/index.ts":
/*!***************************************!*\
  !*** ./src/shared/constants/index.ts ***!
  \***************************************/
/*! exports provided: BASE_URL, WORKSPACE_ID, ENVIRONMENT_NAME, EIGHT_BASE_PUBLIC_TOKEN, WORKSPACE_ENDPOINT, AUTH_PROFILE_ID, AUTH_CLIENT_ID, AUTH_CLIENT_DOMAIN, EIGHTBASE_WS_ENDPOINT, AUTH_CLIENT_REDIRECT_URI, AUTH_CLIENT_REDIRECT_LOGOUT, EMAIL_REGEX, PASSWORD_REGEX, Days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_ID", function() { return WORKSPACE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENVIRONMENT_NAME", function() { return ENVIRONMENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT_BASE_PUBLIC_TOKEN", function() { return EIGHT_BASE_PUBLIC_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKSPACE_ENDPOINT", function() { return WORKSPACE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PROFILE_ID", function() { return AUTH_PROFILE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CLIENT_ID", function() { return AUTH_CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CLIENT_DOMAIN", function() { return AUTH_CLIENT_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHTBASE_WS_ENDPOINT", function() { return EIGHTBASE_WS_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CLIENT_REDIRECT_URI", function() { return AUTH_CLIENT_REDIRECT_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_CLIENT_REDIRECT_LOGOUT", function() { return AUTH_CLIENT_REDIRECT_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_REGEX", function() { return EMAIL_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_REGEX", function() { return PASSWORD_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environment */ "./src/environment.ts");

/* eslint-disable no-useless-escape */

const BASE_URL = _environment__WEBPACK_IMPORTED_MODULE_0__["NEXT_PUBLIC_EIGHT_BASE_BASE_URL"];
const WORKSPACE_ID = _environment__WEBPACK_IMPORTED_MODULE_0__["NEXT_PUBLIC_EIGHT_BASE_WORKSPACE_ID"];
const ENVIRONMENT_NAME = _environment__WEBPACK_IMPORTED_MODULE_0__["NEXT_PUBLIC_EIGHT_BASE_BRANCH_NAME"] || '';
const EIGHT_BASE_PUBLIC_TOKEN = _environment__WEBPACK_IMPORTED_MODULE_0__["NEXT_PUBLIC_EIGHT_BASE_API_TOKEN"];
const WORKSPACE_ENDPOINT = `${BASE_URL}/${WORKSPACE_ID}${ENVIRONMENT_NAME !== '' ? `_${ENVIRONMENT_NAME}` : ''}`;
const AUTH_PROFILE_ID = process.env.AUTH0_PROFILE_ID;
const AUTH_CLIENT_ID = _environment__WEBPACK_IMPORTED_MODULE_0__["AUTH0_CLIENT_ID"] || '';
const AUTH_CLIENT_DOMAIN = process.env.AUTH0_CLIENT_DOMAIN || '';
const EIGHTBASE_WS_ENDPOINT = 'wss://ws.8base.com';
const AUTH_CLIENT_REDIRECT_URI = '';
const AUTH_CLIENT_REDIRECT_LOGOUT = ''; // export const AUTH_CLIENT_REDIRECT_URI = (typeof window.location.origin != 'undefined')?`${window.location.origin}/auth/callback`:'';
// export const AUTH_CLIENT_REDIRECT_LOGOUT = (typeof window.location.origin != 'undefined')?`${window.location.origin}/logout`:'';

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_REGEX = new RegExp('^(?=.{8,})');
const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/***/ }),

/***/ "./src/shared/events/token-event.ts":
/*!******************************************!*\
  !*** ./src/shared/events/token-event.ts ***!
  \******************************************/
/*! exports provided: OnTokenEvent, OnTokenErrorEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTokenEvent", function() { return OnTokenEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnTokenErrorEvent", function() { return OnTokenErrorEvent; });
/* harmony import */ var _cobuildlab_react_simple_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cobuildlab/react-simple-state */ "@cobuildlab/react-simple-state");
/* harmony import */ var _cobuildlab_react_simple_state__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cobuildlab_react_simple_state__WEBPACK_IMPORTED_MODULE_0__);

const INITIAL_STATE = {
  token: null
};
const OnTokenEvent = Object(_cobuildlab_react_simple_state__WEBPACK_IMPORTED_MODULE_0__["createEvent"])({
  initialValue: INITIAL_STATE
});
const OnTokenErrorEvent = Object(_cobuildlab_react_simple_state__WEBPACK_IMPORTED_MODULE_0__["createEvent"])();

/***/ }),

/***/ "./src/shared/styles/colors.ts":
/*!*************************************!*\
  !*** ./src/shared/styles/colors.ts ***!
  \*************************************/
/*! exports provided: COLOR_BACKGROUND_DARK_LIGHT, COLOR_BACKGROUND_DARK, COLOR_BACKGROUND_LIGHT, COLOR_LETTERS_WHITE, COLOR_LETTERS_DARK, COLOR_INPUT_LIGHT, COLOR_INPUT_DARK, COLOR_BUTTON_RED_LIGHT, COLOR_BUTTON_RED, COLOR_BUTTON_DARK, COLOR_GREEN, COLOR_LIGHT_GREEN, COLOR_BLUE, COLOR_YELLOW, COLOR_ORANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BACKGROUND_DARK_LIGHT", function() { return COLOR_BACKGROUND_DARK_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BACKGROUND_DARK", function() { return COLOR_BACKGROUND_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BACKGROUND_LIGHT", function() { return COLOR_BACKGROUND_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_LETTERS_WHITE", function() { return COLOR_LETTERS_WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_LETTERS_DARK", function() { return COLOR_LETTERS_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_INPUT_LIGHT", function() { return COLOR_INPUT_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_INPUT_DARK", function() { return COLOR_INPUT_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BUTTON_RED_LIGHT", function() { return COLOR_BUTTON_RED_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BUTTON_RED", function() { return COLOR_BUTTON_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BUTTON_DARK", function() { return COLOR_BUTTON_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GREEN", function() { return COLOR_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_LIGHT_GREEN", function() { return COLOR_LIGHT_GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BLUE", function() { return COLOR_BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_YELLOW", function() { return COLOR_YELLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_ORANGE", function() { return COLOR_ORANGE; });
// Background Colors
const COLOR_BACKGROUND_DARK_LIGHT = '#282828';
const COLOR_BACKGROUND_DARK = '#111111';
const COLOR_BACKGROUND_LIGHT = '#282828'; // Text Colors

const COLOR_LETTERS_WHITE = '#FFFFFF';
const COLOR_LETTERS_DARK = '#000'; // Input backgound colors

const COLOR_INPUT_LIGHT = '#F0F0F0';
const COLOR_INPUT_DARK = '#828282'; // Buttom colors

const COLOR_BUTTON_RED_LIGHT = '#ff595f';
const COLOR_BUTTON_RED = '#D21632';
const COLOR_BUTTON_DARK = '#3B3B3B'; // extra colors

const COLOR_GREEN = '#00D169';
const COLOR_LIGHT_GREEN = '#D4FE44';
const COLOR_BLUE = '#2C68F6';
const COLOR_YELLOW = '#FFFF00';
const COLOR_ORANGE = '#D0410D';

/***/ }),

/***/ "./src/shared/styles/globals.css":
/*!***************************************!*\
  !*** ./src/shared/styles/globals.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/shared/styles/theme.ts":
/*!************************************!*\
  !*** ./src/shared/styles/theme.ts ***!
  \************************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ "./src/shared/styles/colors.ts");

 //  Theme configuration variables

// Create a theme instance
const theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BUTTON_RED"],
      light: '#ff595f',
      dark: '#B23E42'
    },
    secondary: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BUTTON_DARK"]
    },
    warning: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_YELLOW"]
    },
    text: {
      primary: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_LETTERS_WHITE"],
      secondary: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_LETTERS_DARK"]
    },
    backgroundDarkGray: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BACKGROUND_DARK"]
    },
    backgroundGray: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BACKGROUND_DARK_LIGHT"]
    },
    backgroundLightGray: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BACKGROUND_LIGHT"]
    },
    letterColorWhite: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_LETTERS_WHITE"]
    },
    letterColorDark: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_LETTERS_DARK"]
    },
    inputColorLight: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_INPUT_LIGHT"]
    },
    inputColorDark: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_INPUT_DARK"]
    },
    green: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_GREEN"]
    },
    lightGreen: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_LIGHT_GREEN"]
    },
    blue: {
      main: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BLUE"]
    }
  },
  typography: {
    fontFamily: 'Saira',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap',
          fontWeight: 'bolder'
        },
        containedSecondary: {
          background: '#111111',
          color: '#FCFCFC',
          '&:hover': {
            borderColor: _colors__WEBPACK_IMPORTED_MODULE_1__["COLOR_BACKGROUND_LIGHT"]
          }
        },
        outlinedSecondary: {
          border: '1px solid #4F4F4F',
          color: '#FCFCFC'
        }
      },
      defaultProps: {
        variant: 'contained'
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: '#111',
          '&:hover': {
            background: '#f00',
            color: '#fff'
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./src/shared/utils/language-utils.ts":
/*!********************************************!*\
  !*** ./src/shared/utils/language-utils.ts ***!
  \********************************************/
/*! exports provided: changeLanguage, initLanguage, languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return changeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initLanguage", function() { return initLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
const changeLanguage = ({
  i18n,
  language
}) => {
  window.localStorage.setItem('MY_LANGUAGE', language);
  i18n.changeLanguage(language);
};
const initLanguage = ({
  i18n,
  language
}) => {
  const lang = window.localStorage.getItem('MY_LANGUAGE');

  if (!lang) {
    window.localStorage.setItem('MY_LANGUAGE', language);
    i18n.changeLanguage(language);
  } else {
    i18n.changeLanguage(lang);
  }
};
const languages = [{
  code: 'en',
  translateKey: 'english'
}, {
  code: 'pt',
  translateKey: 'portuguese'
}, {
  code: 'es',
  translateKey: 'spanish'
}];

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "@cobuildlab/react-simple-state":
/*!*************************************************!*\
  !*** external "@cobuildlab/react-simple-state" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@cobuildlab/react-simple-state");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/GlobalStyles":
/*!*********************************************!*\
  !*** external "@mui/material/GlobalStyles" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/GlobalStyles");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "dayjs/locale/es":
/*!**********************************!*\
  !*** external "dayjs/locale/es" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/es");

/***/ }),

/***/ "dayjs/locale/pt":
/*!**********************************!*\
  !*** external "dayjs/locale/pt" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dayjs/locale/pt");

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/compat/app");

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/compat/auth");

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/compat/firestore");

/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "ni18n":
/*!************************!*\
  !*** external "ni18n" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ni18n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2VDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vbmkxOG4uY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L0ZpcmViYXNlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VGaXJlYmFzZUF1dGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYXBvbGxvL0Fwb2xsb1Byb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9hcG9sbG8vY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbmZpZy9jcmVhdGVFbW90aW9uQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9ldmVudHMvdG9rZW4tZXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zdHlsZXMvY29sb3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc3R5bGVzL3RoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbHMvbGFuZ3VhZ2UtdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNvYnVpbGRsYWIvcmVhY3Qtc2ltcGxlLXN0YXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY2FjaGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0dsb2JhbFN0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF5anMvbG9jYWxlL2VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF5anMvbG9jYWxlL3B0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlL2NvbXBhdC9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHRqcy1wcm9ncmVzc2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5pMThuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImVudiIsIk5FWFRfUFVCTElDX2F1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19tZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImdvb2dsZUF1dGhQcm92aWRlciIsImF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJzdXBwb3J0ZWRMbmdzIiwibmkxOG5Db25maWciLCJmYWxsYmFja0xuZyIsIm5zIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsIkZpcmVCYXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJhdXRoVXNlciIsImxvYWRpbmciLCJzaWduSW5XaXRoR29vZ2xlIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZFJlc2V0Iiwic2lnbk91dCIsImdldEF1dGhUb2tlbiIsInNlbmRWZXJpZmljYXRpb25FbWFpbCIsIkZpcmVCYXNlQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VGaXJlYmFzZUF1dGgiLCJ1c2VGaXJlQmFzZUF1dGgiLCJ1c2VDb250ZXh0IiwiUE9SVCIsIkVJR0hUX0JBU0VfQkFTRV9VUkwiLCJFSUdIVF9CQVNFX0FQSV9UT0tFTiIsIkVJR0hUX0JBU0VfV09SS1NQQUNFX0lEIiwiRUlHSFRfQkFTRV9CUkFOQ0hfTkFNRSIsIkFVVEgwX1NFQ1JFVCIsIkFVVEgwX0JBU0VfVVJMIiwiQVVUSDBfSVNTVUVSX0JBU0VfVVJMIiwiQVVUSDBfQ0xJRU5UX0lEIiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsIk5FWFRfUFVCTElDX0VJR0hUX0JBU0VfQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0FQSV9UT0tFTiIsIk5FWFRfUFVCTElDX0VJR0hUX0JBU0VfV09SS1NQQUNFX0lEIiwiTkVYVF9QVUJMSUNfRUlHSFRfQkFTRV9CUkFOQ0hfTkFNRSIsImZvcm1hdEF1dGhVc2VyIiwidXNlciIsInVpZCIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJlbWFpbFZlcmlmaWVkIiwiaXNBbm9ueW1vdXMiLCJtZXRhZGF0YSIsInBob25lTnVtYmVyIiwicGhvdG9VUkwiLCJwcm92aWRlckRhdGEiLCJwcm92aWRlcklkIiwicmVmcmVzaFRva2VuIiwidGVuYW50SWQiLCJzZXRBdXRoVXNlciIsInVzZVN0YXRlIiwic2V0TG9hZGluZyIsImF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoU3RhdGUiLCJmb3JtYXR0ZWRVc2VyIiwiY2xlYXIiLCJwYXNzd29yZCIsIkZpcmViYXNlIiwic2lnbkluV2l0aFBvcHVwIiwic2VuZFBhc3N3b3JkUmVzZXRFbWFpbCIsInRoZW4iLCJjdXJyZW50VXNlciIsImdldElkVG9rZW4iLCJzZW5kRW1haWxWZXJpZmljYXRpb24iLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkFwb2xsb1Byb3ZpZGVyIiwiY2xpZW50IiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiZ2V0VG9rZW4iLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwiV09SS1NQQUNFX0VORFBPSU5UIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiT25Ub2tlbkV2ZW50IiwiZ2V0IiwiRUlHSFRfQkFTRV9QVUJMSUNfVE9LRU4iLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZW1vdGlvbkNhY2hlIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiaW5pdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0aGVtZSIsImh0bWwiLCJoZWlnaHQiLCJib2R5Iiwib3ZlcmZsb3dZIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJDT0xPUl9CVVRUT05fUkVEIiwiYXBwV2l0aEkxOE5leHQiLCJjcmVhdGVDYWNoZSIsImtleSIsIkJBU0VfVVJMIiwiV09SS1NQQUNFX0lEIiwiRU5WSVJPTk1FTlRfTkFNRSIsIkFVVEhfUFJPRklMRV9JRCIsIkFVVEgwX1BST0ZJTEVfSUQiLCJBVVRIX0NMSUVOVF9JRCIsIkFVVEhfQ0xJRU5UX0RPTUFJTiIsIkFVVEgwX0NMSUVOVF9ET01BSU4iLCJFSUdIVEJBU0VfV1NfRU5EUE9JTlQiLCJBVVRIX0NMSUVOVF9SRURJUkVDVF9VUkkiLCJBVVRIX0NMSUVOVF9SRURJUkVDVF9MT0dPVVQiLCJFTUFJTF9SRUdFWCIsIlBBU1NXT1JEX1JFR0VYIiwiUmVnRXhwIiwiRGF5cyIsIklOSVRJQUxfU1RBVEUiLCJjcmVhdGVFdmVudCIsImluaXRpYWxWYWx1ZSIsIk9uVG9rZW5FcnJvckV2ZW50IiwiQ09MT1JfQkFDS0dST1VORF9EQVJLX0xJR0hUIiwiQ09MT1JfQkFDS0dST1VORF9EQVJLIiwiQ09MT1JfQkFDS0dST1VORF9MSUdIVCIsIkNPTE9SX0xFVFRFUlNfV0hJVEUiLCJDT0xPUl9MRVRURVJTX0RBUksiLCJDT0xPUl9JTlBVVF9MSUdIVCIsIkNPTE9SX0lOUFVUX0RBUksiLCJDT0xPUl9CVVRUT05fUkVEX0xJR0hUIiwiQ09MT1JfQlVUVE9OX0RBUksiLCJDT0xPUl9HUkVFTiIsIkNPTE9SX0xJR0hUX0dSRUVOIiwiQ09MT1JfQkxVRSIsIkNPTE9SX1lFTExPVyIsIkNPTE9SX09SQU5HRSIsImNyZWF0ZVRoZW1lIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwibGlnaHQiLCJkYXJrIiwic2Vjb25kYXJ5Iiwid2FybmluZyIsInRleHQiLCJiYWNrZ3JvdW5kRGFya0dyYXkiLCJiYWNrZ3JvdW5kR3JheSIsImJhY2tncm91bmRMaWdodEdyYXkiLCJsZXR0ZXJDb2xvcldoaXRlIiwibGV0dGVyQ29sb3JEYXJrIiwiaW5wdXRDb2xvckxpZ2h0IiwiaW5wdXRDb2xvckRhcmsiLCJncmVlbiIsImxpZ2h0R3JlZW4iLCJibHVlIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0TGlnaHQiLCJmb250V2VpZ2h0UmVndWxhciIsImZvbnRXZWlnaHRNZWRpdW0iLCJmb250V2VpZ2h0Qm9sZCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsIndoaXRlU3BhY2UiLCJmb250V2VpZ2h0IiwiY29udGFpbmVkU2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJvdXRsaW5lZFNlY29uZGFyeSIsImJvcmRlciIsImRlZmF1bHRQcm9wcyIsInZhcmlhbnQiLCJNdWlQaWNrZXJzRGF5IiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5nIiwiZ2V0SXRlbSIsImxhbmd1YWdlcyIsImNvZGUiLCJ0cmFuc2xhdGVLZXkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFQyx5Q0FEYTtBQUVyQkMsWUFBVSxFQUFFRCxPQUFPLENBQUNFLEdBQVIs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QzdCLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLGFBQTVCLEVBQTJDMkIsUUFBM0M7QUFDQUgsUUFBSSxDQUFDbUcsY0FBTCxDQUFvQmhHLFFBQXBCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xILFFBQUksQ0FBQ21HLGNBQUwsQ0FBb0JDLElBQXBCO0FBQ0Q7QUFDRixDQVJNO0FBVUEsTUFBTUUsU0FBUyxHQUFHLENBQ3ZCO0FBQUVDLE1BQUksRUFBRSxJQUFSO0FBQWNDLGNBQVksRUFBRTtBQUE1QixDQUR1QixFQUV2QjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxjQUFZLEVBQUU7QUFBNUIsQ0FGdUIsRUFHdkI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsY0FBWSxFQUFFO0FBQTVCLENBSHVCLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJQLDJDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCc7XHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9maXJlc3RvcmUnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19hcGlLZXksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfYXV0aERvbWFpbixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX3Byb2plY3RJZCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19zdG9yYWdlQnVja2V0LFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19tZXNzYWdpbmdTZW5kZXJJZCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfYXBwSWQsXHJcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfbWVhc3VyZW1lbnRJZCxcclxufTtcclxuXHJcbi8vIGlmIGEgRmlyZWJhc2UgaW5zdGFuY2UgZG9lc24ndCBleGlzdCwgY3JlYXRlIG9uZVxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlOyIsImNvbnN0IHN1cHBvcnRlZExuZ3MgPSBbJ2VuJywgJ2VzJywgJ3B0J107XHJcblxyXG5leHBvcnQgY29uc3QgbmkxOG5Db25maWcgPSB7XHJcbiAgZmFsbGJhY2tMbmc6IHN1cHBvcnRlZExuZ3MsXHJcbiAgc3VwcG9ydGVkTG5ncyxcclxuICBuczogWydjb21tb24nXSxcclxuICByZWFjdDoge1xyXG4gICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlRmlyZWJhc2VBdXRoIGZyb20gJy4uL2hvb2tzL3VzZUZpcmViYXNlQXV0aCc7XHJcblxyXG5jb25zdCBGaXJlQmFzZUNvbnRleHQ6IGFueSA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIGF1dGhVc2VyOiBudWxsLFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbiAgc2lnbkluV2l0aEdvb2dsZTogYXN5bmMgKCkgPT4ge30sXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQ6IGFzeW5jICgpID0+IHt9LFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZDogYXN5bmMgKCkgPT4ge30sXHJcbiAgcGFzc3dvcmRSZXNldDogYXN5bmMgKCkgPT4ge30sXHJcbiAgc2lnbk91dDogYXN5bmMgKCkgPT4ge30sXHJcbiAgZ2V0QXV0aFRva2VuOiBhc3luYyAoKSA9PiB7fSxcclxuICBzZW5kVmVyaWZpY2F0aW9uRW1haWw6IGFzeW5jICgpID0+IHt9LFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cclxuICogQHBhcmFtIHByb3BzIC0gXHJcbiAqIEBwYXJhbSBwcm9wcy5jaGlsZHJlbiAtIENoaWxkcmVuLlxyXG4gKiBAcmV0dXJucyAtIFJldHVybiB1c2VyIHByb2ZpbGUgYmFzaWMgZGF0YSBsaWtlIHVzZXJuYW1lIGFuZCBhdmF0YXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRmlyZUJhc2VBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBhdXRoID0gdXNlRmlyZWJhc2VBdXRoKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGaXJlQmFzZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2F1dGh9PntjaGlsZHJlbn08L0ZpcmVCYXNlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmlyZUJhc2VBdXRoOiBhbnkgPSAoKSA9PiB1c2VDb250ZXh0KEZpcmVCYXNlQ29udGV4dCk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1JUID0gJyc7XHJcbmV4cG9ydCBjb25zdCBFSUdIVF9CQVNFX0JBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLjhiYXNlLmNvbSc7XHJcbmV4cG9ydCBjb25zdCBFSUdIVF9CQVNFX0FQSV9UT0tFTiA9ICc5Yjc4MWE4My04NjNmLTRiNDgtYjMwYS00MjBkNjM4N2I1NDknO1xyXG5leHBvcnQgY29uc3QgRUlHSFRfQkFTRV9XT1JLU1BBQ0VfSUQgPSAnY2t0aXY0eXdnMDJoaTA4bXo3bTU3MnZpYic7XHJcbmV4cG9ydCBjb25zdCBFSUdIVF9CQVNFX0JSQU5DSF9OQU1FID0gJ21haW4nO1xyXG5leHBvcnQgY29uc3QgQVVUSDBfU0VDUkVUID0gJzgxZGY4OWFhLWQ4NTQtNDg2Ni1hMTc4LTkzMGFiYzlhMjEyYic7XHJcbmV4cG9ydCBjb25zdCBBVVRIMF9CQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5leHBvcnQgY29uc3QgQVVUSDBfSVNTVUVSX0JBU0VfVVJMID0gJ2h0dHBzOi8vZG9qby1wbHVzLW1haW4udXMuYXV0aDAuY29tJztcclxuZXhwb3J0IGNvbnN0IEFVVEgwX0NMSUVOVF9JRCA9ICdHZ2R1UEJOMm1sbEtYQ0lJWnFiUmtLd3BaNTdBUjFSZSc7XHJcbmV4cG9ydCBjb25zdCBBVVRIMF9DTElFTlRfU0VDUkVUID1cclxuICAnU1RzYTMwMW1fR3VlV09CX1ZseXM4b1Axc3JxMkhRcXhsajVwQl80UjhNRERLdXd2ZGYwaS1IejV0ZUEzYmltXyc7XHJcbmV4cG9ydCBjb25zdCBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0JBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLjhiYXNlLmNvbSc7XHJcbmV4cG9ydCBjb25zdCBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0FQSV9UT0tFTiA9XHJcbiAgJzliNzgxYTgzLTg2M2YtNGI0OC1iMzBhLTQyMGQ2Mzg3YjU0OSc7XHJcbmV4cG9ydCBjb25zdCBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX1dPUktTUEFDRV9JRCA9ICdja3RpdjR5d2cwMmhpMDhtejdtNTcydmliJztcclxuZXhwb3J0IGNvbnN0IE5FWFRfUFVCTElDX0VJR0hUX0JBU0VfQlJBTkNIX05BTUUgPSAnbWFpbic7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmlyZWJhc2UsIHsgZ29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2VDb25maWcnO1xyXG5cclxuaW50ZXJmYWNlIEF1dGhVc2VyIHtcclxuICB1aWQ6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcbiAgZW1haWxWZXJpZmllZDogYm9vbGVhbjtcclxuICBpc0Fub255bW91czogYm9vbGVhbjtcclxuICBtZXRhZGF0YTogYW55O1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGhvdG9VUkw6IHN0cmluZztcclxuICBwcm92aWRlckRhdGE6IGFueTtcclxuICBwcm92aWRlcklkOiBzdHJpbmc7XHJcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XHJcbiAgdGVuYW50SWQ6IHN0cmluZztcclxufVxyXG5jb25zdCBmb3JtYXRBdXRoVXNlciA9ICh1c2VyKTogQXV0aFVzZXIgPT4gKHtcclxuICB1aWQ6IHVzZXIudWlkLFxyXG4gIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxyXG4gIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcclxuICBpc0Fub255bW91czogdXNlci5pc0Fub255bW91cyxcclxuICBtZXRhZGF0YTogdXNlci5tZXRhZGF0YSxcclxuICBwaG9uZU51bWJlcjogdXNlci5waG9uZU51bWJlcixcclxuICBwaG90b1VSTDogdXNlci5waG90b1VSTCxcclxuICBwcm92aWRlckRhdGE6IHVzZXIucHJvdmlkZXJEYXRhLFxyXG4gIHByb3ZpZGVySWQ6IHVzZXIucHJvdmlkZXJJZCxcclxuICByZWZyZXNoVG9rZW46IHVzZXIucmVmcmVzaFRva2VuLFxyXG4gIHRlbmFudElkOiB1c2VyLnRlbmFudElkLFxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gLSBmaXJlYmFzZSBob29rLlxyXG4gKiBAcmV0dXJucyAtIFJldHVybiBkaWZmZXJlbnQgbWV0aG9kcyBvZiBmaXJlYmFzZS5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZpcmViYXNlQXV0aCgpIHtcclxuICBjb25zdCBbYXV0aFVzZXIsIHNldEF1dGhVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBhdXRoU3RhdGVDaGFuZ2VkID0gYXN5bmMgKGF1dGhTdGF0ZTogYW55KSA9PiB7XHJcbiAgICBpZiAoIWF1dGhTdGF0ZSkge1xyXG4gICAgICBzZXRBdXRoVXNlcihudWxsKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVkVXNlciA9IGZvcm1hdEF1dGhVc2VyKGF1dGhTdGF0ZSk7XHJcbiAgICBzZXRBdXRoVXNlcihmb3JtYXR0ZWRVc2VyKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsZWFyID0gKCkgPT4ge1xyXG4gICAgc2V0QXV0aFVzZXIobnVsbCk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBGaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gYXN5bmMgKCkgPT5cclxuICAgIEZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlQXV0aFByb3ZpZGVyKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGVtYWlsLCBwYXNzd29yZCkgPT5cclxuICAgIEZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRSZXNldCA9IChlbWFpbCkgPT5cclxuICAgIEZpcmViYXNlLmF1dGgoKS5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKTtcclxuXHJcbiAgY29uc3Qgc2lnbk91dCA9ICgpID0+IEZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbihjbGVhcik7XHJcblxyXG4gIGNvbnN0IGdldEF1dGhUb2tlbiA9IGFzeW5jICgpID0+IEZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpO1xyXG5cclxuICBjb25zdCBzZW5kVmVyaWZpY2F0aW9uRW1haWwgPSBhc3luYyAoKSA9PlxyXG4gICAgRmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbigpO1xyXG5cclxuICAvLyBsaXN0ZW4gZm9yIEZpcmViYXNlIHN0YXRlIGNoYW5nZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IEZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aFN0YXRlQ2hhbmdlZCk7XHJcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIE9uIExvZ2luLCBGZXRjaCB1c2VyIHRva2VuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRoVXNlcikge1xyXG4gICAgICBnZXRBdXRoVG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBVVRIX1RPS0VOJywgdG9rZW4pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbYXV0aFVzZXJdKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ25JbldpdGhHb29nbGUsXHJcbiAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIHBhc3N3b3JkUmVzZXQsXHJcbiAgICBzaWduT3V0LFxyXG4gICAgZ2V0QXV0aFRva2VuLFxyXG4gICAgc2VuZFZlcmlmaWNhdGlvbkVtYWlsLFxyXG4gICAgYXV0aFVzZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgYXMgUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4vY2xpZW50JztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgdGhhdCBoYW5kbGUgdGhlIGxvZ2ljIG9mIGdldCB0aGUgdG9rZW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcyAtIFByb3BzLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMuY2hpbGRyZW4gLSBDaGlsZHJlbi5cclxuICogQHJldHVybnMge0pTWC5FbGVtZW50fSAtIENvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBBcG9sbG9Qcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KTogSlNYLkVsZW1lbnQge1xyXG4gIHJldHVybiA8UHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PntjaGlsZHJlbn08L1Byb3ZpZGVyPjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFwb2xsb0NsaWVudCxcclxuICBJbk1lbW9yeUNhY2hlLFxyXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCxcclxuICBIdHRwTGluayxcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7XHJcbiAgV09SS1NQQUNFX0VORFBPSU5ULFxyXG4gIEVJR0hUX0JBU0VfUFVCTElDX1RPS0VOLFxyXG59IGZyb20gJy4uLy4uL3NoYXJlZC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBPblRva2VuRXZlbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQvZXZlbnRzL3Rva2VuLWV2ZW50JztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRUb2tlbiAtIEZ1bmN0aW9uIHRvIGdldCB0aGUgdG9rZW4uXHJcbiAqIEByZXR1cm5zIHtvYmplY3R9IEFwb2xsbyBjbGllbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KFxyXG4gIGdldFRva2VuOiAoKSA9PiBzdHJpbmcsXHJcbik6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+IHtcclxuICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XHJcbiAgICB1cmk6IFdPUktTUEFDRV9FTkRQT0lOVCxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFRva2VuKCl9YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBXT1JLU1BBQ0VfRU5EUE9JTlQsXHJcbiAgICBsaW5rOiBodHRwTGluayxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gIH0pO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoKCkgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gT25Ub2tlbkV2ZW50LmdldCgpPy50b2tlbiB8fCBFSUdIVF9CQVNFX1BVQkxJQ19UT0tFTjtcclxuICByZXR1cm4gdG9rZW47XHJcbn0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcclxuaW1wb3J0IHsgYXBwV2l0aEkxOE5leHQgfSBmcm9tICduaTE4bic7XHJcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSAnQG11aS9tYXRlcmlhbC9HbG9iYWxTdHlsZXMnO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHsgQ2FjaGVQcm92aWRlciwgRW1vdGlvbkNhY2hlIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xyXG5pbXBvcnQgTmV4dE5wcm9ncmVzcyBmcm9tICduZXh0anMtcHJvZ3Jlc3NiYXInO1xyXG5pbXBvcnQgeyBuaTE4bkNvbmZpZyB9IGZyb20gJy4uLy4uL25pMThuLmNvbmZpZyc7XHJcbmltcG9ydCB7IENPTE9SX0JVVFRPTl9SRUQgfSBmcm9tICcuLi9zaGFyZWQvc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCAnZGF5anMvbG9jYWxlL2VzJztcclxuaW1wb3J0ICdkYXlqcy9sb2NhbGUvcHQnO1xyXG5cclxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zaGFyZWQvc3R5bGVzL3RoZW1lJztcclxuaW1wb3J0IHsgY3JlYXRlRW1vdGlvbkNhY2hlIH0gZnJvbSAnLi4vc2hhcmVkL2NvbmZpZy9jcmVhdGVFbW90aW9uQ2FjaGUnO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJy4uL21vZHVsZXMvYXBvbGxvL0Fwb2xsb1Byb3ZpZGVyJztcclxuXHJcbmltcG9ydCAnLi4vc2hhcmVkL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IGluaXRMYW5ndWFnZSB9IGZyb20gJy4uL3NoYXJlZC91dGlscy9sYW5ndWFnZS11dGlscyc7XHJcbmltcG9ydCB7IEZpcmVCYXNlQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9GaXJlYmFzZUNvbnRleHQnO1xyXG5cclxuLy8gQ2xpZW50LXNpZGUgY2FjaGUsIHNoYXJlZCBmb3IgdGhlIHdob2xlIHNlc3Npb24gb2YgdGhlIHVzZXIgaW4gdGhlIGJyb3dzZXIuXHJcbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcclxuXHJcbmludGVyZmFjZSBNeUFwcFByb3BzIGV4dGVuZHMgQXBwUHJvcHMge1xyXG4gIGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtBcHBQcm9wc30gcHJvcCAtIFByb3BzLlxyXG4gKiBAcGFyYW0ge0FwcFByb3BzfSBwcm9wLkNvbXBvbmVudCAtIENvbXBvbmVudC5cclxuICogQHBhcmFtIHtBcHBQcm9wc30gcHJvcC5wYWdlUHJvcHMgLSBQYWdlUHJvcHMuXHJcbiAqIEByZXR1cm5zIHtKU1guRWxlbWVudH0gLSBNYWluIGFwcCBjb21wb25lbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBBcHAoe1xyXG4gIENvbXBvbmVudCxcclxuICBwYWdlUHJvcHMsXHJcbiAgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZSxcclxufTogTXlBcHBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0TGFuZ3VhZ2UoeyBpMThuLCBsYW5ndWFnZTogd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB9KTtcclxuICB9LCBbaTE4bl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhY2hlUHJvdmlkZXIgdmFsdWU9e2Vtb3Rpb25DYWNoZX0+XHJcbiAgICAgIDxGaXJlQmFzZUF1dGhQcm92aWRlcj5cclxuICAgICAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICAgICAgPEFwb2xsb1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICAgIDxHbG9iYWxTdHlsZXNcclxuICAgICAgICAgICAgICAgIHN0eWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICBodG1sOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAnI19fbmV4dCc6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPE5leHROcHJvZ3Jlc3MgY29sb3I9e0NPTE9SX0JVVFRPTl9SRUR9IC8+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgICAgIDwvVXNlclByb3ZpZGVyPlxyXG4gICAgICA8L0ZpcmVCYXNlQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9DYWNoZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZGVmYXVsdC1leHBvcnRcclxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aEkxOE5leHQoQXBwLCBuaTE4bkNvbmZpZyk7XHJcbiIsImltcG9ydCBjcmVhdGVDYWNoZSwgeyBFbW90aW9uQ2FjaGUgfSBmcm9tICdAZW1vdGlvbi9jYWNoZSc7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlRW1vdGlvbkNhY2hlID0gKCk6IEVtb3Rpb25DYWNoZSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KTtcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0JBU0VfVVJMLFxyXG4gIE5FWFRfUFVCTElDX0VJR0hUX0JBU0VfV09SS1NQQUNFX0lELFxyXG4gIE5FWFRfUFVCTElDX0VJR0hUX0JBU0VfQlJBTkNIX05BTUUsXHJcbiAgTkVYVF9QVUJMSUNfRUlHSFRfQkFTRV9BUElfVE9LRU4sXHJcbiAgQVVUSDBfQ0xJRU5UX0lELFxyXG59IGZyb20gJy4uLy4uL2Vudmlyb25tZW50JztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZWxlc3MtZXNjYXBlICovXHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IE5FWFRfUFVCTElDX0VJR0hUX0JBU0VfQkFTRV9VUkw7XHJcbmV4cG9ydCBjb25zdCBXT1JLU1BBQ0VfSUQgPSBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX1dPUktTUEFDRV9JRDtcclxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UX05BTUUgPSBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0JSQU5DSF9OQU1FIHx8ICcnO1xyXG5leHBvcnQgY29uc3QgRUlHSFRfQkFTRV9QVUJMSUNfVE9LRU4gPSBORVhUX1BVQkxJQ19FSUdIVF9CQVNFX0FQSV9UT0tFTjtcclxuZXhwb3J0IGNvbnN0IFdPUktTUEFDRV9FTkRQT0lOVCA9IGAke0JBU0VfVVJMfS8ke1dPUktTUEFDRV9JRH0ke1xyXG4gIEVOVklST05NRU5UX05BTUUgIT09ICcnID8gYF8ke0VOVklST05NRU5UX05BTUV9YCA6ICcnXHJcbn1gO1xyXG5leHBvcnQgY29uc3QgQVVUSF9QUk9GSUxFX0lEID0gcHJvY2Vzcy5lbnYuQVVUSDBfUFJPRklMRV9JRDtcclxuZXhwb3J0IGNvbnN0IEFVVEhfQ0xJRU5UX0lEID0gQVVUSDBfQ0xJRU5UX0lEIHx8ICcnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9DTElFTlRfRE9NQUlOID0gcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0RPTUFJTiB8fCAnJztcclxuZXhwb3J0IGNvbnN0IEVJR0hUQkFTRV9XU19FTkRQT0lOVCA9ICd3c3M6Ly93cy44YmFzZS5jb20nO1xyXG5leHBvcnQgY29uc3QgQVVUSF9DTElFTlRfUkVESVJFQ1RfVVJJID0gJyc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX0NMSUVOVF9SRURJUkVDVF9MT0dPVVQgPSAnJztcclxuLy8gZXhwb3J0IGNvbnN0IEFVVEhfQ0xJRU5UX1JFRElSRUNUX1VSSSA9ICh0eXBlb2Ygd2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPSAndW5kZWZpbmVkJyk/YCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXV0aC9jYWxsYmFja2A6Jyc7XHJcbi8vIGV4cG9ydCBjb25zdCBBVVRIX0NMSUVOVF9SRURJUkVDVF9MT0dPVVQgPSAodHlwZW9mIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT0gJ3VuZGVmaW5lZCcpP2Ake3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2xvZ291dGA6Jyc7XHJcblxyXG5leHBvcnQgY29uc3QgRU1BSUxfUkVHRVggPVxyXG4gIC9eKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXStcXC4pK1tePD4oKVtcXF1cXC4sOzpcXHNAXFxcIl17Mix9KSQvaTtcclxuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX1JFR0VYID0gbmV3IFJlZ0V4cCgnXig/PS57OCx9KScpO1xyXG5leHBvcnQgY29uc3QgRGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRXZlbnQgfSBmcm9tICdAY29idWlsZGxhYi9yZWFjdC1zaW1wbGUtc3RhdGUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsU3RhdGVUeXBlIHtcclxuICB0b2tlbjogbnVsbCB8IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICB0b2tlbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBPblRva2VuRXZlbnQgPSBjcmVhdGVFdmVudDxJbml0aWFsU3RhdGVUeXBlPih7XHJcbiAgaW5pdGlhbFZhbHVlOiBJTklUSUFMX1NUQVRFLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE9uVG9rZW5FcnJvckV2ZW50ID0gY3JlYXRlRXZlbnQ8RXJyb3I+KCk7XHJcbiIsIi8vIEJhY2tncm91bmQgQ29sb3JzXHJcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX0RBUktfTElHSFQgPSAnIzI4MjgyOCc7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX0RBUksgPSAnIzExMTExMSc7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl9CQUNLR1JPVU5EX0xJR0hUID0gJyMyODI4MjgnO1xyXG5cclxuLy8gVGV4dCBDb2xvcnNcclxuZXhwb3J0IGNvbnN0IENPTE9SX0xFVFRFUlNfV0hJVEUgPSAnI0ZGRkZGRic7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl9MRVRURVJTX0RBUksgPSAnIzAwMCc7XHJcblxyXG4vLyBJbnB1dCBiYWNrZ291bmQgY29sb3JzXHJcbmV4cG9ydCBjb25zdCBDT0xPUl9JTlBVVF9MSUdIVCA9ICcjRjBGMEYwJztcclxuZXhwb3J0IGNvbnN0IENPTE9SX0lOUFVUX0RBUksgPSAnIzgyODI4Mic7XHJcblxyXG4vLyBCdXR0b20gY29sb3JzXHJcbmV4cG9ydCBjb25zdCBDT0xPUl9CVVRUT05fUkVEX0xJR0hUID0gJyNmZjU5NWYnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfQlVUVE9OX1JFRCA9ICcjRDIxNjMyJztcclxuZXhwb3J0IGNvbnN0IENPTE9SX0JVVFRPTl9EQVJLID0gJyMzQjNCM0InO1xyXG5cclxuLy8gZXh0cmEgY29sb3JzXHJcbmV4cG9ydCBjb25zdCBDT0xPUl9HUkVFTiA9ICcjMDBEMTY5JztcclxuZXhwb3J0IGNvbnN0IENPTE9SX0xJR0hUX0dSRUVOID0gJyNENEZFNDQnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfQkxVRSA9ICcjMkM2OEY2JztcclxuZXhwb3J0IGNvbnN0IENPTE9SX1lFTExPVyA9ICcjRkZGRjAwJztcclxuZXhwb3J0IGNvbnN0IENPTE9SX09SQU5HRSA9ICcjRDA0MTBEJztcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IHR5cGUge30gZnJvbSAnQG11aS9sYWIvdGhlbWVBdWdtZW50YXRpb24nO1xyXG5pbXBvcnQge1xyXG4gIENPTE9SX0JBQ0tHUk9VTkRfREFSSyxcclxuICBDT0xPUl9CQUNLR1JPVU5EX0RBUktfTElHSFQsXHJcbiAgQ09MT1JfQkFDS0dST1VORF9MSUdIVCxcclxuICAvLyBDT0xPUl9CVVRUT05fUkVEX0xJR0hULFxyXG4gIENPTE9SX0lOUFVUX0RBUkssXHJcbiAgQ09MT1JfSU5QVVRfTElHSFQsXHJcbiAgQ09MT1JfTEVUVEVSU19EQVJLLFxyXG4gIENPTE9SX0xFVFRFUlNfV0hJVEUsXHJcbiAgQ09MT1JfQkxVRSxcclxuICBDT0xPUl9HUkVFTixcclxuICBDT0xPUl9MSUdIVF9HUkVFTixcclxuICBDT0xPUl9CVVRUT05fREFSSyxcclxuICBDT0xPUl9ZRUxMT1csXHJcbiAgQ09MT1JfQlVUVE9OX1JFRCxcclxufSBmcm9tICcuL2NvbG9ycyc7XHJcblxyXG4vLyAgVGhlbWUgY29uZmlndXJhdGlvbiB2YXJpYWJsZXNcclxuZGVjbGFyZSBtb2R1bGUgJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJyB7XHJcbiAgaW50ZXJmYWNlIFBhbGV0dGUge1xyXG4gICAgYmFja2dyb3VuZERhcmtHcmF5OiBQYWxldHRlWydwcmltYXJ5J107XHJcbiAgICBiYWNrZ3JvdW5kR3JheTogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gICAgYmFja2dyb3VuZExpZ2h0R3JheTogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gICAgbGV0dGVyQ29sb3JXaGl0ZTogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gICAgbGV0dGVyQ29sb3JEYXJrOiBQYWxldHRlWydwcmltYXJ5J107XHJcbiAgICBpbnB1dENvbG9yTGlnaHQ6IFBhbGV0dGVbJ3ByaW1hcnknXTtcclxuICAgIGlucHV0Q29sb3JEYXJrOiBQYWxldHRlWydwcmltYXJ5J107XHJcbiAgICBncmVlbjogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gICAgbGlnaHRHcmVlbjogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gICAgYmx1ZTogUGFsZXR0ZVsncHJpbWFyeSddO1xyXG4gIH1cclxuICBpbnRlcmZhY2UgUGFsZXR0ZU9wdGlvbnMge1xyXG4gICAgYmFja2dyb3VuZERhcmtHcmF5OiBQYWxldHRlT3B0aW9uc1sncHJpbWFyeSddO1xyXG4gICAgYmFja2dyb3VuZEdyYXk6IFBhbGV0dGVPcHRpb25zWydwcmltYXJ5J107XHJcbiAgICBiYWNrZ3JvdW5kTGlnaHRHcmF5OiBQYWxldHRlT3B0aW9uc1sncHJpbWFyeSddO1xyXG4gICAgbGV0dGVyQ29sb3JXaGl0ZTogUGFsZXR0ZU9wdGlvbnNbJ3ByaW1hcnknXTtcclxuICAgIGxldHRlckNvbG9yRGFyazogUGFsZXR0ZU9wdGlvbnNbJ3ByaW1hcnknXTtcclxuICAgIGlucHV0Q29sb3JMaWdodDogUGFsZXR0ZU9wdGlvbnNbJ3ByaW1hcnknXTtcclxuICAgIGlucHV0Q29sb3JEYXJrOiBQYWxldHRlT3B0aW9uc1sncHJpbWFyeSddO1xyXG4gICAgZ3JlZW46IFBhbGV0dGVPcHRpb25zWydwcmltYXJ5J107XHJcbiAgICBsaWdodEdyZWVuOiBQYWxldHRlT3B0aW9uc1sncHJpbWFyeSddO1xyXG4gICAgYmx1ZTogUGFsZXR0ZU9wdGlvbnNbJ3ByaW1hcnknXTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICBicmVha3BvaW50czoge1xyXG4gICAgdmFsdWVzOiB7XHJcbiAgICAgIHhzOiAzMjAsXHJcbiAgICAgIHNtOiA2MDAsXHJcbiAgICAgIG1kOiA5MDAsXHJcbiAgICAgIGxnOiAxMjAwLFxyXG4gICAgICB4bDogMTUzNixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IENPTE9SX0JVVFRPTl9SRUQsXHJcbiAgICAgIGxpZ2h0OiAnI2ZmNTk1ZicsXHJcbiAgICAgIGRhcms6ICcjQjIzRTQyJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogQ09MT1JfQlVUVE9OX0RBUkssXHJcbiAgICB9LFxyXG4gICAgd2FybmluZzoge1xyXG4gICAgICBtYWluOiBDT0xPUl9ZRUxMT1csXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICBwcmltYXJ5OiBDT0xPUl9MRVRURVJTX1dISVRFLFxyXG4gICAgICBzZWNvbmRhcnk6IENPTE9SX0xFVFRFUlNfREFSSyxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kRGFya0dyYXk6IHtcclxuICAgICAgbWFpbjogQ09MT1JfQkFDS0dST1VORF9EQVJLLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRHcmF5OiB7XHJcbiAgICAgIG1haW46IENPTE9SX0JBQ0tHUk9VTkRfREFSS19MSUdIVCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kTGlnaHRHcmF5OiB7XHJcbiAgICAgIG1haW46IENPTE9SX0JBQ0tHUk9VTkRfTElHSFQsXHJcbiAgICB9LFxyXG4gICAgbGV0dGVyQ29sb3JXaGl0ZToge1xyXG4gICAgICBtYWluOiBDT0xPUl9MRVRURVJTX1dISVRFLFxyXG4gICAgfSxcclxuICAgIGxldHRlckNvbG9yRGFyazoge1xyXG4gICAgICBtYWluOiBDT0xPUl9MRVRURVJTX0RBUkssXHJcbiAgICB9LFxyXG4gICAgaW5wdXRDb2xvckxpZ2h0OiB7XHJcbiAgICAgIG1haW46IENPTE9SX0lOUFVUX0xJR0hULFxyXG4gICAgfSxcclxuICAgIGlucHV0Q29sb3JEYXJrOiB7XHJcbiAgICAgIG1haW46IENPTE9SX0lOUFVUX0RBUkssXHJcbiAgICB9LFxyXG4gICAgZ3JlZW46IHtcclxuICAgICAgbWFpbjogQ09MT1JfR1JFRU4sXHJcbiAgICB9LFxyXG4gICAgbGlnaHRHcmVlbjoge1xyXG4gICAgICBtYWluOiBDT0xPUl9MSUdIVF9HUkVFTixcclxuICAgIH0sXHJcbiAgICBibHVlOiB7XHJcbiAgICAgIG1haW46IENPTE9SX0JMVUUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogJ1NhaXJhJyxcclxuICAgIGZvbnRXZWlnaHRMaWdodDogMzAwLFxyXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcclxuICAgIGZvbnRXZWlnaHRNZWRpdW06IDUwMCxcclxuICAgIGZvbnRXZWlnaHRCb2xkOiA3MDAsXHJcbiAgfSxcclxuICBzaGFwZToge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgTXVpQnV0dG9uOiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRhaW5lZFNlY29uZGFyeToge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJyMxMTExMTEnLFxyXG4gICAgICAgICAgY29sb3I6ICcjRkNGQ0ZDJyxcclxuICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogQ09MT1JfQkFDS0dST1VORF9MSUdIVCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdXRsaW5lZFNlY29uZGFyeToge1xyXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM0RjRGNEYnLFxyXG4gICAgICAgICAgY29sb3I6ICcjRkNGQ0ZDJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBkZWZhdWx0UHJvcHM6IHtcclxuICAgICAgICB2YXJpYW50OiAnY29udGFpbmVkJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBNdWlQaWNrZXJzRGF5OiB7XHJcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XHJcbiAgICAgICAgcm9vdDoge1xyXG4gICAgICAgICAgY29sb3I6ICcjMTExJyxcclxuICAgICAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2YwMCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJ0eXBlIFByb3BzID0ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgaTE4bjogYW55O1xyXG4gIGxhbmd1YWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5nZUxhbmd1YWdlID0gKHsgaTE4biwgbGFuZ3VhZ2UgfTogUHJvcHMpOiB2b2lkID0+IHtcclxuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01ZX0xBTkdVQUdFJywgbGFuZ3VhZ2UpO1xyXG4gIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRMYW5ndWFnZSA9ICh7IGkxOG4sIGxhbmd1YWdlIH06IFByb3BzKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgbGFuZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTVlfTEFOR1VBR0UnKTtcclxuICBpZiAoIWxhbmcpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTVlfTEFOR1VBR0UnLCBsYW5ndWFnZSk7XHJcbiAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5nKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG4gIHsgY29kZTogJ2VuJywgdHJhbnNsYXRlS2V5OiAnZW5nbGlzaCcgfSxcclxuICB7IGNvZGU6ICdwdCcsIHRyYW5zbGF0ZUtleTogJ3BvcnR1Z3Vlc2UnIH0sXHJcbiAgeyBjb2RlOiAnZXMnLCB0cmFuc2xhdGVLZXk6ICdzcGFuaXNoJyB9LFxyXG5dO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXV0aDAvbmV4dGpzLWF1dGgwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb2J1aWxkbGFiL3JlYWN0LXNpbXBsZS1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jYWNoZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR2xvYmFsU3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzL2xvY2FsZS9lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqcy9sb2NhbGUvcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHRqcy1wcm9ncmVzc2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuaTE4blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9