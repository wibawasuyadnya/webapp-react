"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThirdEducation = exports.SecondEducation = exports.FourthEducation = exports.FirstEducation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var FirstEducation = function FirstEducation(_ref) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center flex flex-col space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]",
          children: data.sdSchName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]",
          children: data.sdSchDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          className: "text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]",
          children: data.sdSchDesc
        })]
      })
    })
  });
};
exports.FirstEducation = FirstEducation;
var SecondEducation = function SecondEducation(_ref2) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center flex flex-col space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]",
          children: data.smpSchName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: " text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]",
          children: data.smpSchDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          className: "text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]",
          children: data.smpSchDesc
        })]
      })
    })
  });
};
exports.SecondEducation = SecondEducation;
var ThirdEducation = function ThirdEducation(_ref3) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center flex flex-col space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]",
          children: data.smaSchName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]",
          children: data.smaSchDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          className: "text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]",
          children: data.smaSchDesc
        })]
      })
    })
  });
};
exports.ThirdEducation = ThirdEducation;
var FourthEducation = function FourthEducation(_ref4) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-center flex flex-col space-y-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          className: "text-4xl xs:text-xl font-inter-bold text-[color:var(--clr-heading)]",
          children: data.clgSchName
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-base xs:text-sm font-inter-normal text-[color:var(--clr-text)]",
          children: data.clgSchDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          className: "text-lg xs:text-base font-inter-medium text-[color:var(--clr-text)]",
          children: data.clgSchDesc
        })]
      })
    })
  });
};
exports.FourthEducation = FourthEducation;