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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! storeon/react */ "./node_modules/storeon/react/index.js");
/* harmony import */ var storeon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(storeon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/init */ "./store/init.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MdComponent/MdComponent */ "./components/MdComponent/MdComponent.jsx");
/* harmony import */ var _components_Main_Main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Main/Main */ "./components/Main/Main.jsx");
/* harmony import */ var _components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SectionHeader/SectionHeader */ "./components/SectionHeader/SectionHeader.jsx");


var _this = undefined,
    _jsxFileName = "/mnt/w/work/honey-ui-3/pages/product/[slug].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Products = function Products() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var slug = router.query.slug;
  var products = storeon_react__WEBPACK_IMPORTED_MODULE_3___default()('MainProduct')['MainProduct'];
  var currentProduct = products.filter(function (product) {
    return product.slug === slug;
  })[0];
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, [slug === 'natural' ? [__jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "\u041A\u0443\u043F\u0438\u0442\u044C \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0434 \u0432 \u0413\u043E\u043C\u0435\u043B\u0435 - \u0421\u0435\u043C\u0435\u0439\u043D\u0430\u044F \u043F\u0430\u0441\u0435\u043A\u0430 "), __jsx("meta", {
    name: "description",
    content: "\u041A\u0443\u043F\u0438\u0442\u044C \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0451\u0434 \u0432 \u0413\u043E\u043C\u0435\u043B\u0435 \u043C\u043E\u0436\u043D\u043E \u043D\u0430 \u043D\u0430\u0448\u0435\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u043E\u0439 \u043F\u0430\u0441\u0435\u043A\u0435 \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0446\u0435\u043D\u0430\u043C. \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u044F\u0440\u043C\u0430\u0440\u043A\u0430\u0445, \u0432\u044B\u0432\u043E\u0437\u0438\u043C \u043F\u0447\u0451\u043B \u043D\u0430 \u043C\u0435\u0434\u043E\u0441\u0431\u043E\u0440, \u0437\u0430\u0431\u043E\u0442\u0438\u043C\u0441\u044F \u043E\u0431 \u0438\u0445 \u0437\u0434\u043E\u0440\u043E\u0432\u044C\u0435. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })] : null, slug === 'crem' && [__jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "\u041A\u0443\u043F\u0438\u0442\u044C \u043A\u0440\u0435\u043C-\u043C\u0451\u0434 \u0432 \u0413\u043E\u043C\u0435\u043B\u0435 \u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439"), __jsx("meta", {
    name: "description",
    content: "\u041A\u0443\u043F\u0438\u0442\u044C \u043A\u0440\u0435\u043C-\u043C\u0451\u0434 \u0432 \u0413\u043E\u043C\u0435\u043B\u0435 \u043C\u043E\u0436\u043D\u043E \u0443 \u043D\u0430\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u0439 \u0438 \u043F\u043E \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u043C \u0446\u0435\u043D\u0430\u043C! \u0424\u043E\u0442\u043E, \u0446\u0435\u043D\u044B \u043C\u0435\u0434\u0430. \u0421\u043F\u0435\u0448\u0438\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0435\u0436\u043D\u043E\u0435 \u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E! ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })]]), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, currentProduct && __jsx(_components_MdComponent_MdComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    header: __jsx(_components_SectionHeader_SectionHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "SectionHeader_left",
      imgSrc: currentProduct['product-image'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, currentProduct.name),
    data: currentProduct.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    property: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_store_init__WEBPACK_IMPORTED_MODULE_4__["initialisation"])(props.store));

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
//# sourceMappingURL=[slug].js.ac4e8739882ad099fedf.hot-update.js.map