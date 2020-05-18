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
    className: "jsx-1982047430" + " " + "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-1982047430" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-1982047430" + " " + "section__content form__content-wrapper",
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
    className: "jsx-1982047430" + " " + "form__content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-1982047430" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-1982047430" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    name: "message",
    rows: "5",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1982047430" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1982047430",
    __self: _this
  }, ".form.jsx-1982047430{margin-top:60px;}.form__header.jsx-1982047430 .section__header-wrapper.jsx-1982047430::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-1982047430{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-1982047430{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}.form__section.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-1982047430{grid-area:name;}.form__email.jsx-1982047430{grid-area:email;}.form__phone.jsx-1982047430{grid-area:phone;}.form__message.jsx-1982047430{grid-area:message;}.form__button-container.jsx-1982047430{grid-area:buttons;}.form__content.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430,button.jsx-1982047430{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-1982047430 label.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-1982047430 label.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form__label.jsx-1982047430{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-1982047430{padding-top:20px;}.form__button-container.jsx-1982047430 button.jsx-1982047430{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRGtCLEFBRzJCLEFBSUosQUFJK0IsQUFTOUIsQUFXQSxBQU1FLEFBSUMsQUFJQSxBQUlFLEFBS3JCLEFBR3dDLEFBTXpCLEFBS0MsQUFJQSxBQU9JLEFBSUMsYUE5RGdCLEFBb0RqQixFQW5DbkIsQ0FsQ0EsQUFzQ0EsQUFJQSxDQWtDQSxDQTlCQSxBQUlBLEFBOEJtQixZQVZTLEtBV0ssRUEzQmxCLEtBOUNGLEtBYWdCLEdBa0NYLEdBOUNELEdBOERDLFVBZmxCLEFBMEI4QixFQXhFZixHQU5mLEFBd0RrQixDQVlsQixFQTVDcUIsQUFxQ3JCLGFBSkEsT0FzQkEsZ0RBeEVxQixHQVdLLHNCQU9GLEVBTlIsY0FDaEIsb0RBWndCLFVBa0J4QixvRUFqQkEiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPcmRlckZvcm0gPSAoeyBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChmb3JtUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuICAgIH1cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBmb3JtRGF0YS5nZXQoJ25hbWUnKSxcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyksXG4gICAgICBwaG9uZTogZm9ybURhdGEuZ2V0KCdwaG9uZScpLFxuICAgICAgbWVzc2FnZTogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJyksXG4gICAgfVxuICAgIFxuICAgIGZldGNoKCcvYXBpL2VtYWlsJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybV9fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fY29udGVudCBmb3JtX19jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fY29udGVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX25hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QmNC80Y88L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19lbWFpbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm1fX3Bob25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2J1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19oZWFkZXIgLnNlY3Rpb25fX2hlYWRlci13cmFwcGVyOjpiZWZvcmUge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZvcm0tYmFja2dyb3VuZCwgIzAwMDAwMCk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogNTBweCAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgIFwibmFtZSAgICBlbWFpbCAgIHBob25lXCIgXG4gICAgICAgICAgICBcIm1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXCJcbiAgICAgICAgICAgIFwiYnV0dG9ucyBidXR0b25zIGJ1dHRvbnNcIjtcbiAgICAgICAgICB3aWR0aDogdmFyKC0tcGFnZS13aWR0aCk7XG4gICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fc2VjdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbmFtZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2VtYWlsIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGVtYWlsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX3Bob25lIHtcbiAgICAgICAgICBncmlkLWFyZWE6IHBob25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX21lc3NhZ2Uge1xuICAgICAgICAgIGdyaWQtYXJlYTogbWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBncmlkLWFyZWE6IGJ1dHRvbnNcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IGxhYmVsIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCBsYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19sYWJlbCB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2J1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kLWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tYXBwLW1haW4tY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJGb3JtOyJdfQ== */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.bb1b9582c9a6578675f9.hot-update.js.map