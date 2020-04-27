webpackHotUpdate("static/development/pages/products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storeon/react */ "./node_modules/storeon/react/index.js");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/init */ "./store/init.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Main/Main */ "./components/Main/Main.jsx");
/* harmony import */ var _components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SectionHeader/SectionHeader */ "./components/SectionHeader/SectionHeader.jsx");
/* harmony import */ var _components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainProducts/MainProducts */ "./components/MainProducts/MainProducts.js");


var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/pages/products.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Products = function Products() {
  var productPage = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('products-page')['products-page'];

  var header = __jsx(_components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "SectionHeader_left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }
  }, "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F");

  var _useStoreon = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('MainProduct'),
      MainProduct = _useStoreon.MainProduct;

  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    property: "MainProduct",
    data: MainProduct,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    property: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }));
};

Products.getInitialProps = function _callee(props) {
  var initData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_store_init__WEBPACK_IMPORTED_MODULE_3__["initialisation"])(props.store));

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

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=products.js.28f2fcaf5ecd001b98ee.hot-update.js.map