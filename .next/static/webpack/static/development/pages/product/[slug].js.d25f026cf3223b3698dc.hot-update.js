webpackHotUpdate("static/development/pages/product/[slug].js",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
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
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/init */ "./store/init.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/MdComponent/MdComponent */ "./components/MdComponent/MdComponent.jsx");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Main/Main */ "./components/Main/Main.jsx");
/* harmony import */ var _components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SectionHeader/SectionHeader */ "./components/SectionHeader/SectionHeader.jsx");


var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/pages/product/[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Products = function Products() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var slug = router.query.slug;
  var products = storeon_react__WEBPACK_IMPORTED_MODULE_2___default()('MainProduct')['MainProduct'];
  var currentProduct = products.filter(function (product) {
    return product.slug === slug;
  })[0];
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, currentProduct && __jsx(_components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: __jsx(_components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "SectionHeader_left",
      imgSrc: product.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, currentProduct.name),
    data: currentProduct.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    property: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=[slug].js.d25f026cf3223b3698dc.hot-update.js.map