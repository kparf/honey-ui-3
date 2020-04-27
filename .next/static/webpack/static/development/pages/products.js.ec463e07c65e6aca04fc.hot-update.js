webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/MainProducts/MainProducts.js":
/*!*************************************************!*\
  !*** ./components/MainProducts/MainProducts.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainProducts__Article */ "./components/MainProducts/MainProducts__Article.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var MainProducts = function MainProducts(_ref) {
  var property = _ref.property,
      data = _ref.data,
      header = _ref.header;
  return __jsx("div", {
    className: "jsx-421961682" + " " + "Products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-421961682" + " " + "Products__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-421961682" + " " + "MainProducts__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, data ? data.map(function (product, index) {
    return __jsx(_MainProducts_Article__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'Products__Article_withMargin ',
      key: index,
      value: product,
      href: "/product/".concat(product.slug),
      __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2892341378",
    __self: _this
  }, "body:not([mv-mode=\"edit\"]) .EmptyItem{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUd3QixhQUNmIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpblByb2R1Y3RzX19BcnRpY2xlIGZyb20gJy4vTWFpblByb2R1Y3RzX19BcnRpY2xlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTWFpblByb2R1Y3RzID0gKHsgcHJvcGVydHksIGRhdGEsIGhlYWRlciB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0c19fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblByb2R1Y3RzX19jb250ZW50XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSA/IGRhdGEubWFwKCAocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWFpblByb2R1Y3RzX19BcnRpY2xlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydQcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luICd9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHByb2R1Y3QgfVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJFbXB0eUl0ZW1cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3QtaW1hZ2UnOiAnJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Om5vdChbbXYtbW9kZT1cImVkaXRcIl0pIC5FbXB0eUl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlByb2R1Y3RzIHtcbiAgICAgICAgICAtLXByaWNlLWNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX3NlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1haW5Qcm9kdWN0c19fY29udGVudCB7XG4gICAgICAgICAgLyogd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpOyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0c19faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0czsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3795360089",
    __self: _this
  }, ".Products.jsx-421961682{--price-color:var(--app-main-color);}.Products__section.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.MainProducts__content.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.products__header.jsx-421961682 .section__header-wrapper.jsx-421961682::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUcrQyxBQUl2QixBQU9BLEFBT0Qsb0NBakJkLG1DQWtCQSxHQWRxQixBQU9KLGVBQ0EseURBQ2MscUJBUlAsOEVBQ3hCLHdCQVFBIiwiZmlsZSI6Ii9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpblByb2R1Y3RzX19BcnRpY2xlIGZyb20gJy4vTWFpblByb2R1Y3RzX19BcnRpY2xlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgTWFpblByb2R1Y3RzID0gKHsgcHJvcGVydHksIGRhdGEsIGhlYWRlciB9KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJQcm9kdWN0c19fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWFpblByb2R1Y3RzX19jb250ZW50XCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YSA/IGRhdGEubWFwKCAocHJvZHVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWFpblByb2R1Y3RzX19BcnRpY2xlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydQcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luICd9XG4gICAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IHByb2R1Y3QgfVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5zbHVnfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSkgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICAgIDxNYWluUHJvZHVjdHNfX0FydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJFbXB0eUl0ZW1cIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgICAgICAgJ3Byb2R1Y3QtaW1hZ2UnOiAnJyxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5Om5vdChbbXYtbW9kZT1cImVkaXRcIl0pIC5FbXB0eUl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLlByb2R1Y3RzIHtcbiAgICAgICAgICAtLXByaWNlLWNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX3NlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLk1haW5Qcm9kdWN0c19fY29udGVudCB7XG4gICAgICAgICAgLyogd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpOyAqL1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9kdWN0c19faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0czsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts.js */"));
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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name',
  slug: 'slug',
  text: 'text'
};

var MainProducts__Article = function MainProducts__Article(_ref) {
  var className = _ref.className,
      value = _ref.value,
      _ref$property = _ref.property,
      property = _ref$property === void 0 ? "MainProduct" : _ref$property,
      _ref$innerProperties = _ref.innerProperties,
      innerProperties = _ref$innerProperties === void 0 ? {} : _ref$innerProperties,
      href = _ref.href;
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  return __jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-3683567079" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('Products__Article', className) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    property: innerProperties.image,
    "mv-default": "https://via.placeholder.com/200.png",
    src: value[innerProperties.image],
    className: "jsx-3683567079" + " " + (classnames__WEBPACK_IMPORTED_MODULE_4___default()('Products__Article-image', {
      Products__Article_clickable: !!href
    }) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), value[innerProperties.price] && __jsx("div", {
    className: "jsx-3683567079" + " " + "Products__Article-price-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("span", {
    property: innerProperties.price,
    "mv-defautl": "\u0426\u0435\u043D\u0430",
    className: "jsx-3683567079" + " " + "Products__Article-price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, value[innerProperties.price])), __jsx("div", {
    className: "jsx-3683567079" + " " + "Products__Article-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, [value[innerProperties.name] && __jsx("h6", {
    property: innerProperties.name,
    "mv-default": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    className: "jsx-3683567079" + " " + "Products__Article-info-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, value[innerProperties.name]), __jsx("span", {
    property: innerProperties.slug,
    "mv-default": "slug",
    className: "jsx-3683567079" + " " + "Products__Article-info-slug",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, value[innerProperties.slug]), __jsx("span", {
    property: innerProperties.text,
    "mv-default": "Text",
    className: "jsx-3683567079" + " " + "Products__Article-info-text markdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, value[innerProperties.text])]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2008272965",
    __self: _this
  }, ".Products__Article_clickable{-webkit-transition:all 0.3s;transition:all 0.3s;}.Products__Article_clickable:hover{cursor:pointer;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.Products__Article_withMargin.Products__Article_withMargin.Products__Article_withMargin{margin:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkN5QixBQUcrQixBQUlMLEFBS0gsWUFDZCxHQUx1QixpQ0FKdkIsMENBS0EiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvTWFpblByb2R1Y3RzL01haW5Qcm9kdWN0c19fQXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGltYWdlOiAncHJvZHVjdC1pbWFnZScsXG4gIHByaWNlOiAncHJpY2UnLFxuICBuYW1lOiAnbmFtZScsXG4gIHNsdWc6ICdzbHVnJyxcbiAgdGV4dDogJ3RleHQnLFxufVxuXG5jb25zdCBNYWluUHJvZHVjdHNfX0FydGljbGUgPSAoeyBjbGFzc05hbWUsIHZhbHVlLCBwcm9wZXJ0eSA9IFwiTWFpblByb2R1Y3RcIiwgaW5uZXJQcm9wZXJ0aWVzID0ge30sIGhyZWZ9KSA9PiB7XG4gIGlubmVyUHJvcGVydGllcyA9IHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgLi4uaW5uZXJQcm9wZXJ0aWVzIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBwcm9wZXJ0eT17IHByb3BlcnR5IH1cbiAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ1Byb2R1Y3RzX19BcnRpY2xlJywgY2xhc3NOYW1lKX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGltZyBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5pbWFnZSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ1Byb2R1Y3RzX19BcnRpY2xlLWltYWdlJywge1xuICAgICAgICAgICAgICBQcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6ICEhaHJlZixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgbXYtZGVmYXVsdD1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDAucG5nXCJcbiAgICAgICAgICAgIHNyYz17IHZhbHVlW2lubmVyUHJvcGVydGllcy5pbWFnZV0gfVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAge1xuICAgICAgICB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMucHJpY2UgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1wcmljZVwiIG12LWRlZmF1dGw9XCLQptC10L3QsFwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnByaWNlXSB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm9cIj5cbiAgICAgICAge1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5uYW1lXSAmJiAoXG4gICAgICAgICAgICAgIDxoNiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5uYW1lIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby1oZWFkZXJcIiBtdi1kZWZhdWx0PVwi0J3QsNC30LLQsNC90LjQtVwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdIH08L2g2PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLnNsdWcgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXNsdWdcIiBtdi1kZWZhdWx0PVwic2x1Z1wiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnNsdWddIH08L3NwYW4+LFxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMudGV4dCB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCBtYXJrZG93blwiIG12LWRlZmF1bHQ9XCJUZXh0XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMudGV4dF0gfTwvc3Bhbj5cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4uUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXNsdWcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1ZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUHJvZHVjdHNfX0FydGljbGU7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2409866470",
    __self: _this
  }, ".Products__Article.jsx-3683567079{margin:20px 0;}.Products__Article-image.jsx-3683567079{height:400px;width:400px;border:2px solid var(--app-main-color);}.Products__Article-info.jsx-3683567079{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:15px;}.Products__Article-price-container.jsx-3683567079{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--second-color);background-color:var(--price-color,black);padding:10px;font-weight:bold;}.Products__Article-info-header.jsx-3683567079{font-size:28px;font-weight:bold;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-slug.jsx-3683567079{display:none;font-size:16px;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-text.jsx-3683567079{display:none;font-size:16px;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}.Products__Article-info-description.jsx-3683567079{margin:0;color:white;background-color:var(--app-main-color);padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkRrQixBQUl5QixBQUlELEFBTUEsQUFNSyxBQVFILEFBUUYsQUFRQSxBQVFKLFNBQ0csSUE1Q0EsQUE0QkcsQUFRQSxDQXhDakIsQ0F3Qm1CLE1BeUJzQixJQTVDQSxHQTRCOUIsQUFRQSxJQWhCQSxLQVNJLEFBUUEsSUFoQkEsU0FTSyxBQVFBLElBaEJBLE1BdUJMLElBNUNmLEdBVTRCLE1BbUM1QixDQXpDeUIsbUJBT29CLHdCQW1CN0MsQUFRQSxJQWhCQSxjQVZlLGFBQ0ksaUJBQ25CLFFBVGtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9NYWluUHJvZHVjdHMvTWFpblByb2R1Y3RzX19BcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuY29uc3QgREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCA9IHtcbiAgaW1hZ2U6ICdwcm9kdWN0LWltYWdlJyxcbiAgcHJpY2U6ICdwcmljZScsXG4gIG5hbWU6ICduYW1lJyxcbiAgc2x1ZzogJ3NsdWcnLFxuICB0ZXh0OiAndGV4dCcsXG59XG5cbmNvbnN0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZSA9ICh7IGNsYXNzTmFtZSwgdmFsdWUsIHByb3BlcnR5ID0gXCJNYWluUHJvZHVjdFwiLCBpbm5lclByb3BlcnRpZXMgPSB7fSwgaHJlZn0pID0+IHtcbiAgaW5uZXJQcm9wZXJ0aWVzID0geyAuLi5ERUZBVUxUX0lOTkVSX1BST0VSVFlfU0VULCAuLi5pbm5lclByb3BlcnRpZXMgfTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHByb3BlcnR5PXsgcHJvcGVydHkgfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUnLCBjbGFzc05hbWUpfSBtdi1tdWx0aXBsZT1cInRydWVcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICA8aW1nIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLmltYWdlIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnUHJvZHVjdHNfX0FydGljbGUtaW1hZ2UnLCB7XG4gICAgICAgICAgICAgIFByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZTogISFocmVmLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBtdi1kZWZhdWx0PVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzIwMC5wbmdcIlxuICAgICAgICAgICAgc3JjPXsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLmltYWdlXSB9XG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG4gICAgICB7XG4gICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5wcmljZV0gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5wcmljZSB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlXCIgbXYtZGVmYXV0bD1cItCm0LXQvdCwXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdIH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mb1wiPlxuICAgICAgICB7XG4gICAgICAgICAgW1xuICAgICAgICAgICAgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdICYmIChcbiAgICAgICAgICAgICAgPGg2IHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLm5hbWUgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlclwiIG12LWRlZmF1bHQ9XCLQndCw0LfQstCw0L3QuNC1XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMubmFtZV0gfTwvaDY+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMuc2x1ZyB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1Z1wiIG12LWRlZmF1bHQ9XCJzbHVnXCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMuc2x1Z10gfTwvc3Bhbj4sXG4gICAgICAgICAgICA8c3BhbiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy50ZXh0IH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby10ZXh0IG1hcmtkb3duXCIgbXYtZGVmYXVsdD1cIlRleHRcIj57IHZhbHVlW2lubmVyUHJvcGVydGllcy50ZXh0XSB9PC9zcGFuPlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtcHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpY2UtY29sb3IsIGJsYWNrKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8taGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1ZyB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mby1zbHVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm9kdWN0c19fQXJ0aWNsZTsiXX0= */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2039966116",
    __self: _this
  }, "body[mv-mode=\"edit\"] .Products__Article-info-slug{display:block;width:100%;}body[mv-mode=\"edit\"] .Products__Article-info-text{display:block;width:100%;}body[mv-mode=\"edit\"] .Products__Article-info{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body[mv-mode=\"edit\"] .Products__Article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL01haW5Qcm9kdWN0cy9NYWluUHJvZHVjdHNfX0FydGljbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUh5QixBQUd5QixBQUtBLEFBS0QsQUFLQSxjQWRGLEFBS0EsV0FKYixBQUtBLGlEQUl3QixBQUtBLDhFQUp4QixBQUthLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL3dzLTA0Ny0zMWIvV290ay9ob25leS11aS0zL2NvbXBvbmVudHMvTWFpblByb2R1Y3RzL01haW5Qcm9kdWN0c19fQXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IERFRkFVTFRfSU5ORVJfUFJPRVJUWV9TRVQgPSB7XG4gIGltYWdlOiAncHJvZHVjdC1pbWFnZScsXG4gIHByaWNlOiAncHJpY2UnLFxuICBuYW1lOiAnbmFtZScsXG4gIHNsdWc6ICdzbHVnJyxcbiAgdGV4dDogJ3RleHQnLFxufVxuXG5jb25zdCBNYWluUHJvZHVjdHNfX0FydGljbGUgPSAoeyBjbGFzc05hbWUsIHZhbHVlLCBwcm9wZXJ0eSA9IFwiTWFpblByb2R1Y3RcIiwgaW5uZXJQcm9wZXJ0aWVzID0ge30sIGhyZWZ9KSA9PiB7XG4gIGlubmVyUHJvcGVydGllcyA9IHsgLi4uREVGQVVMVF9JTk5FUl9QUk9FUlRZX1NFVCwgLi4uaW5uZXJQcm9wZXJ0aWVzIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBwcm9wZXJ0eT17IHByb3BlcnR5IH1cbiAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ1Byb2R1Y3RzX19BcnRpY2xlJywgY2xhc3NOYW1lKX0gbXYtbXVsdGlwbGU9XCJ0cnVlXCI+XG4gICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgPGltZyBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5pbWFnZSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ1Byb2R1Y3RzX19BcnRpY2xlLWltYWdlJywge1xuICAgICAgICAgICAgICBQcm9kdWN0c19fQXJ0aWNsZV9jbGlja2FibGU6ICEhaHJlZixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgbXYtZGVmYXVsdD1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yMDAucG5nXCJcbiAgICAgICAgICAgIHNyYz17IHZhbHVlW2lubmVyUHJvcGVydGllcy5pbWFnZV0gfVxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuICAgICAge1xuICAgICAgICB2YWx1ZVtpbm5lclByb3BlcnRpZXMucHJpY2VdICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLXByaWNlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMucHJpY2UgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1wcmljZVwiIG12LWRlZmF1dGw9XCLQptC10L3QsFwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnByaWNlXSB9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm9cIj5cbiAgICAgICAge1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHZhbHVlW2lubmVyUHJvcGVydGllcy5uYW1lXSAmJiAoXG4gICAgICAgICAgICAgIDxoNiBwcm9wZXJ0eT17IGlubmVyUHJvcGVydGllcy5uYW1lIH0gY2xhc3NOYW1lPVwiUHJvZHVjdHNfX0FydGljbGUtaW5mby1oZWFkZXJcIiBtdi1kZWZhdWx0PVwi0J3QsNC30LLQsNC90LjQtVwiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLm5hbWVdIH08L2g2PlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXsgaW5uZXJQcm9wZXJ0aWVzLnNsdWcgfSBjbGFzc05hbWU9XCJQcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXNsdWdcIiBtdi1kZWZhdWx0PVwic2x1Z1wiPnsgdmFsdWVbaW5uZXJQcm9wZXJ0aWVzLnNsdWddIH08L3NwYW4+LFxuICAgICAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpbm5lclByb3BlcnRpZXMudGV4dCB9IGNsYXNzTmFtZT1cIlByb2R1Y3RzX19BcnRpY2xlLWluZm8tdGV4dCBtYXJrZG93blwiIG12LWRlZmF1bHQ9XCJUZXh0XCI+eyB2YWx1ZVtpbm5lclByb3BlcnRpZXMudGV4dF0gfTwvc3Bhbj5cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX2NsaWNrYWJsZSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGVfY2xpY2thYmxlOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlX3dpdGhNYXJnaW4uUHJvZHVjdHNfX0FydGljbGVfd2l0aE1hcmdpbi5Qcm9kdWN0c19fQXJ0aWNsZV93aXRoTWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLWltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuUHJvZHVjdHNfX0FydGljbGUtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLlByb2R1Y3RzX19BcnRpY2xlLXByaWNlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaWNlLWNvbG9yLCBibGFjayk7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXNsdWcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHlbbXYtbW9kZT1cImVkaXRcIl0gLlByb2R1Y3RzX19BcnRpY2xlLWluZm8tc2x1ZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5W212LW1vZGU9XCJlZGl0XCJdIC5Qcm9kdWN0c19fQXJ0aWNsZS1pbmZvLXRleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUtaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keVttdi1tb2RlPVwiZWRpdFwiXSAuUHJvZHVjdHNfX0FydGljbGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUHJvZHVjdHNfX0FydGljbGU7Il19 */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/MainProducts/MainProducts__Article.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MainProducts__Article);

/***/ }),

/***/ "./components/MdComponent/MdComponent.jsx":
false,

/***/ "./node_modules/bail/index.js":
false,

/***/ "./node_modules/character-entities-legacy/index.json":
false,

/***/ "./node_modules/character-reference-invalid/index.json":
false,

/***/ "./node_modules/collapse-white-space/index.js":
false,

/***/ "./node_modules/dom-serializer/foreignNames.json":
false,

/***/ "./node_modules/dom-serializer/index.js":
false,

/***/ "./node_modules/domelementtype/lib/index.js":
false,

/***/ "./node_modules/domhandler/lib/index.js":
false,

/***/ "./node_modules/domhandler/lib/node.js":
false,

/***/ "./node_modules/domutils/lib/helpers.js":
false,

/***/ "./node_modules/domutils/lib/index.js":
false,

/***/ "./node_modules/domutils/lib/legacy.js":
false,

/***/ "./node_modules/domutils/lib/manipulation.js":
false,

/***/ "./node_modules/domutils/lib/querying.js":
false,

/***/ "./node_modules/domutils/lib/stringify.js":
false,

/***/ "./node_modules/domutils/lib/tagtypes.js":
false,

/***/ "./node_modules/domutils/lib/traversal.js":
false,

/***/ "./node_modules/entities/lib/decode.js":
false,

/***/ "./node_modules/entities/lib/decode_codepoint.js":
false,

/***/ "./node_modules/entities/lib/encode.js":
false,

/***/ "./node_modules/entities/lib/index.js":
false,

/***/ "./node_modules/entities/lib/maps/decode.json":
false,

/***/ "./node_modules/entities/lib/maps/entities.json":
false,

/***/ "./node_modules/entities/lib/maps/legacy.json":
false,

/***/ "./node_modules/entities/lib/maps/xml.json":
false,

/***/ "./node_modules/events/events.js":
false,

/***/ "./node_modules/extend/index.js":
false,

/***/ "./node_modules/html-to-react/index.js":
false,

/***/ "./node_modules/html-to-react/lib/camel-case-attribute-names.js":
false,

/***/ "./node_modules/html-to-react/lib/is-valid-node-definitions.js":
false,

/***/ "./node_modules/html-to-react/lib/parser.js":
false,

/***/ "./node_modules/html-to-react/lib/process-node-definitions.js":
false,

/***/ "./node_modules/html-to-react/lib/processing-instructions.js":
false,

/***/ "./node_modules/html-to-react/lib/should-process-node-definitions.js":
false,

/***/ "./node_modules/html-to-react/lib/utils.js":
false,

/***/ "./node_modules/htmlparser2/lib/CollectingHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/FeedHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/MultiplexHandler.js":
false,

/***/ "./node_modules/htmlparser2/lib/Parser.js":
false,

/***/ "./node_modules/htmlparser2/lib/Tokenizer.js":
false,

/***/ "./node_modules/htmlparser2/lib/index.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-alphabetical/index.js":
false,

/***/ "./node_modules/is-alphanumerical/index.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/is-decimal/index.js":
false,

/***/ "./node_modules/is-hexadecimal/index.js":
false,

/***/ "./node_modules/is-plain-obj/index.js":
false,

/***/ "./node_modules/is-whitespace-character/index.js":
false,

/***/ "./node_modules/is-word-character/index.js":
false,

/***/ "./node_modules/lodash.camelcase/index.js":
false,

/***/ "./node_modules/markdown-escapes/index.js":
false,

/***/ "./node_modules/mdast-add-list-metadata/index.js":
false,

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
false,

/***/ "./node_modules/parse-entities/index.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/ramda/src/addIndex.js":
false,

/***/ "./node_modules/ramda/src/bind.js":
false,

/***/ "./node_modules/ramda/src/curryN.js":
false,

/***/ "./node_modules/ramda/src/filter.js":
false,

/***/ "./node_modules/ramda/src/find.js":
false,

/***/ "./node_modules/ramda/src/forEach.js":
false,

/***/ "./node_modules/ramda/src/internal/_arity.js":
false,

/***/ "./node_modules/ramda/src/internal/_checkForMethod.js":
false,

/***/ "./node_modules/ramda/src/internal/_complement.js":
false,

/***/ "./node_modules/ramda/src/internal/_concat.js":
false,

/***/ "./node_modules/ramda/src/internal/_curry1.js":
false,

/***/ "./node_modules/ramda/src/internal/_curry2.js":
false,

/***/ "./node_modules/ramda/src/internal/_curry3.js":
false,

/***/ "./node_modules/ramda/src/internal/_curryN.js":
false,

/***/ "./node_modules/ramda/src/internal/_dispatchable.js":
false,

/***/ "./node_modules/ramda/src/internal/_filter.js":
false,

/***/ "./node_modules/ramda/src/internal/_has.js":
false,

/***/ "./node_modules/ramda/src/internal/_isArguments.js":
false,

/***/ "./node_modules/ramda/src/internal/_isArray.js":
false,

/***/ "./node_modules/ramda/src/internal/_isArrayLike.js":
false,

/***/ "./node_modules/ramda/src/internal/_isObject.js":
false,

/***/ "./node_modules/ramda/src/internal/_isPlaceholder.js":
false,

/***/ "./node_modules/ramda/src/internal/_isString.js":
false,

/***/ "./node_modules/ramda/src/internal/_isTransformer.js":
false,

/***/ "./node_modules/ramda/src/internal/_map.js":
false,

/***/ "./node_modules/ramda/src/internal/_reduce.js":
false,

/***/ "./node_modules/ramda/src/internal/_reduced.js":
false,

/***/ "./node_modules/ramda/src/internal/_xfBase.js":
false,

/***/ "./node_modules/ramda/src/internal/_xfilter.js":
false,

/***/ "./node_modules/ramda/src/internal/_xfind.js":
false,

/***/ "./node_modules/ramda/src/internal/_xmap.js":
false,

/***/ "./node_modules/ramda/src/internal/_xwrap.js":
false,

/***/ "./node_modules/ramda/src/keys.js":
false,

/***/ "./node_modules/ramda/src/map.js":
false,

/***/ "./node_modules/ramda/src/reduce.js":
false,

/***/ "./node_modules/ramda/src/reject.js":
false,

/***/ "./node_modules/ramda/src/toPairs.js":
false,

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
false,

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/html-parser.js":
false,

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
false,

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
false,

/***/ "./node_modules/react-markdown/lib/renderers.js":
false,

/***/ "./node_modules/react-markdown/lib/symbols.js":
false,

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
false,

/***/ "./node_modules/react-markdown/lib/with-html.js":
false,

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
false,

/***/ "./node_modules/react-markdown/with-html.js":
false,

/***/ "./node_modules/remark-parse/index.js":
false,

/***/ "./node_modules/remark-parse/lib/block-elements.json":
false,

/***/ "./node_modules/remark-parse/lib/decode.js":
false,

/***/ "./node_modules/remark-parse/lib/defaults.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/break.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/link.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
false,

/***/ "./node_modules/remark-parse/lib/locate/url.js":
false,

/***/ "./node_modules/remark-parse/lib/parse.js":
false,

/***/ "./node_modules/remark-parse/lib/parser.js":
false,

/***/ "./node_modules/remark-parse/lib/set-options.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
false,

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
false,

/***/ "./node_modules/remark-parse/lib/unescape.js":
false,

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
false,

/***/ "./node_modules/remark-parse/lib/util/html.js":
false,

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
false,

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
false,

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
false,

/***/ "./node_modules/repeat-string/index.js":
false,

/***/ "./node_modules/replace-ext/index.js":
false,

/***/ "./node_modules/showdown/dist/showdown.js":
false,

/***/ "./node_modules/state-toggle/index.js":
false,

/***/ "./node_modules/trim-trailing-lines/index.js":
false,

/***/ "./node_modules/trim/index.js":
false,

/***/ "./node_modules/trough/index.js":
false,

/***/ "./node_modules/trough/wrap.js":
false,

/***/ "./node_modules/unherit/index.js":
false,

/***/ "./node_modules/unified/index.js":
false,

/***/ "./node_modules/unist-util-is/convert.js":
false,

/***/ "./node_modules/unist-util-remove-position/index.js":
false,

/***/ "./node_modules/unist-util-stringify-position/index.js":
false,

/***/ "./node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/unist-util-visit/index.js":
false,

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
false,

/***/ "./node_modules/vfile-location/index.js":
false,

/***/ "./node_modules/vfile-message/index.js":
false,

/***/ "./node_modules/vfile/core.js":
false,

/***/ "./node_modules/vfile/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/x-is-string/index.js":
false,

/***/ "./node_modules/xtend/immutable.js":
false,

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

  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_components_Main_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
    property: "products-page",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_components_MainProducts_MainProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    property: "MainProduct",
    data: MainProduct,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    property: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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

/***/ }),

/***/ 4:
false

})
//# sourceMappingURL=products.js.ec463e07c65e6aca04fc.hot-update.js.map