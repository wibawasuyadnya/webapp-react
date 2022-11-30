"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThirdEducation = exports.SecondEducation = exports.FourthEducation = exports.FirstEducation = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
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