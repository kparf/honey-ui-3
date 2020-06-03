webpackHotUpdate("static/development/pages/product/[slug].js",{

/***/ "./components/MdComponent/MdComponent.jsx":
/*!************************************************!*\
  !*** ./components/MdComponent/MdComponent.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown/with-html */ "./node_modules/react-markdown/with-html.js");
/* harmony import */ var react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown_with_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! showdown */ "./node_modules/showdown/dist/showdown.js");
/* harmony import */ var showdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(showdown__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MdComponent/MdComponent.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var converter = new showdown__WEBPACK_IMPORTED_MODULE_3__["Converter"]();
converter.setOption('simpleLineBreaks', true);
converter.setOption('encodeEmails', false);

var MdComponent = function MdComponent(_ref) {
  var property = _ref.property,
      data = _ref.data,
      header = _ref.header,
      _ref$innerProperties = _ref.innerProperties,
      innerProperties = _ref$innerProperties === void 0 ? {} : _ref$innerProperties;
  var htmlData = data && converter.makeHtml(data);
  return __jsx("div", {
    className: "jsx-911518528" + " " + "MdComponent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-911518528" + " " + "MdComponent__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-911518528" + " " + "MdComponent__content",
    __self: _this,
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
    className: "jsx-911518528" + " " + "MdComponent__content-container markdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1725113708",
    __self: _this
  }, ".MdComponent.jsx-911518528{width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.MdComponent__section.jsx-911518528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.MdComponent__content-container.jsx-911518528{width:var(--page-width);background:#fbd30391;color:#1a1a1a;padding:20px;box-sizing:border-box;font-size:1.2em;border:4px solid var(--accent-color);}.MdComponent__content.jsx-911518528{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.7em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01kQ29tcG9uZW50L01kQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBR3NCLEFBS0UsQUFNVyxBQVVYLFdBcEJVLGFBV0YscUJBQ1AsY0FDRCxhQUNTLEVBVEEsQUFnQlgsV0FDVyxTQVBOLGdCQWRsQixBQWV1QyxxQ0FDdkMsS0FYcUIsV0FpQkEsa0ZBaEJyQixXQWlCb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01kQ29tcG9uZW50L01kQ29tcG9uZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duL3dpdGgtaHRtbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICdzaG93ZG93bic7XG5cblxuY29uc3QgY29udmVydGVyID0gbmV3IENvbnZlcnRlcigpO1xuY29udmVydGVyLnNldE9wdGlvbignc2ltcGxlTGluZUJyZWFrcycsIHRydWUpO1xuY29udmVydGVyLnNldE9wdGlvbignZW5jb2RlRW1haWxzJywgZmFsc2UpO1xuXG5jb25zdCBNZENvbXBvbmVudCA9ICh7IHByb3BlcnR5LCBkYXRhLCBoZWFkZXIsIGlubmVyUHJvcGVydGllcyA9IHt9ICB9KSA9PiB7XG4gIFxuICBjb25zdCBodG1sRGF0YSA9IGRhdGEgJiYgY29udmVydGVyLm1ha2VIdG1sKGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJNZENvbXBvbmVudFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiTWRDb21wb25lbnRfX3NlY3Rpb25cIj5cbiAgICAgICAgeyBoZWFkZXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1kQ29tcG9uZW50X19jb250ZW50XCI+XG4gICAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIG12LWRlZmF1bHQ9XCLQmtC+0L3RgtC10L3RglwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJNZENvbXBvbmVudF9fY29udGVudC1jb250YWluZXIgbWFya2Rvd25cIlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGh0bWxEYXRhfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLk1kQ29tcG9uZW50IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5NZENvbXBvbmVudF9fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZiZDMwMzkxO1xuICAgICAgICAgIGNvbG9yOiAjMWExYTFhO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjdlbTtcbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQgaDEsXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCBoMixcbiAgICAgICAgLk1kQ29tcG9uZW50X19jb250ZW50IGgzLFxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQgaDQsXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCBoNSxcbiAgICAgICAgLk1kQ29tcG9uZW50X19jb250ZW50IGg2IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZENvbXBvbmVudDsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MdComponent/MdComponent.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1682022437",
    __self: _this
  }, ".MdComponent__content h1,.MdComponent__content h2,.MdComponent__content h3,.MdComponent__content h4,.MdComponent__content h5,.MdComponent__content h6{color:var(--accent-color);}.MdComponent__content a{color:var(--accent-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01kQ29tcG9uZW50L01kQ29tcG9uZW50LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RHlCLEFBUXFDLEFBSUEsMEJBSDVCLEFBSUEiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvTWRDb21wb25lbnQvTWRDb21wb25lbnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24vd2l0aC1odG1sJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJ3Nob3dkb3duJztcblxuXG5jb25zdCBjb252ZXJ0ZXIgPSBuZXcgQ29udmVydGVyKCk7XG5jb252ZXJ0ZXIuc2V0T3B0aW9uKCdzaW1wbGVMaW5lQnJlYWtzJywgdHJ1ZSk7XG5jb252ZXJ0ZXIuc2V0T3B0aW9uKCdlbmNvZGVFbWFpbHMnLCBmYWxzZSk7XG5cbmNvbnN0IE1kQ29tcG9uZW50ID0gKHsgcHJvcGVydHksIGRhdGEsIGhlYWRlciwgaW5uZXJQcm9wZXJ0aWVzID0ge30gIH0pID0+IHtcbiAgXG4gIGNvbnN0IGh0bWxEYXRhID0gZGF0YSAmJiBjb252ZXJ0ZXIubWFrZUh0bWwoZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIk1kQ29tcG9uZW50XCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJNZENvbXBvbmVudF9fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWRDb21wb25lbnRfX2NvbnRlbnRcIj5cbiAgICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgbXYtZGVmYXVsdD1cItCa0L7QvdGC0LXQvdGCXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIk1kQ29tcG9uZW50X19jb250ZW50LWNvbnRhaW5lciBtYXJrZG93blwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaHRtbERhdGF9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuTWRDb21wb25lbnQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1kQ29tcG9uZW50X19zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJkMzAzOTE7XG4gICAgICAgICAgY29sb3I6ICMxYTFhMWE7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN2VtO1xuICAgICAgICB9XG5cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCBoMSxcbiAgICAgICAgLk1kQ29tcG9uZW50X19jb250ZW50IGgyLFxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQgaDMsXG4gICAgICAgIC5NZENvbXBvbmVudF9fY29udGVudCBoNCxcbiAgICAgICAgLk1kQ29tcG9uZW50X19jb250ZW50IGg1LFxuICAgICAgICAuTWRDb21wb25lbnRfX2NvbnRlbnQgaDYge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1kQ29tcG9uZW50X19jb250ZW50IGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1kQ29tcG9uZW50OyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MdComponent/MdComponent.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MdComponent);

/***/ })

})
//# sourceMappingURL=[slug].js.0cb415b5ee460089196d.hot-update.js.map