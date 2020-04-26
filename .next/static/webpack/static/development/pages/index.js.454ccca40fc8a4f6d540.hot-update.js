webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.454ccca40fc8a4f6d540.hot-update.js.map