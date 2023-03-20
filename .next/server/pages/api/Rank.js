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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/Rank/index.ts");
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

/***/ "./services/RanksService.ts":
/*!**********************************!*\
  !*** ./services/RanksService.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Airtable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Airtable */ "./services/Airtable.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable class-methods-use-this */


const table = Object(_Airtable__WEBPACK_IMPORTED_MODULE_1__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_1__["TABLES"].RANK);
const peopleTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_1__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_1__["TABLES"].PEOPLE);
const schoolTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_1__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_1__["TABLES"].SCHOOL);
const martialArtTable = Object(_Airtable__WEBPACK_IMPORTED_MODULE_1__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_1__["TABLES"].MARTIAL_ART);

class RanksService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getRanks(username) {
    try {
      const records = await table.select({
        filterByFormula: `{Username} = '${username}'`
      }).all();
      const requests = [];
      let peoples = [];
      let schools = [];
      let martialArts = [];
      const masterQuery = records.map(record => {
        if (record.fields['Master (from All Profiles)']) return `{Username} = '${record.fields['Master (from All Profiles)'][0]}'`;
        return '';
      }).filter(Boolean);
      requests.push(peopleTable.select({
        filterByFormula: `OR(${masterQuery.join(',')})`
      }).all());
      const schoolQuery = records.map(record => {
        if (record.fields['School Name (from All Schools)']) return `{School Name} = '${record.fields['School Name (from All Schools)'][0]}'`;
        return '';
      }).filter(Boolean);
      requests.push(schoolQuery.length > 0 ? schoolTable.select({
        filterByFormula: `OR(${schoolQuery.join(',')})`
      }).all() : new Promise((res, rej) => res([])));
      const martialArtQuery = records.map(record => {
        if (record.fields['Level (from Martial Arts Ranks)']) return `{Level} = '${record.fields['Level (from Martial Arts Ranks)'][0]}'`;
        return '';
      }).filter(Boolean);
      requests.push(martialArtQuery.length > 0 ? martialArtTable.select({
        filterByFormula: `OR(${martialArtQuery.join(',')})`
      }).all() : new Promise((res, rej) => res([])));
      await Promise.all(requests).then(res => {
        peoples = [...res[0]];
        schools = [...res[1]];
        martialArts = [...res[2]];
      });

      if (!records || records.length === 0) {
        return [];
      }

      const response = [];
      records.map(record => {
        const people = record.fields['Master (from All Profiles)'] ? peoples.find(p => {
          return p.fields.Username === record.fields['Master (from All Profiles)'][0];
        }) : undefined;
        const school = record.fields['School Name (from All Schools)'] ? schools.find(p => {
          return p.fields['School Name'] === record.fields['School Name (from All Schools)'][0];
        }) : undefined;
        const martialArt = record.fields['Level (from Martial Arts Ranks)'] ? martialArts.find(p => {
          return p.fields.Level === record.fields['Level (from Martial Arts Ranks)'][0];
        }) : undefined;
        const data = {
          master: people ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(people.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)) : undefined,
          school: school ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(school.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)) : undefined,
          martialArt: martialArt ? lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(martialArt.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)) : undefined
        };
        response.push(_objectSpread(_objectSpread({}, record), {}, {
          fields: _objectSpread(_objectSpread({}, record.fields), data)
        }));
        return '';
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new RanksService());

/***/ }),

/***/ "./src/pages/api/Rank/index.ts":
/*!*************************************!*\
  !*** ./src/pages/api/Rank/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_RanksService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/RanksService */ "./services/RanksService.ts");

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function Rank(req, res) {
  if (req.method === 'GET') {
    try {
      var _req$query;

      const data = await _services_RanksService__WEBPACK_IMPORTED_MODULE_0__["default"].getRanks(typeof req.query.username === 'string' ? req.query.username : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.username[0]);
      res.send(data);
    } catch (error) {
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else {// Handle any other HTTP method
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Rank);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQWlydGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvUmFua3NTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvUmFuay9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIl0sIm5hbWVzIjpbIkFpcnRhYmxlIiwiY29uZmlndXJlIiwiYXBpS2V5IiwiYmFzZUNvbmZpZyIsIlBlb3BsZSIsIkJBU0VfSUQiLCJCQVNFX05BTUUiLCJSYW5rIiwiU2Nob29sIiwiQWNoaWV2ZW1lbnQiLCJWaWRlbyIsIk1hcnRpYWxfQXJ0IiwiVGltZXRhYmxlIiwiU2Nob29scyIsIkxlYWRzIiwiQWxsX1NjaG9vbHMiLCJQbGFucyIsIlByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzIiwiUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzIiwiUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlcyIsIlNlbWluYXJzIiwiZ2V0VGFibGVJbnN0YW5jZSIsImJhc2VOYW1lIiwiYmFzZSIsInRhYmxlIiwiVEFCTEVTIiwiUkFOSyIsInBlb3BsZVRhYmxlIiwiUEVPUExFIiwic2Nob29sVGFibGUiLCJTQ0hPT0wiLCJtYXJ0aWFsQXJ0VGFibGUiLCJNQVJUSUFMX0FSVCIsIlJhbmtzU2VydmljZSIsImdldFJhbmtzIiwidXNlcm5hbWUiLCJyZWNvcmRzIiwic2VsZWN0IiwiZmlsdGVyQnlGb3JtdWxhIiwiYWxsIiwicmVxdWVzdHMiLCJwZW9wbGVzIiwic2Nob29scyIsIm1hcnRpYWxBcnRzIiwibWFzdGVyUXVlcnkiLCJtYXAiLCJyZWNvcmQiLCJmaWVsZHMiLCJmaWx0ZXIiLCJCb29sZWFuIiwicHVzaCIsImpvaW4iLCJzY2hvb2xRdWVyeSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJtYXJ0aWFsQXJ0UXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJwZW9wbGUiLCJmaW5kIiwicCIsIlVzZXJuYW1lIiwidW5kZWZpbmVkIiwic2Nob29sIiwibWFydGlhbEFydCIsIkxldmVsIiwiZGF0YSIsIm1hc3RlciIsIl8iLCJtYXBLZXlzIiwidiIsImsiLCJjYW1lbENhc2UiLCJlcnJvciIsImNvbnNvbGUiLCJyZXEiLCJtZXRob2QiLCJxdWVyeSIsInNlbmQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQUEsK0NBQVEsQ0FBQ0MsU0FBVCxDQUFtQjtBQUNqQkMsUUFBTSxFQUFFO0FBRFMsQ0FBbkI7QUFJTyxNQUFNQyxVQUFVLEdBQUc7QUFDeEJD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MEMsR0FBRyxDQUFDRSxLQUZSLCtDQUVJLFdBQVc1QyxRQUFYLENBQW9CLENBQXBCLENBSGEsQ0FBbkI7QUFLQW9CLFNBQUcsQ0FBQ3lCLElBQUosQ0FBU1osSUFBVDtBQUNELEtBUEQsQ0FPRSxPQUFPTyxLQUFQLEVBQWM7QUFDZHBCLFNBQUcsQ0FBQzBCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNEO0FBQ0YsR0FYRCxNQVdPLENBQ0w7QUFDRDtBQUNGOztBQUVjNUUsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMzQkEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL1JhbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hcGkvUmFuay9pbmRleC50c1wiKTtcbiIsImltcG9ydCBBaXJ0YWJsZSwgeyBGaWVsZFNldCwgVGFibGUgfSBmcm9tICdhaXJ0YWJsZSc7XHJcblxyXG4vLyBBdXRoZW50aWNhdGVcclxuQWlydGFibGUuY29uZmlndXJlKHtcclxuICBhcGlLZXk6ICdrZXlzb3liRGtoNzRneWp1MycsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VDb25maWcgPSB7XHJcbiAgUGVvcGxlOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSUV3V2ZzczlzemFhcXAnLFxyXG4gICAgQkFTRV9OQU1FOiAnUGVvcGxlJyxcclxuICB9LFxyXG4gIFJhbms6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHB0UHBHRW9GN3lxQml4YycsXHJcbiAgICBCQVNFX05BTUU6ICdSYW5rcyBJc3N1ZWQnLFxyXG4gIH0sXHJcbiAgU2Nob29sOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwZldyc01zbDBTNVgwVEsnLFxyXG4gICAgQkFTRV9OQU1FOiAnU2Nob29scycsXHJcbiAgfSxcclxuICBBY2hpZXZlbWVudDoge1xyXG4gICAgQkFTRV9JRDogJ2FwcERiOUNZTk1iZVNSaHFkJyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBBY2hpZXZlbWVudHMnLFxyXG4gIH0sXHJcbiAgVmlkZW86IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBkUkdZaHpTQlhRM2RqSCcsXHJcbiAgICBCQVNFX05BTUU6ICdFeHRlcm5hbCcsXHJcbiAgfSxcclxuICBNYXJ0aWFsX0FydDoge1xyXG4gICAgQkFTRV9JRDogJ2FwcGU3d3JqN203cU5Ud0YzJyxcclxuICAgIEJBU0VfTkFNRTogJ1JhbmtzJyxcclxuICB9LFxyXG4gIFRpbWV0YWJsZToge1xyXG4gICAgQkFTRV9JRDogJ2FwcE5LT1ZSQmtOQ25ReFgwJyxcclxuICAgIEJBU0VfTkFNRTogJ1NjaGVkdWxlJyxcclxuICB9LFxyXG4gIFNjaG9vbHM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBOS09WUkJrTkNuUXhYMCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgU2Nob29scycsXHJcbiAgfSxcclxuICBMZWFkczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcEprRW1ERWQwRDByMmtUJyxcclxuICAgIEJBU0VfTkFNRTogJ0xlYWRzJyxcclxuICB9LFxyXG4gIEFsbF9TY2hvb2xzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSmtFbURFZDBEMHIya1QnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIFNjaG9vbHMnLFxyXG4gIH0sXHJcbiAgUGxhbnM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHAyS0N3WWtubVJ1dnoxOCcsXHJcbiAgICBCQVNFX05BTUU6ICdQbGFucycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQ2xhc3Nlczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFVNanRjalV4MmNOMXk4JyxcclxuICAgIEJBU0VfTkFNRTogJ0NsYXNzZXMnLFxyXG4gIH0sXHJcbiAgUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQm9va2luZ3MnLFxyXG4gIH0sXHJcbiAgUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFVNanRjalV4MmNOMXk4JyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBQcm9maWxlcycsXHJcbiAgfSxcclxuICBTZW1pbmFyczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFQ3eTJsR2tBeXp2UlcyJyxcclxuICAgIEJBU0VfTkFNRTogJ1NlbWluYXJzJyxcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAtIGdldCBQcm9maWxlIGFmdGVyIHNlbmQgcGFnZSB0byBicm93c2VyLlxyXG4gKiBAcGFyYW0gYmFzZU5hbWUgLSBCYXNlIE5hbWUuXHJcbiAqIEByZXR1cm5zIC0gUmV0dXJuIGFpcnRhYmxlIGluc3RhbmNlIGZvciBiYXNlIGxpa2UgZm9yIHBlb3BsZSBhbmQgb3RoZXJzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWJsZUluc3RhbmNlOiAoYmFzZU5hbWU6IHN0cmluZykgPT4gVGFibGU8RmllbGRTZXQ+ID0gKFxyXG4gIGJhc2VOYW1lLFxyXG4pID0+IHtcclxuICBjb25zdCB7IEJBU0VfSUQsIEJBU0VfTkFNRSB9ID0gYmFzZUNvbmZpZ1tiYXNlTmFtZV07XHJcbiAgY29uc3QgYmFzZSA9IEFpcnRhYmxlLmJhc2UoQkFTRV9JRCk7XHJcbiAgY29uc3QgdGFibGUgPSBiYXNlKEJBU0VfTkFNRSk7XHJcbiAgcmV0dXJuIHRhYmxlO1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVEFCTEVTIHtcclxuICBQRU9QTEUgPSAnUGVvcGxlJyxcclxuICBSQU5LID0gJ1JhbmsnLFxyXG4gIFNDSE9PTCA9ICdTY2hvb2wnLFxyXG4gIEFDSElFVkVNRU5UID0gJ0FjaGlldmVtZW50JyxcclxuICBWSURFTyA9ICdWaWRlbycsXHJcbiAgTUFSVElBTF9BUlQgPSAnTWFydGlhbF9BcnQnLFxyXG4gIFRJTUVUQUJMRSA9ICdUaW1ldGFibGUnLFxyXG4gIFNDSE9PTFMgPSAnU2Nob29scycsXHJcbiAgTEVBRFMgPSAnTGVhZHMnLFxyXG4gIEFMTF9TQ0hPT0xTID0gJ0FsbF9TY2hvb2xzJyxcclxuICBQTEFOUyA9ICdQbGFucycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0NMQVNTRVMgPSAnUHJpdmF0ZV9DbGFzc2VzX0NsYXNzZXMnLFxyXG4gIFBSSVZBVEVfQ0xBU1NFU19CT09LSU5HUyA9ICdQcml2YXRlX0NsYXNzZXNfQm9va2luZ3MnLFxyXG4gIFBSSVZBVEVfQ0xBU1NFU19BTExfUFJPRklMRVMgPSAnUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlcycsXHJcbiAgU0VNSU5BUlMgPSAnU2VtaW5hcnMnLFxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgZ2V0VGFibGVJbnN0YW5jZSwgVEFCTEVTIH0gZnJvbSAnLi9BaXJ0YWJsZSc7XHJcblxyXG5jb25zdCB0YWJsZSA9IGdldFRhYmxlSW5zdGFuY2UoVEFCTEVTLlJBTkspO1xyXG5jb25zdCBwZW9wbGVUYWJsZSA9IGdldFRhYmxlSW5zdGFuY2UoVEFCTEVTLlBFT1BMRSk7XHJcbmNvbnN0IHNjaG9vbFRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuU0NIT09MKTtcclxuY29uc3QgbWFydGlhbEFydFRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuTUFSVElBTF9BUlQpO1xyXG5cclxuY2xhc3MgUmFua3NTZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSBVc2VybmFtZS5cclxuICAgKiBAcmV0dXJucyAtIFJldHVybiB1c2VyIHByb2ZpbGUgYmFzaWMgZGF0YSBsaWtlIHVzZXJuYW1lIGFuZCBhdmF0YXIuXHJcbiAgICovXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGVcclxuICBhc3luYyBnZXRSYW5rcyh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGFibGVcclxuICAgICAgICAuc2VsZWN0KHsgZmlsdGVyQnlGb3JtdWxhOiBge1VzZXJuYW1lfSA9ICcke3VzZXJuYW1lfSdgIH0pXHJcbiAgICAgICAgLmFsbCgpO1xyXG4gICAgICBjb25zdCByZXF1ZXN0cyA9IFtdO1xyXG4gICAgICBsZXQgcGVvcGxlcyA9IFtdO1xyXG4gICAgICBsZXQgc2Nob29scyA9IFtdO1xyXG4gICAgICBsZXQgbWFydGlhbEFydHMgPSBbXTtcclxuXHJcbiAgICAgIGNvbnN0IG1hc3RlclF1ZXJ5ID0gcmVjb3Jkc1xyXG4gICAgICAgIC5tYXAoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlY29yZC5maWVsZHNbJ01hc3RlciAoZnJvbSBBbGwgUHJvZmlsZXMpJ10pXHJcbiAgICAgICAgICAgIHJldHVybiBge1VzZXJuYW1lfSA9ICcke3JlY29yZC5maWVsZHNbJ01hc3RlciAoZnJvbSBBbGwgUHJvZmlsZXMpJ11bMF19J2A7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG5cclxuICAgICAgcmVxdWVzdHMucHVzaChcclxuICAgICAgICBwZW9wbGVUYWJsZVxyXG4gICAgICAgICAgLnNlbGVjdCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5Rm9ybXVsYTogYE9SKCR7bWFzdGVyUXVlcnkuam9pbignLCcpfSlgLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5hbGwoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IHNjaG9vbFF1ZXJ5ID0gcmVjb3Jkc1xyXG4gICAgICAgIC5tYXAoKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlY29yZC5maWVsZHNbJ1NjaG9vbCBOYW1lIChmcm9tIEFsbCBTY2hvb2xzKSddKVxyXG4gICAgICAgICAgICByZXR1cm4gYHtTY2hvb2wgTmFtZX0gPSAnJHtyZWNvcmQuZmllbGRzWydTY2hvb2wgTmFtZSAoZnJvbSBBbGwgU2Nob29scyknXVswXX0nYDtcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XHJcbiAgICAgIHJlcXVlc3RzLnB1c2goXHJcbiAgICAgICAgc2Nob29sUXVlcnkubGVuZ3RoID4gMFxyXG4gICAgICAgICAgPyBzY2hvb2xUYWJsZVxyXG4gICAgICAgICAgICAuc2VsZWN0KHtcclxuICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGBPUigke3NjaG9vbFF1ZXJ5LmpvaW4oJywnKX0pYCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmFsbCgpXHJcbiAgICAgICAgICA6IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4gcmVzKFtdKSksXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBtYXJ0aWFsQXJ0UXVlcnkgPSByZWNvcmRzXHJcbiAgICAgICAgLm1hcCgocmVjb3JkKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVjb3JkLmZpZWxkc1snTGV2ZWwgKGZyb20gTWFydGlhbCBBcnRzIFJhbmtzKSddKVxyXG4gICAgICAgICAgICByZXR1cm4gYHtMZXZlbH0gPSAnJHtyZWNvcmQuZmllbGRzWydMZXZlbCAoZnJvbSBNYXJ0aWFsIEFydHMgUmFua3MpJ11bMF19J2A7XHJcbiAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICByZXF1ZXN0cy5wdXNoKFxyXG4gICAgICAgIG1hcnRpYWxBcnRRdWVyeS5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IG1hcnRpYWxBcnRUYWJsZVxyXG4gICAgICAgICAgICAuc2VsZWN0KHtcclxuICAgICAgICAgICAgICBmaWx0ZXJCeUZvcm11bGE6IGBPUigke21hcnRpYWxBcnRRdWVyeS5qb2luKCcsJyl9KWAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hbGwoKVxyXG4gICAgICAgICAgOiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHJlcyhbXSkpLFxyXG4gICAgICApO1xyXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcGVvcGxlcyA9IFsuLi5yZXNbMF1dO1xyXG4gICAgICAgIHNjaG9vbHMgPSBbLi4ucmVzWzFdXTtcclxuICAgICAgICBtYXJ0aWFsQXJ0cyA9IFsuLi5yZXNbMl1dO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCFyZWNvcmRzIHx8IHJlY29yZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gW107XHJcbiAgICAgIHJlY29yZHMubWFwKChyZWNvcmQpID0+IHtcclxuICAgICAgICBjb25zdCBwZW9wbGUgPSByZWNvcmQuZmllbGRzWydNYXN0ZXIgKGZyb20gQWxsIFByb2ZpbGVzKSddXHJcbiAgICAgICAgICA/IHBlb3BsZXMuZmluZCgocCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIHAuZmllbGRzLlVzZXJuYW1lID09PVxyXG4gICAgICAgICAgICAgICAgcmVjb3JkLmZpZWxkc1snTWFzdGVyIChmcm9tIEFsbCBQcm9maWxlcyknXVswXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IHNjaG9vbCA9IHJlY29yZC5maWVsZHNbJ1NjaG9vbCBOYW1lIChmcm9tIEFsbCBTY2hvb2xzKSddXHJcbiAgICAgICAgICA/IHNjaG9vbHMuZmluZCgocCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIHAuZmllbGRzWydTY2hvb2wgTmFtZSddID09PVxyXG4gICAgICAgICAgICAgICAgcmVjb3JkLmZpZWxkc1snU2Nob29sIE5hbWUgKGZyb20gQWxsIFNjaG9vbHMpJ11bMF1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBtYXJ0aWFsQXJ0ID0gcmVjb3JkLmZpZWxkc1snTGV2ZWwgKGZyb20gTWFydGlhbCBBcnRzIFJhbmtzKSddXHJcbiAgICAgICAgICA/IG1hcnRpYWxBcnRzLmZpbmQoKHApID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICBwLmZpZWxkcy5MZXZlbCA9PT1cclxuICAgICAgICAgICAgICAgIHJlY29yZC5maWVsZHNbJ0xldmVsIChmcm9tIE1hcnRpYWwgQXJ0cyBSYW5rcyknXVswXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICBtYXN0ZXI6IHBlb3BsZVxyXG4gICAgICAgICAgICA/IF8ubWFwS2V5cyhwZW9wbGUuZmllbGRzLCAodiwgaykgPT4gXy5jYW1lbENhc2UoaykpXHJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc2Nob29sOiBzY2hvb2xcclxuICAgICAgICAgICAgPyBfLm1hcEtleXMoc2Nob29sLmZpZWxkcywgKHYsIGspID0+IF8uY2FtZWxDYXNlKGspKVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgIG1hcnRpYWxBcnQ6IG1hcnRpYWxBcnRcclxuICAgICAgICAgICAgPyBfLm1hcEtleXMobWFydGlhbEFydC5maWVsZHMsICh2LCBrKSA9PiBfLmNhbWVsQ2FzZShrKSlcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXNwb25zZS5wdXNoKHtcclxuICAgICAgICAgIC4uLnJlY29yZCxcclxuICAgICAgICAgIGZpZWxkczogeyAuLi5yZWNvcmQuZmllbGRzLCAuLi5kYXRhIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFJhbmtzU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IFJhbmtzU2VydmljZSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9SYW5rc1NlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAtIGdldCBQcm9maWxlIGFmdGVyIHNlbmQgcGFnZSB0byBicm93c2VyLlxyXG4gKiBAcGFyYW0gcmVxIC0gUmVxLlxyXG4gKiBAcGFyYW0gcmVzIC0gUmVzLlxyXG4gKiBAcmV0dXJucyAtIFJldHVybiB1c2VyIHByb2ZpbGUgYmFzaWMgZGF0YSBsaWtlIHVzZXJuYW1lIGFuZCBhdmF0YXIuXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlXHJcbmFzeW5jIGZ1bmN0aW9uIFJhbmsocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBSYW5rc1NlcnZpY2UuZ2V0UmFua3MoXHJcbiAgICAgICAgdHlwZW9mIHJlcS5xdWVyeS51c2VybmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gcmVxLnF1ZXJ5LnVzZXJuYW1lXHJcbiAgICAgICAgICA6IHJlcS5xdWVyeT8udXNlcm5hbWVbMF0sXHJcbiAgICAgICk7XHJcbiAgICAgIHJlcy5zZW5kKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDQpLmpzb24oeyBtZXNzYWdlOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFuaztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWlydGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=