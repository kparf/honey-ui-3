module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "//R+":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "5eBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8x5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "storeon/react"
var react_ = __webpack_require__("bF4/");
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Navigation/Navigation__Item.js


var __jsx = external_react_default.a.createElement;


const Navigation__Item = ({
  href,
  label
}) => __jsx("li", {
  className: "jsx-2189054284" + " " + "Navigation__Item"
}, __jsx(link_default.a, {
  href: href
}, __jsx("a", {
  className: "jsx-2189054284"
}, label)), __jsx(style_default.a, {
  id: "2189054284"
}, [".Navigation__Item.jsx-2189054284{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;--decoration-color:#FFF;font-size:1.3em;height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".Navigation__Item.jsx-2189054284 a.jsx-2189054284{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;-webkit-transition:color 0.3s;transition:color 0.3s;}", ".Navigation__Item.jsx-2189054284 a.jsx-2189054284:hover,.Navigation__Item.jsx-2189054284 a.jsx-2189054284:focus{color:var(--main-text-color);}", ".Navigation__Item.jsx-2189054284 a.jsx-2189054284{color:var(--second-color,#FFF);-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}"]));

/* harmony default export */ var Navigation_Item = (Navigation__Item);
// CONCATENATED MODULE: ./components/Navigation/Navigation.js


var Navigation_jsx = external_react_default.a.createElement;




const Navigation = ({
  className
}) => {
  const wrapper = Object(external_react_["useRef"])(null);

  const hoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.add("Navigation__wrapper_dried");
    }
  };

  const unHoverHandler = () => {
    if (wrapper.current) {
      wrapper.current.classList.remove("Navigation__wrapper_dried");
    }
  };

  return Navigation_jsx("div", {
    ref: wrapper,
    className: "jsx-4224750092" + " " + (external_classnames_default()("Navigation__wrapper", className) || "")
  }, Navigation_jsx("nav", {
    className: "jsx-4224750092" + " " + "Navigation"
  }, Navigation_jsx("ul", {
    className: "jsx-4224750092" + " " + "Navigation__list"
  }, Navigation_jsx(Navigation_Item, {
    href: "/",
    label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
  }), Navigation_jsx(Navigation_Item, {
    href: "/products",
    label: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F"
  }), Navigation_jsx(Navigation_Item, {
    href: "/about",
    label: "\u041F\u0430\u0441\u0435\u043A\u0430"
  }), Navigation_jsx(Navigation_Item, {
    href: "/delivery-and-payment",
    label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043E\u043F\u043B\u0430\u0442\u0430"
  }), Navigation_jsx(Navigation_Item, {
    href: "/blog",
    label: "\u0411\u043B\u043E\u0433"
  }), Navigation_jsx(Navigation_Item, {
    href: "/contacts",
    label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }))), Navigation_jsx(style_default.a, {
    id: "4224750092"
  }, [".Navigation__wrapper.jsx-4224750092{--navigation-height:70px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#ff9500c4;background-clip:content-box;width:100%;box-sizing:border-box;min-height:var(--navigation-height,70px);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:4px solid var(--second-color);}", ".Navigation.jsx-4224750092{min-height:var(--navigation-height,70px);}", ".Navigation__list.jsx-4224750092{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:var(--navigation-height,70px);width:var(--page-width);list-style:none;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;margin:0;}"]));
};

/* harmony default export */ var Navigation_Navigation = (Navigation);
// CONCATENATED MODULE: ./components/AddressContainer/AddressContainer.js


var AddressContainer_jsx = external_react_default.a.createElement;


const AddressContainer = ({
  className,
  property,
  icon,
  address = []
}) => AddressContainer_jsx("div", {
  className: "jsx-1734587183" + " " + (external_classnames_default()(className, 'AddressContainer') || "")
}, icon, AddressContainer_jsx("div", {
  className: "jsx-1734587183" + " " + "AddressContainer__list header__list"
}, "\u0410\u0434\u0440\u0435\u0441:", address.map((item, index) => AddressContainer_jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "\u0410\u0434\u0440\u0435\u0441",
  className: "jsx-1734587183"
}, item))), AddressContainer_jsx(style_default.a, {
  id: "1734587183"
}, [".AddressContainer.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".AddressContainer__list.jsx-1734587183{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]));

/* harmony default export */ var AddressContainer_AddressContainer = (AddressContainer);
// CONCATENATED MODULE: ./components/PhonesContainer/PhonesContainer.js


var PhonesContainer_jsx = external_react_default.a.createElement;


const PhonesContainer = ({
  property,
  icon,
  className,
  phone = []
}) => PhonesContainer_jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer"
}, icon, PhonesContainer_jsx("div", {
  className: "jsx-1100391483" + " " + "PhonesContainer__list"
}, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:", phone.map((item, index) => PhonesContainer_jsx("span", {
  key: index,
  property: property,
  "mv-multiple": "true",
  "mv-default": "+375 11 111 111",
  className: "jsx-1100391483"
}, item))), PhonesContainer_jsx(style_default.a, {
  id: "1100391483"
}, [".PhonesContainer.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".PhonesContainer__list.jsx-1100391483{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]));

/* harmony default export */ var PhonesContainer_PhonesContainer = (PhonesContainer);
// CONCATENATED MODULE: ./components/Header/Header__Information.js


var Header_Information_jsx = external_react_default.a.createElement;



const Header__Information = ({
  phone,
  address
}) => Header_Information_jsx("div", {
  className: "jsx-2241574509" + " " + "Header__Information"
}, Header_Information_jsx(AddressContainer_AddressContainer, {
  address: address,
  property: "address",
  icon: Header_Information_jsx("img", {
    src: "/static/icons/baseline-pin_drop-24px.svg",
    className: "jsx-2241574509" + " " + "Header__InformationIcon"
  })
}), Header_Information_jsx(PhonesContainer_PhonesContainer, {
  phone: phone,
  property: "phone",
  icon: Header_Information_jsx("img", {
    src: "/static/icons/baseline-phone-24px.svg",
    className: "jsx-2241574509" + " " + "Header__InformationIcon"
  })
}), Header_Information_jsx(style_default.a, {
  id: "2241574509"
}, [".Header__Information.jsx-2241574509{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".Header__InformationIcon.jsx-2241574509{height:var(--icon-height);margin-right:10px;}"]));

/* harmony default export */ var Header_Information = (Header__Information);
// CONCATENATED MODULE: ./components/Header/Header.js


var Header_jsx = external_react_default.a.createElement;




const Header = ({
  property = "header"
}) => {
  const {
    header
  } = react_default()('header');
  const {
    phone,
    address,
    logo
  } = header;
  return Header_jsx("header", {
    property: property,
    className: "jsx-2273733962" + " " + "Header"
  }, Header_jsx("div", {
    className: "jsx-2273733962" + " " + "Header__container"
  }, Header_jsx("img", {
    property: "logo",
    "mv-default": "https://via.placeholder.com/100.png",
    src: logo,
    className: "jsx-2273733962"
  }), Header_jsx(Header_Information, {
    phone: phone,
    address: address
  })), Header_jsx(Navigation_Navigation, {
    className: "Navigation_shift"
  }), Header_jsx(style_default.a, {
    id: "2273733962"
  }, [".Header.jsx-2273733962{--icon-height:50px;--navigatioin-border-waigth:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:bold;background-image:radial-gradient(transparent,var(--accent-color)),url('/static/images/header.jpg');color:var(--app-main-text-color);font-weight:bold;}", ".Header.jsx-2273733962 .Header__container.jsx-2273733962{padding-bottom:40px;}", ".Header__container.jsx-2273733962{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".Header_navigation_shift.jsx-2273733962{padding-bottom:var(--navigatioin-border-waigth,40px);background-clip:content-box;}"]));
};

/* harmony default export */ var Header_Header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "GyP+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extractProperties; });
/* unused harmony export isAdminMode */
function extractProperties(properties, data = {}) {
  const result = {};

  for (let key in properties) {
    result[key] = {
      key: properties[key],
      value: data[properties[key]]
    };
  }

  return result;
}
function isAdminMode() {
  return 'admin' === publicRuntimeConfig.APP_MODE;
}

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "storeon/react"
var react_ = __webpack_require__("bF4/");
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__("GyP+");

// CONCATENATED MODULE: ./components/Social/Social.js


var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const DEFAULT_INNER_PROERTY_SET = {
  link: 'social-link',
  icon: 'socials__icon-image'
};

const Social = ({
  property = "social",
  innerProperties,
  value = {}
}) => {
  const {
    link,
    icon
  } = Object(utils["a" /* extractProperties */])(_objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties), value);
  return __jsx("div", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-555965192" + " " + "Socials__icon"
  }, __jsx("a", {
    property: link.key,
    "mv-default": "https://twitter.com",
    href: link.value,
    className: "jsx-555965192" + " " + "Socials__icon-link"
  }, __jsx("img", {
    property: icon.key,
    "mv-default": "https://via.placeholder.com/50.png",
    src: icon.value,
    className: "jsx-555965192" + " " + "Socials__icon-image"
  })), __jsx(style_default.a, {
    id: "555965192"
  }, [".Socials__icon-image.jsx-555965192{height:50px;}", ".Socials__icon.jsx-555965192{margin:0 20px;}"]));
};

/* harmony default export */ var Social_Social = (Social);
// CONCATENATED MODULE: ./components/Footer/Footer.js


var Footer_jsx = external_react_default.a.createElement;

function Footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Footer_ownKeys(Object(source), true).forEach(function (key) { Footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Footer_DEFAULT_INNER_PROERTY_SET = {
  social: 'social',
  info: 'info'
};
const DEFAULT_INFO_INNER_PROERTY_SET = {
  text: 'text'
};

const Footer = ({
  property = "footer",
  innerProperties = {}
}) => {
  const data = react_default()(property)[property];
  innerProperties = Footer_objectSpread({}, Footer_DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  const {
    social,
    info
  } = Object(utils["a" /* extractProperties */])(innerProperties, data);
  const {
    text
  } = Object(utils["a" /* extractProperties */])(DEFAULT_INFO_INNER_PROERTY_SET, info.value);
  return Footer_jsx("footer", {
    property: property,
    className: "jsx-715187177"
  }, Footer_jsx("div", {
    className: "jsx-715187177" + " " + "Socials-container"
  }, social.value ? social.value.map((socialItem, index) => Footer_jsx(Social_Social, {
    key: index,
    property: social.key,
    value: socialItem
  })) : false), Footer_jsx("div", {
    className: "jsx-715187177" + " " + "Footer-devider"
  }), Footer_jsx("div", {
    property: info.key,
    className: "jsx-715187177" + " " + "Info-container"
  }, Footer_jsx("span", {
    property: text.key,
    "mv-default": "\u0422\u0435\u043A\u0441\u0442",
    className: "jsx-715187177" + " " + "Footer__text"
  }, text.value)), Footer_jsx(style_default.a, {
    id: "715187177"
  }, ["footer.jsx-715187177{padding:20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 0;padding-top:10px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".Footer-devider.jsx-715187177{border-top:4px solid var(--accent-color);-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;margin:20px 0;}", ".Info-container.jsx-715187177{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);font-size:1.5em;text-align:center;color:var(--app-main-text-color);font-weight:bold;padding:10px;box-sizing:border-box;}", ".Socials-container.jsx-715187177{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:var(--page-width);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]));
};

/* harmony default export */ var Footer_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KZkv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initialisation; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qPgm");

const initialisation = store => {
  return new Promise((resolve, reject) => {
    const unsub = store.on('init/fetch-res', state => {
      unsub();
      resolve(state);
    });
    store.dispatch('init/fetch');
  });
};

/***/ }),

/***/ "Qog0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ApplicationMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5eBd");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KNus");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_3___default()();

const Layout = ({
  children
}) => __jsx(_contexts_ApplicationMode__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Provider, {
  value: publicRuntimeConfig.APP_MODE
}, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1215447068"
}, [":root{--page-width:1060px;--app-main-color:#542d18;--second-color:#fff;--accent-color:#fbd303f0;--decoration-color:#000;--base-background:white;--second-background:#000;--carusel-text-width:960px;--carusel-text-color:var(--app-main-text-color);--carusel-text-bg:transparent;--app-main-text-color:#542d18;--form-background:var(--app-main-color);}", "body{margin:0;min-height:100vh;font-family:'Exo 2',sans-serif;background-image:radial-gradient(transparent,var(--base-background)),url('/static/images/beautiful-bee-bloom-1591478.jpg');background-repeat:no-repeat;background-size:cover;background-position:center center;background-attachment:fixed;color:var(--app-main-text-color);}", "@media (max-width:1100px){:root{--page-width:100%;}}"]));

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "storeon/react"
var react_ = __webpack_require__("bF4/");
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// EXTERNAL MODULE: ./store/init.js
var init = __webpack_require__("KZkv");

// EXTERNAL MODULE: ./components/Layout/Layout.js
var Layout = __webpack_require__("Qog0");

// EXTERNAL MODULE: ./components/Header/Header.js + 5 modules
var Header = __webpack_require__("8x5e");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react-bootstrap/Carousel"
var Carousel_ = __webpack_require__("//R+");
var Carousel_default = /*#__PURE__*/__webpack_require__.n(Carousel_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/Carusel/CaruselNew__Slide.js


var __jsx = external_react_default.a.createElement;



const CaruselNew__Slide = ({
  active,
  value,
  property = "slide",
  imageProperty = "image",
  textProperty = "text"
}) => __jsx(Carousel_default.a.Item, {
  className: external_classnames_default()({
    active
  }),
  property: property,
  "mv-multiple": "true"
}, __jsx("img", {
  property: imageProperty,
  "mv-default": "https://via.placeholder.com/200.png",
  src: value[imageProperty],
  className: "jsx-1709323919" + " " + "Carusel__slide-image"
}), __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text-container"
}, __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text-wrapper"
}, __jsx("div", {
  className: "jsx-1709323919" + " " + "Carusel__slide-text"
}, __jsx("span", {
  property: textProperty,
  "mv-default": "\u0442\u0435\u043A\u0441\u0442",
  className: "jsx-1709323919"
}, value[textProperty])))), __jsx(style_default.a, {
  id: "1709323919"
}, [".Carusel__slide.jsx-1709323919{position:relative;width:100%;height:var(--carusel-height);-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".Carusel__slide-image.jsx-1709323919{z-index:50;object-fit:cover;width:100%;height:100%;}", ".Carusel__slide-text.jsx-1709323919{padding:10px;color:var(--carusel-text-color,black);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:var(--carusel-text-bg);font-size:var(--carusel-font-size,3em);text-shadow:#fff 2px 2px 10px;font-weight:bold;}", ".Carusel__slide-text-wrapper.jsx-1709323919{z-index:100;width:var(--carusel-text-width,100%);}", ".Carusel__slide-text-container.jsx-1709323919{position:absolute;top:0;margin:auto auto;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".Carusel__slide[mv-mode=\"edit\"].jsx-1709323919 .Carusel__slide-text-container.jsx-1709323919{width:unset;height:unset;display:block;-webkit-box-pack:unset;-webkit-justify-content:unset;-ms-flex-pack:unset;justify-content:unset;-webkit-align-items:unset;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;}"]));

/* harmony default export */ var CaruselNew_Slide = (CaruselNew__Slide);
// CONCATENATED MODULE: ./components/Carusel/CaruselNew.js


var CaruselNew_jsx = external_react_default.a.createElement;





const Carusel = ({
  property
}) => {
  const slideList = react_default()(property)[property];
  const {
    0: index,
    1: setIndex
  } = Object(external_react_["useState"])(0);
  const {
    0: direction,
    1: setDirection
  } = Object(external_react_["useState"])(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return CaruselNew_jsx(external_react_default.a.Fragment, null, CaruselNew_jsx(Carousel_default.a, {
    fade: true,
    className: "Carusel",
    activeIndex: index,
    direction: direction,
    onSelect: handleSelect
  }, slideList ? slideList.map((slide, i) => CaruselNew_jsx(CaruselNew_Slide, {
    active: i === index,
    key: i,
    property: property,
    value: slide
  })) : false), CaruselNew_jsx(style_default.a, {
    id: "2670317827"
  }, [".Carusel.jsx-3030315789{--carusel-height:500px;--carusel-delay:5s;width:100%;height:var(--carusel-height);position:relative;}"]), CaruselNew_jsx(style_default.a, {
    id: "616316871"
  }, [".Carusel{height:500px;}", ".carousel-item{height:500px;}", "@-webkit-keyframes fade{0%{opacity:0;}100%{opacity:1;}}", "@keyframes fade{0%{opacity:0;}100%{opacity:1;}}", ".carousel-item.active{-webkit-animation:1s fade;animation:1s fade;}", "body[mv-mode=\"edit\"] .Carusel__list{-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:none;transition:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:unset;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "body[mv-mode=\"edit\"] .Carusel{height:unset;}"]));
};

/* harmony default export */ var CaruselNew = (Carusel);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/MainProducts/MainProducts__Article.js


var MainProducts_Article_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DEFAULT_INNER_PROERTY_SET = {
  image: 'product-image',
  price: 'price',
  name: 'name'
};

const MainProducts__Article = ({
  className,
  value,
  property = "MainProduct",
  innerProperties = {},
  href
}) => {
  innerProperties = _objectSpread({}, DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  return MainProducts_Article_jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-2861068341" + " " + (external_classnames_default()('Products__Article', className) || "")
  }, MainProducts_Article_jsx(link_default.a, {
    href: href
  }, MainProducts_Article_jsx("img", {
    property: innerProperties.image,
    "mv-default": "https://via.placeholder.com/200.png",
    src: value[innerProperties.image],
    className: "jsx-2861068341" + " " + (external_classnames_default()('Products__Article-image', {
      Products__Article_clickable: !!href
    }) || "")
  })), value[innerProperties.price] && MainProducts_Article_jsx("div", {
    className: "jsx-2861068341" + " " + "Products__Article-price-container"
  }, MainProducts_Article_jsx("span", {
    property: innerProperties.price,
    "mv-defautl": "\u0426\u0435\u043D\u0430",
    className: "jsx-2861068341" + " " + "Products__Article-price"
  }, value[innerProperties.price])), MainProducts_Article_jsx("div", {
    className: "jsx-2861068341" + " " + "Products__Article-info"
  }, value[innerProperties.name] && MainProducts_Article_jsx("h6", {
    property: innerProperties.name,
    "mv-default": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
    className: "jsx-2861068341" + " " + "Products__Article-info-header"
  }, value[innerProperties.name])), MainProducts_Article_jsx(style_default.a, {
    id: "2008272965"
  }, [".Products__Article_clickable{-webkit-transition:all 0.3s;transition:all 0.3s;}", ".Products__Article_clickable:hover{cursor:pointer;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", ".Products__Article_withMargin.Products__Article_withMargin.Products__Article_withMargin{margin:20px;}"]), MainProducts_Article_jsx(style_default.a, {
    id: "1582619961"
  }, [".Products__Article.jsx-2861068341{margin:20px 0;}", ".Products__Article-image.jsx-2861068341{height:400px;width:400px;border:2px solid var(--app-main-color);}", ".Products__Article-info.jsx-2861068341{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:15px;}", ".Products__Article-price-container.jsx-2861068341{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:var(--second-color);background-color:var(--price-color,black);padding:10px;font-weight:bold;}", ".Products__Article-info-header.jsx-2861068341{font-size:28px;font-weight:bold;margin:0;padding:10px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".Products__Article-info-description.jsx-2861068341{margin:0;color:white;background-color:var(--app-main-color);padding:10px;}"]));
};

/* harmony default export */ var MainProducts_Article = (MainProducts__Article);
// CONCATENATED MODULE: ./components/MainProducts/MainProducts.js


var MainProducts_jsx = external_react_default.a.createElement;



const MainProducts = ({
  property,
  data,
  header
}) => {
  return MainProducts_jsx("div", {
    className: "jsx-421961682" + " " + "Products"
  }, MainProducts_jsx("section", {
    className: "jsx-421961682" + " " + "Products__section"
  }, header, MainProducts_jsx("div", {
    className: "jsx-421961682" + " " + "MainProducts__content"
  }, data ? data.map((product, index) => {
    return MainProducts_jsx(MainProducts_Article, {
      className: 'Products__Article_withMargin ',
      key: index,
      value: product,
      href: "/products"
    });
  }) : false, !(data && data.length > 0) && MainProducts_jsx(MainProducts_Article, {
    className: "EmptyItem",
    href: "#",
    value: {
      'product-image': '',
      name: 'name'
    }
  }))), MainProducts_jsx(style_default.a, {
    id: "2892341378"
  }, ["body:not([mv-mode=\"edit\"]) .EmptyItem{display:none;}"]), MainProducts_jsx(style_default.a, {
    id: "3795360089"
  }, [".Products.jsx-421961682{--price-color:var(--app-main-color);}", ".Products__section.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".MainProducts__content.jsx-421961682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}", ".products__header.jsx-421961682 .section__header-wrapper.jsx-421961682::before{-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}"]));
};

/* harmony default export */ var MainProducts_MainProducts = (MainProducts);
// EXTERNAL MODULE: ./utils.js
var utils = __webpack_require__("GyP+");

// CONCATENATED MODULE: ./components/Hello/Hello.js


var Hello_jsx = external_react_default.a.createElement;

function Hello_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Hello_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Hello_ownKeys(Object(source), true).forEach(function (key) { Hello_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Hello_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Hello_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Hello_DEFAULT_INNER_PROERTY_SET = {
  header: 'hello-header',
  info: 'hello-info'
};

const Hello = ({
  property,
  data,
  innerProperties
}) => {
  innerProperties = Hello_objectSpread({}, Hello_DEFAULT_INNER_PROERTY_SET, {
    innerProperties
  });
  const {
    header,
    info
  } = Object(utils["a" /* extractProperties */])(innerProperties, data);
  return Hello_jsx("div", {
    className: "jsx-2909867750" + " " + "Hello"
  }, Hello_jsx("section", {
    property: "hello",
    className: "jsx-2909867750" + " " + "Hello__section"
  }, Hello_jsx("h2", {
    property: header.key,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2909867750" + " " + "Hello__header"
  }, header.value), Hello_jsx("p", {
    property: info.key,
    "mv-default": "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    className: "jsx-2909867750" + " " + "Hello__info"
  }, info.value)), Hello_jsx(style_default.a, {
    id: "2909867750"
  }, [".Hello.jsx-2909867750{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#fbd303f0;}", ".Hello__section.jsx-2909867750{width:var(--page-width);padding:40px 0;}", ".Hello__header.jsx-2909867750{font-size:2em;}", ".Hello__info.jsx-2909867750{font-size:1.5em;}"]));
};

/* harmony default export */ var Hello_Hello = (Hello);
// CONCATENATED MODULE: ./components/Values/Values__Article.js


var Values_Article_jsx = external_react_default.a.createElement;

function Values_Article_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Values_Article_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Values_Article_ownKeys(Object(source), true).forEach(function (key) { Values_Article_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Values_Article_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Values_Article_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Values_Article_DEFAULT_INNER_PROERTY_SET = {
  image: 'image',
  header: 'header',
  description: 'description'
};

const Values__Article = ({
  value,
  property = 'valuesArticle',
  innerProperties = {}
}) => {
  innerProperties = Values_Article_objectSpread({}, Values_Article_DEFAULT_INNER_PROERTY_SET, {}, innerProperties);
  return Values_Article_jsx("article", {
    property: property,
    "mv-multiple": "true",
    className: "jsx-2657580011" + " " + "Values__Article"
  }, Values_Article_jsx("img", {
    property: innerProperties.image,
    src: value[innerProperties.image],
    "mv-default": "https://via.placeholder.com/300x500.png",
    className: "jsx-2657580011" + " " + "Values__Article-image"
  }), Values_Article_jsx("div", {
    className: "jsx-2657580011" + " " + "Values__Article-info"
  }, Values_Article_jsx("h6", {
    property: innerProperties.header,
    "mv-default": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
    className: "jsx-2657580011" + " " + "Values__Article-header"
  }, value[innerProperties.header]), Values_Article_jsx("p", {
    property: innerProperties.description,
    "mv-default": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
    className: "jsx-2657580011" + " " + "Values__Article-description"
  }, value[innerProperties.description])), Values_Article_jsx(style_default.a, {
    id: "2657580011"
  }, [".Values__Article-image.jsx-2657580011{width:300px;height:500px;border:2px solid var(--accent-color);}", ".Values__Article.jsx-2657580011{max-width:304px;margin:10px 0;}", ".Values__Article-header.jsx-2657580011{font-size:20px;font-weight:bold;padding:10px;background-color:var(--accent-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".Values__Article-description.jsx-2657580011{font-size:20px;padding:10px;color:var(--app-main-text-color);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-weight:bold;}"]));
};

/* harmony default export */ var Values_Article = (Values__Article);
// CONCATENATED MODULE: ./components/Values/Values.js


var Values_jsx = external_react_default.a.createElement;



const Values = ({
  property,
  data
}) => {
  return Values_jsx("div", {
    className: "jsx-437906025" + " " + "Values"
  }, Values_jsx("section", {
    className: "jsx-437906025" + " " + "Values__section section"
  }, Values_jsx("div", {
    className: "jsx-437906025" + " " + "Values__content"
  }, data ? data.map((value, index) => Values_jsx(Values_Article, {
    key: index,
    value: value
  })) : false)), Values_jsx(style_default.a, {
    id: "437906025"
  }, [".Values__section.jsx-437906025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".Values__content.jsx-437906025{width:var(--page-width);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:50px 0;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}"]));
};

/* harmony default export */ var Values_Values = (Values);
// EXTERNAL MODULE: ./components/Footer/Footer.js + 1 modules
var Footer = __webpack_require__("HXcA");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;










const Index = () => {
  const {
    product,
    hello,
    valuesArticle,
    MainProduct
  } = react_default()('product', 'hello', 'valuesArticle', 'MainProduct');
  return pages_jsx(Layout["a" /* default */], null, pages_jsx(Header["a" /* default */], null), pages_jsx(CaruselNew, {
    property: "slide"
  }), pages_jsx(MainProducts_MainProducts, {
    property: "MainProduct",
    data: MainProduct
  }), pages_jsx(Hello_Hello, {
    property: "hello",
    data: hello
  }), pages_jsx(Values_Values, {
    property: "valuesArticle",
    data: valuesArticle
  }), pages_jsx(Footer["a" /* default */], {
    property: "footer"
  }));
};

Index.getInitialProps = async function (props) {
  const initData = await Object(init["a" /* initialisation */])(props.store);
  return {
    initData
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bF4/":
/***/ (function(module, exports) {

module.exports = require("storeon/react");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "qPgm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHeaderData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInitData; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const getHeaderData = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  const data = await res.json();
  return data.header || {};
};
const getInitData = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://raw.githubusercontent.com/kparf/honey-data/master/honey.json`);
  return res.json();
};

/***/ })

/******/ });