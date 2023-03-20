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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/PrivateClasses/index.ts");
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

/***/ "./services/PrivateClassesService.ts":
/*!*******************************************!*\
  !*** ./services/PrivateClassesService.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/shared/utils/airtable-utils */ "./src/shared/utils/airtable-utils.ts");
/* harmony import */ var _Airtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Airtable */ "./services/Airtable.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/explicit-function-return-type */

/* eslint-disable class-methods-use-this */



const table = Object(_Airtable__WEBPACK_IMPORTED_MODULE_2__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_2__["TABLES"].PRIVATE_CLASSES_CLASSES);
const schoolsTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_2__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_2__["TABLES"].SCHOOLS);
const bookingsTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_2__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_2__["TABLES"].PRIVATE_CLASSES_BOOKINGS);
const allProfilesTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_2__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_2__["TABLES"].PRIVATE_CLASSES_ALL_PROFILES);

class PrivateClassService {
  /**
   * @description - get private classes list against a specific user.
   * @param username - Username.
   * @returns - Return private classes list against a specific user.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getClasses(username) {
    try {
      const records = await table.select({
        filterByFormula: `{Username (from Instructor)} = '${username}'`
      }).all();
      return records.map(record => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(record.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getBookings(username) {
    try {
      const records = await bookingsTable.select({
        filterByFormula: `{Username (from Instructor Username)} = '${username}'`
      }).all();
      return records.map(record => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(record.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDetailedClasses(username) {
    try {
      const records = await table.select({
        filterByFormula: `{Username (from Instructor)} = '${username}'`
      }).all();
      const requests = [];
      let schools = [];
      let profiles = [];
      const query = records.map(record => {
        if (record.fields['School Name (from School)']) return `{School Name} = '${record.fields['School Name (from School)'][0]}'`;
        return '';
      }).filter(Boolean);
      requests.push(schoolsTable.select({
        filterByFormula: `OR(${query.join(',')})`
      }).all());
      requests.push(allProfilesTable.select({
        filterByFormula: `{username} = '${username}'`
      }).all());
      await Promise.all(requests).then(res => {
        schools = [...res[0]];
        profiles = [...res[1]];
      });
      return {
        classesList: Object(_src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_1__["formattedResponse"])(records),
        schoolsList: Object(_src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_1__["formattedResponse"])(schools),
        profile: Object(_src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_1__["formattedResponse"])(profiles)[0]
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createBooking(data) {
    try {
      const existingCustomer = await allProfilesTable.select({
        filterByFormula: `{Email} = '${data['Customer Email']}'`
      }).all();
      const record = await bookingsTable.create(_objectSpread(_objectSpread({}, data), existingCustomer.length > 0 && existingCustomer[0].fields.Username && {
        'Customer Username': [existingCustomer[0].id]
      }));
      return record;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async paymentConfirmation(id, stripeId, email) {
    try {
      const record = await bookingsTable.update([{
        id,
        fields: {
          'Payment Status': 'Paid',
          'Stripe Date': new Date().toDateString(),
          'Stripe ID': stripeId,
          'Customer Email': email
        }
      }]);
      return record;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new PrivateClassService());

/***/ }),

/***/ "./src/pages/api/PrivateClasses/index.ts":
/*!***********************************************!*\
  !*** ./src/pages/api/PrivateClasses/index.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/PrivateClassesService */ "./services/PrivateClassesService.ts");

/**
 * @description - get private classes list against a specific user.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return private classes list against a specific user.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function PrivateClasses(req, res) {
  if (req.query.detailed && req.method === 'GET') {
    try {
      var _req$query;

      const data = await _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__["default"].getDetailedClasses(typeof req.query.username === 'string' ? req.query.username : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.username[0]);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else if (req.query.bookings && req.method === 'GET') {
    try {
      var _req$query2;

      const data = await _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__["default"].getBookings(typeof req.query.username === 'string' ? req.query.username : (_req$query2 = req.query) === null || _req$query2 === void 0 ? void 0 : _req$query2.username[0]);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else if (req.method === 'GET') {
    try {
      var _req$query3;

      const data = await _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__["default"].getClasses(typeof req.query.username === 'string' ? req.query.username : (_req$query3 = req.query) === null || _req$query3 === void 0 ? void 0 : _req$query3.username[0]);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else if (req.method === 'POST') {
    try {
      const data = await _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__["default"].createBooking(req.body);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else if (req.method === 'PUT') {
    try {
      const data = await _services_PrivateClassesService__WEBPACK_IMPORTED_MODULE_0__["default"].paymentConfirmation(req.body.id, req.body.stripeId, req.body.email);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else {// Handle any other HTTP method
  }
}

/* harmony default export */ __webpack_exports__["default"] = (PrivateClasses);

/***/ }),

/***/ "./src/shared/utils/airtable-utils.ts":
/*!********************************************!*\
  !*** ./src/shared/utils/airtable-utils.ts ***!
  \********************************************/
/*! exports provided: formattedResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattedResponse", function() { return formattedResponse; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const formattedResponse = records => {
  return records.map(record => _objectSpread(_objectSpread({}, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(record.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k))), {}, {
    id: record.id
  }));
};

/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQWlydGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUHJpdmF0ZUNsYXNzZXNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvUHJpdmF0ZUNsYXNzZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlscy9haXJ0YWJsZS11dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIl0sIm5hbWVzIjpbIkFpcnRhYmxlIiwiY29uZmlndXJlIiwiYXBpS2V5IiwiYmFzZUNvbmZpZyIsIlBlb3BsZSIsIkJBU0VfSUQiLCJCQVNFX05BTUUiLCJSYW5rIiwiU2Nob29sIiwiQWNoaWV2ZW1lbnQiLCJWaWRlbyIsIk1hcnRpYWxfQXJ0IiwiVGltZXRhYmxlIiwiU2Nob29scyIsIkxlYWRzIiwiQWxsX1NjaG9vbHMiLCJQbGFucyIsIlByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzIiwiUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzIiwiUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlcyIsIlNlbWluYXJzIiwiZ2V0VGFibGVJbnN0YW5jZSIsImJhc2VOYW1lIiwiYmFzZSIsInRhYmxlIiwiVEFCTEVTIiwiUFJJVkFURV9DTEFTU0VTX0NMQVNTRVMiLCJzY2hvb2xzVGFibGUiLCJTQ0hPT0xTIiwiYm9va2luZ3NUYWJsZSIsIlBSSVZBVEVfQ0xBU1NFU19CT09LSU5HUyIsImFsbFByb2ZpbGVzVGFibGUiLCJQUklWQVRFX0NMQVNTRVNfQUxMX1BST0ZJTEVTIiwiUHJpdmF0ZUNsYXNzU2VydmljZSIsImdldENsYXNzZXMiLCJ1c2VybmFtZSIsInJlY29yZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJhbGwiLCJtYXAiLCJyZWNvcmQiLCJfIiwibWFwS2V5cyIsImZpZWxkcyIsInYiLCJrIiwiY2FtZWxDYXNlIiwiZXJyb3IiLCJjb25zb2xlIiwiZ2V0Qm9va2luZ3MiLCJnZXREZXRhaWxlZENsYXNzZXMiLCJyZXF1ZXN0cyIsInNjaG9vbHMiLCJwcm9maWxlcyIsInF1ZXJ5IiwiZmlsdGVyIiwiQm9vbGVhbiIsInB1c2giLCJqb2luIiwiUHJvbWlzZSIsInRoZW4iLCJyZXMiLCJjbGFzc2VzTGlzdCIsImZvcm1hdHRlZFJlc3BvbnNlIiwic2Nob29sc0xpc3QiLCJwcm9maWxlIiwiY3JlYXRlQm9va2luZyIsImRhdGEiLCJleGlzdGluZ0N1c3RvbWVyIiwiY3JlYXRlIiwibGVuZ3RoIiwiVXNlcm5hbWUiLCJpZCIsInBheW1lbnRDb25maXJtYXRpb24iLCJzdHJpcGVJZCIsImVtYWlsIiwidXBkYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsIlByaXZhdGVDbGFzc2VzIiwicmVxIiwiZGV0YWlsZWQiLCJtZXRob2QiLCJQcml2YXRlQ2xhc3Nlc1NlcnZpY2UiLCJzZW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJib29raW5ncyIsImJvZHkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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LE9BQU8sQ0FBQ0ksR0FBUixDQUFhQyxNQUFELG9DQUNkQyw2Q0FBQyxDQUFDQyxPQUFGLENBQVVGLE1BQU0sQ0FBQ0csTUFBakIsRUFBeUIsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVKLDZDQUFDLENBQUNLLFNBQUYsQ0FBWUQsQ0FBWixDQUFuQyxDQURjO0FBRWpCMkIsTUFBRSxFQUFFaEMsTUFBTSxDQUFDZ0M7QUFGTSxJQUFaLENBQVA7QUFJRCxDQUxNLEM7Ozs7Ozs7Ozs7O0FDRlAscUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL1ByaXZhdGVDbGFzc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYXBpL1ByaXZhdGVDbGFzc2VzL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IEFpcnRhYmxlLCB7IEZpZWxkU2V0LCBUYWJsZSB9IGZyb20gJ2FpcnRhYmxlJztcclxuXHJcbi8vIEF1dGhlbnRpY2F0ZVxyXG5BaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gIGFwaUtleTogJ2tleXNveWJEa2g3NGd5anUzJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUNvbmZpZyA9IHtcclxuICBQZW9wbGU6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBJRXdXZnNzOXN6YWFxcCcsXHJcbiAgICBCQVNFX05BTUU6ICdQZW9wbGUnLFxyXG4gIH0sXHJcbiAgUmFuazoge1xyXG4gICAgQkFTRV9JRDogJ2FwcHRQcEdFb0Y3eXFCaXhjJyxcclxuICAgIEJBU0VfTkFNRTogJ1JhbmtzIElzc3VlZCcsXHJcbiAgfSxcclxuICBTY2hvb2w6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBmV3JzTXNsMFM1WDBUSycsXHJcbiAgICBCQVNFX05BTUU6ICdTY2hvb2xzJyxcclxuICB9LFxyXG4gIEFjaGlldmVtZW50OiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwRGI5Q1lOTWJlU1JocWQnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIEFjaGlldmVtZW50cycsXHJcbiAgfSxcclxuICBWaWRlbzoge1xyXG4gICAgQkFTRV9JRDogJ2FwcGRSR1loelNCWFEzZGpIJyxcclxuICAgIEJBU0VfTkFNRTogJ0V4dGVybmFsJyxcclxuICB9LFxyXG4gIE1hcnRpYWxfQXJ0OiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwZTd3cmo3bTdxTlR3RjMnLFxyXG4gICAgQkFTRV9OQU1FOiAnUmFua3MnLFxyXG4gIH0sXHJcbiAgVGltZXRhYmxlOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwTktPVlJCa05DblF4WDAnLFxyXG4gICAgQkFTRV9OQU1FOiAnU2NoZWR1bGUnLFxyXG4gIH0sXHJcbiAgU2Nob29sczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcE5LT1ZSQmtOQ25ReFgwJyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBTY2hvb2xzJyxcclxuICB9LFxyXG4gIExlYWRzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSmtFbURFZDBEMHIya1QnLFxyXG4gICAgQkFTRV9OQU1FOiAnTGVhZHMnLFxyXG4gIH0sXHJcbiAgQWxsX1NjaG9vbHM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBKa0VtREVkMEQwcjJrVCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgU2Nob29scycsXHJcbiAgfSxcclxuICBQbGFuczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcDJLQ3dZa25tUnV2ejE4JyxcclxuICAgIEJBU0VfTkFNRTogJ1BsYW5zJyxcclxuICB9LFxyXG4gIFByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQ2xhc3NlcycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQm9va2luZ3M6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBVTWp0Y2pVeDJjTjF5OCcsXHJcbiAgICBCQVNFX05BTUU6ICdCb29raW5ncycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQWxsX1Byb2ZpbGVzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIFByb2ZpbGVzJyxcclxuICB9LFxyXG4gIFNlbWluYXJzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVDd5MmxHa0F5enZSVzInLFxyXG4gICAgQkFTRV9OQU1FOiAnU2VtaW5hcnMnLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIC0gZ2V0IFByb2ZpbGUgYWZ0ZXIgc2VuZCBwYWdlIHRvIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSBiYXNlTmFtZSAtIEJhc2UgTmFtZS5cclxuICogQHJldHVybnMgLSBSZXR1cm4gYWlydGFibGUgaW5zdGFuY2UgZm9yIGJhc2UgbGlrZSBmb3IgcGVvcGxlIGFuZCBvdGhlcnMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhYmxlSW5zdGFuY2U6IChiYXNlTmFtZTogc3RyaW5nKSA9PiBUYWJsZTxGaWVsZFNldD4gPSAoXHJcbiAgYmFzZU5hbWUsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHsgQkFTRV9JRCwgQkFTRV9OQU1FIH0gPSBiYXNlQ29uZmlnW2Jhc2VOYW1lXTtcclxuICBjb25zdCBiYXNlID0gQWlydGFibGUuYmFzZShCQVNFX0lEKTtcclxuICBjb25zdCB0YWJsZSA9IGJhc2UoQkFTRV9OQU1FKTtcclxuICByZXR1cm4gdGFibGU7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBUQUJMRVMge1xyXG4gIFBFT1BMRSA9ICdQZW9wbGUnLFxyXG4gIFJBTksgPSAnUmFuaycsXHJcbiAgU0NIT09MID0gJ1NjaG9vbCcsXHJcbiAgQUNISUVWRU1FTlQgPSAnQWNoaWV2ZW1lbnQnLFxyXG4gIFZJREVPID0gJ1ZpZGVvJyxcclxuICBNQVJUSUFMX0FSVCA9ICdNYXJ0aWFsX0FydCcsXHJcbiAgVElNRVRBQkxFID0gJ1RpbWV0YWJsZScsXHJcbiAgU0NIT09MUyA9ICdTY2hvb2xzJyxcclxuICBMRUFEUyA9ICdMZWFkcycsXHJcbiAgQUxMX1NDSE9PTFMgPSAnQWxsX1NjaG9vbHMnLFxyXG4gIFBMQU5TID0gJ1BsYW5zJyxcclxuICBQUklWQVRFX0NMQVNTRVNfQ0xBU1NFUyA9ICdQcml2YXRlX0NsYXNzZXNfQ2xhc3NlcycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0JPT0tJTkdTID0gJ1ByaXZhdGVfQ2xhc3Nlc19Cb29raW5ncycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0FMTF9QUk9GSUxFUyA9ICdQcml2YXRlX0NsYXNzZXNfQWxsX1Byb2ZpbGVzJyxcclxuICBTRU1JTkFSUyA9ICdTZW1pbmFycycsXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQm9va2luZyB9IGZyb20gJy4uL3NyYy9zaGFyZWQvbW9kZWxzL3ByaXZhdGVDbGFzcy5tb2RlbCc7XHJcbmltcG9ydCB7IGZvcm1hdHRlZFJlc3BvbnNlIH0gZnJvbSAnLi4vc3JjL3NoYXJlZC91dGlscy9haXJ0YWJsZS11dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUQUJMRVMsIGdldFRhYmxlSW5zdGFuY2UgfSBmcm9tICcuL0FpcnRhYmxlJztcclxuXHJcbmNvbnN0IHRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuUFJJVkFURV9DTEFTU0VTX0NMQVNTRVMpO1xyXG5jb25zdCBzY2hvb2xzVGFibGUgPSBnZXRUYWJsZUluc3RhbmNlKFRBQkxFUy5TQ0hPT0xTKTtcclxuY29uc3QgYm9va2luZ3NUYWJsZSA9IGdldFRhYmxlSW5zdGFuY2UoVEFCTEVTLlBSSVZBVEVfQ0xBU1NFU19CT09LSU5HUyk7XHJcbmNvbnN0IGFsbFByb2ZpbGVzVGFibGUgPSBnZXRUYWJsZUluc3RhbmNlKFRBQkxFUy5QUklWQVRFX0NMQVNTRVNfQUxMX1BST0ZJTEVTKTtcclxuXHJcbmNsYXNzIFByaXZhdGVDbGFzc1NlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiAtIGdldCBwcml2YXRlIGNsYXNzZXMgbGlzdCBhZ2FpbnN0IGEgc3BlY2lmaWMgdXNlci5cclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSBVc2VybmFtZS5cclxuICAgKiBAcmV0dXJucyAtIFJldHVybiBwcml2YXRlIGNsYXNzZXMgbGlzdCBhZ2FpbnN0IGEgc3BlY2lmaWMgdXNlci5cclxuICAgKi9cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxyXG4gIGFzeW5jIGdldENsYXNzZXModXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRhYmxlXHJcbiAgICAgICAgLnNlbGVjdCh7XHJcbiAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGB7VXNlcm5hbWUgKGZyb20gSW5zdHJ1Y3Rvcil9ID0gJyR7dXNlcm5hbWV9J2AsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWxsKCk7XHJcbiAgICAgIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PlxyXG4gICAgICAgIF8ubWFwS2V5cyhyZWNvcmQuZmllbGRzLCAodiwgaykgPT4gXy5jYW1lbENhc2UoaykpLFxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Qm9va2luZ3ModXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IGJvb2tpbmdzVGFibGVcclxuICAgICAgICAuc2VsZWN0KHtcclxuICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYHtVc2VybmFtZSAoZnJvbSBJbnN0cnVjdG9yIFVzZXJuYW1lKX0gPSAnJHt1c2VybmFtZX0nYCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hbGwoKTtcclxuICAgICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+XHJcbiAgICAgICAgXy5tYXBLZXlzKHJlY29yZC5maWVsZHMsICh2LCBrKSA9PiBfLmNhbWVsQ2FzZShrKSksXHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXREZXRhaWxlZENsYXNzZXModXNlcm5hbWU6IHN0cmluZykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVjb3JkczogYW55ID0gYXdhaXQgdGFibGVcclxuICAgICAgICAuc2VsZWN0KHtcclxuICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYHtVc2VybmFtZSAoZnJvbSBJbnN0cnVjdG9yKX0gPSAnJHt1c2VybmFtZX0nYCxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hbGwoKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlcXVlc3RzID0gW107XHJcbiAgICAgIGxldCBzY2hvb2xzID0gW107XHJcbiAgICAgIGxldCBwcm9maWxlcyA9IFtdO1xyXG4gICAgICBjb25zdCBxdWVyeSA9IHJlY29yZHNcclxuICAgICAgICAubWFwKChyZWNvcmQpID0+IHtcclxuICAgICAgICAgIGlmIChyZWNvcmQuZmllbGRzWydTY2hvb2wgTmFtZSAoZnJvbSBTY2hvb2wpJ10pXHJcbiAgICAgICAgICAgIHJldHVybiBge1NjaG9vbCBOYW1lfSA9ICcke3JlY29yZC5maWVsZHNbJ1NjaG9vbCBOYW1lIChmcm9tIFNjaG9vbCknXVswXX0nYDtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcblxyXG4gICAgICByZXF1ZXN0cy5wdXNoKFxyXG4gICAgICAgIHNjaG9vbHNUYWJsZVxyXG4gICAgICAgICAgLnNlbGVjdCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYE9SKCR7cXVlcnkuam9pbignLCcpfSlgLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5hbGwoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJlcXVlc3RzLnB1c2goXHJcbiAgICAgICAgYWxsUHJvZmlsZXNUYWJsZVxyXG4gICAgICAgICAgLnNlbGVjdCh7IGZpbHRlckJ5Rm9ybXVsYTogYHt1c2VybmFtZX0gPSAnJHt1c2VybmFtZX0nYCB9KVxyXG4gICAgICAgICAgLmFsbCgpLFxyXG4gICAgICApO1xyXG5cclxuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNjaG9vbHMgPSBbLi4ucmVzWzBdXTtcclxuXHJcbiAgICAgICAgcHJvZmlsZXMgPSBbLi4ucmVzWzFdXTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsYXNzZXNMaXN0OiBmb3JtYXR0ZWRSZXNwb25zZShyZWNvcmRzKSxcclxuICAgICAgICBzY2hvb2xzTGlzdDogZm9ybWF0dGVkUmVzcG9uc2Uoc2Nob29scyksXHJcbiAgICAgICAgcHJvZmlsZTogZm9ybWF0dGVkUmVzcG9uc2UocHJvZmlsZXMpWzBdLFxyXG4gICAgICB9O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgY3JlYXRlQm9va2luZyhkYXRhOiBCb29raW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBleGlzdGluZ0N1c3RvbWVyID0gYXdhaXQgYWxsUHJvZmlsZXNUYWJsZVxyXG4gICAgICAgIC5zZWxlY3Qoe1xyXG4gICAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBge0VtYWlsfSA9ICcke2RhdGFbJ0N1c3RvbWVyIEVtYWlsJ119J2AsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWxsKCk7XHJcbiAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGJvb2tpbmdzVGFibGUuY3JlYXRlKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIC4uLihleGlzdGluZ0N1c3RvbWVyLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgIGV4aXN0aW5nQ3VzdG9tZXJbMF0uZmllbGRzLlVzZXJuYW1lICYmIHtcclxuICAgICAgICAgICdDdXN0b21lciBVc2VybmFtZSc6IFtleGlzdGluZ0N1c3RvbWVyWzBdLmlkXSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZWNvcmQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBwYXltZW50Q29uZmlybWF0aW9uKGlkOiBzdHJpbmcsIHN0cmlwZUlkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGJvb2tpbmdzVGFibGUudXBkYXRlKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZCxcclxuICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAnUGF5bWVudCBTdGF0dXMnOiAnUGFpZCcsXHJcbiAgICAgICAgICAgICdTdHJpcGUgRGF0ZSc6IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCksXHJcbiAgICAgICAgICAgICdTdHJpcGUgSUQnOiBzdHJpcGVJZCxcclxuICAgICAgICAgICAgJ0N1c3RvbWVyIEVtYWlsJzogZW1haWwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pO1xyXG4gICAgICByZXR1cm4gcmVjb3JkO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXZhdGVDbGFzc1NlcnZpY2UoKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBQcml2YXRlQ2xhc3Nlc1NlcnZpY2UgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvUHJpdmF0ZUNsYXNzZXNTZXJ2aWNlJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gLSBnZXQgcHJpdmF0ZSBjbGFzc2VzIGxpc3QgYWdhaW5zdCBhIHNwZWNpZmljIHVzZXIuXHJcbiAqIEBwYXJhbSByZXEgLSBSZXEuXHJcbiAqIEBwYXJhbSByZXMgLSBSZXMuXHJcbiAqIEByZXR1cm5zIC0gUmV0dXJuIHByaXZhdGUgY2xhc3NlcyBsaXN0IGFnYWluc3QgYSBzcGVjaWZpYyB1c2VyLlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxyXG5hc3luYyBmdW5jdGlvbiBQcml2YXRlQ2xhc3NlcyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xyXG4gIGlmIChyZXEucXVlcnkuZGV0YWlsZWQgJiYgcmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcml2YXRlQ2xhc3Nlc1NlcnZpY2UuZ2V0RGV0YWlsZWRDbGFzc2VzKFxyXG4gICAgICAgIHR5cGVvZiByZXEucXVlcnkudXNlcm5hbWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICA/IHJlcS5xdWVyeS51c2VybmFtZVxyXG4gICAgICAgICAgOiByZXEucXVlcnk/LnVzZXJuYW1lWzBdLFxyXG4gICAgICApO1xyXG4gICAgICByZXMuc2VuZChkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTA0KS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBFcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChyZXEucXVlcnkuYm9va2luZ3MgJiYgcmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcml2YXRlQ2xhc3Nlc1NlcnZpY2UuZ2V0Qm9va2luZ3MoXHJcbiAgICAgICAgdHlwZW9mIHJlcS5xdWVyeS51c2VybmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gcmVxLnF1ZXJ5LnVzZXJuYW1lXHJcbiAgICAgICAgICA6IHJlcS5xdWVyeT8udXNlcm5hbWVbMF0sXHJcbiAgICAgICk7XHJcbiAgICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDQpLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgUHJpdmF0ZUNsYXNzZXNTZXJ2aWNlLmdldENsYXNzZXMoXHJcbiAgICAgICAgdHlwZW9mIHJlcS5xdWVyeS51c2VybmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gcmVxLnF1ZXJ5LnVzZXJuYW1lXHJcbiAgICAgICAgICA6IHJlcS5xdWVyeT8udXNlcm5hbWVbMF0sXHJcbiAgICAgICk7XHJcbiAgICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDQpLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFByaXZhdGVDbGFzc2VzU2VydmljZS5jcmVhdGVCb29raW5nKHJlcS5ib2R5KTtcclxuICAgICAgcmVzLnNlbmQoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwNCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcml2YXRlQ2xhc3Nlc1NlcnZpY2UucGF5bWVudENvbmZpcm1hdGlvbihcclxuICAgICAgICByZXEuYm9keS5pZCxcclxuICAgICAgICByZXEuYm9keS5zdHJpcGVJZCxcclxuICAgICAgICByZXEuYm9keS5lbWFpbCxcclxuICAgICAgKTtcclxuICAgICAgcmVzLnNlbmQoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwNCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlQ2xhc3NlcztcclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXR0ZWRSZXNwb25zZTogKHJlY29yZHM6IGFueVtdKSA9PiBhbnkgPSAocmVjb3JkcykgPT4ge1xyXG4gIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiAoe1xyXG4gICAgLi4uXy5tYXBLZXlzKHJlY29yZC5maWVsZHMsICh2LCBrKSA9PiBfLmNhbWVsQ2FzZShrKSksXHJcbiAgICBpZDogcmVjb3JkLmlkLFxyXG4gIH0pKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWlydGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=