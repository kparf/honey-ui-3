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
    className: "jsx-1246989439" + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-1246989439" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-1246989439" + " " + "section__content form__content-wrapper",
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
    className: "jsx-1246989439" + " " + "form__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-1246989439" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1246989439" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-1246989439",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1246989439" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1246989439" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-1246989439",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1246989439" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1246989439" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-1246989439",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1246989439" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1246989439" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    name: "message",
    rows: "5",
    className: "jsx-1246989439",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1246989439" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1246989439",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1246989439",
    __self: _this
  }, ".form.jsx-1246989439{margin-top:60px;}.form__header.jsx-1246989439 .section__header-wrapper.jsx-1246989439::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-1246989439{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-1246989439{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}@media(max-width:1000px){.form__content.jsx-1246989439{padding:10px;grid-template-areas: \"name    name    name\" \"email   email   email\"  \"phone   phone   phone\"  \"message message message\" \"buttons buttons buttons\";}}.form__section.jsx-1246989439{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-1246989439{grid-area:name;}.form__email.jsx-1246989439{grid-area:email;}.form__phone.jsx-1246989439{grid-area:phone;}.form__message.jsx-1246989439{grid-area:message;}.form__button-container.jsx-1246989439{grid-area:buttons;}.form__content.jsx-1246989439 input.jsx-1246989439,textarea.jsx-1246989439,button.jsx-1246989439{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-1246989439 label.jsx-1246989439 input.jsx-1246989439,textarea.jsx-1246989439{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-1246989439 label.jsx-1246989439{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form__label.jsx-1246989439{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-1246989439{padding-top:20px;}.form__button-container.jsx-1246989439 button.jsx-1246989439{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBRzJCLEFBSUosQUFJK0IsQUFTOUIsQUFZRSxBQVdGLEFBTUUsQUFJQyxBQUlBLEFBSUUsQUFLckIsQUFHd0MsQUFNekIsQUFLQyxBQUlBLEFBT0ksQUFJQyxhQTFFZ0IsQUFpQkwsQUErQ1osRUFuQ25CLENBOUNBLEFBa0RBLEFBSUEsQ0FrQ0EsQ0E5QkEsQUFJQSxBQThCbUIsWUFWUyxLQVdLLEVBM0JsQixLQTFERixLQWFnQixHQThDWCxHQTFERCxHQTBFQyxVQWZsQixBQTBCOEIsRUFwRmYsR0FOZixBQW9Fa0IsQ0FZbEIsRUE1Q3FCLEFBcUNyQixhQUpBLE9Bc0JBLGdEQXBGcUIsR0FXSyxjQWF4QixRQU1zQixFQWxCUixjQUNoQixvREFad0IsVUE4QnhCLG9FQTdCQSIsImZpbGUiOiIvbW50L3cvd29yay9ob25leS11aS0zL2NvbXBvbmVudHMvT3JkZXJGb3JtL09yZGVyRm9ybS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE9yZGVyRm9ybSA9ICh7IGhlYWRlciB9KSA9PiB7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb25TdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm1SZWYuY3VycmVudCkge1xuICAgICAgZm9ybVJlZi5jdXJyZW50LnJlc2V0KCk7XG4gICAgfVxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWU6IGZvcm1EYXRhLmdldCgnbmFtZScpLFxuICAgICAgZW1haWw6IGZvcm1EYXRhLmdldCgnZW1haWwnKSxcbiAgICAgIHBob25lOiBmb3JtRGF0YS5nZXQoJ3Bob25lJyksXG4gICAgICBtZXNzYWdlOiBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKSxcbiAgICB9XG4gICAgXG4gICAgZmV0Y2goJy9hcGkvZW1haWwnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb3JtX19zZWN0aW9uXCI+XG4gICAgICAgIHsgaGVhZGVyIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19jb250ZW50IGZvcm1fX2NvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fbmFtZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPtCY0LzRjzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX2VtYWlsXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+RW1haWw8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJmb3JtX19waG9uZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPtCi0LXQu9C10YTQvtC9PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2J1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19oZWFkZXIgLnNlY3Rpb25fX2hlYWRlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmFja2dyb3VuZCwgIzAwMDAwMCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgIFwibmFtZSAgICBlbWFpbCAgIHBob25lXCIgXG4gICAgICAgICAgICBcIm1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXCJcbiAgICAgICAgICAgIFwiYnV0dG9ucyBidXR0b25zIGJ1dHRvbnNcIjtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAuZm9ybV9fY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICAgIFwibmFtZSAgICBuYW1lICAgIG5hbWVcIlxuICAgICAgICAgICAgICBcImVtYWlsICAgZW1haWwgICBlbWFpbFwiIFxuICAgICAgICAgICAgICBcInBob25lICAgcGhvbmUgICBwaG9uZVwiIFxuICAgICAgICAgICAgICBcIm1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgXCJidXR0b25zIGJ1dHRvbnMgYnV0dG9uc1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19zZWN0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19uYW1lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IG5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fZW1haWwge1xuICAgICAgICAgIGdyaWQtYXJlYTogZW1haWw7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fcGhvbmUge1xuICAgICAgICAgIGdyaWQtYXJlYTogcGhvbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbWVzc2FnZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBtZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIGdyaWQtYXJlYTogYnV0dG9uc1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgaW5wdXQsIHRleHRhcmVhLCBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgbGFiZWwgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2xhYmVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmQtY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1hcHAtbWFpbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckZvcm07Il19 */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.ce71768b9cd958b0a806.hot-update.js.map