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
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();

    if (formRef.current) {
      formRef.current.reset();
    }

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
  };

  return __jsx("div", {
    className: "jsx-290673678" + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-290673678" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-290673678" + " " + "section__content form__content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("form", {
    method: "POST",
    ref: formRef,
    onSubmit: onSubmitHandler,
    className: "jsx-290673678" + " " + "form__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-290673678" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-290673678" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-290673678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-290673678" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-290673678" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-290673678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-290673678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-290673678" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-290673678" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-290673678" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-290673678" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    name: "message",
    rows: "5",
    className: "jsx-290673678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-290673678" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-290673678",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "290673678",
    __self: _this
  }, ".form.jsx-290673678{margin-top:60px;}.form__header.jsx-290673678 .section__header-wrapper.jsx-290673678::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-290673678{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-290673678{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}@media(max-width:1000px){.form__content.jsx-290673678{grid-template-areas: \"name    name    name\" \"email   email   email\"  \"phone   phone   phone\"  \"message message message\" \"buttons buttons buttons\";}}.form__section.jsx-290673678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-290673678{grid-area:name;}.form__email.jsx-290673678{grid-area:email;}.form__phone.jsx-290673678{grid-area:phone;}.form__message.jsx-290673678{grid-area:message;}.form__button-container.jsx-290673678{grid-area:buttons;}.form__content.jsx-290673678 input.jsx-290673678,textarea.jsx-290673678,button.jsx-290673678{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-290673678 label.jsx-290673678 input.jsx-290673678,textarea.jsx-290673678{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-290673678 label.jsx-290673678{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form__label.jsx-290673678{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-290673678{padding-top:20px;}.form__button-container.jsx-290673678 button.jsx-290673678{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBRzJCLEFBSUosQUFJK0IsQUFTOUIsQUFpQmdCLEFBS2hCLEFBTUUsQUFJQyxBQUlBLEFBSUUsQUFLckIsQUFHd0MsQUFNekIsQUFLQyxBQUlBLEFBT0ksQUFJQyxhQXpFZ0IsQUErRGpCLEVBbkNuQixDQTdDQSxBQWlEQSxBQUlBLENBa0NBLENBOUJBLEFBSUEsQUE4Qm1CLFlBVlMsS0FXSyxFQTNCbEIsS0F6REYsS0FhZ0IsR0E2Q1gsR0F6REQsR0F5RUMsVUFmbEIsQUEwQjhCLEVBbkZmLEdBTmYsQUFtRWtCLENBWWxCLEVBNUNxQixBQXFDckIsYUFKQSxPQXNCQSxnREFuRnFCLEdBV0ssQ0FZeEIscUJBTXNCLEVBakJSLGNBQ2hCLG9EQVp3QixVQTZCeEIsb0VBNUJBIiwiZmlsZSI6Ii9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT3JkZXJGb3JtID0gKHsgaGVhZGVyIH0pID0+IHtcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvblN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZm9ybVJlZi5jdXJyZW50KSB7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcbiAgICB9XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KCduYW1lJyksXG4gICAgICBlbWFpbDogZm9ybURhdGEuZ2V0KCdlbWFpbCcpLFxuICAgICAgcGhvbmU6IGZvcm1EYXRhLmdldCgncGhvbmUnKSxcbiAgICAgIG1lc3NhZ2U6IGZvcm1EYXRhLmdldCgnbWVzc2FnZScpLFxuICAgIH1cbiAgICBcbiAgICBmZXRjaCgnL2FwaS9lbWFpbCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZvcm1fX3NlY3Rpb25cIj5cbiAgICAgICAgeyBoZWFkZXIgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2NvbnRlbnQgZm9ybV9fY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2NvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0JjQvNGPPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZW1haWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj5FbWFpbDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KLQtdC70LXRhNC+0L08L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtX19waG9uZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+0KHQvtC+0LHRidC10L3QuNC1PC9zcGFuPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJhY2tncm91bmQsICMwMDAwMDApO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICBcIm5hbWUgICAgZW1haWwgICBwaG9uZVwiIFxuICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICBcImJ1dHRvbnMgYnV0dG9ucyBidXR0b25zXCI7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICAgICAgLmZvcm1fX2NvbnRlbnQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgIFwibmFtZSAgICBuYW1lICAgIG5hbWVcIlxuICAgICAgICAgICAgICBcImVtYWlsICAgZW1haWwgICBlbWFpbFwiIFxuICAgICAgICAgICAgICBcInBob25lICAgcGhvbmUgICBwaG9uZVwiIFxuICAgICAgICAgICAgICBcIm1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgXCJidXR0b25zIGJ1dHRvbnMgYnV0dG9uc1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19uYW1lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fZW1haWwge1xuICAgICAgICAgIGdyaWQtYXJlYTogZW1haWw7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fcGhvbmUge1xuICAgICAgICAgIGdyaWQtYXJlYTogcGhvbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbWVzc2FnZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uc1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgbGFiZWwgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckZvcm07Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.84f0039ac17c3d07ad21.hot-update.js.map