"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _data = _interopRequireDefault(require("../assets/data/data"));
var _material = require("@mui/material");
var _MuiComponent = require("../assets/styles/MaterialUIStyle/MuiComponent");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Contact() {
  var ctProps = {
    contact: _data.default.contact,
    button: _data.default.contact.button
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container flex flex-col justify-center items-center space-y-8 mx-auto w-full xs:px-5 min-h-[400px]",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: " text-center text-4xl xs:text-3xl font-inter-bold text-[color:var(--clr-heading)]",
        children: ctProps.contact.heading
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
        disableElevation: true,
        theme: _MuiComponent.ButtonContact,
        href: ctProps.button.link,
        target: "_blank",
        rel: "noreferrer",
        children: ctProps.button.placeholder
      })]
    })
  });
}
var _default = Contact;
exports.default = _default;