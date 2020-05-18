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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/AddressContainer/AddressContainer.js";


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
}, ".AddressContainer.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.AddressContainer__list.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9BZGRyZXNzQ29udGFpbmVyL0FkZHJlc3NDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR3NCLEFBS0EsMEVBSk0sQUFLRyw4RUFDeEIsZUFMQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvQWRkcmVzc0NvbnRhaW5lci9BZGRyZXNzQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IEFkZHJlc3NDb250YWluZXIgPSAoeyBjbGFzc05hbWUsIHByb3BlcnR5LCBpY29uLCBhZGRyZXNzID0gW10gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnQWRkcmVzc0NvbnRhaW5lcicpIH0+XG4gICAgeyBpY29uIH1cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkZHJlc3NDb250YWluZXJfX2xpc3QgaGVhZGVyX19saXN0XCI+XG4gICAgICDQkNC00YDQtdGBOlxuICAgICAge1xuICAgICAgICBhZGRyZXNzLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aW5kZXh9IHByb3BlcnR5PXtwcm9wZXJ0eX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCIgbXYtZGVmYXVsdD1cItCQ0LTRgNC10YFcIj57IGl0ZW0gfTwvc3Bhbj4pXG4gICAgICB9XG4gICAgPC9kaXY+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5BZGRyZXNzQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLkFkZHJlc3NDb250YWluZXJfX2xpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NDb250YWluZXI7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/AddressContainer/AddressContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (AddressContainer);

/***/ }),

/***/ "./components/Carusel/CaruselNew.js":
/*!******************************************!*\
  !*** ./components/Carusel/CaruselNew.js ***!
  \******************************************/
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
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CaruselNew_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CaruselNew__Slide */ "./components/Carusel/CaruselNew__Slide.js");
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Carusel = ({
  property
}) => {
  const slideList = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()(property)[property];
  const {
    0: index,
    1: setIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    fade: true,
    className: "Carusel",
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, slideList ? slideList.map((slide, i) => __jsx(_CaruselNew_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: i === index,
    key: i,
    property: property,
    value: slide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 52
    }
  })) : false), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2670317827",
    __self: undefined
  }, ".Carusel.jsx-2022911233{--carusel-height:500px;--carusel-delay:5s;width:100%;height:var(--carusel-height);position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUdrQyx1QkFDSixtQkFDUixXQUNrQiw2QkFDWCxrQkFDcEIiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCc7XG5pbXBvcnQgQ2FydXNlbF9fU2xpZGUgZnJvbSAnLi9DYXJ1c2VsTmV3X19TbGlkZSc7XG5cblxuY29uc3QgQ2FydXNlbCA9ICh7IHByb3BlcnR5IH0pID0+IHtcbiAgY29uc3Qgc2xpZGVMaXN0ID0gdXNlU3RvcmVvbihwcm9wZXJ0eSlbcHJvcGVydHldO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcbiAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcbiAgICBzZXREaXJlY3Rpb24oZS5kaXJlY3Rpb24pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJvdXNlbCBmYWRlPXt0cnVlfSBjbGFzc05hbWU9XCJDYXJ1c2VsXCIgYWN0aXZlSW5kZXg9e2luZGV4fSBkaXJlY3Rpb249e2RpcmVjdGlvbn0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIHtcbiAgICAgICAgICBzbGlkZUxpc3QgPyBzbGlkZUxpc3QubWFwKCAoc2xpZGUsIGkpID0+IDxDYXJ1c2VsX19TbGlkZSBhY3RpdmU9e2kgPT09IGluZGV4fSBrZXk9eyBpIH0gcHJvcGVydHk9eyBwcm9wZXJ0eSB9IHZhbHVlPXsgc2xpZGUgfS8+KSA6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIC0tY2FydXNlbC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIC0tY2FydXNlbC1kZWxheTogNXM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJ1c2VsLWhlaWdodCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICAgICAgICAgIGFuaW1hdGlvbjogMXMgZmFkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWxfX2xpc3Qge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbCB7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5DYXJ1c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCxcbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWw7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3244867403",
    __self: undefined
  }, ".Carusel{height:500px;}.carousel-item{height:500px;}@-webkit-keyframes fade{0%{opacity:0;}100%{opacity:1;}}@keyframes fade{0%{opacity:0;}100%{opacity:1;}}.carousel-item.active{-webkit-animation:1s fade;animation:1s fade;}body[mv-mode=\"edit\"] .Carusel__list{-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Carusel{height:unset;}body[mv-mode=\"edit\"] .Carusel .carousel-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:auto;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Carusel .carousel-control-prev,body[mv-mode=\"edit\"] .Carusel .carousel-control-next,body[mv-mode=\"edit\"] .Carusel .carousel-indicators{display:none;}body[mv-mode=\"edit\"] .Carusel .carousel-item{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN5QixBQUd3QixBQUdBLEFBS0QsQUFHQSxBQUtNLEFBSUgsQUFRRixBQUlBLEFBUUEsQUFJQyxVQW5DZCxBQUdBLEdBWEYsQUFHQSxBQXlCQSxBQVlBLENBSVksVUFDWixvQkE3QkEsYUFJa0IsaUJBWUYsY0FDUSxTQVpULHFFQWFmLEtBWmUsYUFDUyw4RUFDeEIiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCc7XG5pbXBvcnQgQ2FydXNlbF9fU2xpZGUgZnJvbSAnLi9DYXJ1c2VsTmV3X19TbGlkZSc7XG5cblxuY29uc3QgQ2FydXNlbCA9ICh7IHByb3BlcnR5IH0pID0+IHtcbiAgY29uc3Qgc2xpZGVMaXN0ID0gdXNlU3RvcmVvbihwcm9wZXJ0eSlbcHJvcGVydHldO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcbiAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcbiAgICBzZXREaXJlY3Rpb24oZS5kaXJlY3Rpb24pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJvdXNlbCBmYWRlPXt0cnVlfSBjbGFzc05hbWU9XCJDYXJ1c2VsXCIgYWN0aXZlSW5kZXg9e2luZGV4fSBkaXJlY3Rpb249e2RpcmVjdGlvbn0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIHtcbiAgICAgICAgICBzbGlkZUxpc3QgPyBzbGlkZUxpc3QubWFwKCAoc2xpZGUsIGkpID0+IDxDYXJ1c2VsX19TbGlkZSBhY3RpdmU9e2kgPT09IGluZGV4fSBrZXk9eyBpIH0gcHJvcGVydHk9eyBwcm9wZXJ0eSB9IHZhbHVlPXsgc2xpZGUgfS8+KSA6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIC0tY2FydXNlbC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIC0tY2FydXNlbC1kZWxheTogNXM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJ1c2VsLWhlaWdodCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICAgICAgICAgIGFuaW1hdGlvbjogMXMgZmFkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWxfX2xpc3Qge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbCB7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWlubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5DYXJ1c2VsIC5jYXJvdXNlbC1jb250cm9sLXByZXYsXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCxcbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWw7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carusel);

/***/ }),

/***/ "./components/Carusel/CaruselNew__Slide.js":
/*!*************************************************!*\
  !*** ./components/Carusel/CaruselNew__Slide.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew__Slide.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const CaruselNew__Slide = ({
  active,
  value,
  property = "slide",
  imageProperty = "image",
  textProperty = "text"
}) => __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
  className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    active
  }),
  property: property,
  "mv-multiple": "true",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("img", {
  property: imageProperty,
  "mv-default": "https://via.placeholder.com/200.png",
  src: value[imageProperty],
  className: "jsx-3715636089" + " " + "Carusel__slide-image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "jsx-3715636089" + " " + "Carusel__slide-text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-3715636089" + " " + "Carusel__slide-text-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "jsx-3715636089" + " " + "Carusel__slide-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}, __jsx("span", {
  property: textProperty,
  "mv-default": "\u0442\u0435\u043A\u0441\u0442",
  className: "jsx-3715636089",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 11
  }
}, value[textProperty])))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "953742352",
  __self: undefined
}, ".Carusel__slide.jsx-3715636089{position:relative;width:100%;height:var(--carusel-height);-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.Carusel__slide-image.jsx-3715636089{z-index:50;object-fit:cover;width:100%;height:100%;}.Carusel__slide-text.jsx-3715636089{padding:10px;color:var(--carusel-text-color,black);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:var(--carusel-text-bg);font-size:var(--carusel-font-size,3em);text-shadow:#fff 2px 2px 10px;font-weight:bold;}.Carusel__slide-text-wrapper.jsx-3715636089{z-index:100;width:var(--carusel-text-width,100%);}.Carusel__slide-text-container.jsx-3715636089{position:absolute;top:0;margin:auto auto;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXdfX1NsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CZ0IsQUFHMkIsQUFRUCxBQU9FLEFBVUQsQUFLTSxXQXJCRCxDQWlCcUIsQ0FWQyxLQWY1QixBQThCTCxNQUNXLElBdEJOLENBUmtCLFVBU2pCLEVBc0JELFFBTmIsRUFmQSxBQUtvQixDQWlCTixNQS9CSSxNQWdDSCxzREFqQjJCLFNBZDFCLFdBZ0NTLG9CQWpCaUIseUJBZDFDLGNBZWdDLDhCQUNiLFVBZ0JFLE9BZnJCLHNGQWdCQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvQ2FydXNlbC9DYXJ1c2VsTmV3X19TbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3QgQ2FydXNlbE5ld19fU2xpZGUgPSAoeyBhY3RpdmUsIHZhbHVlLCBwcm9wZXJ0eSA9IFwic2xpZGVcIiwgaW1hZ2VQcm9wZXJ0eSA9IFwiaW1hZ2VcIiwgdGV4dFByb3BlcnR5PVwidGV4dFwiIH0pID0+IChcblxuICA8Q2Fyb3VzZWwuSXRlbSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmUgfSl9IHByb3BlcnR5PXtwcm9wZXJ0eX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgPGltZyBwcm9wZXJ0eT17IGltYWdlUHJvcGVydHkgfVxuICAgICAgICBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS1pbWFnZVwiXG4gICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwLnBuZ1wiXG4gICAgICAgIHNyYz17dmFsdWVbaW1hZ2VQcm9wZXJ0eV19XG4gICAgICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0XCI+XG4gICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyB0ZXh0UHJvcGVydHkgfSBtdi1kZWZhdWx0PVwi0YLQtdC60YHRglwiPnsgdmFsdWVbdGV4dFByb3BlcnR5XSB9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNhcnVzZWxfX3NsaWRlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJ1c2VsLWhlaWdodCk7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICAuQ2FydXNlbF9fc2xpZGUtaW1hZ2Uge1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcnVzZWwtdGV4dC1jb2xvciwgYmxhY2spO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcnVzZWwtdGV4dC1iZyk7IFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcnVzZWwtZm9udC1zaXplLCAzZW0pO1xuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAycHggMnB4IDEwcHg7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLkNhcnVzZWxfX3NsaWRlLXRleHQtd3JhcHBlciB7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNhcnVzZWwtdGV4dC13aWR0aCwgMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWxfX3NsaWRlLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiB1bnNldDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHVuc2V0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9DYXJvdXNlbC5JdGVtPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ1c2VsTmV3X19TbGlkZTsiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew__Slide.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3540563808",
  __self: undefined
}, "body[mv-mode=\"edit\"] .Carusel__slide-text-container{width:unset;height:unset;display:block;-webkit-box-pack:unset;-webkit-justify-content:unset;-ms-flex-pack:unset;justify-content:unset;-webkit-align-items:unset;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXdfX1NsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEdUIsQUFHcUIsWUFDQyxhQUNDLGNBQ1EsK0ZBQ0oseUZBQ3BCIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXdfX1NsaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuXG5jb25zdCBDYXJ1c2VsTmV3X19TbGlkZSA9ICh7IGFjdGl2ZSwgdmFsdWUsIHByb3BlcnR5ID0gXCJzbGlkZVwiLCBpbWFnZVByb3BlcnR5ID0gXCJpbWFnZVwiLCB0ZXh0UHJvcGVydHk9XCJ0ZXh0XCIgfSkgPT4gKFxuXG4gIDxDYXJvdXNlbC5JdGVtIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IGFjdGl2ZSB9KX0gcHJvcGVydHk9e3Byb3BlcnR5fSBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICA8aW1nIHByb3BlcnR5PXsgaW1hZ2VQcm9wZXJ0eSB9XG4gICAgICAgIGNsYXNzTmFtZT1cIkNhcnVzZWxfX3NsaWRlLWltYWdlXCJcbiAgICAgICAgbXYtZGVmYXVsdD1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDAucG5nXCJcbiAgICAgICAgc3JjPXt2YWx1ZVtpbWFnZVByb3BlcnR5XX1cbiAgICAgICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnVzZWxfX3NsaWRlLXRleHQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnVzZWxfX3NsaWRlLXRleHQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhcnVzZWxfX3NsaWRlLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IHRleHRQcm9wZXJ0eSB9IG12LWRlZmF1bHQ9XCLRgtC10LrRgdGCXCI+eyB2YWx1ZVt0ZXh0UHJvcGVydHldIH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQ2FydXNlbF9fc2xpZGUge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcnVzZWwtaGVpZ2h0KTtcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZS1pbWFnZSB7XG4gICAgICAgIHotaW5kZXg6IDUwO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLkNhcnVzZWxfX3NsaWRlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FydXNlbC10ZXh0LWNvbG9yLCBibGFjayk7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FydXNlbC10ZXh0LWJnKTsgXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FydXNlbC1mb250LXNpemUsIDNlbSk7XG4gICAgICAgIHRleHQtc2hhZG93OiAjZmZmIDJweCAycHggMTBweDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuQ2FydXNlbF9fc2xpZGUtdGV4dC13cmFwcGVyIHtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB3aWR0aDogdmFyKC0tY2FydXNlbC10ZXh0LXdpZHRoLCAxMDAlKTtcbiAgICAgIH1cblxuICAgICAgLkNhcnVzZWxfX3NsaWRlLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbF9fc2xpZGUtdGV4dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0Nhcm91c2VsLkl0ZW0+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWxOZXdfX1NsaWRlOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Carusel/CaruselNew__Slide.js */"));

/* harmony default export */ __webpack_exports__["default"] = (CaruselNew__Slide);

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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Footer/Footer.js";


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
  }, "footer.jsx-1942735625{padding:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 0;padding-top:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Footer-devider.jsx-1942735625{border-top:4px solid var(--accent-color);-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;margin:20px 0;}.Info-container.jsx-1942735625{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:var(--page-width);font-size:1.5em;text-align:center;color:var(--app-main-text-color);font-weight:bold;padding:10px;box-sizing:border-box;}.Socials-container.jsx-1942735625{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDa0IsQUFHMEIsQUFTMEIsQUFNNUIsQUFZQSxlQTFCQSwwQkFTTSxpQ0FNRyxBQVlFLGVBMUJGLFNBMkJDLGlCQWxCVCxjQUNoQix1QkFLMEIsZUFkVixTQWVFLEtBZEMsV0FlQyxLQVdDLENBekJBLFlBZWMsaUNBQ2hCLGlCQUNKLGFBQ1MsaUJBUXhCLENBekJBLElBa0JBIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCdcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuLi9Tb2NpYWwvU29jaWFsJztcblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgc29jaWFsOiAnc29jaWFsJyxcbiAgaW5mbzogJ2luZm8nLFxufTtcbmNvbnN0IERFRkFVTFRfSU5GT19JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgdGV4dDogJ3RleHQnLFxuICB1bnA6ICd1bnAnLFxufTtcblxuY29uc3QgRm9vdGVyID0gKHsgcHJvcGVydHkgPSBcImZvb3RlclwiLCBpbm5lclByb3BlcnRpZXM9IHt9IH0pID0+IHtcblxuICBjb25zdCBkYXRhID0gdXNlU3RvcmVvbihwcm9wZXJ0eSlbcHJvcGVydHldO1xuICBpbm5lclByb3BlcnRpZXMgPSB7IC4uLkRFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQsIC4uLmlubmVyUHJvcGVydGllcyB9O1xuICBjb25zdCB7IHNvY2lhbCwgaW5mbyB9ID0gZXh0cmFjdFByb3BlcnRpZXMoaW5uZXJQcm9wZXJ0aWVzLCBkYXRhKTtcblxuICBjb25zdCB7IHRleHQsIHVucCB9ID0gZXh0cmFjdFByb3BlcnRpZXMoREVGQVVMVF9JTkZPX0lOTkVSX1BST0VSVFlfU0VULCBpbmZvLnZhbHVlKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBwcm9wZXJ0eT17IHByb3BlcnR5IH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNvY2lhbHMtY29udGFpbmVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBzb2NpYWwudmFsdWVcbiAgICAgICAgICAgID8gc29jaWFsLnZhbHVlLm1hcCgoc29jaWFsSXRlbSwgaW5kZXgpID0+IDxTb2NpYWwga2V5PXsgaW5kZXggfSBwcm9wZXJ0eT17IHNvY2lhbC5rZXkgfSB2YWx1ZT17IHNvY2lhbEl0ZW0gfS8+KSBcbiAgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9vdGVyLWRldmlkZXJcIj48L2Rpdj5cblxuICAgICAgPGRpdiBwcm9wZXJ0eT17IGluZm8ua2V5IH0gY2xhc3NOYW1lPVwiSW5mby1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gcHJvcGVydHk9eyB1bnAua2V5IH0gY2xhc3NOYW1lPVwiRm9vdGVyX190ZXh0XCIgbXYtZGVmYXVsdD1cItCj0J3Qn1wiPnsgdW5wLnZhbHVlIH08L3NwYW4+XG4gICAgICAgIDxzcGFuIHByb3BlcnR5PXsgdGV4dC5rZXkgfSBjbGFzc05hbWU9XCJGb290ZXJfX3RleHRcIiBtdi1kZWZhdWx0PVwi0KLQtdC60YHRglwiPnsgdGV4dC52YWx1ZSB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiA1MHB4IDA7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Gb290ZXItZGV2aWRlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5JbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW1haW4tdGV4dC1jb2xvcik7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Tb2NpYWxzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Footer/Footer.js */"));
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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Header/Header.js";


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
  }, ".Header.jsx-4287000367{--icon-height:50px;--navigatioin-border-waigth:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:bold;background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header.jpg');background-size:cover;color:var(--app-main-text-color);font-weight:bold;}@media(max-width:1100px){.Header.jsx-4287000367{background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header-1100px-90q.jpg');}}@media(max-width:500px){.Header.jsx-4287000367{background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header-500px-90q.jpg');}}.Header.jsx-4287000367 .Header__container.jsx-4287000367{padding-bottom:40px;}.Header__container.jsx-4287000367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Header_navigation_shift.jsx-4287000367{padding-bottom:var(--navigatioin-border-waigth,40px);background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHOEIsQUFpQitGLEFBTUQsQUFLN0YsQUFJUCxBQVF5QyxtQkF2Q3JCLENBNEJuQyxnQ0ExQmUsQ0FzQ2UscUJBUmhCLE9BU2QsS0FSMEIsdUJBVnhCLENBTkEsQUFpQm1CLGdCQS9CRyw2RUFnQ1EsQ0EvQlAsbUdBQ0osZUErQnJCLDhFQTdCbUIsaUJBQ29GLG1HQUMvRSxzQkFDVyxpQ0FDaEIsaUJBQ25CIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCdcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XG5pbXBvcnQgSGVhZGVyX19JbmZvcm1hdGlvbiBmcm9tICcuL0hlYWRlcl9fSW5mb3JtYXRpb24nO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9wZXJ0eT1cImhlYWRlclwiIH0pID0+IHtcblxuICBjb25zdCB7IGhlYWRlciB9ID0gdXNlU3RvcmVvbignaGVhZGVyJyk7XG4gIGNvbnN0IHsgcGhvbmUsIGFkZHJlc3MsIGxvZ28gfSA9IGhlYWRlcjtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCIgcHJvcGVydHk9eyBwcm9wZXJ0eSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcHJvcGVydHk9XCJsb2dvXCJcbiAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMC5wbmdcIlxuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAvPlxuICAgICAgICA8SGVhZGVyX19JbmZvcm1hdGlvbiBwaG9uZT17cGhvbmV9IGFkZHJlc3M9e2FkZHJlc3N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdmlnYXRpb24gY2xhc3NOYW1lPVwiTmF2aWdhdGlvbl9zaGlmdFwiLz5cblxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5IZWFkZXIge1xuICAgICAgICAgIC0taWNvbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgLS1uYXZpZ2F0aW9pbi1ib3JkZXItd2FpZ3RoOiA0MHB4O1xuXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgdmFyKC0tYWNjZW50LWNvbG9yKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvaGVhZGVyLmpwZycpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQsIHZhcigtLWFjY2VudC1jb2xvcikpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzL2hlYWRlci0xMTAwcHgtOTBxLmpwZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQsIHZhcigtLWFjY2VudC1jb2xvcikpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzL2hlYWRlci01MDBweC05MHEuanBnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLkhlYWRlciAuSGVhZGVyX19jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLkhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuSGVhZGVyX25hdmlnYXRpb25fc2hpZnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1uYXZpZ2F0aW9pbi1ib3JkZXItd2FpZ3RoLCA0MHB4KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Header/Header.js */"));
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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Header/Header__Information.js";


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
}, ".Header__Information.jsx-837556264{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.Header__InformationIcon.jsx-837556264{height:var(--icon-height);margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyX19JbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFHc0IsQUFNYSwwQkFDUixrQkFDcEIsOEJBUHFCLDZGQUNKLHlEQUNqQiIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcl9fSW5mb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkcmVzc0NvbnRhaW5lciBmcm9tICcuLi9BZGRyZXNzQ29udGFpbmVyL0FkZHJlc3NDb250YWluZXInO1xuaW1wb3J0IFBob25lc0NvbnRhaW5lciBmcm9tICcuLi9QaG9uZXNDb250YWluZXIvUGhvbmVzQ29udGFpbmVyJztcblxuXG5jb25zdCBIZWFkZXJfX0luZm9ybWF0aW9uID0gKHsgcGhvbmUsIGFkZHJlc3MgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlcl9fSW5mb3JtYXRpb25cIj5cbiAgICA8QWRkcmVzc0NvbnRhaW5lclxuICAgICAgYWRkcmVzcz17YWRkcmVzc31cbiAgICAgIHByb3BlcnR5PVwiYWRkcmVzc1wiXG4gICAgICBpY29uPXs8aW1nIGNsYXNzTmFtZT1cIkhlYWRlcl9fSW5mb3JtYXRpb25JY29uXCIgc3JjPVwiL3N0YXRpYy9pY29ucy9iYXNlbGluZS1waW5fZHJvcC0yNHB4LnN2Z1wiLz59Lz5cbiAgICA8UGhvbmVzQ29udGFpbmVyXG4gICAgICBwaG9uZT17cGhvbmV9XG4gICAgICBwcm9wZXJ0eT1cInBob25lXCJcbiAgICAgIGljb249ezxpbWcgY2xhc3NOYW1lPVwiSGVhZGVyX19JbmZvcm1hdGlvbkljb25cIiBzcmM9XCIvc3RhdGljL2ljb25zL2Jhc2VsaW5lLXBob25lLTI0cHguc3ZnXCIvPn0vPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkhlYWRlcl9fSW5mb3JtYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG5cbiAgICAgIC5IZWFkZXJfX0luZm9ybWF0aW9uSWNvbiB7XG4gICAgICAgIGhlaWdodDogdmFyKC0taWNvbi1oZWlnaHQpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcl9fSW5mb3JtYXRpb247Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Header/Header__Information.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header__Information);

/***/ }),

/***/ "./components/Hello/Hello.js":
/*!***********************************!*\
  !*** ./components/Hello/Hello.js ***!
  \***********************************/
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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Hello/Hello.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DEFAULT_INNER_PROERTY_SET = {
  header: 'hello-header',
  info: 'hello-info'
};

const Hello = ({
  property,
  data,
  innerProperties
}) => {
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {
    innerProperties
  });
  const {
    header,
    info
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["extractProperties"])(innerProperties, data);
  return __jsx("div", {
    className: "jsx-2909867750" + " " + "Hello",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("section", {
    property: "hello",
    className: "jsx-2909867750" + " " + "Hello__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("h2", {
    property: header.key,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2909867750" + " " + "Hello__header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, header.value), __jsx("p", {
    property: info.key,
    "mv-default": "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    className: "jsx-2909867750" + " " + "Hello__info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, info.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2909867750",
    __self: undefined
  }, ".Hello.jsx-2909867750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#fbd303f0;}.Hello__section.jsx-2909867750{width:var(--page-width);padding:40px 0;}.Hello__header.jsx-2909867750{font-size:2em;}.Hello__info.jsx-2909867750{font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9IZWxsby9IZWxsby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBR3dCLEFBTVcsQUFLVixBQUlFLGNBSGxCLEVBSUEsUUFUaUIsZUFDakIsbUNBUHlCLG1HQUNGLHFCQUN2QiIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvSGVsbG8vSGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RvcmVvbiBmcm9tICdzdG9yZW9uL3JlYWN0JztcbmltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGhlYWRlcjogJ2hlbGxvLWhlYWRlcicsXG4gIGluZm86ICdoZWxsby1pbmZvJyxcbn1cbmNvbnN0IEhlbGxvID0gKHsgcHJvcGVydHksIGRhdGEsIGlubmVyUHJvcGVydGllcyB9KSA9PiB7XG4gIGlubmVyUHJvcGVydGllcyA9IHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgaW5uZXJQcm9wZXJ0aWVzIH07XG4gIGNvbnN0IHsgaGVhZGVyLCBpbmZvIH0gPSBleHRyYWN0UHJvcGVydGllcyhpbm5lclByb3BlcnRpZXMsIGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJIZWxsb1wiPlxuICAgICAgPHNlY3Rpb24gcHJvcGVydHk9XCJoZWxsb1wiIGNsYXNzTmFtZT1cIkhlbGxvX19zZWN0aW9uXCI+XG4gICAgICAgIDxoMiBwcm9wZXJ0eT17IGhlYWRlci5rZXkgfSBjbGFzc05hbWU9XCJIZWxsb19faGVhZGVyXCIgbXYtZGVmYXVsdD1cItCX0LDQs9C+0LvQvtCy0L7QulwiPnsgaGVhZGVyLnZhbHVlIH08L2gyPlxuICAgICAgICA8cCBwcm9wZXJ0eT17IGluZm8ua2V5IH0gY2xhc3NOYW1lPVwiSGVsbG9fX2luZm9cIiBtdi1kZWZhdWx0PVwi0JjQvdGE0L7RgNC80LDRhtC40Y9cIj57IGluZm8udmFsdWUgfTwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuSGVsbG8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiZDMwM2YwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuSGVsbG9fX3NlY3Rpb24ge1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5IZWxsb19faGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLkhlbGxvX19pbmZvIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVsbG87Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Hello/Hello.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Layout/Layout.js";


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
  id: "1726208906",
  __self: undefined
}, ":root{--page-width:1060px;--app-main-color:#774022;--second-color:#fff;--accent-color:#fbd303f0;--decoration-color:#000;--base-background:white;--second-background:#000;--carusel-text-width:960px;--carusel-text-color:var(--app-main-text-color);--carusel-text-bg:transparent;--app-main-text-color:#542d18;--form-background:var(--app-main-color);}body{margin:0;min-height:100vh;font-family:'Exo 2',sans-serif;background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-2000px-90q.jpg');background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;color:var(--app-main-text-color);}@media (max-width:1100px){body{background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-1100px-90q.jpg');}}@media (max-width:500px){body{background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-500px-90q.jpg');}}@media (max-width:1100px){:root{--page-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd1QixBQUc2QixBQWtCWCxBQWF5SCxBQU1ELEFBTTdHLFNBeEJILFNBeUJqQixFQTFDeUIsTUFrQk8sbUJBakJaLFlBa0I0RyxRQWpCdkcseUJBQ0Qsd0JBQ0EsV0FnQ3hCLENBTkEsWUF6QnlCLHlCQUVFLG9CQWFDLE9BWm9CLHFCQWExQixzQkFDWSxLQWJKLDZCQWNGLENBWkUsMkJBYUcsR0FaTyw4QkFhMUMsVUFaQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBsaWNhdGlvbk1vZGUgZnJvbSAnLi4vLi4vY29udGV4dHMvQXBwbGljYXRpb25Nb2RlJztcbmltcG9ydCBnZXRDb25maWcgZnJvbSAnbmV4dC9jb25maWcnO1xuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8QXBwbGljYXRpb25Nb2RlLlByb3ZpZGVyIHZhbHVlPXsgcHVibGljUnVudGltZUNvbmZpZy5BUFBfTU9ERSB9PlxuXG4gICAgeyBjaGlsZHJlbiB9XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgOnJvb3Qge1xuICAgICAgICAtLXBhZ2Utd2lkdGg6IDEwNjBweDtcblxuICAgICAgICAtLWFwcC1tYWluLWNvbG9yOiAjNzc0MDIyO1xuICAgICAgICAtLXNlY29uZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgLS1hY2NlbnQtY29sb3I6ICNmYmQzMDNmMDtcbiAgICAgICAgLS1kZWNvcmF0aW9uLWNvbG9yOiAjMDAwO1xuICAgICAgICAtLWJhc2UtYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIC0tc2Vjb25kLWJhY2tncm91bmQ6ICMwMDA7XG5cbiAgICAgICAgLS1jYXJ1c2VsLXRleHQtd2lkdGg6IDk2MHB4O1xuICAgICAgICAtLWNhcnVzZWwtdGV4dC1jb2xvcjogdmFyKC0tYXBwLW1haW4tdGV4dC1jb2xvcik7XG4gICAgICAgIC0tY2FydXNlbC10ZXh0LWJnOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAtLWFwcC1tYWluLXRleHQtY29sb3I6ICM1NDJkMTg7XG4gICAgICAgIC0tZm9ybS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBmb250LWZhbWlseTogJ0V4byAyJywgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1iYXNlLWJhY2tncm91bmQpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9iZWF1dGlmdWwtYmVlLWJsb29tLTIwMDBweC05MHEuanBnJyk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQsIHZhcigtLWJhc2UtYmFja2dyb3VuZCkpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzL2JlYXV0aWZ1bC1iZWUtYmxvb20tMTEwMHB4LTkwcS5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1iYXNlLWJhY2tncm91bmQpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9iZWF1dGlmdWwtYmVlLWJsb29tLTUwMHB4LTkwcS5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICAtLXBhZ2Utd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICAgIDwvc3R5bGU+XG4gIDwvQXBwbGljYXRpb25Nb2RlLlByb3ZpZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Layout/Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MainProducts/MainProducts.js":
/*!*************************************************!*\
  !*** ./components/MainProducts/MainProducts.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainProducts__Article */ "./components/MainProducts/MainProducts__Article.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MainProducts = ({
  property,
  data,
  header
}) => {
  return __jsx("div", {
    className: "jsx-421961682" + " " + "Products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-421961682" + " " + "Products__section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-421961682" + " " + "MainProducts__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, data ? data.map((product, index) => {
    return __jsx(_MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'Products__Article_withMargin ',
      key: index,
      value: product,
      href: `/product/${product.slug}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    });
  }) : false, !(data && data.length > 0) && __jsx(_MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "EmptyItem",
    href: "#",
    value: {
      'product-image': '',
      name: 'name'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2892341378",
    __self: undefined
  }, "body:not([mv-mode=\"edit\"]) .EmptyItem{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDeUIsQUFHd0IsYUFDZiIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvTWFpblByb2R1Y3RzL01haW5Qcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluUHJvZHVjdHNfX0FydGljbGUgZnJvbSAnLi9NYWluUHJvZHVjdHNfX0FydGljbGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBNYWluUHJvZHVjdHMgPSAoeyBwcm9wZXJ0eSwgZGF0YSwgaGVhZGVyIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3RzX19zZWN0aW9uXCI+XG4gICAgICAgIHsgaGVhZGVyIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYWluUHJvZHVjdHNfX2NvbnRlbnRcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhID8gZGF0YS5tYXAoIChwcm9kdWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J1Byb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4gJ31cbiAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvZHVjdCB9XG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSA6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICEoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgICAgICAgPE1haW5Qcm9kdWN0c19fQXJ0aWNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkVtcHR5SXRlbVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAncHJvZHVjdC1pbWFnZSc6ICcnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHk6bm90KFttdi1tb2RlPVwiZWRpdFwiXSkgLkVtcHR5SXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuUHJvZHVjdHMge1xuICAgICAgICAgIC0tcHJpY2UtY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuTWFpblByb2R1Y3RzX19jb250ZW50IHtcbiAgICAgICAgICAvKiB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7ICovXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3RzX19oZWFkZXIgLnNlY3Rpb25fX2hlYWRlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpblByb2R1Y3RzOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3795360089",
    __self: undefined
  }, ".Products.jsx-421961682{--price-color:var(--app-main-color);}.Products__section.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.MainProducts__content.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.products__header.jsx-421961682 .section__header-wrapper.jsx-421961682::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDa0IsQUFHK0MsQUFJdkIsQUFPQSxBQU9ELG9DQWpCZCxtQ0FrQkEsR0FkcUIsQUFPSixlQUNBLHlEQUNjLHFCQVJQLDhFQUN4Qix3QkFRQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvTWFpblByb2R1Y3RzL01haW5Qcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluUHJvZHVjdHNfX0FydGljbGUgZnJvbSAnLi9NYWluUHJvZHVjdHNfX0FydGljbGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBNYWluUHJvZHVjdHMgPSAoeyBwcm9wZXJ0eSwgZGF0YSwgaGVhZGVyIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlByb2R1Y3RzX19zZWN0aW9uXCI+XG4gICAgICAgIHsgaGVhZGVyIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYWluUHJvZHVjdHNfX2NvbnRlbnRcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhID8gZGF0YS5tYXAoIChwcm9kdWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J1Byb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4gJ31cbiAgICAgICAgICAgICAgICAgIGtleT17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcHJvZHVjdCB9XG4gICAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LnNsdWd9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSA6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICEoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgICAgICAgPE1haW5Qcm9kdWN0c19fQXJ0aWNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkVtcHR5SXRlbVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgICAgICAgICAncHJvZHVjdC1pbWFnZSc6ICcnLFxuICAgICAgICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHk6bm90KFttdi1tb2RlPVwiZWRpdFwiXSkgLkVtcHR5SXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuUHJvZHVjdHMge1xuICAgICAgICAgIC0tcHJpY2UtY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuTWFpblByb2R1Y3RzX19jb250ZW50IHtcbiAgICAgICAgICAvKiB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7ICovXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2R1Y3RzX19oZWFkZXIgLnNlY3Rpb25fX2hlYWRlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTWFpblByb2R1Y3RzOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainProducts);

/***/ }),

/***/ "./components/MainProducts/MainProducts__Article.js":
/*!**********************************************************!*\
  !*** ./components/MainProducts/MainProducts__Article.js ***!
  \**********************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts__Article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name',
  slug: 'slug',
  text: 'text'
};

const MainProducts__Article = ({
  className,
  value,
  property = "MainProduct",
  innerProperties = {},
  href
}) => {
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  return __jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-3683567079" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()('Products__Article', className) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    property: innerProperties.image,
    "mv-default": "https://via.placeholder.com/200.png",
    src: value[innerProperties.image],
    className: "jsx-3683567079" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()('Products__Article-image', {
      Products__Article_clickable: !!href
    }) || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), value[innerProperties.price] && __jsx("div", {
    className: "jsx-3683567079" + " " + "Products__Article-price-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    property: innerProperties.price,
    "mv-defautl": "\u0426\u0435\u043D\u0430",
    className: "jsx-3683567079" + " " + "Products__Article-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, value[innerProperties.price])), __jsx("div", {
    className: "jsx-3683567079" + " " + "Products__Article-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, [value[innerProperties.name] && __jsx("h6", {
    property: innerProperties.name,
    "mv-default": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    className: "jsx-3683567079" + " " + "Products__Article-info-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, value[innerProperties.name]), __jsx("span", {
    property: innerProperties.slug,
    "mv-default": "slug",
    className: "jsx-3683567079" + " " + "Products__Article-info-slug",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, value[innerProperties.slug]), __jsx("span", {
    property: innerProperties.text,
    "mv-default": "Text",
    className: "jsx-3683567079" + " " + "Products__Article-info-text markdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, value[innerProperties.text])]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2008272965",
    __self: undefined
  }, ".Products__Article_clickable{-webkit-transition:all 0.3s;transition:all 0.3s;}.Products__Article_clickable:hover{cursor:pointer;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.Products__Article_withMargin.Products__Article_withMargin.Products__Article_withMargin{margin:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDeUIsQUFHK0IsQUFJTCxBQUtILFlBQ2QsR0FMdUIsaUNBSnZCLDBDQUtBIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgaW1hZ2U6ICdwcm9kdWN0LWltYWdlJyxcbiAgcHJpY2U6ICdwcmljZScsXG4gIG5hbWU6ICduYW1lJyxcbiAgc2x1ZzogJ3NsdWcnLFxuICB0ZXh0OiAndGV4dCcsXG59XG5cbmNvbnN0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZSA9ICh7IGNsYXNzTmFtZSwgdmFsdWUsIHByb3BlcnR5ID0gXCJNYWluUHJvZHVjdFwiLCBpbm5lclByb3BlcnRpZXMgPSB7fSwgaHJlZn0pID0+IHtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHByb3BlcnR5PXsgcHJvcGVydHkgfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUnLCBjbGFzc05hbWUpfSBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8aW1nIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmltYWdlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUtaW1hZ2UnLCB7XG4gICAgICAgICAgICAgIFByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTogISFocmVmLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMC5wbmdcIlxuICAgICAgICAgICAgc3JjPXsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmltYWdlXSB9XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5wcmljZSB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlXCIgbXYtZGVmYXV0bD1cItCm0LXQvdCwXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdIH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mb1wiPlxuICAgICAgICB7XG4gICAgICAgICAgW1xuICAgICAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdICYmIChcbiAgICAgICAgICAgICAgPGg2IHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLm5hbWUgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlclwiIG12LWRlZmF1bHQ9XCLQndCw0LfQstCw0L3QuNC1XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gfTwvaDY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuc2x1ZyB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1Z1wiIG12LWRlZmF1bHQ9XCJzbHVnXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuc2x1Z10gfTwvc3Bhbj4sXG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy50ZXh0IH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby10ZXh0IG1hcmtkb3duXCIgbXYtZGVmYXVsdD1cIlRleHRcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy50ZXh0XSB9PC9zcGFuPlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1ZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1zbHVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZTsiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts__Article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2409866470",
    __self: undefined
  }, ".Products__Article.jsx-3683567079{margin:20px 0;}.Products__Article-image.jsx-3683567079{height:400px;width:400px;border:2px solid var(--app-main-color);}.Products__Article-info.jsx-3683567079{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:15px;}.Products__Article-price-container.jsx-3683567079{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--second-color);background-color:var(--price-color,black);padding:10px;font-weight:bold;}.Products__Article-info-header.jsx-3683567079{font-size:28px;font-weight:bold;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-slug.jsx-3683567079{display:none;font-size:16px;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-text.jsx-3683567079{display:none;font-size:16px;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-description.jsx-3683567079{margin:0;color:white;background-color:var(--app-main-color);padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEa0IsQUFJeUIsQUFJRCxBQU1BLEFBTUssQUFRSCxBQVFGLEFBUUEsQUFRSixTQUNHLElBNUNBLEFBNEJHLEFBUUEsQ0F4Q2pCLENBd0JtQixNQXlCc0IsSUE1Q0EsR0E0QjlCLEFBUUEsSUFoQkEsS0FTSSxBQVFBLElBaEJBLFNBU0ssQUFRQSxJQWhCQSxNQXVCTCxJQTVDZixHQVU0QixNQW1DNUIsQ0F6Q3lCLG1CQU9vQix3QkFtQjdDLEFBUUEsSUFoQkEsY0FWZSxhQUNJLGlCQUNuQixRQVRrQixnQkFDbEIiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VUID0ge1xuICBpbWFnZTogJ3Byb2R1Y3QtaW1hZ2UnLFxuICBwcmljZTogJ3ByaWNlJyxcbiAgbmFtZTogJ25hbWUnLFxuICBzbHVnOiAnc2x1ZycsXG4gIHRleHQ6ICd0ZXh0Jyxcbn1cblxuY29uc3QgTWFpblByb2R1Y3RzX19BcnRpY2xlID0gKHsgY2xhc3NOYW1lLCB2YWx1ZSwgcHJvcGVydHkgPSBcIk1haW5Qcm9kdWN0XCIsIGlubmVyUHJvcGVydGllcyA9IHt9LCBocmVmfSkgPT4ge1xuICBpbm5lclByb3BlcnRpZXMgPSB7IC4uLkRFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQsIC4uLmlubmVyUHJvcGVydGllcyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgcHJvcGVydHk9eyBwcm9wZXJ0eSB9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdQcm9kdWN0c19fQXJ0aWNsZScsIGNsYXNzTmFtZSl9IG12LW11bHRpcGxlPVwidHJ1ZVwiPlxuICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgIDxpbWcgcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuaW1hZ2UgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdQcm9kdWN0c19fQXJ0aWNsZS1pbWFnZScsIHtcbiAgICAgICAgICAgICAgUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlOiAhIWhyZWYsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwLnBuZ1wiXG4gICAgICAgICAgICBzcmM9eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuaW1hZ2VdIH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIHtcbiAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnByaWNlXSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1wcmljZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLnByaWNlIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2VcIiBtdi1kZWZhdXRsPVwi0KbQtdC90LBcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBbXG4gICAgICAgICAgICB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gJiYgKFxuICAgICAgICAgICAgICA8aDYgcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMubmFtZSB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8taGVhZGVyXCIgbXYtZGVmYXVsdD1cItCd0LDQt9Cy0LDQvdC40LVcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy5uYW1lXSB9PC9oNj5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5zbHVnIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby1zbHVnXCIgbXYtZGVmYXVsdD1cInNsdWdcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy5zbHVnXSB9PC9zcGFuPixcbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLnRleHQgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXRleHQgbWFya2Rvd25cIiBtdi1kZWZhdWx0PVwiVGV4dFwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnRleHRdIH08L3NwYW4+XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGUge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4uUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1wcmljZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmljZS1jb2xvciwgYmxhY2spO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1zbHVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mby10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXNsdWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mby10ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblByb2R1Y3RzX19BcnRpY2xlOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts__Article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2039966116",
    __self: undefined
  }, "body[mv-mode=\"edit\"] .Products__Article-info-slug{display:block;width:100%;}body[mv-mode=\"edit\"] .Products__Article-info-text{display:block;width:100%;}body[mv-mode=\"edit\"] .Products__Article-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Products__Article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIeUIsQUFHeUIsQUFLQSxBQUtELEFBS0EsY0FkRixBQUtBLFdBSmIsQUFLQSxpREFJd0IsQUFLQSw4RUFKeEIsQUFLYSxXQUNiIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgaW1hZ2U6ICdwcm9kdWN0LWltYWdlJyxcbiAgcHJpY2U6ICdwcmljZScsXG4gIG5hbWU6ICduYW1lJyxcbiAgc2x1ZzogJ3NsdWcnLFxuICB0ZXh0OiAndGV4dCcsXG59XG5cbmNvbnN0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZSA9ICh7IGNsYXNzTmFtZSwgdmFsdWUsIHByb3BlcnR5ID0gXCJNYWluUHJvZHVjdFwiLCBpbm5lclByb3BlcnRpZXMgPSB7fSwgaHJlZn0pID0+IHtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHByb3BlcnR5PXsgcHJvcGVydHkgfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUnLCBjbGFzc05hbWUpfSBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8aW1nIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmltYWdlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUtaW1hZ2UnLCB7XG4gICAgICAgICAgICAgIFByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTogISFocmVmLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMC5wbmdcIlxuICAgICAgICAgICAgc3JjPXsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmltYWdlXSB9XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5wcmljZSB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlXCIgbXYtZGVmYXV0bD1cItCm0LXQvdCwXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdIH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mb1wiPlxuICAgICAgICB7XG4gICAgICAgICAgW1xuICAgICAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdICYmIChcbiAgICAgICAgICAgICAgPGg2IHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLm5hbWUgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlclwiIG12LWRlZmF1bHQ9XCLQndCw0LfQstCw0L3QuNC1XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gfTwvaDY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuc2x1ZyB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1Z1wiIG12LWRlZmF1bHQ9XCJzbHVnXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuc2x1Z10gfTwvc3Bhbj4sXG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy50ZXh0IH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby10ZXh0IG1hcmtkb3duXCIgbXYtZGVmYXVsdD1cIlRleHRcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy50ZXh0XSB9PC9zcGFuPlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1ZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1zbHVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZTsiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/MainProducts/MainProducts__Article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainProducts__Article);

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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Navigation/Navigation.js";


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
  }, ".Navigation__wrapper.jsx-4224750092{--navigation-height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff9500c4;background-clip:content-box;width:100%;box-sizing:border-box;min-height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:4px solid var(--second-color);}.Navigation.jsx-4224750092{min-height:var(--navigation-height,70px);}.Navigation__list.jsx-4224750092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:var(--navigation-height,70px);width:var(--page-width);list-style:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNrQixBQUdzQyxBQWdCaUIsQUFJN0IseUJBbkJBLGdCQWdCZixpQ0FJaUIseUJBbkJPLGdDQW9Cb0IseUNBQ2xCLEtBcEJMLG1CQXFCSCxnQkFDTywwREFyQkksMkJBRUMsY0FvQlQsY0FuQlIsV0FDVyxzQkFDb0IseUNBQ25CLEtBaUJiLFVBQ0QsU0FDWCwyRUFsQjhDLDRDQUU5QyIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTmF2aWdhdGlvbl9fSXRlbSBmcm9tICcuL05hdmlnYXRpb25fX0l0ZW0nO1xuXG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuXG4gIGNvbnN0IHdyYXBwZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaG92ZXJIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmICh3cmFwcGVyLmN1cnJlbnQpIHtcbiAgICAgIHdyYXBwZXIuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiTmF2aWdhdGlvbl9fd3JhcHBlcl9kcmllZFwiKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB1bkhvdmVySGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAod3JhcHBlci5jdXJyZW50KSB7XG4gICAgICB3cmFwcGVyLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcIk5hdmlnYXRpb25fX3dyYXBwZXJfZHJpZWRcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcIk5hdmlnYXRpb25fX3dyYXBwZXJcIiwgY2xhc3NOYW1lKX0gcmVmPXt3cmFwcGVyfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiTmF2aWdhdGlvblwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiTmF2aWdhdGlvbl9fbGlzdFwiPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uX19JdGVtXG4gICAgICAgICAgICBocmVmPVwiL1wiIGxhYmVsPVwi0JPQu9Cw0LLQvdCw0Y9cIi8+XG4gICAgICAgICAgPE5hdmlnYXRpb25fX0l0ZW1cbiAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdHNcIiBsYWJlbD1cItCf0YDQvtC00YPQutGG0LjRj1wiLz5cbiAgICAgICAgICA8TmF2aWdhdGlvbl9fSXRlbVxuICAgICAgICAgICAgaHJlZj1cIi9hYm91dFwiIGxhYmVsPVwi0J/QsNGB0LXQutCwXCIvPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uX19JdGVtXG4gICAgICAgICAgICBocmVmPVwiL2RlbGl2ZXJ5LWFuZC1wYXltZW50XCJcbiAgICAgICAgICAgIGxhYmVsPVwi0JTQvtGB0YLQsNCy0LrQsCDQuCDQvtC/0LvQsNGC0LBcIi8+XG4gICAgICAgICAgPE5hdmlnYXRpb25fX0l0ZW1cbiAgICAgICAgICAgIGhyZWY9XCIvYmxvZ1wiXG4gICAgICAgICAgICBsYWJlbD1cItCR0LvQvtCzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxOYXZpZ2F0aW9uX19JdGVtXG4gICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RzXCJcbiAgICAgICAgICAgIGxhYmVsPVwi0JrQvtC90YLQsNC60YLRi1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuTmF2aWdhdGlvbl9fd3JhcHBlciB7XG4gICAgICAgICAgICAtLW5hdmlnYXRpb24taGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMGM0O1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQsIDcwcHgpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5OYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0LCA3MHB4KTtcbiAgICAgICAgICB9XG4gIFxuICAgICAgICAgIC5OYXZpZ2F0aW9uX19saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1uYXZpZ2F0aW9uLWhlaWdodCwgNzBweCk7XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Navigation/Navigation.js */"));
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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Navigation/Navigation__Item.js";


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
}, ".Navigation__Item.jsx-2189054284{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;--decoration-color:#FFF;font-size:1.3em;height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;-webkit-transition:color 0.3s;transition:color 0.3s;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284:hover,.Navigation__Item.jsx-2189054284 a.jsx-2189054284:focus{color:var(--main-text-color);}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{color:var(--second-color,#FFF);-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb25fX0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBRzJCLEFBVU4sQUFRaUIsQUFJRyxZQVhuQixNQVZBLFdBa0JmLEVBSXVCLGtEQUNJLEtBWk4sTUFWRyxjQXVCeEIsZ0VBdEIwQixTQVVULGVBVEMsQUFVTSxnQkFUZ0Isb0NBVXhDLENBVHlCLG1HQUN6QiIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uX19JdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBOYXZpZ2F0aW9uX19JdGVtID0gKHsgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICA8bGkgY2xhc3NOYW1lPVwiTmF2aWdhdGlvbl9fSXRlbVwiPlxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICA8L0xpbms+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5OYXZpZ2F0aW9uX19JdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtLWRlY29yYXRpb24tY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIGhlaWdodDogdmFyKC0tbmF2aWdhdGlvbi1oZWlnaHQsIDcwcHgpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLk5hdmlnYXRpb25fX0l0ZW0gYSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgICAgfVxuXG4gICAgICAuTmF2aWdhdGlvbl9fSXRlbSBhOmhvdmVyLCAuTmF2aWdhdGlvbl9fSXRlbSBhOmZvY3VzICB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuTmF2aWdhdGlvbl9fSXRlbSBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvciwgI0ZGRik7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25fX0l0ZW07Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Navigation/Navigation__Item.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Navigation__Item);

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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/PhonesContainer/PhonesContainer.js";


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
}, ".PhonesContainer.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PhonesContainer__list.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9QaG9uZXNDb250YWluZXIvUGhvbmVzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUdzQixBQUtBLDBFQUpNLEFBS0csOEVBQ3hCLGVBTEEiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL1Bob25lc0NvbnRhaW5lci9QaG9uZXNDb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgUGhvbmVzQ29udGFpbmVyID0gKHsgcHJvcGVydHksIGljb24sIGNsYXNzTmFtZSwgcGhvbmUgPSBbXX0pID0+IChcblxuICA8ZGl2IGNsYXNzTmFtZT1cIlBob25lc0NvbnRhaW5lclwiPlxuICAgIHsgaWNvbiB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJQaG9uZXNDb250YWluZXJfX2xpc3RcIj5cbiAgICAgICAg0KLQtdC70LXRhNC+0L06XG4gICAgICAgIHtcbiAgICAgICAgICBwaG9uZS5tYXAoIChpdGVtLCBpbmRleCkgPT4gPHNwYW4ga2V5PXtpbmRleH0gcHJvcGVydHk9e3Byb3BlcnR5fSBtdi1tdWx0aXBsZT1cInRydWVcIiBtdi1kZWZhdWx0PVwiKzM3NSAxMSAxMTEgMTExXCI+eyBpdGVtIH08L3NwYW4+KVxuICAgICAgICB9XG4gICAgPC9kaXY+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5QaG9uZXNDb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuUGhvbmVzQ29udGFpbmVyX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZXNDb250YWluZXI7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/PhonesContainer/PhonesContainer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (PhonesContainer);

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
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Social/Social.js";


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
  }, ".Socials__icon-image.jsx-555965192{height:50px;}.Socials__icon.jsx-555965192{margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9Tb2NpYWwvU29jaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHdUIsQUFJRSxZQUhoQixFQUlBIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9Tb2NpYWwvU29jaWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0cmFjdFByb3BlcnRpZXMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgbGluazogJ3NvY2lhbC1saW5rJyxcbiAgaWNvbjogJ3NvY2lhbHNfX2ljb24taW1hZ2UnLFxufTtcblxuY29uc3QgU29jaWFsID0gKHsgcHJvcGVydHkgPSBcInNvY2lhbFwiLCBpbm5lclByb3BlcnRpZXMsIHZhbHVlID0ge30gfSkgPT4ge1xuXG4gIGNvbnN0IHsgbGluaywgaWNvbiB9ID0gZXh0cmFjdFByb3BlcnRpZXMoeyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfSwgdmFsdWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBwcm9wZXJ0eT17IHByb3BlcnR5IH0gY2xhc3NOYW1lPVwiU29jaWFsc19faWNvblwiIG12LW11bHRpcGxlPVwidHJ1ZVwiPlxuICAgICAgPGEgcHJvcGVydHk9eyBsaW5rLmtleSB9IGNsYXNzTmFtZT1cIlNvY2lhbHNfX2ljb24tbGlua1wiIG12LWRlZmF1bHQ9XCJodHRwczovL3R3aXR0ZXIuY29tXCIgaHJlZj17IGxpbmsudmFsdWUgfT5cbiAgICAgICAgPGltZyBwcm9wZXJ0eT17IGljb24ua2V5IH0gY2xhc3NOYW1lPVwiU29jaWFsc19faWNvbi1pbWFnZVwiIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAucG5nXCIgc3JjPXsgaWNvbi52YWx1ZSB9Lz5cbiAgICAgIDwvYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlNvY2lhbHNfX2ljb24taW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Tb2NpYWxzX19pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Social/Social.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./components/Values/Values.js":
/*!*************************************!*\
  !*** ./components/Values/Values.js ***!
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
/* harmony import */ var _Values_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Values__Article */ "./components/Values/Values__Article.js");
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Values/Values.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Values = ({
  property,
  data
}) => {
  return __jsx("div", {
    className: "jsx-437906025" + " " + "Values",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-437906025" + " " + "Values__section section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-437906025" + " " + "Values__content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, data ? data.map((value, index) => __jsx(_Values_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    value: value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 45
    }
  })) : false)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "437906025",
    __self: undefined
  }, ".Values__section.jsx-437906025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.Values__content.jsx-437906025{width:var(--page-width);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9WYWx1ZXMvVmFsdWVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHd0IsQUFNVyx3QkFDWCxrREFOTSx3QkFPSixlQUNBLHNEQVBPLEdBUU8sMkVBUC9CLGdEQVFBIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9WYWx1ZXMvVmFsdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCc7XG5pbXBvcnQgVmFsdWVzQXJ0aWNsZSBmcm9tICcuL1ZhbHVlc19fQXJ0aWNsZSc7XG5cblxuY29uc3QgVmFsdWVzID0gKHsgcHJvcGVydHksIGRhdGEgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJWYWx1ZXNcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlZhbHVlc19fc2VjdGlvbiBzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmFsdWVzX19jb250ZW50XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICA/IGRhdGEubWFwKCAodmFsdWUsIGluZGV4KSA9PiA8VmFsdWVzQXJ0aWNsZSBrZXk9e2luZGV4fSB2YWx1ZT17IHZhbHVlIH0gLz4gKVxuICAgICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuVmFsdWVzX19zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5WYWx1ZXNfX2NvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWx1ZXM7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Values/Values.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Values);

/***/ }),

/***/ "./components/Values/Values__Article.js":
/*!**********************************************!*\
  !*** ./components/Values/Values__Article.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/w/work/honey-ui-3/components/Values/Values__Article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_INNER_PROERTY_SET = {
  image: 'image',
  header: 'header',
  description: 'description'
};

const Values__Article = ({
  value,
  property = 'valuesArticle',
  innerProperties = {}
}) => {
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  return __jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-2657580011" + " " + "Values__Article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("img", {
    property: innerProperties.image,
    src: value[innerProperties.image],
    "mv-default": "https://via.placeholder.com/300x500.png",
    className: "jsx-2657580011" + " " + "Values__Article-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2657580011" + " " + "Values__Article-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("h6", {
    property: innerProperties.header,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2657580011" + " " + "Values__Article-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, value[innerProperties.header]), __jsx("p", {
    property: innerProperties.description,
    "mv-default": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    className: "jsx-2657580011" + " " + "Values__Article-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, value[innerProperties.description])), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2657580011",
    __self: undefined
  }, ".Values__Article-image.jsx-2657580011{width:300px;height:500px;border:2px solid var(--accent-color);}.Values__Article.jsx-2657580011{max-width:304px;margin:10px 0;}.Values__Article-header.jsx-2657580011{font-size:20px;font-weight:bold;padding:10px;background-color:var(--accent-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Values__Article-description.jsx-2657580011{font-size:20px;padding:10px;color:var(--app-main-text-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9WYWx1ZXMvVmFsdWVzX19BcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCa0IsQUFHdUIsQUFNSSxBQUtELEFBUUEsWUFsQkYsR0FXSSxBQVFKLENBYkMsU0FMdUIsR0FtQkosRUFibkMsRUFLZSxhQUN3QixnQkFRbkIsQ0FuQnBCLG9CQVlvQiw4Q0FRRCxpQkFDbkIsSUFSQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvVmFsdWVzL1ZhbHVlc19fQXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGltYWdlOiAnaW1hZ2UnLFxuICBoZWFkZXI6ICdoZWFkZXInLFxuICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcbn1cblxuY29uc3QgVmFsdWVzX19BcnRpY2xlID0gKHsgdmFsdWUsIHByb3BlcnR5ID0gJ3ZhbHVlc0FydGljbGUnLCBpbm5lclByb3BlcnRpZXMgPSB7fSB9KSA9PiB7XG4gIGlubmVyUHJvcGVydGllcyA9IHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgLi4uaW5uZXJQcm9wZXJ0aWVzIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJWYWx1ZXNfX0FydGljbGVcIiBwcm9wZXJ0eT17IHByb3BlcnR5IH0gbXYtbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cIlZhbHVlc19fQXJ0aWNsZS1pbWFnZVwiXG4gICAgICAgIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmltYWdlIH1cbiAgICAgICAgc3JjPXsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmltYWdlXSB9XG4gICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzAweDUwMC5wbmdcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJWYWx1ZXNfX0FydGljbGUtaW5mb1wiPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwiVmFsdWVzX19BcnRpY2xlLWhlYWRlclwiIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmhlYWRlciB9IG12LWRlZmF1bHQ9XCLQl9Cw0LPQvtC70L7QstC+0LpcIj5cbiAgICAgICAgICB7IHZhbHVlW2lubmVyUHJvcGVydGllcy5oZWFkZXJdIH1cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiVmFsdWVzX19BcnRpY2xlLWRlc2NyaXB0aW9uXCIgcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuZGVzY3JpcHRpb24gfSBtdi1kZWZhdWx0PVwi0J7Qv9C40YHQsNC90LjQtVwiPlxuICAgICAgICAgIHsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmRlc2NyaXB0aW9uXSB9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5WYWx1ZXNfX0FydGljbGUtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuVmFsdWVzX19BcnRpY2xlIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwNHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLlZhbHVlc19fQXJ0aWNsZS1oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlZhbHVlc19fQXJ0aWNsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWx1ZXNfX0FydGljbGU7Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/Values/Values__Article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Values__Article);

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/init */ "./store/init.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Carusel_CaruselNew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carusel/CaruselNew */ "./components/Carusel/CaruselNew.js");
/* harmony import */ var _components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainProducts/MainProducts */ "./components/MainProducts/MainProducts.js");
/* harmony import */ var _components_Hello_Hello__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Hello/Hello */ "./components/Hello/Hello.js");
/* harmony import */ var _components_Values_Values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Values/Values */ "./components/Values/Values.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "/mnt/w/work/honey-ui-3/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Index = () => {
  const {
    hello,
    valuesArticle,
    MainProduct
  } = storeon_react__WEBPACK_IMPORTED_MODULE_1___default()('hello', 'valuesArticle', 'MainProduct');
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_components_Carusel_CaruselNew__WEBPACK_IMPORTED_MODULE_5__["default"], {
    property: "slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    property: "MainProduct",
    data: MainProduct,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(_components_Hello_Hello__WEBPACK_IMPORTED_MODULE_7__["default"], {
    property: "hello",
    data: hello,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_components_Values_Values__WEBPACK_IMPORTED_MODULE_8__["default"], {
    property: "valuesArticle",
    data: valuesArticle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    property: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
};

Index.getInitialProps = async function (props) {
  const initData = await Object(_store_init__WEBPACK_IMPORTED_MODULE_2__["initialisation"])(props.store);
  return {
    initData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/w/work/honey-ui-3/pages/index.js */"./pages/index.js");


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

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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
//# sourceMappingURL=index.js.map