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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/Seminars/index.ts");
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

/***/ "./services/SeminarsService.ts":
/*!*************************************!*\
  !*** ./services/SeminarsService.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/shared/utils/airtable-utils */ "./src/shared/utils/airtable-utils.ts");
/* harmony import */ var _Airtable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Airtable */ "./services/Airtable.ts");
/* eslint-disable @typescript-eslint/explicit-function-return-type */

/* eslint-disable class-methods-use-this */


const table = Object(_Airtable__WEBPACK_IMPORTED_MODULE_1__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_1__["TABLES"].SEMINARS);

class SeminarClassService {
  /**
   * @description - get private classes list against a specific user.
   * @returns - Return private classes list against a specific user.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getSeminars() {
    try {
      const records = await table.select().all();
      return {
        seminars: Object(_src_shared_utils_airtable_utils__WEBPACK_IMPORTED_MODULE_0__["formattedResponse"])(records)
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new SeminarClassService());

/***/ }),

/***/ "./src/pages/api/Seminars/index.ts":
/*!*****************************************!*\
  !*** ./src/pages/api/Seminars/index.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_SeminarsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/SeminarsService */ "./services/SeminarsService.ts");

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function Seminars(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await _services_SeminarsService__WEBPACK_IMPORTED_MODULE_0__["default"].getSeminars();
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else {// Handle any other HTTP method
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Seminars);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQWlydGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvU2VtaW5hcnNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvU2VtaW5hcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlscy9haXJ0YWJsZS11dGlscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIl0sIm5hbWVzIjpbIkFpcnRhYmxlIiwiY29uZmlndXJlIiwiYXBpS2V5IiwiYmFzZUNvbmZpZyIsIlBlb3BsZSIsIkJBU0VfSUQiLCJCQVNFX05BTUUiLCJSYW5rIiwiU2Nob29sIiwiQWNoaWV2ZW1lbnQiLCJWaWRlbyIsIk1hcnRpYWxfQXJ0IiwiVGltZXRhYmxlIiwiU2Nob29scyIsIkxlYWRzIiwiQWxsX1NjaG9vbHMiLCJQbGFucyIsIlByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzIiwiUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzIiwiUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlcyIsIlNlbWluYXJzIiwiZ2V0VGFibGVJbnN0YW5jZSIsImJhc2VOYW1lIiwiYmFzZSIsInRhYmxlIiwiVEFCTEVTIiwiU0VNSU5BUlMiLCJTZW1pbmFyQ2xhc3NTZXJ2aWNlIiwiZ2V0U2VtaW5hcnMiLCJyZWNvcmRzIiwic2VsZWN0IiwiYWxsIiwic2VtaW5hcnMiLCJmb3JtYXR0ZWRSZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJTZW1pbmFyc1NlcnZpY2UiLCJzZW5kIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJtYXAiLCJyZWNvcmQiLCJfIiwibWFwS2V5cyIsImZpZWxkcyIsInYiLCJrIiwiY2FtZWxDYXNl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STtBQUNGLFlBQU1DLElBQUksR0FBRyxNQUFNQyxpRUFBZSxDQUFDWixXQUFoQixFQUFuQjtBQUNBUyxTQUFHLENBQUNJLElBQUosQ0FBU0YsSUFBVDtBQUNELEtBSEQsQ0FHRSxPQUFPTCxLQUFQLEVBQWM7QUFDZEMsYUFBTyxDQUFDTyxHQUFSLENBQVlSLEtBQVo7QUFDQUcsU0FBRyxDQUFDTSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBckI7QUFDRDtBQUNGLEdBUkQsTUFRTyxDQUNMO0FBQ0Q7QUFDRjs7QUFFY3pCLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFTyxNQUFNYSxpQkFBMEMsR0FBSUosT0FBRCxJQUFhO0FBQ3JFLFNBQU9BLE9BQU8sQ0FBQ2lCLEdBQVIsQ0FBYUMsTUFBRCxvQ0FDZEMsNkNBQUMsQ0FBQ0MsT0FBRixDQUFVRixNQUFNLENBQUNHLE1BQWpCLEVBQXlCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVSiw2Q0FBQyxDQUFDSyxTQUFGLENBQVlELENBQVosQ0FBbkMsQ0FEYztBQUVqQkUsTUFBRSxFQUFFUCxNQUFNLENBQUNPO0FBRk0sSUFBWixDQUFQO0FBSUQsQ0FMTSxDOzs7Ozs7Ozs7OztBQ0ZQLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DIiwiZmlsZSI6InBhZ2VzL2FwaS9TZW1pbmFycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2FwaS9TZW1pbmFycy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBBaXJ0YWJsZSwgeyBGaWVsZFNldCwgVGFibGUgfSBmcm9tICdhaXJ0YWJsZSc7XHJcblxyXG4vLyBBdXRoZW50aWNhdGVcclxuQWlydGFibGUuY29uZmlndXJlKHtcclxuICBhcGlLZXk6ICdrZXlzb3liRGtoNzRneWp1MycsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJhc2VDb25maWcgPSB7XHJcbiAgUGVvcGxlOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSUV3V2ZzczlzemFhcXAnLFxyXG4gICAgQkFTRV9OQU1FOiAnUGVvcGxlJyxcclxuICB9LFxyXG4gIFJhbms6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHB0UHBHRW9GN3lxQml4YycsXHJcbiAgICBCQVNFX05BTUU6ICdSYW5rcyBJc3N1ZWQnLFxyXG4gIH0sXHJcbiAgU2Nob29sOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwZldyc01zbDBTNVgwVEsnLFxyXG4gICAgQkFTRV9OQU1FOiAnU2Nob29scycsXHJcbiAgfSxcclxuICBBY2hpZXZlbWVudDoge1xyXG4gICAgQkFTRV9JRDogJ2FwcERiOUNZTk1iZVNSaHFkJyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBBY2hpZXZlbWVudHMnLFxyXG4gIH0sXHJcbiAgVmlkZW86IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBkUkdZaHpTQlhRM2RqSCcsXHJcbiAgICBCQVNFX05BTUU6ICdFeHRlcm5hbCcsXHJcbiAgfSxcclxuICBNYXJ0aWFsX0FydDoge1xyXG4gICAgQkFTRV9JRDogJ2FwcGU3d3JqN203cU5Ud0YzJyxcclxuICAgIEJBU0VfTkFNRTogJ1JhbmtzJyxcclxuICB9LFxyXG4gIFRpbWV0YWJsZToge1xyXG4gICAgQkFTRV9JRDogJ2FwcE5LT1ZSQmtOQ25ReFgwJyxcclxuICAgIEJBU0VfTkFNRTogJ1NjaGVkdWxlJyxcclxuICB9LFxyXG4gIFNjaG9vbHM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBOS09WUkJrTkNuUXhYMCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgU2Nob29scycsXHJcbiAgfSxcclxuICBMZWFkczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcEprRW1ERWQwRDByMmtUJyxcclxuICAgIEJBU0VfTkFNRTogJ0xlYWRzJyxcclxuICB9LFxyXG4gIEFsbF9TY2hvb2xzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSmtFbURFZDBEMHIya1QnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIFNjaG9vbHMnLFxyXG4gIH0sXHJcbiAgUGxhbnM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHAyS0N3WWtubVJ1dnoxOCcsXHJcbiAgICBCQVNFX05BTUU6ICdQbGFucycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQ2xhc3Nlczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFVNanRjalV4MmNOMXk4JyxcclxuICAgIEJBU0VfTkFNRTogJ0NsYXNzZXMnLFxyXG4gIH0sXHJcbiAgUHJpdmF0ZV9DbGFzc2VzX0Jvb2tpbmdzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQm9va2luZ3MnLFxyXG4gIH0sXHJcbiAgUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFVNanRjalV4MmNOMXk4JyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBQcm9maWxlcycsXHJcbiAgfSxcclxuICBTZW1pbmFyczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcFQ3eTJsR2tBeXp2UlcyJyxcclxuICAgIEJBU0VfTkFNRTogJ1NlbWluYXJzJyxcclxuICB9LFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiAtIGdldCBQcm9maWxlIGFmdGVyIHNlbmQgcGFnZSB0byBicm93c2VyLlxyXG4gKiBAcGFyYW0gYmFzZU5hbWUgLSBCYXNlIE5hbWUuXHJcbiAqIEByZXR1cm5zIC0gUmV0dXJuIGFpcnRhYmxlIGluc3RhbmNlIGZvciBiYXNlIGxpa2UgZm9yIHBlb3BsZSBhbmQgb3RoZXJzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWJsZUluc3RhbmNlOiAoYmFzZU5hbWU6IHN0cmluZykgPT4gVGFibGU8RmllbGRTZXQ+ID0gKFxyXG4gIGJhc2VOYW1lLFxyXG4pID0+IHtcclxuICBjb25zdCB7IEJBU0VfSUQsIEJBU0VfTkFNRSB9ID0gYmFzZUNvbmZpZ1tiYXNlTmFtZV07XHJcbiAgY29uc3QgYmFzZSA9IEFpcnRhYmxlLmJhc2UoQkFTRV9JRCk7XHJcbiAgY29uc3QgdGFibGUgPSBiYXNlKEJBU0VfTkFNRSk7XHJcbiAgcmV0dXJuIHRhYmxlO1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVEFCTEVTIHtcclxuICBQRU9QTEUgPSAnUGVvcGxlJyxcclxuICBSQU5LID0gJ1JhbmsnLFxyXG4gIFNDSE9PTCA9ICdTY2hvb2wnLFxyXG4gIEFDSElFVkVNRU5UID0gJ0FjaGlldmVtZW50JyxcclxuICBWSURFTyA9ICdWaWRlbycsXHJcbiAgTUFSVElBTF9BUlQgPSAnTWFydGlhbF9BcnQnLFxyXG4gIFRJTUVUQUJMRSA9ICdUaW1ldGFibGUnLFxyXG4gIFNDSE9PTFMgPSAnU2Nob29scycsXHJcbiAgTEVBRFMgPSAnTGVhZHMnLFxyXG4gIEFMTF9TQ0hPT0xTID0gJ0FsbF9TY2hvb2xzJyxcclxuICBQTEFOUyA9ICdQbGFucycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0NMQVNTRVMgPSAnUHJpdmF0ZV9DbGFzc2VzX0NsYXNzZXMnLFxyXG4gIFBSSVZBVEVfQ0xBU1NFU19CT09LSU5HUyA9ICdQcml2YXRlX0NsYXNzZXNfQm9va2luZ3MnLFxyXG4gIFBSSVZBVEVfQ0xBU1NFU19BTExfUFJPRklMRVMgPSAnUHJpdmF0ZV9DbGFzc2VzX0FsbF9Qcm9maWxlcycsXHJcbiAgU0VNSU5BUlMgPSAnU2VtaW5hcnMnLFxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbmltcG9ydCB7IGZvcm1hdHRlZFJlc3BvbnNlIH0gZnJvbSAnLi4vc3JjL3NoYXJlZC91dGlscy9haXJ0YWJsZS11dGlscyc7XHJcblxyXG5pbXBvcnQgeyBUQUJMRVMsIGdldFRhYmxlSW5zdGFuY2UgfSBmcm9tICcuL0FpcnRhYmxlJztcclxuXHJcbmNvbnN0IHRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuU0VNSU5BUlMpO1xyXG5cclxuY2xhc3MgU2VtaW5hckNsYXNzU2VydmljZSB7XHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIC0gZ2V0IHByaXZhdGUgY2xhc3NlcyBsaXN0IGFnYWluc3QgYSBzcGVjaWZpYyB1c2VyLlxyXG4gICAqIEByZXR1cm5zIC0gUmV0dXJuIHByaXZhdGUgY2xhc3NlcyBsaXN0IGFnYWluc3QgYSBzcGVjaWZpYyB1c2VyLlxyXG4gICAqL1xyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlXHJcbiAgYXN5bmMgZ2V0U2VtaW5hcnMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZWNvcmRzOiBhbnkgPSBhd2FpdCB0YWJsZS5zZWxlY3QoKS5hbGwoKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZW1pbmFyczogZm9ybWF0dGVkUmVzcG9uc2UocmVjb3JkcyksXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU2VtaW5hckNsYXNzU2VydmljZSgpO1xyXG4iLCJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBTZW1pbmFyc1NlcnZpY2UgZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvU2VtaW5hcnNTZXJ2aWNlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cbiAqIEBwYXJhbSByZXEgLSBSZXEuXG4gKiBAcGFyYW0gcmVzIC0gUmVzLlxuICogQHJldHVybnMgLSBSZXR1cm4gdXNlciBwcm9maWxlIGJhc2ljIGRhdGEgbGlrZSB1c2VybmFtZSBhbmQgYXZhdGFyLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlXG5hc3luYyBmdW5jdGlvbiBTZW1pbmFycyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IFNlbWluYXJzU2VydmljZS5nZXRTZW1pbmFycygpO1xuICAgICAgcmVzLnNlbmQoZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJlcy5zdGF0dXMoNTA0KS5qc29uKHsgbWVzc2FnZTogJ1NlcnZlciBFcnJvcicgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZW1pbmFycztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVkUmVzcG9uc2U6IChyZWNvcmRzOiBhbnlbXSkgPT4gYW55ID0gKHJlY29yZHMpID0+IHtcclxuICByZXR1cm4gcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gKHtcclxuICAgIC4uLl8ubWFwS2V5cyhyZWNvcmQuZmllbGRzLCAodiwgaykgPT4gXy5jYW1lbENhc2UoaykpLFxyXG4gICAgaWQ6IHJlY29yZC5pZCxcclxuICB9KSk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFpcnRhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9