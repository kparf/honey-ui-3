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
    console.log(formRef.current);
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
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "jsx-1982047430" + " " + "form__section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, header, __jsx("div", {
    className: "jsx-1982047430" + " " + "section__content form__content-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("label", {
    className: "jsx-1982047430" + " " + "form__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "\u0418\u043C\u044F"), __jsx("input", {
    type: "text",
    name: "name",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    type: "email",
    name: "email",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("input", {
    type: "text",
    name: "phone",
    className: "jsx-1982047430" + " " + "form__phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  })), __jsx("label", {
    className: "jsx-1982047430" + " " + "form__message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1982047430" + " " + "form__label",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"), __jsx("textarea", {
    rows: "5",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1982047430" + " " + "form__button-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-1982047430",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1982047430",
    __self: _this
  }, ".form.jsx-1982047430{margin-top:60px;}.form__header.jsx-1982047430 .section__header-wrapper.jsx-1982047430::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.form__content-wrapper.jsx-1982047430{background:var(--form-background,#000000);width:100%;padding:50px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__content.jsx-1982047430{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas: \"name    email   phone\"  \"message message message\" \"buttons buttons buttons\";width:var(--page-width);grid-gap:10px;}.form__section.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.form__name.jsx-1982047430{grid-area:name;}.form__email.jsx-1982047430{grid-area:email;}.form__phone.jsx-1982047430{grid-area:phone;}.form__message.jsx-1982047430{grid-area:message;}.form__button-container.jsx-1982047430{grid-area:buttons;}.form__content.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430,button.jsx-1982047430{border:2px solid var(--accent-color);padding:10px;font-size:unset;}.form__content.jsx-1982047430 label.jsx-1982047430 input.jsx-1982047430,textarea.jsx-1982047430{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;font-size:1.2em;}.form__content.jsx-1982047430 label.jsx-1982047430{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.form__label.jsx-1982047430{padding:10px;font-weight:bold;color:var(--second-color);font-size:1.2em;}.form__button-container.jsx-1982047430{padding-top:20px;}.form__button-container.jsx-1982047430 button.jsx-1982047430{margin-right:20px;font-weight:bold;background:var(--second-color);color:var(--app-main-color);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvdy93b3JrL2hvbmV5LXVpLTMvY29tcG9uZW50cy9PcmRlckZvcm0vT3JkZXJGb3JtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBRzJCLEFBSUosQUFJK0IsQUFTOUIsQUFXQSxBQU1FLEFBSUMsQUFJQSxBQUlFLEFBS3JCLEFBR3dDLEFBTXpCLEFBS0MsQUFJQSxBQU9JLEFBSUMsYUE5RGdCLEFBb0RqQixFQW5DbkIsQ0FsQ0EsQUFzQ0EsQUFJQSxDQWtDQSxDQTlCQSxBQUlBLEFBOEJtQixZQVZTLEtBV0ssRUEzQmxCLEtBOUNGLEtBYWdCLEdBa0NYLEdBOUNELEdBOERDLFVBZmxCLEFBMEI4QixFQXhFZixHQU5mLEFBd0RrQixDQVlsQixFQTVDcUIsQUFxQ3JCLGFBSkEsT0FzQkEsZ0RBeEVxQixHQVdLLHNCQU9GLEVBTlIsY0FDaEIsb0RBWndCLFVBa0J4QixvRUFqQkEiLCJmaWxlIjoiL21udC93L3dvcmsvaG9uZXktdWktMy9jb21wb25lbnRzL09yZGVyRm9ybS9PcmRlckZvcm0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBPcmRlckZvcm0gPSAoeyBoZWFkZXIgfSkgPT4ge1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1SZWYuY3VycmVudCk7XG4gICAgZmV0Y2goJy9hcGkvZW1haWwnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICd0ZXN0IG1lc3NhdGUnfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybV9fc2VjdGlvblwiPlxuICAgICAgICB7IGhlYWRlciB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fY29udGVudCBmb3JtX19jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fY29udGVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX25hbWVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QmNC80Y88L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19lbWFpbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QotC10LvQtdGE0L7QvTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm1fX3Bob25lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIi8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm1fX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9ybV9fbGFiZWxcIj7QodC+0L7QsdGJ0LXQvdC40LU8L3NwYW4+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9faGVhZGVyIC5zZWN0aW9uX19oZWFkZXItd3JhcHBlcjo6YmVmb3JlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mb3JtLWJhY2tncm91bmQsICMwMDAwMDApO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgICAgICBcIm5hbWUgICAgZW1haWwgICBwaG9uZVwiIFxuICAgICAgICAgICAgXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZVwiXG4gICAgICAgICAgICBcImJ1dHRvbnMgYnV0dG9ucyBidXR0b25zXCI7XG4gICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2Utd2lkdGgpO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX3NlY3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX25hbWUge1xuICAgICAgICAgIGdyaWQtYXJlYTogbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19lbWFpbCB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBlbWFpbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19waG9uZSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBwaG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19tZXNzYWdlIHtcbiAgICAgICAgICBncmlkLWFyZWE6IG1lc3NhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBidXR0b25zXG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCBpbnB1dCwgdGV4dGFyZWEsIGJ1dHRvbiB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fY29udGVudCBsYWJlbCBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm1fX2NvbnRlbnQgbGFiZWwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybV9fbGFiZWwge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtX19idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZC1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFwcC1tYWluLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyRm9ybTsiXX0= */\n/*@ sourceURL=/mnt/w/work/honey-ui-3/components/OrderForm/OrderForm.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderForm);

/***/ })

})
//# sourceMappingURL=delivery-and-payment.js.23bafe505c0639dd13ed.hot-update.js.map