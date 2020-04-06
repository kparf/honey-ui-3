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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/AddressContainer/AddressContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AddressContainer = ({
  className,
  property,
  icon,
  address = []
}) => __jsx("div", {
  className: "jsx-1734587183" + " " + (classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'AddressContainer') || ""),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, icon, __jsx("div", {
  className: "jsx-1734587183" + " " + "AddressContainer__list header__list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\u0410\u0434\u0440\u0435\u0441:", address.map((item, index) => __jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "\u0410\u0434\u0440\u0435\u0441",
  className: "jsx-1734587183",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, item))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1734587183",
  __self: undefined
}, ".AddressContainer.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.AddressContainer__list.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0FkZHJlc3NDb250YWluZXIvQWRkcmVzc0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHc0IsQUFLQSwwRUFKTSxBQUtHLDhFQUN4QixlQUxBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0FkZHJlc3NDb250YWluZXIvQWRkcmVzc0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5jb25zdCBBZGRyZXNzQ29udGFpbmVyID0gKHsgY2xhc3NOYW1lLCBwcm9wZXJ0eSwgaWNvbiwgYWRkcmVzcyA9IFtdIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ0FkZHJlc3NDb250YWluZXInKSB9PlxuICAgIHsgaWNvbiB9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJBZGRyZXNzQ29udGFpbmVyX19saXN0IGhlYWRlcl9fbGlzdFwiPlxuICAgICAg0JDQtNGA0LXRgTpcbiAgICAgIHtcbiAgICAgICAgYWRkcmVzcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiA8c3BhbiBrZXk9e2luZGV4fSBwcm9wZXJ0eT17cHJvcGVydHl9IG12LW11bHRpcGxlPVwidHJ1ZVwiIG12LWRlZmF1bHQ9XCLQkNC00YDQtdGBXCI+eyBpdGVtIH08L3NwYW4+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuQWRkcmVzc0NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5BZGRyZXNzQ29udGFpbmVyX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/AddressContainer/AddressContainer.js */"));

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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js";


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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, slideList ? slideList.map((slide, i) => __jsx(_CaruselNew_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
    active: i === index,
    key: i,
    property: property,
    value: slide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })) : false), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2670317827",
    __self: undefined
  }, ".Carusel.jsx-3030315789{--carusel-height:500px;--carusel-delay:5s;width:100%;height:var(--carusel-height);position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBR2tDLHVCQUNKLG1CQUNSLFdBQ2tCLDZCQUNYLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RvcmVvbiBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xuaW1wb3J0IENhcnVzZWxfX1NsaWRlIGZyb20gJy4vQ2FydXNlbE5ld19fU2xpZGUnO1xuXG5cbmNvbnN0IENhcnVzZWwgPSAoeyBwcm9wZXJ0eSB9KSA9PiB7XG4gIGNvbnN0IHNsaWRlTGlzdCA9IHVzZVN0b3Jlb24ocHJvcGVydHkpW3Byb3BlcnR5XTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XG4gICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgc2V0RGlyZWN0aW9uKGUuZGlyZWN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2Fyb3VzZWwgZmFkZT17dHJ1ZX0gY2xhc3NOYW1lPVwiQ2FydXNlbFwiIGFjdGl2ZUluZGV4PXtpbmRleH0gZGlyZWN0aW9uPXtkaXJlY3Rpb259IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICB7XG4gICAgICAgICAgc2xpZGVMaXN0ID8gc2xpZGVMaXN0Lm1hcCggKHNsaWRlLCBpKSA9PiA8Q2FydXNlbF9fU2xpZGUgYWN0aXZlPXtpID09PSBpbmRleH0ga2V5PXsgaSB9IHByb3BlcnR5PXsgcHJvcGVydHkgfSB2YWx1ZT17IHNsaWRlIH0vPikgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5DYXJ1c2VsIHtcbiAgICAgICAgICAtLWNhcnVzZWwtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAtLWNhcnVzZWwtZGVsYXk6IDVzO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tY2FydXNlbC1oZWlnaHQpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5DYXJ1c2VsIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgICAgICAgICBhbmltYXRpb246IDFzIGZhZGU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5DYXJ1c2VsX19saXN0IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwge1xuICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWw7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "616316871",
    __self: undefined
  }, ".Carusel{height:500px;}.carousel-item{height:500px;}@-webkit-keyframes fade{0%{opacity:0;}100%{opacity:1;}}@keyframes fade{0%{opacity:0;}100%{opacity:1;}}.carousel-item.active{-webkit-animation:1s fade;animation:1s fade;}body[mv-mode=\"edit\"] .Carusel__list{-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Carusel{height:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3lCLEFBR3dCLEFBR0EsQUFLRCxBQUdBLEFBS00sQUFJSCxBQVFGLFVBbkJiLEFBR0EsR0FYRixBQUdBLEFBeUJBLCtCQVpBLGFBSWtCLHdDQUNILDBFQUNBLGFBQ1MsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJvdXNlbCc7XG5pbXBvcnQgQ2FydXNlbF9fU2xpZGUgZnJvbSAnLi9DYXJ1c2VsTmV3X19TbGlkZSc7XG5cblxuY29uc3QgQ2FydXNlbCA9ICh7IHByb3BlcnR5IH0pID0+IHtcbiAgY29uc3Qgc2xpZGVMaXN0ID0gdXNlU3RvcmVvbihwcm9wZXJ0eSlbcHJvcGVydHldO1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHNlbGVjdGVkSW5kZXgsIGUpID0+IHtcbiAgICBzZXRJbmRleChzZWxlY3RlZEluZGV4KTtcbiAgICBzZXREaXJlY3Rpb24oZS5kaXJlY3Rpb24pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJvdXNlbCBmYWRlPXt0cnVlfSBjbGFzc05hbWU9XCJDYXJ1c2VsXCIgYWN0aXZlSW5kZXg9e2luZGV4fSBkaXJlY3Rpb249e2RpcmVjdGlvbn0gb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0+XG4gICAgICAgIHtcbiAgICAgICAgICBzbGlkZUxpc3QgPyBzbGlkZUxpc3QubWFwKCAoc2xpZGUsIGkpID0+IDxDYXJ1c2VsX19TbGlkZSBhY3RpdmU9e2kgPT09IGluZGV4fSBrZXk9eyBpIH0gcHJvcGVydHk9eyBwcm9wZXJ0eSB9IHZhbHVlPXsgc2xpZGUgfS8+KSA6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIDwvQ2Fyb3VzZWw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIC0tY2FydXNlbC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIC0tY2FydXNlbC1kZWxheTogNXM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJ1c2VsLWhlaWdodCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLkNhcnVzZWwge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2Fyb3VzZWwtaXRlbS5hY3RpdmUge1xuICAgICAgICAgIGFuaW1hdGlvbjogMXMgZmFkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWxfX2xpc3Qge1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbCB7XG4gICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FydXNlbDsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js */"));
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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew__Slide.js";


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
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  property: imageProperty,
  "mv-default": "https://via.placeholder.com/200.png",
  src: value[imageProperty],
  className: "jsx-1709323919" + " " + "Carusel__slide-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("span", {
  property: textProperty,
  "mv-default": "\u0442\u0435\u043A\u0441\u0442",
  className: "jsx-1709323919",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, value[textProperty])))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1709323919",
  __self: undefined
}, ".Carusel__slide.jsx-1709323919{position:relative;width:100%;height:var(--carusel-height);-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}.Carusel__slide-image.jsx-1709323919{z-index:50;object-fit:cover;width:100%;height:100%;}.Carusel__slide-text.jsx-1709323919{padding:10px;color:var(--carusel-text-color,black);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:var(--carusel-text-bg);font-size:var(--carusel-font-size,3em);text-shadow:#fff 2px 2px 10px;font-weight:bold;}.Carusel__slide-text-wrapper.jsx-1709323919{z-index:100;width:var(--carusel-text-width,100%);}.Carusel__slide-text-container.jsx-1709323919{position:absolute;top:0;margin:auto auto;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Carusel__slide[mv-mode=\"edit\"].jsx-1709323919 .Carusel__slide-text-container.jsx-1709323919{width:unset;height:unset;display:block;-webkit-box-pack:unset;-webkit-justify-content:unset;-ms-flex-pack:unset;justify-content:unset;-webkit-align-items:unset;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ld19fU2xpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUcyQixBQVFQLEFBT0UsQUFVRCxBQUtNLEFBV04sV0FoQ0ssQ0FpQnFCLEFBZ0J6QixDQTFCMEIsS0FmNUIsQUE4QkwsTUFDVyxDQVdILEdBakNILENBUmtCLFVBU2pCLEFBaUNVLEVBWFgsUUFOYixFQWZBLEFBS29CLENBaUJOLE1BL0JJLE1BZ0NILHNEQWpCMkIsU0FkMUIsT0F5Q0ksSUFUSyxvQkFqQmlCLHlCQWQxQyxjQWVnQywwQkEwQmhDLElBekJtQixVQWdCRSxPQWZyQixzRkFnQkEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvQ2FydXNlbC9DYXJ1c2VsTmV3X19TbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cblxuY29uc3QgQ2FydXNlbE5ld19fU2xpZGUgPSAoeyBhY3RpdmUsIHZhbHVlLCBwcm9wZXJ0eSA9IFwic2xpZGVcIiwgaW1hZ2VQcm9wZXJ0eSA9IFwiaW1hZ2VcIiwgdGV4dFByb3BlcnR5PVwidGV4dFwiIH0pID0+IChcblxuICA8Q2Fyb3VzZWwuSXRlbSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmUgfSl9IHByb3BlcnR5PXtwcm9wZXJ0eX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgPGltZyBwcm9wZXJ0eT17IGltYWdlUHJvcGVydHkgfVxuICAgICAgICBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS1pbWFnZVwiXG4gICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwLnBuZ1wiXG4gICAgICAgIHNyYz17dmFsdWVbaW1hZ2VQcm9wZXJ0eV19XG4gICAgICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0LXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDYXJ1c2VsX19zbGlkZS10ZXh0XCI+XG4gICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyB0ZXh0UHJvcGVydHkgfSBtdi1kZWZhdWx0PVwi0YLQtdC60YHRglwiPnsgdmFsdWVbdGV4dFByb3BlcnR5XSB9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLkNhcnVzZWxfX3NsaWRlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJ1c2VsLWhlaWdodCk7XG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICAuQ2FydXNlbF9fc2xpZGUtaW1hZ2Uge1xuICAgICAgICB6LWluZGV4OiA1MDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcnVzZWwtdGV4dC1jb2xvciwgYmxhY2spO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcnVzZWwtdGV4dC1iZyk7IFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcnVzZWwtZm9udC1zaXplLCAzZW0pO1xuICAgICAgICB0ZXh0LXNoYWRvdzogI2ZmZiAycHggMnB4IDEwcHg7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLkNhcnVzZWxfX3NsaWRlLXRleHQtd3JhcHBlciB7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNhcnVzZWwtdGV4dC13aWR0aCwgMTAwJSk7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZS10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5DYXJ1c2VsX19zbGlkZVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbF9fc2xpZGUtdGV4dC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2V0O1xuICAgICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0Nhcm91c2VsLkl0ZW0+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWxOZXdfX1NsaWRlOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew__Slide.js */"));

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils.js");
/* harmony import */ var _Social_Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Social/Social */ "./components/Social/Social.js");

var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Footer/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const DEFAULT_INNER_PROERTY_SET = {
  social: 'social',
  info: 'info'
};
const DEFAULT_INFO_INNER_PROERTY_SET = {
  text: 'text'
};

const Footer = ({
  property = "footer",
  innerProperties = {}
}) => {
  const data = storeon_react__WEBPACK_IMPORTED_MODULE_3___default()(property)[property];
  innerProperties = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_INNER_PROERTY_SET, innerProperties);
  const {
    social,
    info
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["extractProperties"])(innerProperties, data);
  const {
    text
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["extractProperties"])(DEFAULT_INFO_INNER_PROERTY_SET, info.value);
  return __jsx("footer", {
    property: property,
    className: "jsx-715187177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-715187177" + " " + "Socials-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, social.value ? social.value.map((socialItem, index) => __jsx(_Social_Social__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: index,
    property: social.key,
    value: socialItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })) : false), __jsx("div", {
    className: "jsx-715187177" + " " + "Footer-devider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("div", {
    property: info.key,
    className: "jsx-715187177" + " " + "Info-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    property: text.key,
    "mv-default": "\u0422\u0435\u043A\u0441\u0442",
    className: "jsx-715187177" + " " + "Footer__text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, text.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "715187177",
    __self: undefined
  }, "footer.jsx-715187177{padding:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 0;padding-top:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Footer-devider.jsx-715187177{border-top:4px solid var(--accent-color);-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;margin:20px 0;}.Info-container.jsx-715187177{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);font-size:1.5em;text-align:center;color:var(--app-main-text-color);font-weight:bold;padding:10px;box-sizing:border-box;}.Socials-container.jsx-715187177{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQixBQUcwQixBQVMwQixBQU01QixBQVdBLGVBekJBLDBCQVNNLGlDQU1LLEFBV0EsZUF6QkYsU0FlTixBQVdPLGdCQVZMLENBUEosY0FDaEIsR0FPbUMsaUNBQ2hCLEVBakJILGNBQ0csQ0FpQkosYUFDUyxFQU9ILENBeEJBLG1CQWtCckIseUVBT0EsQ0F4QkEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnXG5pbXBvcnQgeyBleHRyYWN0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi4vU29jaWFsL1NvY2lhbCc7XG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIHNvY2lhbDogJ3NvY2lhbCcsXG4gIGluZm86ICdpbmZvJyxcbn07XG5jb25zdCBERUZBVUxUX0lORk9fSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIHRleHQ6ICd0ZXh0Jyxcbn07XG5cbmNvbnN0IEZvb3RlciA9ICh7IHByb3BlcnR5ID0gXCJmb290ZXJcIiwgaW5uZXJQcm9wZXJ0aWVzPSB7fSB9KSA9PiB7XG5cbiAgY29uc3QgZGF0YSA9IHVzZVN0b3Jlb24ocHJvcGVydHkpW3Byb3BlcnR5XTtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcbiAgY29uc3QgeyBzb2NpYWwsIGluZm8gfSA9IGV4dHJhY3RQcm9wZXJ0aWVzKGlubmVyUHJvcGVydGllcywgZGF0YSk7XG5cbiAgY29uc3QgeyB0ZXh0IH0gPSBleHRyYWN0UHJvcGVydGllcyhERUZBVUxUX0lORk9fSU5ORVJfUFJPRVJUWV9TRVQsIGluZm8udmFsdWUpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHByb3BlcnR5PXsgcHJvcGVydHkgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU29jaWFscy1jb250YWluZXJcIj5cbiAgICAgICAge1xuICAgICAgICAgIHNvY2lhbC52YWx1ZVxuICAgICAgICAgICAgPyBzb2NpYWwudmFsdWUubWFwKChzb2NpYWxJdGVtLCBpbmRleCkgPT4gPFNvY2lhbCBrZXk9eyBpbmRleCB9IHByb3BlcnR5PXsgc29jaWFsLmtleSB9IHZhbHVlPXsgc29jaWFsSXRlbSB9Lz4pIFxuICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb290ZXItZGV2aWRlclwiPjwvZGl2PlxuXG4gICAgICA8ZGl2IHByb3BlcnR5PXsgaW5mby5rZXkgfSBjbGFzc05hbWU9XCJJbmZvLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IHRleHQua2V5IH0gY2xhc3NOYW1lPVwiRm9vdGVyX190ZXh0XCIgbXYtZGVmYXVsdD1cItCi0LXQutGB0YJcIj57IHRleHQudmFsdWUgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogNTBweCAwO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuRm9vdGVyLWRldmlkZXIge1xuICAgICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuSW5mby1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLlNvY2lhbHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Footer/Footer.js */"));
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
    className: "jsx-2273733962" + " " + "Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2273733962" + " " + "Header__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    property: "logo",
    "mv-default": "https://via.placeholder.com/100.png",
    src: logo,
    className: "jsx-2273733962",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(_Header_Information__WEBPACK_IMPORTED_MODULE_4__["default"], {
    phone: phone,
    address: address,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Navigation_shift",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2273733962",
    __self: undefined
  }, ".Header.jsx-2273733962{--icon-height:50px;--navigatioin-border-waigth:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:bold;background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header.jpg');color:var(--app-main-text-color);font-weight:bold;}.Header.jsx-2273733962 .Header__container.jsx-2273733962{padding-bottom:40px;}.Header__container.jsx-2273733962{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Header_navigation_shift.jsx-2273733962{padding-bottom:var(--navigatioin-border-waigth,40px);background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc4QixBQWVDLEFBSVAsQUFPeUMsbUJBekJyQixDQWVuQyxnQ0FiZSxDQXdCZSxxQkFQSixPQVExQixpQkFQcUIsNEJBakJHLGlFQWtCUSxhQWpCUCxtR0FDSixHQWlCckIsMEZBZm1CLGlCQUNvRixtR0FDcEUsaUNBQ2hCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCdcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XG5pbXBvcnQgSGVhZGVyX19JbmZvcm1hdGlvbiBmcm9tICcuL0hlYWRlcl9fSW5mb3JtYXRpb24nO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBwcm9wZXJ0eT1cImhlYWRlclwiIH0pID0+IHtcblxuICBjb25zdCB7IGhlYWRlciB9ID0gdXNlU3RvcmVvbignaGVhZGVyJyk7XG4gIGNvbnN0IHsgcGhvbmUsIGFkZHJlc3MsIGxvZ28gfSA9IGhlYWRlcjtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCIgcHJvcGVydHk9eyBwcm9wZXJ0eSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJfX2NvbnRhaW5lclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgcHJvcGVydHk9XCJsb2dvXCJcbiAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMC5wbmdcIlxuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAvPlxuICAgICAgICA8SGVhZGVyX19JbmZvcm1hdGlvbiBwaG9uZT17cGhvbmV9IGFkZHJlc3M9e2FkZHJlc3N9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE5hdmlnYXRpb24gY2xhc3NOYW1lPVwiTmF2aWdhdGlvbl9zaGlmdFwiLz5cblxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5IZWFkZXIge1xuICAgICAgICAgIC0taWNvbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgLS1uYXZpZ2F0aW9pbi1ib3JkZXItd2FpZ3RoOiA0MHB4O1xuXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgdmFyKC0tYWNjZW50LWNvbG9yKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvaGVhZGVyLmpwZycpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXIgLkhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuSGVhZGVyX25hdmlnYXRpb25fc2hpZnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1uYXZpZ2F0aW9pbi1ib3JkZXItd2FpZ3RoLCA0MHB4KTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header.js */"));
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
  className: "jsx-2241574509" + " " + "Header__Information",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_AddressContainer_AddressContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  address: address,
  property: "address",
  icon: __jsx("img", {
    src: "/static/icons/baseline-pin_drop-24px.svg",
    className: "jsx-2241574509" + " " + "Header__InformationIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_PhonesContainer_PhonesContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  phone: phone,
  property: "phone",
  icon: __jsx("img", {
    src: "/static/icons/baseline-phone-24px.svg",
    className: "jsx-2241574509" + " " + "Header__InformationIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2241574509",
  __self: undefined
}, ".Header__Information.jsx-2241574509{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.Header__InformationIcon.jsx-2241574509{height:var(--icon-height);margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJfX0luZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUdzQixBQUthLDBCQUNSLGtCQUNwQiw4QkFOcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJfX0luZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZHJlc3NDb250YWluZXIgZnJvbSAnLi4vQWRkcmVzc0NvbnRhaW5lci9BZGRyZXNzQ29udGFpbmVyJztcbmltcG9ydCBQaG9uZXNDb250YWluZXIgZnJvbSAnLi4vUGhvbmVzQ29udGFpbmVyL1Bob25lc0NvbnRhaW5lcic7XG5cblxuY29uc3QgSGVhZGVyX19JbmZvcm1hdGlvbiA9ICh7IHBob25lLCBhZGRyZXNzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXJfX0luZm9ybWF0aW9uXCI+XG4gICAgPEFkZHJlc3NDb250YWluZXJcbiAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XG4gICAgICBwcm9wZXJ0eT1cImFkZHJlc3NcIlxuICAgICAgaWNvbj17PGltZyBjbGFzc05hbWU9XCJIZWFkZXJfX0luZm9ybWF0aW9uSWNvblwiIHNyYz1cIi9zdGF0aWMvaWNvbnMvYmFzZWxpbmUtcGluX2Ryb3AtMjRweC5zdmdcIi8+fS8+XG4gICAgPFBob25lc0NvbnRhaW5lclxuICAgICAgcGhvbmU9e3Bob25lfVxuICAgICAgcHJvcGVydHk9XCJwaG9uZVwiXG4gICAgICBpY29uPXs8aW1nIGNsYXNzTmFtZT1cIkhlYWRlcl9fSW5mb3JtYXRpb25JY29uXCIgc3JjPVwiL3N0YXRpYy9pY29ucy9iYXNlbGluZS1waG9uZS0yNHB4LnN2Z1wiLz59Lz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5IZWFkZXJfX0luZm9ybWF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLkhlYWRlcl9fSW5mb3JtYXRpb25JY29uIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pY29uLWhlaWdodCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyX19JbmZvcm1hdGlvbjsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header__Information.js */"));

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storeon/react */ "storeon/react");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils.js");

var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Hello/Hello.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


const DEFAULT_INNER_PROERTY_SET = {
  header: 'hello-header',
  info: 'hello-info'
};

const Hello = ({
  property,
  data,
  innerProperties
}) => {
  innerProperties = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_INNER_PROERTY_SET, {
    innerProperties
  });
  const {
    header,
    info
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["extractProperties"])(innerProperties, data);
  return __jsx("div", {
    className: "jsx-2909867750" + " " + "Hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("section", {
    property: "hello",
    className: "jsx-2909867750" + " " + "Hello__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("h2", {
    property: header.key,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2909867750" + " " + "Hello__header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, header.value), __jsx("p", {
    property: info.key,
    "mv-default": "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    className: "jsx-2909867750" + " " + "Hello__info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, info.value)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2909867750",
    __self: undefined
  }, ".Hello.jsx-2909867750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#fbd303f0;}.Hello__section.jsx-2909867750{width:var(--page-width);padding:40px 0;}.Hello__header.jsx-2909867750{font-size:2em;}.Hello__info.jsx-2909867750{font-size:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlbGxvL0hlbGxvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHd0IsQUFNVyxBQUtWLEFBSUUsY0FIbEIsRUFJQSxRQVRpQixlQUNqQixtQ0FQeUIsbUdBQ0YscUJBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlbGxvL0hlbGxvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCc7XG5pbXBvcnQgeyBleHRyYWN0UHJvcGVydGllcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuXG5jb25zdCBERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VUID0ge1xuICBoZWFkZXI6ICdoZWxsby1oZWFkZXInLFxuICBpbmZvOiAnaGVsbG8taW5mbycsXG59XG5jb25zdCBIZWxsbyA9ICh7IHByb3BlcnR5LCBkYXRhLCBpbm5lclByb3BlcnRpZXMgfSkgPT4ge1xuICBpbm5lclByb3BlcnRpZXMgPSB7IC4uLkRFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQsIGlubmVyUHJvcGVydGllcyB9O1xuICBjb25zdCB7IGhlYWRlciwgaW5mbyB9ID0gZXh0cmFjdFByb3BlcnRpZXMoaW5uZXJQcm9wZXJ0aWVzLCBkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVsbG9cIj5cbiAgICAgIDxzZWN0aW9uIHByb3BlcnR5PVwiaGVsbG9cIiBjbGFzc05hbWU9XCJIZWxsb19fc2VjdGlvblwiPlxuICAgICAgICA8aDIgcHJvcGVydHk9eyBoZWFkZXIua2V5IH0gY2xhc3NOYW1lPVwiSGVsbG9fX2hlYWRlclwiIG12LWRlZmF1bHQ9XCLQl9Cw0LPQvtC70L7QstC+0LpcIj57IGhlYWRlci52YWx1ZSB9PC9oMj5cbiAgICAgICAgPHAgcHJvcGVydHk9eyBpbmZvLmtleSB9IGNsYXNzTmFtZT1cIkhlbGxvX19pbmZvXCIgbXYtZGVmYXVsdD1cItCY0L3RhNC+0YDQvNCw0YbQuNGPXCI+eyBpbmZvLnZhbHVlIH08L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkhlbGxvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmQzMDNmMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLkhlbGxvX19zZWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuSGVsbG9fX2hlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5IZWxsb19faW5mbyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Hello/Hello.js */"));
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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Layout/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();

const Layout = ({
  children
}) => __jsx(_contexts_ApplicationMode__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
  value: publicRuntimeConfig.APP_MODE,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1215447068",
  __self: undefined
}, ":root{--page-width:1060px;--app-main-color:#542d18;--second-color:#fff;--accent-color:#fbd303f0;--decoration-color:#000;--base-background:white;--second-background:#000;--carusel-text-width:960px;--carusel-text-color:var(--app-main-text-color);--carusel-text-bg:transparent;--app-main-text-color:#542d18;--form-background:var(--app-main-color);}body{margin:0;min-height:100vh;font-family:'Exo 2',sans-serif;background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-1591478.jpg');background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;color:var(--app-main-text-color);}@media (max-width:1100px){:root{--page-width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VCLEFBRzZCLEFBa0JYLEFBYVcsU0FaSCxTQWFqQixFQTlCeUIsTUFrQk8sbUJBakJaLFlBa0J5RyxRQWpCcEcseUJBQ0Qsd0JBQ0Esd0JBQ0MseUJBRUUsaUJBYUMsVUFab0Isa0JBYTFCLHNCQUNZLFFBYkosMEJBY0YsSUFaRSx3QkFhRyxNQVpPLDJCQWExQyxhQVpBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGljYXRpb25Nb2RlIGZyb20gJy4uLy4uL2NvbnRleHRzL0FwcGxpY2F0aW9uTW9kZSc7XG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxuXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPEFwcGxpY2F0aW9uTW9kZS5Qcm92aWRlciB2YWx1ZT17IHB1YmxpY1J1bnRpbWVDb25maWcuQVBQX01PREUgfT5cblxuICAgIHsgY2hpbGRyZW4gfVxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIDpyb290IHtcbiAgICAgICAgLS1wYWdlLXdpZHRoOiAxMDYwcHg7XG5cbiAgICAgICAgLS1hcHAtbWFpbi1jb2xvcjogIzU0MmQxODtcbiAgICAgICAgLS1zZWNvbmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC0tYWNjZW50LWNvbG9yOiAjZmJkMzAzZjA7XG4gICAgICAgIC0tZGVjb3JhdGlvbi1jb2xvcjogIzAwMDtcbiAgICAgICAgLS1iYXNlLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAtLXNlY29uZC1iYWNrZ3JvdW5kOiAjMDAwO1xuXG4gICAgICAgIC0tY2FydXNlbC10ZXh0LXdpZHRoOiA5NjBweDtcbiAgICAgICAgLS1jYXJ1c2VsLXRleHQtY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAtLWNhcnVzZWwtdGV4dC1iZzogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLS1hcHAtbWFpbi10ZXh0LWNvbG9yOiAjNTQyZDE4O1xuICAgICAgICAtLWZvcm0tYmFja2dyb3VuZDogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFeG8gMicsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh0cmFuc3BhcmVudCwgdmFyKC0tYmFzZS1iYWNrZ3JvdW5kKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvYmVhdXRpZnVsLWJlZS1ibG9vbS0xNTkxNDc4LmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW1haW4tdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIC0tcGFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgPC9BcHBsaWNhdGlvbk1vZGUuUHJvdmlkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Layout/Layout.js */"));

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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MainProducts = ({
  property,
  data,
  header
}) => {
  return __jsx("div", {
    className: "jsx-421961682" + " " + "Products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-421961682" + " " + "Products__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, header, __jsx("div", {
    className: "jsx-421961682" + " " + "MainProducts__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, data ? data.map((product, index) => {
    return __jsx(_MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'Products__Article_withMargin ',
      key: index,
      value: product,
      href: "/products",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    });
  }) : false, !(data && data.length > 0) && __jsx(_MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "EmptyItem",
    href: "#",
    value: {
      'product-image': '',
      name: 'name'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2892341378",
    __self: undefined
  }, "body:not([mv-mode=\"edit\"]) .EmptyItem{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUd3QixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpblByb2R1Y3RzX19BcnRpY2xlIGZyb20gJy4vTWFpblByb2R1Y3RzX19BcnRpY2xlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTWFpblByb2R1Y3RzID0gKHsgcHJvcGVydHksIGRhdGEsIGhlYWRlciB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0c19fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblByb2R1Y3RzX19jb250ZW50XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSA/IGRhdGEubWFwKCAocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWFpblByb2R1Y3RzX19BcnRpY2xlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydQcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luICd9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHByb2R1Y3QgfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJFbXB0eUl0ZW1cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3QtaW1hZ2UnOiAnJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Om5vdChbbXYtbW9kZT1cImVkaXRcIl0pIC5FbXB0eUl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlByb2R1Y3RzIHtcbiAgICAgICAgICAtLXByaWNlLWNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX3NlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1haW5Qcm9kdWN0c19fY29udGVudCB7XG4gICAgICAgICAgLyogd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpOyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0c19faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0czsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3795360089",
    __self: undefined
  }, ".Products.jsx-421961682{--price-color:var(--app-main-color);}.Products__section.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.MainProducts__content.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.products__header.jsx-421961682 .section__header-wrapper.jsx-421961682::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUcrQyxBQUl2QixBQU9BLEFBT0Qsb0NBakJkLG1DQWtCQSxHQWRxQixBQU9KLGVBQ0EseURBQ2MscUJBUlAsOEVBQ3hCLHdCQVFBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpblByb2R1Y3RzX19BcnRpY2xlIGZyb20gJy4vTWFpblByb2R1Y3RzX19BcnRpY2xlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTWFpblByb2R1Y3RzID0gKHsgcHJvcGVydHksIGRhdGEsIGhlYWRlciB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0c19fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblByb2R1Y3RzX19jb250ZW50XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSA/IGRhdGEubWFwKCAocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWFpblByb2R1Y3RzX19BcnRpY2xlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydQcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luICd9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHByb2R1Y3QgfVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJFbXB0eUl0ZW1cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3QtaW1hZ2UnOiAnJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Om5vdChbbXYtbW9kZT1cImVkaXRcIl0pIC5FbXB0eUl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlByb2R1Y3RzIHtcbiAgICAgICAgICAtLXByaWNlLWNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX3NlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1haW5Qcm9kdWN0c19fY29udGVudCB7XG4gICAgICAgICAgLyogd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpOyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0c19faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0czsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



const DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name'
};

const MainProducts__Article = ({
  className,
  value,
  property = "MainProduct",
  innerProperties = {},
  href
}) => {
  innerProperties = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_INNER_PROERTY_SET, innerProperties);
  return __jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-850824557" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('Products__Article', className) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("img", {
    property: innerProperties.image,
    "mv-default": "https://via.placeholder.com/200.png",
    src: value[innerProperties.image],
    className: "jsx-850824557" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('Products__Article-image', {
      Products__Article_clickable: !!href
    }) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), value[innerProperties.price] && __jsx("div", {
    className: "jsx-850824557" + " " + "Products__Article-price-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("span", {
    property: innerProperties.price,
    "mv-defautl": "\u0426\u0435\u043D\u0430",
    className: "jsx-850824557" + " " + "Products__Article-price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, value[innerProperties.price])), __jsx("div", {
    className: "jsx-850824557" + " " + "Products__Article-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, value[innerProperties.name] && __jsx("h6", {
    property: innerProperties.name,
    "mv-default": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    className: "jsx-850824557" + " " + "Products__Article-info-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, value[innerProperties.name])), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2008272965",
    __self: undefined
  }, ".Products__Article_clickable{-webkit-transition:all 0.3s;transition:all 0.3s;}.Products__Article_clickable:hover{cursor:pointer;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.Products__Article_withMargin.Products__Article_withMargin.Products__Article_withMargin{margin:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUN5QixBQUcrQixBQUlMLEFBS0gsWUFDZCxHQUx1QixpQ0FKdkIsMENBS0EiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvTWFpblByb2R1Y3RzL01haW5Qcm9kdWN0c19fQXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGltYWdlOiAncHJvZHVjdC1pbWFnZScsXG4gIHByaWNlOiAncHJpY2UnLFxuICBuYW1lOiAnbmFtZScsXG59XG5cbmNvbnN0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZSA9ICh7IGNsYXNzTmFtZSwgdmFsdWUsIHByb3BlcnR5ID0gXCJNYWluUHJvZHVjdFwiLCBpbm5lclByb3BlcnRpZXMgPSB7fSwgaHJlZn0pID0+IHtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHByb3BlcnR5PXsgcHJvcGVydHkgfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUnLCBjbGFzc05hbWUpfSBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8aW1nIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmltYWdlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUtaW1hZ2UnLCB7XG4gICAgICAgICAgICAgIFByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTogISFocmVmLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMC5wbmdcIlxuICAgICAgICAgICAgc3JjPXsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmltYWdlXSB9XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5wcmljZSB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlXCIgbXYtZGVmYXV0bD1cItCm0LXQvdCwXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdIH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mb1wiPlxuICAgICAgICB7XG4gICAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdICYmIChcbiAgICAgICAgICAgIDxoNiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5uYW1lIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby1oZWFkZXJcIiBtdi1kZWZhdWx0PVwi0J3QsNC30LLQsNC90LjQtVwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdIH08L2g2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZTsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1415317345",
    __self: undefined
  }, ".Products__Article.jsx-850824557{margin:20px 0;}.Products__Article-image.jsx-850824557{height:400px;width:400px;border:2px solid var(--app-main-color);}.Products__Article-info.jsx-850824557{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.Products__Article-price-container.jsx-850824557{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--second-color);background-color:var(--price-color,black);padding:10px;font-weight:bold;}.Products__Article-info-header.jsx-850824557{font-size:28px;font-weight:bold;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-description.jsx-850824557{margin:0;color:white;background-color:var(--app-main-color);padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURrQixBQUl5QixBQUlELEFBTUEsQUFLSyxBQVFILEFBUU4sU0FDRyxJQTNCQSxDQUpkLENBdUJtQixNQVNzQixJQTNCQSxPQW1COUIsU0FDSSxhQUNLLE1BT0wsSUEzQmYsR0FTNEIsTUFtQjVCLENBeEJ5QixtQkFNb0IsNEJBVzdDLGNBVmUsYUFDSSxpQkFDbkIsUUFSQSIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgaW1hZ2U6ICdwcm9kdWN0LWltYWdlJyxcbiAgcHJpY2U6ICdwcmljZScsXG4gIG5hbWU6ICduYW1lJyxcbn1cblxuY29uc3QgTWFpblByb2R1Y3RzX19BcnRpY2xlID0gKHsgY2xhc3NOYW1lLCB2YWx1ZSwgcHJvcGVydHkgPSBcIk1haW5Qcm9kdWN0XCIsIGlubmVyUHJvcGVydGllcyA9IHt9LCBocmVmfSkgPT4ge1xuICBpbm5lclByb3BlcnRpZXMgPSB7IC4uLkRFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQsIC4uLmlubmVyUHJvcGVydGllcyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgcHJvcGVydHk9eyBwcm9wZXJ0eSB9XG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdQcm9kdWN0c19fQXJ0aWNsZScsIGNsYXNzTmFtZSl9IG12LW11bHRpcGxlPVwidHJ1ZVwiPlxuICAgICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICAgIDxpbWcgcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuaW1hZ2UgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdQcm9kdWN0c19fQXJ0aWNsZS1pbWFnZScsIHtcbiAgICAgICAgICAgICAgUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlOiAhIWhyZWYsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjAwLnBuZ1wiXG4gICAgICAgICAgICBzcmM9eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuaW1hZ2VdIH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIHtcbiAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnByaWNlXSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1wcmljZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLnByaWNlIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2VcIiBtdi1kZWZhdXRsPVwi0KbQtdC90LBcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvXCI+XG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gJiYgKFxuICAgICAgICAgICAgPGg2IHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLm5hbWUgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlclwiIG12LWRlZmF1bHQ9XCLQndCw0LfQstCw0L3QuNC1XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gfTwvaDY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGUge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4uUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblByb2R1Y3RzX19BcnRpY2xlOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js */"));
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-4224750092" + " " + "Navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-4224750092" + " " + "Navigation__list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/",
    label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/products",
    label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/about",
    label: "\u041F\u0430\u0441\u0435\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/delivery-and-payment",
    label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/blog",
    label: "\u0411\u043B\u043E\u0433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_Navigation_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: "/contacts",
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
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
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2189054284",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, label)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2189054284",
  __self: undefined
}, ".Navigation__Item.jsx-2189054284{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;--decoration-color:#FFF;font-size:1.3em;height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;-webkit-transition:color 0.3s;transition:color 0.3s;}.Navigation__Item.jsx-2189054284 a.jsx-2189054284:hover,.Navigation__Item.jsx-2189054284 a.jsx-2189054284:focus{color:var(--main-text-color);}.Navigation__Item.jsx-2189054284 a.jsx-2189054284{color:var(--second-color,#FFF);-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbl9fSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHMkIsQUFVTixBQVFpQixBQUlHLFlBWG5CLE1BVkEsV0FrQmYsRUFJdUIsa0RBQ0ksS0FaTixNQVZHLGNBdUJ4QixnRUF0QjBCLFNBVVQsZUFUQyxBQVVNLGdCQVRnQixvQ0FVeEMsQ0FUeUIsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbl9fSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTmF2aWdhdGlvbl9fSXRlbSA9ICh7IGhyZWYsIGxhYmVsIH0pID0+IChcbiAgPGxpIGNsYXNzTmFtZT1cIk5hdmlnYXRpb25fX0l0ZW1cIj5cbiAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxhPntsYWJlbH08L2E+XG4gICAgPC9MaW5rPlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuTmF2aWdhdGlvbl9fSXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLS1kZWNvcmF0aW9uLWNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLW5hdmlnYXRpb24taGVpZ2h0LCA3MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5OYXZpZ2F0aW9uX19JdGVtIGEge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbiAgICAgIH1cblxuICAgICAgLk5hdmlnYXRpb25fX0l0ZW0gYTpob3ZlciwgLk5hdmlnYXRpb25fX0l0ZW0gYTpmb2N1cyAge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLk5hdmlnYXRpb25fX0l0ZW0gYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IsICNGRkYpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uX19JdGVtOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Navigation/Navigation__Item.js */"));

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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/PhonesContainer/PhonesContainer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const PhonesContainer = ({
  property,
  icon,
  className,
  phone = []
}) => __jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, icon, __jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer__list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:", phone.map((item, index) => __jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "+375 11 111 111",
  className: "jsx-1100391483",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, item))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1100391483",
  __self: undefined
}, ".PhonesContainer.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.PhonesContainer__list.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1Bob25lc0NvbnRhaW5lci9QaG9uZXNDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3NCLEFBS0EsMEVBSk0sQUFLRyw4RUFDeEIsZUFMQSIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9QaG9uZXNDb250YWluZXIvUGhvbmVzQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IFBob25lc0NvbnRhaW5lciA9ICh7IHByb3BlcnR5LCBpY29uLCBjbGFzc05hbWUsIHBob25lID0gW119KSA9PiAoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJQaG9uZXNDb250YWluZXJcIj5cbiAgICB7IGljb24gfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUGhvbmVzQ29udGFpbmVyX19saXN0XCI+XG4gICAgICAgINCi0LXQu9C10YTQvtC9OlxuICAgICAgICB7XG4gICAgICAgICAgcGhvbmUubWFwKCAoaXRlbSwgaW5kZXgpID0+IDxzcGFuIGtleT17aW5kZXh9IHByb3BlcnR5PXtwcm9wZXJ0eX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCIgbXYtZGVmYXVsdD1cIiszNzUgMTEgMTExIDExMVwiPnsgaXRlbSB9PC9zcGFuPilcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuUGhvbmVzQ29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLlBob25lc0NvbnRhaW5lcl9fbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGhvbmVzQ29udGFpbmVyOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/PhonesContainer/PhonesContainer.js */"));

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils.js");

var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Social/Social.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

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
  } = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["extractProperties"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_INNER_PROERTY_SET, innerProperties), value);
  return __jsx("div", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-555965192" + " " + "Socials__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    property: link.key,
    "mv-default": "https://twitter.com",
    href: link.value,
    className: "jsx-555965192" + " " + "Socials__icon-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    property: icon.key,
    "mv-default": "https://via.placeholder.com/50.png",
    src: icon.value,
    className: "jsx-555965192" + " " + "Socials__icon-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "555965192",
    __self: undefined
  }, ".Socials__icon-image.jsx-555965192{height:50px;}.Socials__icon.jsx-555965192{margin:0 20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1NvY2lhbC9Tb2NpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJrQixBQUd1QixBQUlFLFlBSGhCLEVBSUEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvU29jaWFsL1NvY2lhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dHJhY3RQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGxpbms6ICdzb2NpYWwtbGluaycsXG4gIGljb246ICdzb2NpYWxzX19pY29uLWltYWdlJyxcbn07XG5cbmNvbnN0IFNvY2lhbCA9ICh7IHByb3BlcnR5ID0gXCJzb2NpYWxcIiwgaW5uZXJQcm9wZXJ0aWVzLCB2YWx1ZSA9IHt9IH0pID0+IHtcblxuICBjb25zdCB7IGxpbmssIGljb24gfSA9IGV4dHJhY3RQcm9wZXJ0aWVzKHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgLi4uaW5uZXJQcm9wZXJ0aWVzIH0sIHZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcHJvcGVydHk9eyBwcm9wZXJ0eSB9IGNsYXNzTmFtZT1cIlNvY2lhbHNfX2ljb25cIiBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxhIHByb3BlcnR5PXsgbGluay5rZXkgfSBjbGFzc05hbWU9XCJTb2NpYWxzX19pY29uLWxpbmtcIiBtdi1kZWZhdWx0PVwiaHR0cHM6Ly90d2l0dGVyLmNvbVwiIGhyZWY9eyBsaW5rLnZhbHVlIH0+XG4gICAgICAgIDxpbWcgcHJvcGVydHk9eyBpY29uLmtleSB9IGNsYXNzTmFtZT1cIlNvY2lhbHNfX2ljb24taW1hZ2VcIiBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwLnBuZ1wiIHNyYz17IGljb24udmFsdWUgfS8+XG4gICAgICA8L2E+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5Tb2NpYWxzX19pY29uLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuU29jaWFsc19faWNvbiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Social/Social.js */"));
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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Values/Values.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Values = ({
  property,
  data
}) => {
  return __jsx("div", {
    className: "jsx-437906025" + " " + "Values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-437906025" + " " + "Values__section section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-437906025" + " " + "Values__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, data ? data.map((value, index) => __jsx(_Values_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })) : false)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "437906025",
    __self: undefined
  }, ".Values__section.jsx-437906025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.Values__content.jsx-437906025{width:var(--page-width);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1ZhbHVlcy9WYWx1ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUd3QixBQU1XLHdCQUNYLGtEQU5NLHdCQU9KLGVBQ0Esc0RBUE8sR0FRTywyRUFQL0IsZ0RBUUEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvVmFsdWVzL1ZhbHVlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTdG9yZW9uIGZyb20gJ3N0b3Jlb24vcmVhY3QnO1xuaW1wb3J0IFZhbHVlc0FydGljbGUgZnJvbSAnLi9WYWx1ZXNfX0FydGljbGUnO1xuXG5cbmNvbnN0IFZhbHVlcyA9ICh7IHByb3BlcnR5LCBkYXRhIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiVmFsdWVzXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJWYWx1ZXNfX3NlY3Rpb24gc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlZhbHVlc19fY29udGVudFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgPyBkYXRhLm1hcCggKHZhbHVlLCBpbmRleCkgPT4gPFZhbHVlc0FydGljbGUga2V5PXtpbmRleH0gdmFsdWU9eyB2YWx1ZSB9IC8+IClcbiAgICAgICAgICAgICAgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlZhbHVlc19fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuVmFsdWVzX19jb250ZW50IHtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsdWVzOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Values/Values.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Values/Values__Article.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
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
  innerProperties = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DEFAULT_INNER_PROERTY_SET, innerProperties);
  return __jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-2657580011" + " " + "Values__Article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    property: innerProperties.image,
    src: value[innerProperties.image],
    "mv-default": "https://via.placeholder.com/300x500.png",
    className: "jsx-2657580011" + " " + "Values__Article-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2657580011" + " " + "Values__Article-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h6", {
    property: innerProperties.header,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2657580011" + " " + "Values__Article-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, value[innerProperties.header]), __jsx("p", {
    property: innerProperties.description,
    "mv-default": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    className: "jsx-2657580011" + " " + "Values__Article-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, value[innerProperties.description])), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2657580011",
    __self: undefined
  }, ".Values__Article-image.jsx-2657580011{width:300px;height:500px;border:2px solid var(--accent-color);}.Values__Article.jsx-2657580011{max-width:304px;margin:10px 0;}.Values__Article-header.jsx-2657580011{font-size:20px;font-weight:bold;padding:10px;background-color:var(--accent-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Values__Article-description.jsx-2657580011{font-size:20px;padding:10px;color:var(--app-main-text-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1ZhbHVlcy9WYWx1ZXNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQixBQUd1QixBQU1JLEFBS0QsQUFRQSxZQWxCRixHQVdJLEFBUUosQ0FiQyxTQUx1QixHQW1CSixFQWJuQyxFQUtlLGFBQ3dCLGdCQVFuQixDQW5CcEIsb0JBWW9CLDhDQVFELGlCQUNuQixJQVJBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL1ZhbHVlcy9WYWx1ZXNfX0FydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VUID0ge1xuICBpbWFnZTogJ2ltYWdlJyxcbiAgaGVhZGVyOiAnaGVhZGVyJyxcbiAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXG59XG5cbmNvbnN0IFZhbHVlc19fQXJ0aWNsZSA9ICh7IHZhbHVlLCBwcm9wZXJ0eSA9ICd2YWx1ZXNBcnRpY2xlJywgaW5uZXJQcm9wZXJ0aWVzID0ge30gfSkgPT4ge1xuICBpbm5lclByb3BlcnRpZXMgPSB7IC4uLkRFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQsIC4uLmlubmVyUHJvcGVydGllcyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiVmFsdWVzX19BcnRpY2xlXCIgcHJvcGVydHk9eyBwcm9wZXJ0eSB9IG12LW11bHRpcGxlPVwidHJ1ZVwiPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJWYWx1ZXNfX0FydGljbGUtaW1hZ2VcIlxuICAgICAgICBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5pbWFnZSB9XG4gICAgICAgIHNyYz17IHZhbHVlW2lubmVyUHJvcGVydGllcy5pbWFnZV0gfVxuICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzMwMHg1MDAucG5nXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVmFsdWVzX19BcnRpY2xlLWluZm9cIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIlZhbHVlc19fQXJ0aWNsZS1oZWFkZXJcIiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5oZWFkZXIgfSBtdi1kZWZhdWx0PVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCI+XG4gICAgICAgICAgeyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuaGVhZGVyXSB9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIlZhbHVlc19fQXJ0aWNsZS1kZXNjcmlwdGlvblwiIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmRlc2NyaXB0aW9uIH0gbXYtZGVmYXVsdD1cItCe0L/QuNGB0LDQvdC40LVcIj5cbiAgICAgICAgICB7IHZhbHVlW2lubmVyUHJvcGVydGllcy5kZXNjcmlwdGlvbl0gfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuVmFsdWVzX19BcnRpY2xlLWltYWdlIHtcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLlZhbHVlc19fQXJ0aWNsZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDRweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5WYWx1ZXNfX0FydGljbGUtaGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5WYWx1ZXNfX0FydGljbGUtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsdWVzX19BcnRpY2xlOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Values/Values__Article.js */"));
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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

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
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
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

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
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


      if (e.state.options && e.state.options.fromExternal) {
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
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
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
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
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
        this.changeState(method, url, as);
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
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

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
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
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

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
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
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
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
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
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


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

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


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
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


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
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


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
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

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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
var _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Index = () => {
  const {
    product,
    hello,
    valuesArticle,
    MainProduct
  } = storeon_react__WEBPACK_IMPORTED_MODULE_1___default()('product', 'hello', 'valuesArticle', 'MainProduct');
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx(_components_Carusel_CaruselNew__WEBPACK_IMPORTED_MODULE_5__["default"], {
    property: "slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx(_components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    property: "MainProduct",
    data: MainProduct,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_components_Hello_Hello__WEBPACK_IMPORTED_MODULE_7__["default"], {
    property: "hello",
    data: hello,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_components_Values_Values__WEBPACK_IMPORTED_MODULE_8__["default"], {
    property: "valuesArticle",
    data: valuesArticle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    property: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./api.js");


const initialisation = store => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
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

module.exports = __webpack_require__(/*! /Users/ws-047-31b/Wotk/honey-ui-3/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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