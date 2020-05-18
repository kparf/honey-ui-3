webpackHotUpdate("static/development/pages/delivery-and-payment.js",{

/***/ "./components/OrderForm/OrderForm.jsx":
/*!********************************************!*\
  !*** ./components/OrderForm/OrderForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var OrderForm = function OrderForm(_ref) {
  var header = _ref.header;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        message: 'test messate'
      })
    });
  };

  return __jsx("div", {
    className: "jsx-1982047430" + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-1982047430" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-1982047430" + " " + "section__content form__content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: onSubmitHandler,
    className: "jsx-1982047430" + " " + "form__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-1982047430" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-1982047430" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    rows: "5",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1982047430" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1982047430",
    __self: _this
  }, ".form.jsx-1982047430{margin-top:60px;}.form__header.jsx-1982047430 .section__header-wrapper.jsx-1982047430::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-1982047430{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-1982047430{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}.form__section.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-1982047430{grid-area:name;}.form__email.jsx-1982047430{grid-area:email;}.form__phone.jsx-1982047430{grid-area:phone;}.form__message.jsx-1982047430{grid-area:message;}.form__button-container.jsx-1982047430{grid-area:buttons;}.form__content.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430,button.jsx-1982047430{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-1982047430 label.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-1982047430 label.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form__label.jsx-1982047430{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-1982047430{padding-top:20px;}.form__button-container.jsx-1982047430 button.jsx-1982047430{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q2tCLEFBRzJCLEFBSUosQUFJK0IsQUFTOUIsQUFXQSxBQU1FLEFBSUMsQUFJQSxBQUlFLEFBS3JCLEFBR3dDLEFBTXpCLEFBS0MsQUFJQSxBQU9JLEFBSUMsYUE5RGdCLEFBb0RqQixFQW5DbkIsQ0FsQ0EsQUFzQ0EsQUFJQSxDQWtDQSxDQTlCQSxBQUlBLEFBOEJtQixZQVZTLEtBV0ssRUEzQmxCLEtBOUNGLEtBYWdCLEdBa0NYLEdBOUNELEdBOERDLFVBZmxCLEFBMEI4QixFQXhFZixHQU5mLEFBd0RrQixDQVlsQixFQTVDcUIsQUFxQ3JCLGFBSkEsT0FzQkEsZ0RBeEVxQixHQVdLLHNCQU9GLEVBTlIsY0FDaEIsb0RBWndCLFVBa0J4QixvRUFqQkEiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPcmRlckZvcm0gPSAoeyBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goJy9hcGkvZW1haWwnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICd0ZXN0IG1lc3NhdGUnfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybV9fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fY29udGVudCBmb3JtX19jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0JjQvNGPPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZW1haWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtX19waG9uZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KHQvtC+0LHRidC10L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2hlYWRlciAuc2VjdGlvbl9faGVhZGVyLXdyYXBwZXI6OmJlZm9yZSB7XG4gICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZm9ybS1iYWNrZ3JvdW5kLCAjMDAwMDAwKTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgXCJuYW1lICAgIGVtYWlsICAgcGhvbmVcIiBcbiAgICAgICAgICAgIFwibWVzc2FnZSBtZXNzYWdlIG1lc3NhZ2VcIlxuICAgICAgICAgICAgXCJidXR0b25zIGJ1dHRvbnMgYnV0dG9uc1wiO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXdpZHRoKTtcbiAgICAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19uYW1lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fZW1haWwge1xuICAgICAgICAgIGdyaWQtYXJlYTogZW1haWw7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fcGhvbmUge1xuICAgICAgICAgIGdyaWQtYXJlYTogcGhvbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbWVzc2FnZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uc1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgbGFiZWwgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckZvcm07Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.da9bf10167e74a1ec04e.hot-update.js.map