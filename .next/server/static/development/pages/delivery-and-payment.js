module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: getHeaderData, getInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeaderData", function() { return getHeaderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitData", function() { return getInitData; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const getHeaderData = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  const data = await res.json();
  return data.header || {};
};
const getInitData = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  return res.json();
};

/***/ }),

/***/ "./components/AddressContainer/AddressContainer.js":
/*!*********************************************************!*\
  !*** ./components/AddressContainer/AddressContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/AddressContainer/AddressContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AddressContainer = ({
  className,
  property,
  icon,
  address = []
}) => __jsx("div", {
  className: "jsx-1734587183" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'AddressContainer') || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, icon, __jsx("div", {
  className: "jsx-1734587183" + " " + "AddressContainer__list header__list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, "\u0410\u0434\u0440\u0435\u0441:", address.map((item, index) => __jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "\u0410\u0434\u0440\u0435\u0441",
  className: "jsx-1734587183",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 38
  }
}, item))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1734587183",
  __self: undefined
}, ".AddressContainer.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.AddressContainer__list.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0FkZHJlc3NDb250YWluZXIvQWRkcmVzc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHc0IsQUFLQSwwRUFKTSxBQUtHLDhFQUN4QixlQUxBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0FkZHJlc3NDb250YWluZXIvQWRkcmVzc0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBBZGRyZXNzQ29udGFpbmVyID0gKHsgY2xhc3NOYW1lLCBwcm9wZXJ0eSwgaWNvbiwgYWRkcmVzcyA9IFtdIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ0FkZHJlc3NDb250YWluZXInKSB9PlxuICAgIHsgaWNvbiB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJBZGRyZXNzQ29udGFpbmVyX19saXN0IGhlYWRlcl9fbGlzdFwiPlxuICAgICAg0JDQtNGA0LXRgTpcbiAgICAgIHtcbiAgICAgICAgYWRkcmVzcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8c3BhbiBrZXk9e2luZGV4fSBwcm9wZXJ0eT17cHJvcGVydHl9IG12LW11bHRpcGxlPVwidHJ1ZVwiIG12LWRlZmF1bHQ9XCLQkNC00YDQtdGBXCI+eyBpdGVtIH08L3NwYW4+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQWRkcmVzc0NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5BZGRyZXNzQ29udGFpbmVyX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/AddressContainer/AddressContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (AddressContainer);

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils.js");
/* harmony import */ var _Social_Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Social/Social */ "./components/Social/Social.js");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Footer/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DEFAULT_INNER_PROERTY_SET = {
  social: 'social',
  info: 'info'
};
const DEFAULT_INFO_INNER_PROERTY_SET = {
  text: 'text',
  unp: 'unp'
};

const Footer = ({
  property = "footer",
  innerProperties = {}
}) => {
  const data = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()(property)[property];
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  const {
    social,
    info
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["extractProperties"])(innerProperties, data);
  const {
    text,
    unp
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["extractProperties"])(DEFAULT_INFO_INNER_PROERTY_SET, info.value);
  return __jsx("footer", {
    property: property,
    className: "jsx-1942735625",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1942735625" + " " + "Socials-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, social.value ? social.value.map((socialItem, index) => __jsx(_Social_Social__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    property: social.key,
    value: socialItem,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 55
    }
  })) : false), __jsx("div", {
    className: "jsx-1942735625" + " " + "Footer-devider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("div", {
    property: info.key,
    className: "jsx-1942735625" + " " + "Info-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("span", {
    property: unp.key,
    "mv-default": "\u0423\u041D\u041F",
    className: "jsx-1942735625" + " " + "Footer__text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, unp.value), __jsx("span", {
    property: text.key,
    "mv-default": "\u0422\u0435\u043A\u0441\u0442",
    className: "jsx-1942735625" + " " + "Footer__text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, text.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1942735625",
    __self: undefined
  }, "footer.jsx-1942735625{padding:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 0;padding-top:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Footer-devider.jsx-1942735625{border-top:4px solid var(--accent-color);-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;margin:20px 0;}.Info-container.jsx-1942735625{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:var(--page-width);font-size:1.5em;text-align:center;color:var(--app-main-text-color);font-weight:bold;padding:10px;box-sizing:border-box;}.Socials-container.jsx-1942735625{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NrQixBQUcwQixBQVMwQixBQU01QixBQVlBLGVBMUJBLDBCQVNNLGlDQU1HLEFBWUUsZUExQkYsU0EyQkMsaUJBbEJULGNBQ2hCLHVCQUswQixlQWRWLFNBZUUsS0FkQyxXQWVDLEtBV0MsQ0F6QkEsWUFlYyxpQ0FDaEIsaUJBQ0osYUFDUyxpQkFReEIsQ0F6QkEsSUFrQkEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgeyBleHRyYWN0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vU29jaWFsL1NvY2lhbCc7XG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIHNvY2lhbDogJ3NvY2lhbCcsXG4gIGluZm86ICdpbmZvJyxcbn07XG5jb25zdCBERUZBVUxUX0lORk9fSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIHRleHQ6ICd0ZXh0JyxcbiAgdW5wOiAndW5wJyxcbn07XG5cbmNvbnN0IEZvb3RlciA9ICh7IHByb3BlcnR5ID0gXCJmb290ZXJcIiwgaW5uZXJQcm9wZXJ0aWVzPSB7fSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHVzZVN0b3Jlb24ocHJvcGVydHkpW3Byb3BlcnR5XTtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcbiAgY29uc3QgeyBzb2NpYWwsIGluZm8gfSA9IGV4dHJhY3RQcm9wZXJ0aWVzKGlubmVyUHJvcGVydGllcywgZGF0YSk7XG5cbiAgY29uc3QgeyB0ZXh0LCB1bnAgfSA9IGV4dHJhY3RQcm9wZXJ0aWVzKERFRkFVTFRfSU5GT19JTk5FUl9QUk9FUlRZX1NFVCwgaW5mby52YWx1ZSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgcHJvcGVydHk9eyBwcm9wZXJ0eSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTb2NpYWxzLWNvbnRhaW5lclwiPlxuICAgICAgICB7XG4gICAgICAgICAgc29jaWFsLnZhbHVlXG4gICAgICAgICAgICA/IHNvY2lhbC52YWx1ZS5tYXAoKHNvY2lhbEl0ZW0sIGluZGV4KSA9PiA8U29jaWFsIGtleT17IGluZGV4IH0gcHJvcGVydHk9eyBzb2NpYWwua2V5IH0gdmFsdWU9eyBzb2NpYWxJdGVtIH0vPikgXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZvb3Rlci1kZXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgcHJvcGVydHk9eyBpbmZvLmtleSB9IGNsYXNzTmFtZT1cIkluZm8tY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIHByb3BlcnR5PXsgdW5wLmtleSB9IGNsYXNzTmFtZT1cIkZvb3Rlcl9fdGV4dFwiIG12LWRlZmF1bHQ9XCLQo9Cd0J9cIj57IHVucC52YWx1ZSB9PC9zcGFuPlxuICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IHRleHQua2V5IH0gY2xhc3NOYW1lPVwiRm9vdGVyX190ZXh0XCIgbXYtZGVmYXVsdD1cItCi0LXQutGB0YJcIj57IHRleHQudmFsdWUgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuRm9vdGVyLWRldmlkZXIge1xuICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuSW5mby1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICAuU29jaWFscy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Footer/Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navigation */ "./components/Navigation/Navigation.js");
/* harmony import */ var _Header_Information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header__Information */ "./components/Header/Header__Information.js");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Header = ({
  property = "header"
}) => {
  const {
    header
  } = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('header');
  const {
    phone,
    address,
    logo
  } = header;
  return __jsx("header", {
    property: property,
    className: "jsx-4287000367" + " " + "Header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4287000367" + " " + "Header__container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    property: "logo",
    "mv-default": "https://via.placeholder.com/100.png",
    src: logo,
    className: "jsx-4287000367",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_Header_Information__WEBPACK_IMPORTED_MODULE_4__["default"], {
    phone: phone,
    address: address,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Navigation_shift",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4287000367",
    __self: undefined
  }, ".Header.jsx-4287000367{--icon-height:50px;--navigatioin-border-waigth:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:bold;background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header.jpg');background-size:cover;color:var(--app-main-text-color);font-weight:bold;}@media(max-width:1100px){.Header.jsx-4287000367{background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header-1100px-90q.jpg');}}@media(max-width:500px){.Header.jsx-4287000367{background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header-500px-90q.jpg');}}.Header.jsx-4287000367 .Header__container.jsx-4287000367{padding-bottom:40px;}.Header__container.jsx-4287000367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Header_navigation_shift.jsx-4287000367{padding-bottom:var(--navigatioin-border-waigth,40px);background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc4QixBQWlCK0YsQUFNRCxBQUs3RixBQUlQLEFBUXlDLG1CQXZDckIsQ0E0Qm5DLGdDQTFCZSxDQXNDZSxxQkFSaEIsT0FTZCxLQVIwQix1QkFWeEIsQ0FOQSxBQWlCbUIsZ0JBL0JHLDZFQWdDUSxDQS9CUCxtR0FDSixlQStCckIsOEVBN0JtQixpQkFDb0YsbUdBQy9FLHNCQUNXLGlDQUNoQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuaW1wb3J0IEhlYWRlcl9fSW5mb3JtYXRpb24gZnJvbSAnLi9IZWFkZXJfX0luZm9ybWF0aW9uJztcblxuY29uc3QgSGVhZGVyID0gKHsgcHJvcGVydHk9XCJoZWFkZXJcIiB9KSA9PiB7XG5cbiAgY29uc3QgeyBoZWFkZXIgfSA9IHVzZVN0b3Jlb24oJ2hlYWRlcicpO1xuICBjb25zdCB7IHBob25lLCBhZGRyZXNzLCBsb2dvIH0gPSBoZWFkZXI7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkhlYWRlclwiIHByb3BlcnR5PXsgcHJvcGVydHkgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyX19jb250YWluZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHByb3BlcnR5PVwibG9nb1wiXG4gICAgICAgICAgbXYtZGVmYXVsdD1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDAucG5nXCJcbiAgICAgICAgICBzcmM9e2xvZ299XG4gICAgICAgICAgLz5cbiAgICAgICAgPEhlYWRlcl9fSW5mb3JtYXRpb24gcGhvbmU9e3Bob25lfSBhZGRyZXNzPXthZGRyZXNzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxOYXZpZ2F0aW9uIGNsYXNzTmFtZT1cIk5hdmlnYXRpb25fc2hpZnRcIi8+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuSGVhZGVyIHtcbiAgICAgICAgICAtLWljb24taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIC0tbmF2aWdhdGlvaW4tYm9yZGVyLXdhaWd0aDogNDBweDtcblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgIFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQsIHZhcigtLWFjY2VudC1jb2xvcikpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzL2hlYWRlci5qcGcnKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICAgIC5IZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1hY2NlbnQtY29sb3IpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9oZWFkZXItMTEwMHB4LTkwcS5qcGcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIC5IZWFkZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1hY2NlbnQtY29sb3IpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9oZWFkZXItNTAwcHgtOTBxLmpwZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXIgLkhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLkhlYWRlcl9uYXZpZ2F0aW9uX3NoaWZ0IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbmF2aWdhdGlvaW4tYm9yZGVyLXdhaWd0aCwgNDBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header__Information.js":
/*!**************************************************!*\
  !*** ./components/Header/Header__Information.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddressContainer_AddressContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddressContainer/AddressContainer */ "./components/AddressContainer/AddressContainer.js");
/* harmony import */ var _PhonesContainer_PhonesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PhonesContainer/PhonesContainer */ "./components/PhonesContainer/PhonesContainer.js");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header__Information.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header__Information = ({
  phone,
  address
}) => __jsx("div", {
  className: "jsx-837556264" + " " + "Header__Information",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_AddressContainer_AddressContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  address: address,
  property: "address",
  icon: __jsx("img", {
    src: "/static/icons/baseline-pin_drop-24px.svg",
    className: "jsx-837556264" + " " + "Header__InformationIcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}), __jsx(_PhonesContainer_PhonesContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  phone: phone,
  property: "phone",
  icon: __jsx("img", {
    src: "/static/icons/baseline-phone-24px.svg",
    className: "jsx-837556264" + " " + "Header__InformationIcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "837556264",
  __self: undefined
}, ".Header__Information.jsx-837556264{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.Header__InformationIcon.jsx-837556264{height:var(--icon-height);margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJfX0luZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUdzQixBQU1hLDBCQUNSLGtCQUNwQiw4QkFQcUIsNkZBQ0oseURBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJfX0luZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZHJlc3NDb250YWluZXIgZnJvbSAnLi4vQWRkcmVzc0NvbnRhaW5lci9BZGRyZXNzQ29udGFpbmVyJztcbmltcG9ydCBQaG9uZXNDb250YWluZXIgZnJvbSAnLi4vUGhvbmVzQ29udGFpbmVyL1Bob25lc0NvbnRhaW5lcic7XG5cblxuY29uc3QgSGVhZGVyX19JbmZvcm1hdGlvbiA9ICh7IHBob25lLCBhZGRyZXNzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJfX0luZm9ybWF0aW9uXCI+XG4gICAgPEFkZHJlc3NDb250YWluZXJcbiAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XG4gICAgICBwcm9wZXJ0eT1cImFkZHJlc3NcIlxuICAgICAgaWNvbj17PGltZyBjbGFzc05hbWU9XCJIZWFkZXJfX0luZm9ybWF0aW9uSWNvblwiIHNyYz1cIi9zdGF0aWMvaWNvbnMvYmFzZWxpbmUtcGluX2Ryb3AtMjRweC5zdmdcIi8+fS8+XG4gICAgPFBob25lc0NvbnRhaW5lclxuICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgcHJvcGVydHk9XCJwaG9uZVwiXG4gICAgICBpY29uPXs8aW1nIGNsYXNzTmFtZT1cIkhlYWRlcl9fSW5mb3JtYXRpb25JY29uXCIgc3JjPVwiL3N0YXRpYy9pY29ucy9iYXNlbGluZS1waG9uZS0yNHB4LnN2Z1wiLz59Lz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5IZWFkZXJfX0luZm9ybWF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuXG4gICAgICAuSGVhZGVyX19JbmZvcm1hdGlvbkljb24ge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWljb24taGVpZ2h0KTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJfX0luZm9ybWF0aW9uOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header__Information.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header__Information);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ApplicationMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/ApplicationMode */ "./contexts/ApplicationMode.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Layout/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();

const Layout = ({
  children
}) => __jsx(_contexts_ApplicationMode__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
  value: publicRuntimeConfig.APP_MODE,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "726284067",
  __self: undefined
}, ":root{--page-width:1060px;--app-main-color:#544d49;--second-color:#fff;--accent-color:#fbd303f0;--decoration-color:#000;--base-background:white;--second-background:#000;--carusel-text-width:960px;--carusel-text-color:var(--app-main-text-color);--carusel-text-bg:transparent;--app-main-text-color:#542d18;--form-background:var(--app-main-color);}body{margin:0;min-height:100vh;font-family:'Exo 2',sans-serif;background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-2000px-90q.jpg');background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;color:var(--app-main-text-color);}@media (max-width:1100px){body{background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-1100px-90q.jpg');}}@media (max-width:500px){body{background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-500px-90q.jpg');}}@media (max-width:1100px){:root{--page-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VCLEFBRzZCLEFBa0JYLEFBYXlILEFBTUQsQUFNN0csU0F4QkgsU0F5QmpCLEVBMUN5QixNQWtCTyxtQkFqQlosWUFrQjRHLFFBakJ2Ryx5QkFDRCx3QkFDQSxXQWdDeEIsQ0FOQSxZQXpCeUIseUJBRUUsb0JBYUMsT0Fab0IscUJBYTFCLHNCQUNZLEtBYkosNkJBY0YsQ0FaRSwyQkFhRyxHQVpPLDhCQWExQyxVQVpBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGljYXRpb25Nb2RlIGZyb20gJy4uLy4uL2NvbnRleHRzL0FwcGxpY2F0aW9uTW9kZSc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEFwcGxpY2F0aW9uTW9kZS5Qcm92aWRlciB2YWx1ZT17IHB1YmxpY1J1bnRpbWVDb25maWcuQVBQX01PREUgfT5cblxuICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIDpyb290IHtcbiAgICAgICAgLS1wYWdlLXdpZHRoOiAxMDYwcHg7XG5cbiAgICAgICAgLS1hcHAtbWFpbi1jb2xvcjogIzU0NGQ0OTtcbiAgICAgICAgLS1zZWNvbmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC0tYWNjZW50LWNvbG9yOiAjZmJkMzAzZjA7XG4gICAgICAgIC0tZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgICAgLS1iYXNlLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAtLXNlY29uZC1iYWNrZ3JvdW5kOiAjMDAwO1xuXG4gICAgICAgIC0tY2FydXNlbC10ZXh0LXdpZHRoOiA5NjBweDtcbiAgICAgICAgLS1jYXJ1c2VsLXRleHQtY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAtLWNhcnVzZWwtdGV4dC1iZzogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLS1hcHAtbWFpbi10ZXh0LWNvbG9yOiAjNTQyZDE4O1xuICAgICAgICAtLWZvcm0tYmFja2dyb3VuZDogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFeG8gMicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgdmFyKC0tYmFzZS1iYWNrZ3JvdW5kKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvYmVhdXRpZnVsLWJlZS1ibG9vbS0yMDAwcHgtOTBxLmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW1haW4tdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1iYXNlLWJhY2tncm91bmQpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9iZWF1dGlmdWwtYmVlLWJsb29tLTExMDBweC05MHEuanBnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgdmFyKC0tYmFzZS1iYWNrZ3JvdW5kKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvYmVhdXRpZnVsLWJlZS1ibG9vbS01MDBweC05MHEuanBnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgLS1wYWdlLXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L0FwcGxpY2F0aW9uTW9kZS5Qcm92aWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Layout/Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Main/Main.jsx":
/*!**********************************!*\
  !*** ./components/Main/Main.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Main/Main.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Main = ({
  property,
  children
}) => {
  return __jsx("main", {
    property: property,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/MdComponent/MdComponent.jsx":
/*!************************************************!*\
  !*** ./components/MdComponent/MdComponent.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "react-markdown/with-html");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! showdown */ "showdown");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MdComponent/MdComponent.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const converter = new showdown__WEBPACK_IMPORTED_MODULE_3__["Converter"]();
converter.setOption('simpleLineBreaks', true);
converter.setOption('encodeEmails', false);

const MdComponent = ({
  property,
  data,
  header,
  innerProperties = {}
}) => {
  const htmlData = data && converter.makeHtml(data);
  return __jsx("div", {
    className: "jsx-3939723756" + " " + "MdComponent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-3939723756" + " " + "MdComponent__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-3939723756" + " " + "MdComponent__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("article", {
    property: property,
    "mv-default": "\u041A\u043E\u043D\u0442\u0435\u043D\u0442",
    dangerouslySetInnerHTML: {
      __html: htmlData
    },
    className: "jsx-3939723756" + " " + "MdComponent__content-container markdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3939723756",
    __self: undefined
  }, ".MdComponent.jsx-3939723756{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.MdComponent__section.jsx-3939723756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.MdComponent__content-container.jsx-3939723756{width:var(--page-width);background:#fbd30391;color:#1a1a1a;padding:20px;box-sizing:border-box;font-size:1.2em;border:4px solid var(--accent-color);}.MdComponent__content.jsx-3939723756{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.7em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01kQ29tcG9uZW50L01kQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR3NCLEFBS0UsQUFNVyxBQVVYLFdBcEJVLGFBV0YscUJBQ1AsY0FDRCxhQUNTLEVBVEEsQUFnQlgsV0FDVyxTQVBOLGdCQWRsQixBQWV1QyxxQ0FDdkMsS0FYcUIsV0FpQkEsa0ZBaEJyQixXQWlCb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01kQ29tcG9uZW50L01kQ29tcG9uZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICdzaG93ZG93bic7XG5cblxuY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xuY29udmVydGVyLnNldE9wdGlvbignc2ltcGxlTGluZUJyZWFrcycsIHRydWUpO1xuY29udmVydGVyLnNldE9wdGlvbignZW5jb2RlRW1haWxzJywgZmFsc2UpO1xuXG5jb25zdCBNZENvbXBvbmVudCA9ICh7IHByb3BlcnR5LCBkYXRhLCBoZWFkZXIsIGlubmVyUHJvcGVydGllcyA9IHt9ICB9KSA9PiB7XG4gIFxuICBjb25zdCBodG1sRGF0YSA9IGRhdGEgJiYgY29udmVydGVyLm1ha2VIdG1sKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNZENvbXBvbmVudFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTWRDb21wb25lbnRfX3NlY3Rpb25cIj5cbiAgICAgICAgeyBoZWFkZXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1kQ29tcG9uZW50X19jb250ZW50XCI+XG4gICAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIG12LWRlZmF1bHQ9XCLQmtC+0L3RgtC10L3RglwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJNZENvbXBvbmVudF9fY29udGVudC1jb250YWluZXIgbWFya2Rvd25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWxEYXRhfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLk1kQ29tcG9uZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5NZENvbXBvbmVudF9fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiZDMwMzkxO1xuICAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZENvbXBvbmVudDsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MdComponent/MdComponent.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MdComponent);

/***/ }),

/***/ "./components/Navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/Navigation/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation__Item */ "./components/Navigation/Navigation__Item.js");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Navigation/Navigation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Navigation = ({
  className
}) => {
  const wrapper = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const hoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.add("Navigation__wrapper_dried");
    }
  };

  const unHoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.remove("Navigation__wrapper_dried");
    }
  };

  return __jsx("div", {
    ref: wrapper,
    className: "jsx-4224750092" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()("Navigation__wrapper", className) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-4224750092" + " " + "Navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-4224750092" + " " + "Navigation__list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/products",
    label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/about",
    label: "\u041F\u0430\u0441\u0435\u043A\u0430",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/delivery-and-payment",
    label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/blog",
    label: "\u0411\u043B\u043E\u0433",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/contacts",
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4224750092",
    __self: undefined
  }, ".Navigation__wrapper.jsx-4224750092{--navigation-height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff9500c4;background-clip:content-box;width:100%;box-sizing:border-box;min-height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:4px solid var(--second-color);}.Navigation.jsx-4224750092{min-height:var(--navigation-height,70px);}.Navigation__list.jsx-4224750092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:var(--navigation-height,70px);width:var(--page-width);list-style:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBR3NDLEFBZ0JpQixBQUk3Qix5QkFuQkEsZ0JBZ0JmLGlDQUlpQix5QkFuQk8sZ0NBb0JvQix5Q0FDbEIsS0FwQkwsbUJBcUJILGdCQUNPLDBEQXJCSSwyQkFFQyxjQW9CVCxjQW5CUixXQUNXLHNCQUNvQix5Q0FDbkIsS0FpQmIsVUFDRCxTQUNYLDJFQWxCOEMsNENBRTlDIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE5hdmlnYXRpb25fX0l0ZW0gZnJvbSAnLi9OYXZpZ2F0aW9uX19JdGVtJztcblxuXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcblxuICBjb25zdCB3cmFwcGVyID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhvdmVySGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAod3JhcHBlci5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcIk5hdmlnYXRpb25fX3dyYXBwZXJfZHJpZWRcIik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdW5Ib3ZlckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdyYXBwZXIuY3VycmVudCkge1xuICAgICAgd3JhcHBlci5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJOYXZpZ2F0aW9uX193cmFwcGVyX2RyaWVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXCJOYXZpZ2F0aW9uX193cmFwcGVyXCIsIGNsYXNzTmFtZSl9IHJlZj17d3JhcHBlcn0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIk5hdmlnYXRpb25cIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIk5hdmlnYXRpb25fX2xpc3RcIj5cbiAgICAgICAgICA8TmF2aWdhdGlvbl9fSXRlbVxuICAgICAgICAgICAgaHJlZj1cIi9cIiBsYWJlbD1cItCT0LvQsNCy0L3QsNGPXCIvPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uX19JdGVtXG4gICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RzXCIgbGFiZWw9XCLQn9GA0L7QtNGD0LrRhtC40Y9cIi8+XG4gICAgICAgICAgPE5hdmlnYXRpb25fX0l0ZW1cbiAgICAgICAgICAgIGhyZWY9XCIvYWJvdXRcIiBsYWJlbD1cItCf0LDRgdC10LrQsFwiLz5cbiAgICAgICAgICA8TmF2aWdhdGlvbl9fSXRlbVxuICAgICAgICAgICAgaHJlZj1cIi9kZWxpdmVyeS1hbmQtcGF5bWVudFwiXG4gICAgICAgICAgICBsYWJlbD1cItCU0L7RgdGC0LDQstC60LAg0Lgg0L7Qv9C70LDRgtCwXCIvPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uX19JdGVtXG4gICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxuICAgICAgICAgICAgbGFiZWw9XCLQkdC70L7Qs1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmF2aWdhdGlvbl9fSXRlbVxuICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0c1wiXG4gICAgICAgICAgICBsYWJlbD1cItCa0L7QvdGC0LDQutGC0YtcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLk5hdmlnYXRpb25fX3dyYXBwZXIge1xuICAgICAgICAgICAgLS1uYXZpZ2F0aW9uLWhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDBjNDtcblxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0LCA3MHB4KTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuTmF2aWdhdGlvbiB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCwgNzBweCk7XG4gICAgICAgICAgfVxuICBcbiAgICAgICAgICAuTmF2aWdhdGlvbl9fbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQsIDcwcHgpO1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Navigation/Navigation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/Navigation/Navigation__Item.js":
/*!***************************************************!*\
  !*** ./components/Navigation/Navigation__Item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Navigation/Navigation__Item.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navigation__Item = ({
  href,
  label
}) => __jsx("li", {
  className: "jsx-2189054284" + " " + "Navigation__Item",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("a", {
  className: "jsx-2189054284",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}, label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2189054284",
  __self: undefined
}, ".Navigation__Item.jsx-2189054284{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;--decoration-color:#FFF;font-size:1.3em;height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;-webkit-transition:color 0.3s;transition:color 0.3s;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284:hover,.Navigation__Item.jsx-2189054284 a.jsx-2189054284:focus{color:var(--main-text-color);}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{color:var(--second-color,#FFF);-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbl9fSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHMkIsQUFVTixBQVFpQixBQUlHLFlBWG5CLE1BVkEsV0FrQmYsRUFJdUIsa0RBQ0ksS0FaTixNQVZHLGNBdUJ4QixnRUF0QjBCLFNBVVQsZUFUQyxBQVVNLGdCQVRnQixvQ0FVeEMsQ0FUeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbl9fSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTmF2aWdhdGlvbl9fSXRlbSA9ICh7IGhyZWYsIGxhYmVsIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIk5hdmlnYXRpb25fX0l0ZW1cIj5cbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgPC9MaW5rPlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuTmF2aWdhdGlvbl9fSXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLS1kZWNvcmF0aW9uLWNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0LCA3MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5OYXZpZ2F0aW9uX19JdGVtIGEge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgIH1cblxuICAgICAgLk5hdmlnYXRpb25fX0l0ZW0gYTpob3ZlciwgLk5hdmlnYXRpb25fX0l0ZW0gYTpmb2N1cyAge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLk5hdmlnYXRpb25fX0l0ZW0gYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IsICNGRkYpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uX19JdGVtOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Navigation/Navigation__Item.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Navigation__Item);

/***/ }),

/***/ "./components/OrderForm/OrderForm.jsx":
/*!********************************************!*\
  !*** ./components/OrderForm/OrderForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/OrderForm/OrderForm.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const OrderForm = ({
  header
}) => {
  const formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const onSubmitHandler = e => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    formRef.current.reset();
  };

  return __jsx("div", {
    className: "jsx-2021112587" + " " + "form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-2021112587" + " " + "form__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-2021112587" + " " + "section__content form__content-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("form", {
    method: "POST",
    ref: formRef,
    onSubmit: onSubmitHandler,
    className: "jsx-2021112587" + " " + "form__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-2021112587" + " " + "form__name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2021112587" + " " + "form__label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-2021112587",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-2021112587" + " " + "form__email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2021112587" + " " + "form__label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-2021112587",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-2021112587" + " " + "form__phone",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2021112587" + " " + "form__label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-2021112587",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-2021112587" + " " + "form__message",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-2021112587" + " " + "form__label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    name: "message",
    rows: "5",
    className: "jsx-2021112587",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-2021112587" + " " + "form__button-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-2021112587",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2021112587",
    __self: undefined
  }, ".form.jsx-2021112587{margin-top:60px;}.form__header.jsx-2021112587 .section__header-wrapper.jsx-2021112587::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-2021112587{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-2021112587{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}@media(max-width:1000px){.form__content.jsx-2021112587{padding:20px;grid-template-areas: \"name    name    name\" \"email   email   email\"  \"phone   phone   phone\"  \"message message message\" \"buttons buttons buttons\";}}.form__section.jsx-2021112587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-2021112587{grid-area:name;}.form__email.jsx-2021112587{grid-area:email;}.form__phone.jsx-2021112587{grid-area:phone;}.form__message.jsx-2021112587{grid-area:message;}.form__button-container.jsx-2021112587{grid-area:buttons;}.form__content.jsx-2021112587 input.jsx-2021112587,textarea.jsx-2021112587,button.jsx-2021112587{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-2021112587 label.jsx-2021112587 input.jsx-2021112587,textarea.jsx-2021112587{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-2021112587 label.jsx-2021112587{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.form__label.jsx-2021112587{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-2021112587{padding-top:20px;}.form__button-container.jsx-2021112587 button.jsx-2021112587{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFHMkIsQUFJSixBQUkrQixBQVM5QixBQVlFLEFBV0YsQUFNRSxBQUlDLEFBSUEsQUFJRSxBQUtyQixBQUd3QyxBQU16QixBQUtDLEFBS0EsQUFPSSxBQUlDLGFBM0VnQixBQWlCTCxBQWdEWixFQXBDbkIsQ0E5Q0EsQUFrREEsQUFJQSxDQW1DQSxDQS9CQSxBQUlBLEFBK0JtQixZQVZTLEtBV0ssRUE1QmxCLEtBMURGLEtBYWdCLEdBOENYLEdBMURELEdBMkVDLFVBaEJsQixBQTJCOEIsRUFyRmYsR0FOZixBQW9Fa0IsQ0FhbEIsRUE3Q3FCLEFBcUNKLGFBSmpCLE9BdUJBLHFDQWxCQSxXQW5FcUIsR0FXSyxjQWF4QixRQU1zQixFQWxCUixjQUNoQixvREFad0IsVUE4QnhCLG9FQTdCQSIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT3JkZXJGb3JtID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwaG9uZTogZm9ybURhdGEuZ2V0KCdwaG9uZScpLFxuICAgICAgbWVzc2FnZTogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJyksXG4gICAgfVxuICAgIFxuICAgIGZldGNoKCcvYXBpL2VtYWlsJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgZm9ybVJlZi5jdXJyZW50LnJlc2V0KCk7XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1fX3NlY3Rpb25cIj5cbiAgICAgICAgeyBoZWFkZXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2NvbnRlbnQgZm9ybV9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0JjQvNGPPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZW1haWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fcGhvbmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KHQvtC+0LHRidC10L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJhY2tncm91bmQsICMwMDAwMDApO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICBcIm5hbWUgICAgZW1haWwgICBwaG9uZVwiIFxuICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICBcImJ1dHRvbnMgYnV0dG9ucyBidXR0b25zXCI7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgLmZvcm1fX2NvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICBcIm5hbWUgICAgbmFtZSAgICBuYW1lXCJcbiAgICAgICAgICAgICAgXCJlbWFpbCAgIGVtYWlsICAgZW1haWxcIiBcbiAgICAgICAgICAgICAgXCJwaG9uZSAgIHBob25lICAgcGhvbmVcIiBcbiAgICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICAgIFwiYnV0dG9ucyBidXR0b25zIGJ1dHRvbnNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbmFtZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2VtYWlsIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGVtYWlsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX3Bob25lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IHBob25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX21lc3NhZ2Uge1xuICAgICAgICAgIGdyaWQtYXJlYTogbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyRm9ybTsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ }),

/***/ "./components/PhonesContainer/PhonesContainer.js":
/*!*******************************************************!*\
  !*** ./components/PhonesContainer/PhonesContainer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/PhonesContainer/PhonesContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PhonesContainer = ({
  property,
  icon,
  className,
  phone = []
}) => __jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, icon, __jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer__list",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:", phone.map((item, index) => __jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "+375 11 111 111",
  className: "jsx-1100391483",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 39
  }
}, item))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1100391483",
  __self: undefined
}, ".PhonesContainer.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PhonesContainer__list.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1Bob25lc0NvbnRhaW5lci9QaG9uZXNDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3NCLEFBS0EsMEVBSk0sQUFLRyw4RUFDeEIsZUFMQSIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9QaG9uZXNDb250YWluZXIvUGhvbmVzQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFBob25lc0NvbnRhaW5lciA9ICh7IHByb3BlcnR5LCBpY29uLCBjbGFzc05hbWUsIHBob25lID0gW119KSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJQaG9uZXNDb250YWluZXJcIj5cbiAgICB7IGljb24gfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGhvbmVzQ29udGFpbmVyX19saXN0XCI+XG4gICAgICAgINCi0LXQu9C10YTQvtC9OlxuICAgICAgICB7XG4gICAgICAgICAgcGhvbmUubWFwKCAoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aW5kZXh9IHByb3BlcnR5PXtwcm9wZXJ0eX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCIgbXYtZGVmYXVsdD1cIiszNzUgMTEgMTExIDExMVwiPnsgaXRlbSB9PC9zcGFuPilcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuUGhvbmVzQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLlBob25lc0NvbnRhaW5lcl9fbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvbmVzQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/PhonesContainer/PhonesContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (PhonesContainer);

/***/ }),

/***/ "./components/SectionHeader/SectionHeader.jsx":
/*!****************************************************!*\
  !*** ./components/SectionHeader/SectionHeader.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/SectionHeader/SectionHeader.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const SectionHeader = ({
  property,
  children,
  className,
  imgSrc
}) => __jsx("div", {
  className: "jsx-121955489" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()("SectionHeader", className) || ""),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "jsx-121955489" + " " + "SectionHeader__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-121955489" + " " + "SectionHeader__container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, __jsx("h2", {
  property: property,
  className: "jsx-121955489" + " " + "SectionHeader__text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, children), imgSrc && __jsx("img", {
  src: imgSrc,
  className: "jsx-121955489" + " " + "SectionHeader__img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2450304834",
  __self: undefined
}, ".SectionHeader_left .SectionHeader__wrapper.SectionHeader__wrapper::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J1QixBQUdxQix1RUFDZCIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyL1NlY3Rpb25IZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3QgU2VjdGlvbkhlYWRlciA9ICh7XG4gIHByb3BlcnR5LFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICBpbWdTcmMsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiU2VjdGlvbkhlYWRlclwiLCBjbGFzc05hbWUpfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlY3Rpb25IZWFkZXJfX3dyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VjdGlvbkhlYWRlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxoMiBwcm9wZXJ0eT17cHJvcGVydHl9IGNsYXNzTmFtZT1cIlNlY3Rpb25IZWFkZXJfX3RleHRcIj57IGNoaWxkcmVuIH08L2gyPlxuICAgICAgICB7XG4gICAgICAgICAgaW1nU3JjICYmIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiU2VjdGlvbkhlYWRlcl9faW1nXCJcbiAgICAgICAgICAgICAgc3JjPXtpbWdTcmN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLlNlY3Rpb25IZWFkZXJfbGVmdCAuU2VjdGlvbkhlYWRlcl9fd3JhcHBlci5TZWN0aW9uSGVhZGVyX193cmFwcGVyOjpiZWZvcmUge1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLlNlY3Rpb25IZWFkZXIge1xuICAgICAgICAtLWRlZmF1bHQtc2VjaW9uLWhlYWRlci1ib3JkZXItY29sb3I6ICMwMDAwMDA5ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICB9XG5cbiAgICAgIC5TZWN0aW9uSGVhZGVyX19jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJkMzAzOTE7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWRlZmF1bHQtc2VjaW9uLWhlYWRlci1ib3JkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuU2VjdGlvbkhlYWRlcl9faW1nIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuU2VjdGlvbkhlYWRlcl9fdGV4dCBpbWcge1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuU2VjdGlvbkhlYWRlcl9fdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuU2VjdGlvbkhlYWRlcl9fd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLlNlY3Rpb25IZWFkZXJfX3dyYXBwZXI6YWZ0ZXIsXG4gICAgICAuU2VjdGlvbkhlYWRlcl9fd3JhcHBlcjpiZWZvcmUsXG4gICAgICAuU2VjdGlvbkhlYWRlcjphZnRlcixcbiAgICAgIC5TZWN0aW9uSGVhZGVyOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IsICNmYmQzMDNmMCk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/SectionHeader/SectionHeader.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "453061898",
  __self: undefined
}, ".SectionHeader.jsx-121955489{--default-secion-header-border-color:#0000009e;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:1em 0;}.SectionHeader__container.jsx-121955489{background:#fbd30391;border:4px solid var(--default-secion-header-border-color);}.SectionHeader__img.jsx-121955489{margin:10px;}.SectionHeader__text.jsx-121955489 img.jsx-121955489{height:50px;margin-left:10px;}.SectionHeader__text.jsx-121955489{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;font-size:2em;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.SectionHeader__wrapper.jsx-121955489{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.SectionHeader__wrapper.jsx-121955489:after,.SectionHeader__wrapper.jsx-121955489:before,.SectionHeader.jsx-121955489:after,.SectionHeader.jsx-121955489:before{content:'';-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;border-top:4px solid var(--accent-color,#fbd303f0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJnQixBQUd3RCxBQVExQixBQUtULEFBSUEsQUFLQyxBQU9BLEFBU0YsV0FDQyxDQXpCZCxBQUltQixTQVQwQyxRQVU3RCxrQkFsQmUsMkJBc0JBLEFBT1csTUFwQjFCLEVBOEJzRCxLQWhCdEMsV0FPSyxHQU5BLG9CQXZCUixXQUNRLENBc0NyQiwwREFUQSxHQU5BLCtCQXRCZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXIvU2VjdGlvbkhlYWRlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHtcbiAgcHJvcGVydHksXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGltZ1NyYyxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJTZWN0aW9uSGVhZGVyXCIsIGNsYXNzTmFtZSl9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VjdGlvbkhlYWRlcl9fd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWN0aW9uSGVhZGVyX19jb250YWluZXJcIj5cbiAgICAgICAgPGgyIHByb3BlcnR5PXtwcm9wZXJ0eX0gY2xhc3NOYW1lPVwiU2VjdGlvbkhlYWRlcl9fdGV4dFwiPnsgY2hpbGRyZW4gfTwvaDI+XG4gICAgICAgIHtcbiAgICAgICAgICBpbWdTcmMgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJTZWN0aW9uSGVhZGVyX19pbWdcIlxuICAgICAgICAgICAgICBzcmM9e2ltZ1NyY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAuU2VjdGlvbkhlYWRlcl9sZWZ0IC5TZWN0aW9uSGVhZGVyX193cmFwcGVyLlNlY3Rpb25IZWFkZXJfX3dyYXBwZXI6OmJlZm9yZSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuU2VjdGlvbkhlYWRlciB7XG4gICAgICAgIC0tZGVmYXVsdC1zZWNpb24taGVhZGVyLWJvcmRlci1jb2xvcjogIzAwMDAwMDllO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgIH1cblxuICAgICAgLlNlY3Rpb25IZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmQzMDM5MTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tZGVmYXVsdC1zZWNpb24taGVhZGVyLWJvcmRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5TZWN0aW9uSGVhZGVyX19pbWcge1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5TZWN0aW9uSGVhZGVyX190ZXh0IGltZyB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5TZWN0aW9uSGVhZGVyX190ZXh0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5TZWN0aW9uSGVhZGVyX193cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuU2VjdGlvbkhlYWRlcl9fd3JhcHBlcjphZnRlcixcbiAgICAgIC5TZWN0aW9uSGVhZGVyX193cmFwcGVyOmJlZm9yZSxcbiAgICAgIC5TZWN0aW9uSGVhZGVyOmFmdGVyLFxuICAgICAgLlNlY3Rpb25IZWFkZXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvciwgI2ZiZDMwM2YwKTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/SectionHeader/SectionHeader.jsx */"));

/* harmony default export */ __webpack_exports__["default"] = (SectionHeader);

/***/ }),

/***/ "./components/Social/Social.js":
/*!*************************************!*\
  !*** ./components/Social/Social.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./utils.js");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Social/Social.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DEFAULT_INNER_PROERTY_SET = {
  link: 'social-link',
  icon: 'socials__icon-image'
};

const Social = ({
  property = "social",
  innerProperties,
  value = {}
}) => {
  const {
    link,
    icon
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["extractProperties"])(_objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties), value);
  return __jsx("div", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-555965192" + " " + "Socials__icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("a", {
    property: link.key,
    "mv-default": "https://twitter.com",
    href: link.value,
    className: "jsx-555965192" + " " + "Socials__icon-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("img", {
    property: icon.key,
    "mv-default": "https://via.placeholder.com/50.png",
    src: icon.value,
    className: "jsx-555965192" + " " + "Socials__icon-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "555965192",
    __self: undefined
  }, ".Socials__icon-image.jsx-555965192{height:50px;}.Socials__icon.jsx-555965192{margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1NvY2lhbC9Tb2NpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUd1QixBQUlFLFlBSGhCLEVBSUEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvU29jaWFsL1NvY2lhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGxpbms6ICdzb2NpYWwtbGluaycsXG4gIGljb246ICdzb2NpYWxzX19pY29uLWltYWdlJyxcbn07XG5cbmNvbnN0IFNvY2lhbCA9ICh7IHByb3BlcnR5ID0gXCJzb2NpYWxcIiwgaW5uZXJQcm9wZXJ0aWVzLCB2YWx1ZSA9IHt9IH0pID0+IHtcblxuICBjb25zdCB7IGxpbmssIGljb24gfSA9IGV4dHJhY3RQcm9wZXJ0aWVzKHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgLi4uaW5uZXJQcm9wZXJ0aWVzIH0sIHZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcHJvcGVydHk9eyBwcm9wZXJ0eSB9IGNsYXNzTmFtZT1cIlNvY2lhbHNfX2ljb25cIiBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxhIHByb3BlcnR5PXsgbGluay5rZXkgfSBjbGFzc05hbWU9XCJTb2NpYWxzX19pY29uLWxpbmtcIiBtdi1kZWZhdWx0PVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIGhyZWY9eyBsaW5rLnZhbHVlIH0+XG4gICAgICAgIDxpbWcgcHJvcGVydHk9eyBpY29uLmtleSB9IGNsYXNzTmFtZT1cIlNvY2lhbHNfX2ljb24taW1hZ2VcIiBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwLnBuZ1wiIHNyYz17IGljb24udmFsdWUgfS8+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5Tb2NpYWxzX19pY29uLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuU29jaWFsc19faWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Social/Social.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./contexts/ApplicationMode.js":
/*!*************************************!*\
  !*** ./contexts/ApplicationMode.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/delivery-and-payment.js":
/*!***************************************!*\
  !*** ./pages/delivery-and-payment.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/init */ "./store/init.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MdComponent/MdComponent */ "./components/MdComponent/MdComponent.jsx");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.jsx");
/* harmony import */ var _components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SectionHeader/SectionHeader */ "./components/SectionHeader/SectionHeader.jsx");
/* harmony import */ var _components_OrderForm_OrderForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/OrderForm/OrderForm */ "./components/OrderForm/OrderForm.jsx");
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/pages/delivery-and-payment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const DeliveryAndPayment = () => {
  const deliveryAndPaymentPage = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('delivery-and-payment-page')['delivery-and-payment-page'];

  const header = __jsx(_components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "SectionHeader_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }
  }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430");

  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "\u041F\u0447\u0451\u043B\u043A\u0430 - \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043C\u0451\u0434\u0430 - \u043E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430")), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_8__["default"], {
    property: "delivery-and-payment-page",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: header,
    property: "content",
    data: deliveryAndPaymentPage.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx(_components_OrderForm_OrderForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    property: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

DeliveryAndPayment.getInitialProps = async function (props) {
  const initData = await Object(_store_init__WEBPACK_IMPORTED_MODULE_3__["initialisation"])(props.store);
  return {
    initData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (DeliveryAndPayment);

/***/ }),

/***/ "./store/init.js":
/*!***********************!*\
  !*** ./store/init.js ***!
  \***********************/
/*! exports provided: initialisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialisation", function() { return initialisation; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./api.js");

const initialisation = store => {
  return new Promise((resolve, reject) => {
    const unsub = store.on('init/fetch-res', state => {
      unsub();
      resolve(state);
    });
    store.dispatch('init/fetch');
  });
};

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/*! exports provided: extractProperties, isAdminMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractProperties", function() { return extractProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdminMode", function() { return isAdminMode; });
function extractProperties(properties, data = {}) {
  const result = {};

  for (let key in properties) {
    result[key] = {
      key: properties[key],
      value: data[properties[key]]
    };
  }

  return result;
}
function isAdminMode() {
  return 'admin' === publicRuntimeConfig.APP_MODE;
}

/***/ }),

/***/ 5:
/*!*********************************************!*\
  !*** multi ./pages/delivery-and-payment.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ws-047-31b/Wotk/honey-ui-3/pages/delivery-and-payment.js */"./pages/delivery-and-payment.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

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

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown/with-html":
/*!*******************************************!*\
  !*** external "react-markdown/with-html" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown/with-html");

/***/ }),

/***/ "showdown":
/*!***************************!*\
  !*** external "showdown" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "storeon/react":
/*!********************************!*\
  !*** external "storeon/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("storeon/react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=delivery-and-payment.js.map