module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/User/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./services/Airtable.ts":
/*!******************************!*\
  !*** ./services/Airtable.ts ***!
  \******************************/
/*! exports provided: baseConfig, getTableInstance, TABLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConfig", function() { return baseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableInstance", function() { return getTableInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLES", function() { return TABLES; });
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ "airtable");
/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);
 // Authenticate

airtable__WEBPACK_IMPORTED_MODULE_0___default.a.configure({
  apiKey: 'keysoybDkh74gyju3'
});
const baseConfig = {
  People: {
    BASE_ID: 'appIEwWfss9szaaqp',
    BASE_NAME: 'People'
  },
  Rank: {
    BASE_ID: 'apptPpGEoF7yqBixc',
    BASE_NAME: 'Ranks Issued'
  },
  School: {
    BASE_ID: 'appfWrsMsl0S5X0TK',
    BASE_NAME: 'Schools'
  },
  Achievement: {
    BASE_ID: 'appDb9CYNMbeSRhqd',
    BASE_NAME: 'All Achievements'
  },
  Video: {
    BASE_ID: 'appdRGYhzSBXQ3djH',
    BASE_NAME: 'External'
  },
  Martial_Art: {
    BASE_ID: 'appe7wrj7m7qNTwF3',
    BASE_NAME: 'Ranks'
  },
  Timetable: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'Schedule'
  },
  Schools: {
    BASE_ID: 'appNKOVRBkNCnQxX0',
    BASE_NAME: 'All Schools'
  },
  Leads: {
    BASE_ID: 'appJkEmDEd0D0r2kT',
    BASE_NAME: 'Leads'
  },
  All_Schools: {
    BASE_ID: 'appJkEmDEd0D0r2kT',
    BASE_NAME: 'All Schools'
  },
  Plans: {
    BASE_ID: 'app2KCwYknmRuvz18',
    BASE_NAME: 'Plans'
  },
  Private_Classes_Classes: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'Classes'
  },
  Private_Classes_Bookings: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'Bookings'
  },
  Private_Classes_All_Profiles: {
    BASE_ID: 'appUMjtcjUx2cN1y8',
    BASE_NAME: 'All Profiles'
  },
  Seminars: {
    BASE_ID: 'appT7y2lGkAyzvRW2',
    BASE_NAME: 'Seminars'
  }
};
/**
 * @description - get Profile after send page to browser.
 * @param baseName - Base Name.
 * @returns - Return airtable instance for base like for people and others.
 */

const getTableInstance = baseName => {
  const {
    BASE_ID,
    BASE_NAME
  } = baseConfig[baseName];
  const base = airtable__WEBPACK_IMPORTED_MODULE_0___default.a.base(BASE_ID);
  const table = base(BASE_NAME);
  return table;
};
let TABLES;

(function (TABLES) {
  TABLES["PEOPLE"] = "People";
  TABLES["RANK"] = "Rank";
  TABLES["SCHOOL"] = "School";
  TABLES["ACHIEVEMENT"] = "Achievement";
  TABLES["VIDEO"] = "Video";
  TABLES["MARTIAL_ART"] = "Martial_Art";
  TABLES["TIMETABLE"] = "Timetable";
  TABLES["SCHOOLS"] = "Schools";
  TABLES["LEADS"] = "Leads";
  TABLES["ALL_SCHOOLS"] = "All_Schools";
  TABLES["PLANS"] = "Plans";
  TABLES["PRIVATE_CLASSES_CLASSES"] = "Private_Classes_Classes";
  TABLES["PRIVATE_CLASSES_BOOKINGS"] = "Private_Classes_Bookings";
  TABLES["PRIVATE_CLASSES_ALL_PROFILES"] = "Private_Classes_All_Profiles";
  TABLES["SEMINARS"] = "Seminars";
})(TABLES || (TABLES = {}));

/***/ }),

/***/ "./services/PeopleService.ts":
/*!***********************************!*\
  !*** ./services/PeopleService.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Airtable */ "./services/Airtable.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/explicit-function-return-type */

/* eslint-disable class-methods-use-this */

const table = Object(_Airtable__WEBPACK_IMPORTED_MODULE_0__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_0__["TABLES"].PEOPLE);

class PeopleService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */
  async getUser(username) {
    try {
      const records = await table.select({
        filterByFormula: `{username} = '${username}'`
      }).all();
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser(data) {
    try {
      const records = await table.create(_objectSpread({}, data));
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PeopleService());

/***/ }),

/***/ "./src/pages/api/User/index.ts":
/*!*************************************!*\
  !*** ./src/pages/api/User/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_PeopleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/PeopleService */ "./services/PeopleService.ts");

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function User(req, res) {
  if (req.method === 'GET') {
    try {
      var _req$query;

      const data = await _services_PeopleService__WEBPACK_IMPORTED_MODULE_0__["default"].getUser(typeof req.query.username === 'string' ? req.query.username : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.username[0]);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const data = await _services_PeopleService__WEBPACK_IMPORTED_MODULE_0__["default"].createUser(req.body);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else {// Handle any other HTTP method
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQWlydGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUGVvcGxlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL1VzZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWlydGFibGVcIiJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsImNvbmZpZ3VyZSIsImFwaUtleSIsImJhc2VDb25maWciLCJQZW9wbGUiLCJCQVNFX0lEIiwiQkFTRV9OQU1FIiwiUmFuayIsIlNjaG9vbCIsIkFjaGlldmVtZW50IiwiVmlkZW8iLCJNYXJ0aWFsX0FydCIsIlRpbWV0YWJsZSIsIlNjaG9vbHMiLCJMZWFkcyIsIkFsbF9TY2hvb2xzIiwiUGxhbnMiLCJQcml2YXRlX0NsYXNzZXNfQ2xhc3NlcyIsIlByaXZhdGVfQ2xhc3Nlc19Cb29raW5ncyIsIlByaXZhdGVfQ2xhc3Nlc19BbGxfUHJvZmlsZXMiLCJTZW1pbmFycyIsImdldFRhYmxlSW5zdGFuY2UiLCJiYXNlTmFtZSIsImJhc2UiLCJ0YWJsZSIsIlRBQkxFUyIsIlBFT1BMRSIsIlBlb3BsZVNlcnZpY2UiLCJnZXRVc2VyIiwidXNlcm5hbWUiLCJyZWNvcmRzIiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwiYWxsIiwiZXJyb3IiLCJjb25zb2xlIiwiY3JlYXRlVXNlciIsImRhdGEiLCJjcmVhdGUiLCJVc2VyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJzZW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7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QixFQUF5Q0MsR0FBekMsRUFBK0Q7QUFDN0QsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSTtBQUFBOztBQUNGLFlBQU1MLElBQUksR0FBRyxNQUFNViwrREFBYSxDQUFDQyxPQUFkLENBQ2pCLE9BQU9ZLEdBQUcsQ0FBQ0csS0FBSixDQUFVZCxRQUFqQixLQUE4QixRQUE5QixHQUNJVyxHQUFHLENBQUNHLEtBQUosQ0FBVWQsUUFEZCxpQkFFSVcsR0FBRyxDQUFDRyxLQUZSLCtDQUVJLFdBQVdkLFFBQVgsQ0FBb0IsQ0FBcEIsQ0FIYSxDQUFuQjtBQUtBWSxTQUFHLENBQUNHLElBQUosQ0FBU1AsSUFBVDtBQUNELEtBUEQsQ0FPRSxPQUFPSCxLQUFQLEVBQWM7QUFDZE8sU0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGLEdBWEQsTUFXTyxJQUFJUCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUNoQyxRQUFJO0FBQ0YsWUFBTUwsSUFBSSxHQUFHLE1BQU1WLCtEQUFhLENBQUNTLFVBQWQsQ0FBeUJJLEdBQUcsQ0FBQ1EsSUFBN0IsQ0FBbkI7QUFDQVAsU0FBRyxDQUFDRyxJQUFKLENBQVNQLElBQVQ7QUFDRCxLQUhELENBR0UsT0FBT0gsS0FBUCxFQUFjO0FBQ2RPLFNBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCO0FBQ0Q7QUFDRixHQVBNLE1BT0EsQ0FDTDtBQUNEO0FBQ0Y7O0FBRWNSLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDbENBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9Vc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYXBpL1VzZXIvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgQWlydGFibGUsIHsgRmllbGRTZXQsIFRhYmxlIH0gZnJvbSAnYWlydGFibGUnO1xyXG5cclxuLy8gQXV0aGVudGljYXRlXHJcbkFpcnRhYmxlLmNvbmZpZ3VyZSh7XHJcbiAgYXBpS2V5OiAna2V5c295YkRraDc0Z3lqdTMnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnID0ge1xyXG4gIFBlb3BsZToge1xyXG4gICAgQkFTRV9JRDogJ2FwcElFd1dmc3M5c3phYXFwJyxcclxuICAgIEJBU0VfTkFNRTogJ1Blb3BsZScsXHJcbiAgfSxcclxuICBSYW5rOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwdFBwR0VvRjd5cUJpeGMnLFxyXG4gICAgQkFTRV9OQU1FOiAnUmFua3MgSXNzdWVkJyxcclxuICB9LFxyXG4gIFNjaG9vbDoge1xyXG4gICAgQkFTRV9JRDogJ2FwcGZXcnNNc2wwUzVYMFRLJyxcclxuICAgIEJBU0VfTkFNRTogJ1NjaG9vbHMnLFxyXG4gIH0sXHJcbiAgQWNoaWV2ZW1lbnQ6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBEYjlDWU5NYmVTUmhxZCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgQWNoaWV2ZW1lbnRzJyxcclxuICB9LFxyXG4gIFZpZGVvOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwZFJHWWh6U0JYUTNkakgnLFxyXG4gICAgQkFTRV9OQU1FOiAnRXh0ZXJuYWwnLFxyXG4gIH0sXHJcbiAgTWFydGlhbF9BcnQ6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBlN3dyajdtN3FOVHdGMycsXHJcbiAgICBCQVNFX05BTUU6ICdSYW5rcycsXHJcbiAgfSxcclxuICBUaW1ldGFibGU6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBOS09WUkJrTkNuUXhYMCcsXHJcbiAgICBCQVNFX05BTUU6ICdTY2hlZHVsZScsXHJcbiAgfSxcclxuICBTY2hvb2xzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwTktPVlJCa05DblF4WDAnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIFNjaG9vbHMnLFxyXG4gIH0sXHJcbiAgTGVhZHM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBKa0VtREVkMEQwcjJrVCcsXHJcbiAgICBCQVNFX05BTUU6ICdMZWFkcycsXHJcbiAgfSxcclxuICBBbGxfU2Nob29sczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcEprRW1ERWQwRDByMmtUJyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBTY2hvb2xzJyxcclxuICB9LFxyXG4gIFBsYW5zOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwMktDd1lrbm1SdXZ6MTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnUGxhbnMnLFxyXG4gIH0sXHJcbiAgUHJpdmF0ZV9DbGFzc2VzX0NsYXNzZXM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBVTWp0Y2pVeDJjTjF5OCcsXHJcbiAgICBCQVNFX05BTUU6ICdDbGFzc2VzJyxcclxuICB9LFxyXG4gIFByaXZhdGVfQ2xhc3Nlc19Cb29raW5nczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFVNanRjalV4MmNOMXk4JyxcclxuICAgIEJBU0VfTkFNRTogJ0Jvb2tpbmdzJyxcclxuICB9LFxyXG4gIFByaXZhdGVfQ2xhc3Nlc19BbGxfUHJvZmlsZXM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBVTWp0Y2pVeDJjTjF5OCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgUHJvZmlsZXMnLFxyXG4gIH0sXHJcbiAgU2VtaW5hcnM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBUN3kybEdrQXl6dlJXMicsXHJcbiAgICBCQVNFX05BTUU6ICdTZW1pbmFycycsXHJcbiAgfSxcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cclxuICogQHBhcmFtIGJhc2VOYW1lIC0gQmFzZSBOYW1lLlxyXG4gKiBAcmV0dXJucyAtIFJldHVybiBhaXJ0YWJsZSBpbnN0YW5jZSBmb3IgYmFzZSBsaWtlIGZvciBwZW9wbGUgYW5kIG90aGVycy5cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFibGVJbnN0YW5jZTogKGJhc2VOYW1lOiBzdHJpbmcpID0+IFRhYmxlPEZpZWxkU2V0PiA9IChcclxuICBiYXNlTmFtZSxcclxuKSA9PiB7XHJcbiAgY29uc3QgeyBCQVNFX0lELCBCQVNFX05BTUUgfSA9IGJhc2VDb25maWdbYmFzZU5hbWVdO1xyXG4gIGNvbnN0IGJhc2UgPSBBaXJ0YWJsZS5iYXNlKEJBU0VfSUQpO1xyXG4gIGNvbnN0IHRhYmxlID0gYmFzZShCQVNFX05BTUUpO1xyXG4gIHJldHVybiB0YWJsZTtcclxufTtcclxuXHJcbmV4cG9ydCBlbnVtIFRBQkxFUyB7XHJcbiAgUEVPUExFID0gJ1Blb3BsZScsXHJcbiAgUkFOSyA9ICdSYW5rJyxcclxuICBTQ0hPT0wgPSAnU2Nob29sJyxcclxuICBBQ0hJRVZFTUVOVCA9ICdBY2hpZXZlbWVudCcsXHJcbiAgVklERU8gPSAnVmlkZW8nLFxyXG4gIE1BUlRJQUxfQVJUID0gJ01hcnRpYWxfQXJ0JyxcclxuICBUSU1FVEFCTEUgPSAnVGltZXRhYmxlJyxcclxuICBTQ0hPT0xTID0gJ1NjaG9vbHMnLFxyXG4gIExFQURTID0gJ0xlYWRzJyxcclxuICBBTExfU0NIT09MUyA9ICdBbGxfU2Nob29scycsXHJcbiAgUExBTlMgPSAnUGxhbnMnLFxyXG4gIFBSSVZBVEVfQ0xBU1NFU19DTEFTU0VTID0gJ1ByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzJyxcclxuICBQUklWQVRFX0NMQVNTRVNfQk9PS0lOR1MgPSAnUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzJyxcclxuICBQUklWQVRFX0NMQVNTRVNfQUxMX1BST0ZJTEVTID0gJ1ByaXZhdGVfQ2xhc3Nlc19BbGxfUHJvZmlsZXMnLFxyXG4gIFNFTUlOQVJTID0gJ1NlbWluYXJzJyxcclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5pbXBvcnQgeyBUQUJMRVMsIGdldFRhYmxlSW5zdGFuY2UgfSBmcm9tICcuL0FpcnRhYmxlJztcclxuXHJcbmNvbnN0IHRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuUEVPUExFKTtcclxuXHJcbmNsYXNzIFBlb3BsZVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiAtIGdldCBQcm9maWxlIGFmdGVyIHNlbmQgcGFnZSB0byBicm93c2VyLlxyXG4gICAqIEBwYXJhbSB1c2VybmFtZSAtIFVzZXJuYW1lLlxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJuIHVzZXIgcHJvZmlsZSBiYXNpYyBkYXRhIGxpa2UgdXNlcm5hbWUgYW5kIGF2YXRhci5cclxuICAgKi9cclxuXHJcbiAgYXN5bmMgZ2V0VXNlcih1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGFibGVcclxuICAgICAgICAuc2VsZWN0KHsgZmlsdGVyQnlGb3JtdWxhOiBge3VzZXJuYW1lfSA9ICcke3VzZXJuYW1lfSdgIH0pXHJcbiAgICAgICAgLmFsbCgpO1xyXG4gICAgICByZXR1cm4gcmVjb3JkcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNyZWF0ZVVzZXIoZGF0YSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRhYmxlLmNyZWF0ZSh7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gcmVjb3JkcztcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBQZW9wbGVTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUGVvcGxlU2VydmljZSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9QZW9wbGVTZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cclxuICogQHBhcmFtIHJlcSAtIFJlcS5cclxuICogQHBhcmFtIHJlcyAtIFJlcy5cclxuICogQHJldHVybnMgLSBSZXR1cm4gdXNlciBwcm9maWxlIGJhc2ljIGRhdGEgbGlrZSB1c2VybmFtZSBhbmQgYXZhdGFyLlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxyXG5hc3luYyBmdW5jdGlvbiBVc2VyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUGVvcGxlU2VydmljZS5nZXRVc2VyKFxyXG4gICAgICAgIHR5cGVvZiByZXEucXVlcnkudXNlcm5hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHJlcS5xdWVyeS51c2VybmFtZVxyXG4gICAgICAgICAgOiByZXEucXVlcnk/LnVzZXJuYW1lWzBdLFxyXG4gICAgICApO1xyXG4gICAgICByZXMuc2VuZChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTA0KS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBFcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQZW9wbGVTZXJ2aWNlLmNyZWF0ZVVzZXIocmVxLmJvZHkpO1xyXG4gICAgICByZXMuc2VuZChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTA0KS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBFcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFpcnRhYmxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=