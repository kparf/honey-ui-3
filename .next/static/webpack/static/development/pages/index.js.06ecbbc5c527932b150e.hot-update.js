webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storeon/react */ "./node_modules/storeon/react/index.js");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navigation */ "./components/Navigation/Navigation.js");
/* harmony import */ var _Header_Information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header__Information */ "./components/Header/Header__Information.js");
var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Header = function Header(_ref) {
  var _ref$property = _ref.property,
      property = _ref$property === void 0 ? "header" : _ref$property;

  var _useStoreon = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('header'),
      header = _useStoreon.header;

  var phone = header.phone,
      address = header.address,
      logo = header.logo;
  return __jsx("header", {
    property: property,
    className: "jsx-3554774633" + " " + "Header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3554774633" + " " + "Header__container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("img", {
    property: "logo",
    "mv-default": "https://via.placeholder.com/100.png",
    src: logo,
    className: "jsx-3554774633",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(_Header_Information__WEBPACK_IMPORTED_MODULE_4__["default"], {
    phone: phone,
    address: address,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "Navigation_shift",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3554774633",
    __self: _this
  }, ".Header.jsx-3554774633{--icon-height:50px;--navigatioin-border-waigth:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:bold;background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header.jpg');color:var(--app-main-text-color);font-weight:bold;}@media(max-width:1100px){.Header.jsx-3554774633{background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header-1100px_90q.jpg');}}.Header.jsx-3554774633 .Header__container.jsx-3554774633{padding-bottom:40px;}.Header__container.jsx-3554774633{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.Header_navigation_shift.jsx-3554774633{padding-bottom:var(--navigatioin-border-waigth,40px);background-clip:content-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JrQixBQUc4QixBQWdCK0YsQUFLOUYsQUFJUCxBQVF5QyxtQkFoQ3JCLENBcUJuQyxnQ0FuQmUsQ0ErQmUscUJBUmhCLE9BU2QsS0FSMEIsd0JBVnhCLEFBV21CLGdCQXhCRyw2RUF5QlEsQ0F4QlAsbUdBQ0osZUF3QnJCLDhFQXRCbUIsaUJBQ29GLG1HQUNwRSxpQ0FDaEIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RvcmVvbiBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcbmltcG9ydCBIZWFkZXJfX0luZm9ybWF0aW9uIGZyb20gJy4vSGVhZGVyX19JbmZvcm1hdGlvbic7XG5cbmNvbnN0IEhlYWRlciA9ICh7IHByb3BlcnR5PVwiaGVhZGVyXCIgfSkgPT4ge1xuXG4gIGNvbnN0IHsgaGVhZGVyIH0gPSB1c2VTdG9yZW9uKCdoZWFkZXInKTtcbiAgY29uc3QgeyBwaG9uZSwgYWRkcmVzcywgbG9nbyB9ID0gaGVhZGVyO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJIZWFkZXJcIiBwcm9wZXJ0eT17IHByb3BlcnR5IH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlcl9fY29udGFpbmVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBwcm9wZXJ0eT1cImxvZ29cIlxuICAgICAgICAgIG12LWRlZmF1bHQ9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAwLnBuZ1wiXG4gICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxIZWFkZXJfX0luZm9ybWF0aW9uIHBob25lPXtwaG9uZX0gYWRkcmVzcz17YWRkcmVzc30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8TmF2aWdhdGlvbiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uX3NoaWZ0XCIvPlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgLS1pY29uLWhlaWdodDogNTBweDtcbiAgICAgICAgICAtLW5hdmlnYXRpb2luLWJvcmRlci13YWlndGg6IDQwcHg7XG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICBcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHRyYW5zcGFyZW50LCB2YXIoLS1hY2NlbnQtY29sb3IpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy9oZWFkZXIuanBnJyk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLXRleHQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQodHJhbnNwYXJlbnQsIHZhcigtLWFjY2VudC1jb2xvcikpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzL2hlYWRlci0xMTAwcHhfOTBxLmpwZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXIgLkhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5IZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLkhlYWRlcl9uYXZpZ2F0aW9uX3NoaWZ0IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tbmF2aWdhdGlvaW4tYm9yZGVyLXdhaWd0aCwgNDBweCk7XG4gICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Header/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.06ecbbc5c527932b150e.hot-update.js.map