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
    _jsxFileName = "/Users/ws-047-31b/Wotk/honey-ui-3/components/OrderForm/OrderForm.jsx";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var OrderForm = function OrderForm(_ref) {
  var header = _ref.header;
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();
    var formData = new FormData(formRef.current);
    var data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    formRef.current.reset();
  };

  return __jsx("div", {
    className: "jsx-3242413005" + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-3242413005" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-3242413005" + " " + "section__content form__content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("form", {
    method: "POST",
    ref: formRef,
    onSubmit: onSubmitHandler,
    className: "jsx-3242413005" + " " + "form__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-3242413005" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3242413005" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-3242413005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-3242413005" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3242413005" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-3242413005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-3242413005" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3242413005" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-3242413005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-3242413005" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-3242413005" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    name: "message",
    rows: "5",
    className: "jsx-3242413005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3242413005" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-3242413005",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3242413005",
    __self: _this
  }, ".form.jsx-3242413005{margin-top:60px;}.form__header.jsx-3242413005 .section__header-wrapper.jsx-3242413005::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-3242413005{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-3242413005{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}@media(max-width:1000px){.form__content.jsx-3242413005{padding:20px;grid-template-areas: \"name    name    name\" \"email   email   email\"  \"phone   phone   phone\"  \"message message message\" \"buttons buttons buttons\";}}.form__section.jsx-3242413005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-3242413005{grid-area:name;}.form__email.jsx-3242413005{grid-area:email;}.form__phone.jsx-3242413005{grid-area:phone;}.form__message.jsx-3242413005{grid-area:message;}.form__button-container.jsx-3242413005{grid-area:buttons;}.form__content.jsx-3242413005 input.jsx-3242413005,textarea.jsx-3242413005,button.jsx-3242413005{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-3242413005 label.jsx-3242413005 input.jsx-3242413005,textarea.jsx-3242413005{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-3242413005 label.jsx-3242413005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:'wrap';-ms-flex-wrap:'wrap';flex-wrap:'wrap';}.form__label.jsx-3242413005{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-3242413005{padding-top:20px;}.form__button-container.jsx-3242413005 button.jsx-3242413005{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93cy0wNDctMzFiL1dvdGsvaG9uZXktdWktMy9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEa0IsQUFHMkIsQUFJSixBQUkrQixBQVM5QixBQVlFLEFBV0YsQUFNRSxBQUlDLEFBSUEsQUFJRSxBQUtyQixBQUd3QyxBQU16QixBQUtDLEFBS0EsQUFPSSxBQUlDLGFBM0VnQixBQWlCTCxBQWdEWixFQXBDbkIsQ0E5Q0EsQUFrREEsQUFJQSxDQW1DQSxDQS9CQSxBQUlBLEFBK0JtQixZQVZTLEtBV0ssRUE1QmxCLEtBMURGLEtBYWdCLEdBOENYLEdBMURELEdBMkVDLFVBaEJsQixBQTJCOEIsRUFyRmYsR0FOZixBQW9Fa0IsQ0FhbEIsRUE3Q3FCLEFBcUNGLGFBSm5CLE9BdUJBLDJDQWxCQSxLQW5FcUIsR0FXSyxjQWF4QixRQU1zQixFQWxCUixjQUNoQixvREFad0IsVUE4QnhCLG9FQTdCQSIsImZpbGUiOiIvVXNlcnMvd3MtMDQ3LTMxYi9Xb3RrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT3JkZXJGb3JtID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwaG9uZTogZm9ybURhdGEuZ2V0KCdwaG9uZScpLFxuICAgICAgbWVzc2FnZTogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJyksXG4gICAgfVxuICAgIFxuICAgIGZldGNoKCcvYXBpL2VtYWlsJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gICAgZm9ybVJlZi5jdXJyZW50LnJlc2V0KCk7XG4gIH1cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1fX3NlY3Rpb25cIj5cbiAgICAgICAgeyBoZWFkZXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2NvbnRlbnQgZm9ybV9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0JjQvNGPPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZW1haWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fcGhvbmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KHQvtC+0LHRidC10L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJhY2tncm91bmQsICMwMDAwMDApO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICBcIm5hbWUgICAgZW1haWwgICBwaG9uZVwiIFxuICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICBcImJ1dHRvbnMgYnV0dG9ucyBidXR0b25zXCI7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgLmZvcm1fX2NvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICBcIm5hbWUgICAgbmFtZSAgICBuYW1lXCJcbiAgICAgICAgICAgICAgXCJlbWFpbCAgIGVtYWlsICAgZW1haWxcIiBcbiAgICAgICAgICAgICAgXCJwaG9uZSAgIHBob25lICAgcGhvbmVcIiBcbiAgICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICAgIFwiYnV0dG9ucyBidXR0b25zIGJ1dHRvbnNcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbmFtZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2VtYWlsIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGVtYWlsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX3Bob25lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IHBob25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX21lc3NhZ2Uge1xuICAgICAgICAgIGdyaWQtYXJlYTogbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6ICd3cmFwJztcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19sYWJlbCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJGb3JtOyJdfQ== */\n/*@ sourceURL=/Users/ws-047-31b/Wotk/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.afaebb74b8f3330f3826.hot-update.js.map