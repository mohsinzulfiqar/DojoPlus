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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/Video/index.ts");
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

/***/ "./services/VideoService.ts":
/*!**********************************!*\
  !*** ./services/VideoService.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Airtable */ "./services/Airtable.ts");
/* eslint-disable class-methods-use-this */

const table = Object(_Airtable__WEBPACK_IMPORTED_MODULE_0__["getTableInstance"])(_Airtable__WEBPACK_IMPORTED_MODULE_0__["TABLES"].VIDEO);

class VideoService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getVideo(username) {
    const records = await table.select({
      filterByFormula: `FIND("${username}", ARRAYJOIN({All Profiles}))`
    }).all();
    return records;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new VideoService());

/***/ }),

/***/ "./src/pages/api/Video/index.ts":
/*!**************************************!*\
  !*** ./src/pages/api/Video/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_VideoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/VideoService */ "./services/VideoService.ts");


/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

async function Video(req, res) {
  if (req.method === 'GET') {
    try {
      var _req$query;

      const data = await _services_VideoService__WEBPACK_IMPORTED_MODULE_1__["default"].getVideo(typeof req.query.username === 'string' ? req.query.username : (_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.username[0]);
      const formatData = data.map(rank => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mapKeys(rank.fields, (v, k) => lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase(k)));
      res.send(formatData);
    } catch (error) {
      console.log(error);
      res.status(504).json({
        message: 'Server Error'
      });
    }
  } else {// Handle any other HTTP method
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Video);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvQWlydGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvVmlkZW9TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvVmlkZW8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYWlydGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiJdLCJuYW1lcyI6WyJBaXJ0YWJsZSIsImNvbmZpZ3VyZSIsImFwaUtleSIsImJhc2VDb25maWciLCJQZW9wbGUiLCJCQVNFX0lEIiwiQkFTRV9OQU1FIiwiUmFuayIsIlNjaG9vbCIsIkFjaGlldmVtZW50IiwiVmlkZW8iLCJNYXJ0aWFsX0FydCIsIlRpbWV0YWJsZSIsIlNjaG9vbHMiLCJMZWFkcyIsIkFsbF9TY2hvb2xzIiwiUGxhbnMiLCJQcml2YXRlX0NsYXNzZXNfQ2xhc3NlcyIsIlByaXZhdGVfQ2xhc3Nlc19Cb29raW5ncyIsIlByaXZhdGVfQ2xhc3Nlc19BbGxfUHJvZmlsZXMiLCJTZW1pbmFycyIsImdldFRhYmxlSW5zdGFuY2UiLCJiYXNlTmFtZSIsImJhc2UiLCJ0YWJsZSIsIlRBQkxFUyIsIlZJREVPIiwiVmlkZW9TZXJ2aWNlIiwiZ2V0VmlkZW8iLCJ1c2VybmFtZSIsInJlY29yZHMiLCJzZWxlY3QiLCJmaWx0ZXJCeUZvcm11bGEiLCJhbGwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwicXVlcnkiLCJmb3JtYXREYXRhIiwibWFwIiwicmFuayIsIl8iLCJtYXBLZXlzIiwiZmllbGRzIiwidiIsImsiLCJjYW1lbENhc2UiLCJzZW5kIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFDSSxLQUZSLCtDQUVJLFdBQVdULFFBQVgsQ0FBb0IsQ0FBcEIsQ0FIYSxDQUFuQjtBQUtBLFlBQU1VLFVBQVUsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVVDLElBQUQsSUFDMUJDLDZDQUFDLENBQUNDLE9BQUYsQ0FBVUYsSUFBSSxDQUFDRyxNQUFmLEVBQXVCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVSiw2Q0FBQyxDQUFDSyxTQUFGLENBQVlELENBQVosQ0FBakMsQ0FEaUIsQ0FBbkI7QUFHQVgsU0FBRyxDQUFDYSxJQUFKLENBQVNULFVBQVQ7QUFDRCxLQVZELENBVUUsT0FBT1UsS0FBUCxFQUFjO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0FkLFNBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQjtBQUNEO0FBQ0YsR0FmRCxNQWVPLENBQ0w7QUFDRDtBQUNGOztBQUVjNUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNoQ0EscUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvYXBpL1ZpZGVvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvYXBpL1ZpZGVvL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IEFpcnRhYmxlLCB7IEZpZWxkU2V0LCBUYWJsZSB9IGZyb20gJ2FpcnRhYmxlJztcclxuXHJcbi8vIEF1dGhlbnRpY2F0ZVxyXG5BaXJ0YWJsZS5jb25maWd1cmUoe1xyXG4gIGFwaUtleTogJ2tleXNveWJEa2g3NGd5anUzJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUNvbmZpZyA9IHtcclxuICBQZW9wbGU6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBJRXdXZnNzOXN6YWFxcCcsXHJcbiAgICBCQVNFX05BTUU6ICdQZW9wbGUnLFxyXG4gIH0sXHJcbiAgUmFuazoge1xyXG4gICAgQkFTRV9JRDogJ2FwcHRQcEdFb0Y3eXFCaXhjJyxcclxuICAgIEJBU0VfTkFNRTogJ1JhbmtzIElzc3VlZCcsXHJcbiAgfSxcclxuICBTY2hvb2w6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBmV3JzTXNsMFM1WDBUSycsXHJcbiAgICBCQVNFX05BTUU6ICdTY2hvb2xzJyxcclxuICB9LFxyXG4gIEFjaGlldmVtZW50OiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwRGI5Q1lOTWJlU1JocWQnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIEFjaGlldmVtZW50cycsXHJcbiAgfSxcclxuICBWaWRlbzoge1xyXG4gICAgQkFTRV9JRDogJ2FwcGRSR1loelNCWFEzZGpIJyxcclxuICAgIEJBU0VfTkFNRTogJ0V4dGVybmFsJyxcclxuICB9LFxyXG4gIE1hcnRpYWxfQXJ0OiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwZTd3cmo3bTdxTlR3RjMnLFxyXG4gICAgQkFTRV9OQU1FOiAnUmFua3MnLFxyXG4gIH0sXHJcbiAgVGltZXRhYmxlOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwTktPVlJCa05DblF4WDAnLFxyXG4gICAgQkFTRV9OQU1FOiAnU2NoZWR1bGUnLFxyXG4gIH0sXHJcbiAgU2Nob29sczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcE5LT1ZSQmtOQ25ReFgwJyxcclxuICAgIEJBU0VfTkFNRTogJ0FsbCBTY2hvb2xzJyxcclxuICB9LFxyXG4gIExlYWRzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwSmtFbURFZDBEMHIya1QnLFxyXG4gICAgQkFTRV9OQU1FOiAnTGVhZHMnLFxyXG4gIH0sXHJcbiAgQWxsX1NjaG9vbHM6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBKa0VtREVkMEQwcjJrVCcsXHJcbiAgICBCQVNFX05BTUU6ICdBbGwgU2Nob29scycsXHJcbiAgfSxcclxuICBQbGFuczoge1xyXG4gICAgQkFTRV9JRDogJ2FwcDJLQ3dZa25tUnV2ejE4JyxcclxuICAgIEJBU0VfTkFNRTogJ1BsYW5zJyxcclxuICB9LFxyXG4gIFByaXZhdGVfQ2xhc3Nlc19DbGFzc2VzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQ2xhc3NlcycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQm9va2luZ3M6IHtcclxuICAgIEJBU0VfSUQ6ICdhcHBVTWp0Y2pVeDJjTjF5OCcsXHJcbiAgICBCQVNFX05BTUU6ICdCb29raW5ncycsXHJcbiAgfSxcclxuICBQcml2YXRlX0NsYXNzZXNfQWxsX1Byb2ZpbGVzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVU1qdGNqVXgyY04xeTgnLFxyXG4gICAgQkFTRV9OQU1FOiAnQWxsIFByb2ZpbGVzJyxcclxuICB9LFxyXG4gIFNlbWluYXJzOiB7XHJcbiAgICBCQVNFX0lEOiAnYXBwVDd5MmxHa0F5enZSVzInLFxyXG4gICAgQkFTRV9OQU1FOiAnU2VtaW5hcnMnLFxyXG4gIH0sXHJcbn07XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIC0gZ2V0IFByb2ZpbGUgYWZ0ZXIgc2VuZCBwYWdlIHRvIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSBiYXNlTmFtZSAtIEJhc2UgTmFtZS5cclxuICogQHJldHVybnMgLSBSZXR1cm4gYWlydGFibGUgaW5zdGFuY2UgZm9yIGJhc2UgbGlrZSBmb3IgcGVvcGxlIGFuZCBvdGhlcnMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhYmxlSW5zdGFuY2U6IChiYXNlTmFtZTogc3RyaW5nKSA9PiBUYWJsZTxGaWVsZFNldD4gPSAoXHJcbiAgYmFzZU5hbWUsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHsgQkFTRV9JRCwgQkFTRV9OQU1FIH0gPSBiYXNlQ29uZmlnW2Jhc2VOYW1lXTtcclxuICBjb25zdCBiYXNlID0gQWlydGFibGUuYmFzZShCQVNFX0lEKTtcclxuICBjb25zdCB0YWJsZSA9IGJhc2UoQkFTRV9OQU1FKTtcclxuICByZXR1cm4gdGFibGU7XHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBUQUJMRVMge1xyXG4gIFBFT1BMRSA9ICdQZW9wbGUnLFxyXG4gIFJBTksgPSAnUmFuaycsXHJcbiAgU0NIT09MID0gJ1NjaG9vbCcsXHJcbiAgQUNISUVWRU1FTlQgPSAnQWNoaWV2ZW1lbnQnLFxyXG4gIFZJREVPID0gJ1ZpZGVvJyxcclxuICBNQVJUSUFMX0FSVCA9ICdNYXJ0aWFsX0FydCcsXHJcbiAgVElNRVRBQkxFID0gJ1RpbWV0YWJsZScsXHJcbiAgU0NIT09MUyA9ICdTY2hvb2xzJyxcclxuICBMRUFEUyA9ICdMZWFkcycsXHJcbiAgQUxMX1NDSE9PTFMgPSAnQWxsX1NjaG9vbHMnLFxyXG4gIFBMQU5TID0gJ1BsYW5zJyxcclxuICBQUklWQVRFX0NMQVNTRVNfQ0xBU1NFUyA9ICdQcml2YXRlX0NsYXNzZXNfQ2xhc3NlcycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0JPT0tJTkdTID0gJ1ByaXZhdGVfQ2xhc3Nlc19Cb29raW5ncycsXHJcbiAgUFJJVkFURV9DTEFTU0VTX0FMTF9QUk9GSUxFUyA9ICdQcml2YXRlX0NsYXNzZXNfQWxsX1Byb2ZpbGVzJyxcclxuICBTRU1JTkFSUyA9ICdTZW1pbmFycycsXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5pbXBvcnQgeyBUQUJMRVMsIGdldFRhYmxlSW5zdGFuY2UgfSBmcm9tICcuL0FpcnRhYmxlJztcclxuXHJcbmNvbnN0IHRhYmxlID0gZ2V0VGFibGVJbnN0YW5jZShUQUJMRVMuVklERU8pO1xyXG5cclxuY2xhc3MgVmlkZW9TZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gLSBnZXQgUHJvZmlsZSBhZnRlciBzZW5kIHBhZ2UgdG8gYnJvd3Nlci5cclxuICAgKiBAcGFyYW0gdXNlcm5hbWUgLSBVc2VybmFtZS5cclxuICAgKiBAcmV0dXJucyAtIFJldHVybiB1c2VyIHByb2ZpbGUgYmFzaWMgZGF0YSBsaWtlIHVzZXJuYW1lIGFuZCBhdmF0YXIuXHJcbiAgICovXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGVcclxuICBhc3luYyBnZXRWaWRlbyh1c2VybmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGFibGVcclxuICAgICAgLnNlbGVjdCh7XHJcbiAgICAgICAgZmlsdGVyQnlGb3JtdWxhOiBgRklORChcIiR7dXNlcm5hbWV9XCIsIEFSUkFZSk9JTih7QWxsIFByb2ZpbGVzfSkpYCxcclxuICAgICAgfSlcclxuICAgICAgLmFsbCgpO1xyXG4gICAgcmV0dXJuIHJlY29yZHM7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVmlkZW9TZXJ2aWNlKCk7XHJcbiIsImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgVmlkZW9TZXJ2aWNlIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL1ZpZGVvU2VydmljZSc7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIC0gZ2V0IFByb2ZpbGUgYWZ0ZXIgc2VuZCBwYWdlIHRvIGJyb3dzZXIuXHJcbiAqIEBwYXJhbSByZXEgLSBSZXEuXHJcbiAqIEBwYXJhbSByZXMgLSBSZXMuXHJcbiAqIEByZXR1cm5zIC0gUmV0dXJuIHVzZXIgcHJvZmlsZSBiYXNpYyBkYXRhIGxpa2UgdXNlcm5hbWUgYW5kIGF2YXRhci5cclxuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGVcclxuYXN5bmMgZnVuY3Rpb24gVmlkZW8ocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBWaWRlb1NlcnZpY2UuZ2V0VmlkZW8oXHJcbiAgICAgICAgdHlwZW9mIHJlcS5xdWVyeS51c2VybmFtZSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgID8gcmVxLnF1ZXJ5LnVzZXJuYW1lXHJcbiAgICAgICAgICA6IHJlcS5xdWVyeT8udXNlcm5hbWVbMF0sXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGEgPSBkYXRhLm1hcCgocmFuaykgPT5cclxuICAgICAgICBfLm1hcEtleXMocmFuay5maWVsZHMsICh2LCBrKSA9PiBfLmNhbWVsQ2FzZShrKSksXHJcbiAgICAgICk7XHJcbiAgICAgIHJlcy5zZW5kKGZvcm1hdERhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwNCkuanNvbih7IG1lc3NhZ2U6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWlydGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=