webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Carusel/CaruselNew.js":
/*!******************************************!*\
  !*** ./components/Carusel/CaruselNew.js ***!
  \******************************************/
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
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Carousel */ "./node_modules/react-bootstrap/esm/Carousel.js");
/* harmony import */ var _CaruselNew_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CaruselNew__Slide */ "./components/Carusel/CaruselNew__Slide.js");
var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Carusel = function Carusel(_ref) {
  var property = _ref.property;
  var slideList = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()(property)[property];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      index = _useState[0],
      setIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      direction = _useState2[0],
      setDirection = _useState2[1];

  var handleSelect = function handleSelect(selectedIndex, e) {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fade: true,
    className: "Carusel",
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, slideList ? slideList.map(function (slide, i) {
    return __jsx(_CaruselNew_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      active: i === index,
      key: i,
      property: property,
      value: slide,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 52
      }
    });
  }) : false), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2670317827",
    __self: _this
  }, ".Carusel.jsx-2311951840{--carusel-height:500px;--carusel-delay:5s;width:100%;height:var(--carusel-height);position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBR2tDLHVCQUNKLG1CQUNSLFdBQ2tCLDZCQUNYLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9DYXJ1c2VsL0NhcnVzZWxOZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU3RvcmVvbiBmcm9tICdzdG9yZW9uL3JlYWN0J1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWwnO1xuaW1wb3J0IENhcnVzZWxfX1NsaWRlIGZyb20gJy4vQ2FydXNlbE5ld19fU2xpZGUnO1xuXG5cbmNvbnN0IENhcnVzZWwgPSAoeyBwcm9wZXJ0eSB9KSA9PiB7XG4gIGNvbnN0IHNsaWRlTGlzdCA9IHVzZVN0b3Jlb24ocHJvcGVydHkpW3Byb3BlcnR5XTtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChzZWxlY3RlZEluZGV4LCBlKSA9PiB7XG4gICAgc2V0SW5kZXgoc2VsZWN0ZWRJbmRleCk7XG4gICAgc2V0RGlyZWN0aW9uKGUuZGlyZWN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2Fyb3VzZWwgZmFkZT17dHJ1ZX0gY2xhc3NOYW1lPVwiQ2FydXNlbFwiIGFjdGl2ZUluZGV4PXtpbmRleH0gZGlyZWN0aW9uPXtkaXJlY3Rpb259IG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9PlxuICAgICAgICB7XG4gICAgICAgICAgc2xpZGVMaXN0ID8gc2xpZGVMaXN0Lm1hcCggKHNsaWRlLCBpKSA9PiA8Q2FydXNlbF9fU2xpZGUgYWN0aXZlPXtpID09PSBpbmRleH0ga2V5PXsgaSB9IHByb3BlcnR5PXsgcHJvcGVydHkgfSB2YWx1ZT17IHNsaWRlIH0vPikgOiBmYWxzZVxuICAgICAgICB9XG4gICAgICA8L0Nhcm91c2VsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5DYXJ1c2VsIHtcbiAgICAgICAgICAtLWNhcnVzZWwtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAtLWNhcnVzZWwtZGVsYXk6IDVzO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0tY2FydXNlbC1oZWlnaHQpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5DYXJ1c2VsIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQGtleWZyYW1lcyBmYWRlIHtcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcbiAgICAgICAgICBhbmltYXRpb246IDFzIGZhZGU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5DYXJ1c2VsX19saXN0IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLkNhcnVzZWwgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnVzZWw7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1944462346",
    __self: _this
  }, ".Carusel{height:500px;}.carousel-item{height:500px;}@-webkit-keyframes fade{0%{opacity:0;}100%{opacity:1;}}@keyframes fade{0%{opacity:0;}100%{opacity:1;}}.carousel-item.active{-webkit-animation:1s fade;animation:1s fade;}body[mv-mode=\"edit\"] .Carusel__list{-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Carusel .carousel-item{display:block;opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL0NhcnVzZWwvQ2FydXNlbE5ldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3lCLEFBR3dCLEFBR0EsQUFLRCxBQUdBLEFBS00sQUFJSCxBQVFELFVBbkJkLEFBR0EsR0FYRixBQUdBLENBeUJZLFVBQ1osb0JBYkEsYUFJa0Isd0NBQ0gsMEVBQ0EsYUFDUyw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvQ2FydXNlbC9DYXJ1c2VsTmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCdcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJztcbmltcG9ydCBDYXJ1c2VsX19TbGlkZSBmcm9tICcuL0NhcnVzZWxOZXdfX1NsaWRlJztcblxuXG5jb25zdCBDYXJ1c2VsID0gKHsgcHJvcGVydHkgfSkgPT4ge1xuICBjb25zdCBzbGlkZUxpc3QgPSB1c2VTdG9yZW9uKHByb3BlcnR5KVtwcm9wZXJ0eV07XG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoc2VsZWN0ZWRJbmRleCwgZSkgPT4ge1xuICAgIHNldEluZGV4KHNlbGVjdGVkSW5kZXgpO1xuICAgIHNldERpcmVjdGlvbihlLmRpcmVjdGlvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcm91c2VsIGZhZGU9e3RydWV9IGNsYXNzTmFtZT1cIkNhcnVzZWxcIiBhY3RpdmVJbmRleD17aW5kZXh9IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBvblNlbGVjdD17aGFuZGxlU2VsZWN0fT5cbiAgICAgICAge1xuICAgICAgICAgIHNsaWRlTGlzdCA/IHNsaWRlTGlzdC5tYXAoIChzbGlkZSwgaSkgPT4gPENhcnVzZWxfX1NsaWRlIGFjdGl2ZT17aSA9PT0gaW5kZXh9IGtleT17IGkgfSBwcm9wZXJ0eT17IHByb3BlcnR5IH0gdmFsdWU9eyBzbGlkZSB9Lz4pIDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgPC9DYXJvdXNlbD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuQ2FydXNlbCB7XG4gICAgICAgICAgLS1jYXJ1c2VsLWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgLS1jYXJ1c2VsLWRlbGF5OiA1cztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcnVzZWwtaGVpZ2h0KTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuQ2FydXNlbCB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XG4gICAgICAgICAgYW5pbWF0aW9uOiAxcyBmYWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuQ2FydXNlbF9fbGlzdCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5DYXJ1c2VsIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ1c2VsOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/Carusel/CaruselNew.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Carusel);

/***/ })

})
//# sourceMappingURL=index.js.127267ba50fdd9cccc68.hot-update.js.map