webpackHotUpdate("static/development/pages/contacts.js",{

/***/ "./components/Main/Main.jsx":
/*!**********************************!*\
  !*** ./components/Main/Main.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/Main/Main.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Main = function Main(_ref) {
  var _ref$property = _ref.property,
      property = _ref$property === void 0 ? "main" : _ref$property,
      children = _ref.children;
  return __jsx("main", {
    property: property,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./pages/contacts.js":
/*!***************************!*\
  !*** ./pages/contacts.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storeon/react */ "./node_modules/storeon/react/index.js");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.jsx");
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/init */ "./store/init.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_Description_Description__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Description/Description */ "./components/Description/Description.jsx");
/* harmony import */ var _components_Description_Description_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Description/Description__Header */ "./components/Description/Description__Header.jsx");
/* harmony import */ var _components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SectionHeader/SectionHeader */ "./components/SectionHeader/SectionHeader.jsx");


var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/pages/contacts.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;










var Contacts = function Contacts() {
  var contactsPage = storeon_react__WEBPACK_IMPORTED_MODULE_3___default()('contacts-page')['contacts-page'];

  var header = __jsx(_components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "SectionHeader_left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_components_Description_Description__WEBPACK_IMPORTED_MODULE_9__["default"], {
    header: header,
    property: "description",
    data: contactsPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1944353859" + " " + "mapWrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("iframe", {
    src: "https://yandex.ru/map-widget/v1/?um=constructor%3Afb1cdb0b9acfb40ca4aa65daa33e4533d7d554eb61f4bb2a6c92c2987593de3b&source=constructor",
    width: "1060",
    height: "400",
    frameborder: "0",
    className: "jsx-1944353859" + " " + "map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1944353859",
    __self: _this
  }, ".mapWrapper.jsx-1944353859{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:2em;}.mapWrapper.jsx-1944353859 .map.jsx-1944353859{border:4px solid var(--accent-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9wYWdlcy9jb250YWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3dCLEFBTXdCLHFDQUN2QyxxQ0FOeUIsbUdBQ1IsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL3BhZ2VzL2NvbnRhY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVN0b3Jlb24gZnJvbSAnc3RvcmVvbi9yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4vTWFpbic7XG5pbXBvcnQgeyBpbml0aWFsaXNhdGlvbiB9IGZyb20gJy4uL3N0b3JlL2luaXQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IERlc2NyaXB0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzY3JpcHRpb24vRGVzY3JpcHRpb24nO1xuaW1wb3J0IERlc2NyaXB0aW9uX19IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EZXNjcmlwdGlvbi9EZXNjcmlwdGlvbl9fSGVhZGVyJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlci9TZWN0aW9uSGVhZGVyJztcblxuXG5jb25zdCBDb250YWN0cyA9ICgpID0+IHtcblxuICBjb25zdCBjb250YWN0c1BhZ2UgPSB1c2VTdG9yZW9uKCdjb250YWN0cy1wYWdlJylbJ2NvbnRhY3RzLXBhZ2UnXTtcbiAgY29uc3QgaGVhZGVyID0gPFNlY3Rpb25IZWFkZXIgY2xhc3NOYW1lPVwiU2VjdGlvbkhlYWRlcl9sZWZ0XCI+0JrQvtC90YLQsNC60YLRizwvU2VjdGlvbkhlYWRlcj5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyLz5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgPERlc2NyaXB0aW9uXG4gICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgIHByb3BlcnR5PVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZGF0YT17Y29udGFjdHNQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBXcmFwcGVyXCI+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8veWFuZGV4LnJ1L21hcC13aWRnZXQvdjEvP3VtPWNvbnN0cnVjdG9yJTNBZmIxY2RiMGI5YWNmYjQwY2E0YWE2NWRhYTMzZTQ1MzNkN2Q1NTRlYjYxZjRiYjJhNmM5MmMyOTg3NTkzZGUzYiZhbXA7c291cmNlPWNvbnN0cnVjdG9yXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTA2MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCI+XG4gICAgICAgICAgPC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFwV3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubWFwV3JhcHBlciAubWFwIHtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuQ29udGFjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocHJvcHMpIHtcbiAgY29uc3QgaW5pdERhdGEgPSBhd2FpdCBpbml0aWFsaXNhdGlvbihwcm9wcy5zdG9yZSk7XG4gIHJldHVybiB7IGluaXREYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHM7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/pages/contacts.js */"));
};

Contacts.getInitialProps = function _callee(props) {
  var initData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_store_init__WEBPACK_IMPORTED_MODULE_7__["initialisation"])(props.store));

        case 2:
          initData = _context.sent;
          return _context.abrupt("return", {
            initData: initData
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ })

})
//# sourceMappingURL=contacts.js.5aa1514668dba03a6aff.hot-update.js.map