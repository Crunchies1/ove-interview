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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aFLs");


/***/ }),

/***/ "WMBb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BASE", function() { return DEFAULT_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLatestData", function() { return fetchLatestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchHistoricData", function() { return fetchHistoricData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_BASE = 'EUR';

const fetchLatestData = async (base = DEFAULT_BASE) => (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.ratesapi.io/api/latest?base=${base}`)).data;

const fetchHistoricData = async (date, base = DEFAULT_BASE) => (await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://api.ratesapi.io/api/${date}?base=${base}`)).data;



/***/ }),

/***/ "aFLs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DATA", function() { return FETCH_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculator", function() { return calculator; });
/* harmony import */ var _api_actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WMBb");
 // State is represented by a list of key-objects
// key: SYMBOL
// object: {
//   PRICE: float
//   INDICATOR: int
//   CHANGE: float
//   GRAPH: Array of x-axis and y-axis
// }
// ====== HELPER FUNCTIONS FOR FETCH DATA ======
// eslint-disable-next-line no-extend-native

Date.prototype.prevDays = function (days) {
  const date = new Date(this.valueOf()); // Return the current date minus days

  date.setDate(date.getDate() - days);
  return date;
}; // Returns the array of dates we are looking through


function getDates(startDate, stopDate) {
  const dateArray = [];
  let currentDate = startDate;

  while (currentDate >= stopDate) {
    // Converts date string into YYYY-MM-DD format
    let date = currentDate.toUTCString().split(', ')[1];
    date = new Date(date).toISOString().split('T')[0];
    dateArray.push(date);
    currentDate = currentDate.prevDays(1);
  }

  return dateArray;
} // This function adds new entries to the state map following the sample state


function addToState(array, key, value, date) {
  array[key] = {
    price: value.toPrecision(6),
    indicator: null,
    change: null,
    graph: [[date], [value]]
  };
} // This function adds values to the graph array in the current state map


function addToGraph(array, key, value, date) {
  array[key].graph[0].unshift(date);
  array[key].graph[1].unshift(value);
} // This function calculates the change in percentage from the first day of tracking to the last


function calculateChange(array, key) {
  // Obtain the current value and the latest recorded value
  const curVal = array[key].graph[1][array[key].graph[1].length - 1];
  const prevVal = array[key].graph[1][0]; // Calculate percentage change and set array values

  if (curVal > prevVal) {
    array[key].indicator = 1;
    array[key].change = '+' + (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%';
  } else if (curVal === prevVal) {
    array[key].indicator = 0;
    array[key].change = 0 .toFixed(2) + '%';
  } else {
    array[key].indicator = -1;
    array[key].change = (100 * (curVal - prevVal) / prevVal).toFixed(2) + '%';
  }
} // =============================================
// Calls API to fetch and cache the required data


async function fetchData(base, timeframe) {
  // const data = await fetchLatestData()
  // const cacheId = data.base + data.date
  // Obtain the dates of the previous 7 days in yy-mm-dd format
  const dateArray = getDates(new Date(), new Date().prevDays(timeframe)); // For each value in the data array, send an HTTP request

  await Promise.all(dateArray.map(async date => {
    try {
      // Check to see if the data we require has already been cached
      let pastData;

      if (window.localStorage.getItem(base + date) === null) {
        // Otherwise, simply fetch the data from ratesapi.io
        pastData = await Object(_api_actions_js__WEBPACK_IMPORTED_MODULE_0__["fetchHistoricData"])(date, base); // Cache the fetched data

        const cacheId = pastData.base + date;
        window.localStorage.setItem(cacheId, JSON.stringify(pastData.rates));
      }
    } catch (error) {
      console.log('error' + error);
    }
  })); // Return the array of dates used

  return dateArray;
} // Function to generate the index state based on the dates given


function genState(dateArray, base) {
  // Initialise the state array
  const rateData = {}; // Loop through the dates in the date array

  for (let i = 0; i < dateArray.length; i++) {
    // Retrieve the rates for each date using current base
    const date = dateArray[i];
    let rates = window.localStorage.getItem(base + date); // Generate state using day 1 rates

    if (i === 0) {
      rateData[base] = {
        price: 1,
        indicator: null,
        change: null,
        graph: null
      };
    } // Loop through each rate


    rates = JSON.parse(rates);

    for (const key of Object.keys(rates)) {
      if (key !== base) {
        if (i === 0) {
          // Generate state using day 1 rates
          addToState(rateData, key, rates[key], date);
        } else if (i < dateArray.length - 1) {
          // Add the rate data to the graphs
          addToGraph(rateData, key, rates[key], date);
        } else {
          // Lastly, add the rate data to the graphs then calculate the final
          // indicator and change values
          addToGraph(rateData, key, rates[key], date);
          calculateChange(rateData, key);
        }
      }
    }
  }

  return rateData;
}

const FETCH_DATA = 'FETCH_DATA'; // Implemented as if it can be extended in the future

const calculator = async (action, base, timeframe) => {
  switch (action) {
    case FETCH_DATA:
      {
        const dA = await fetchData(base, timeframe);
        const rD = genState(dA, base);
        return rD;
      }
  }
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });