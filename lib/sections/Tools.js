"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SkillTech = _interopRequireDefault(require("./Tools/SkillTech"));
var _data = _interopRequireDefault(require("../assets/data/data"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Tools() {
  var toolsProps = {
    title: _data.default.tools.title,
    tech: _data.default.tools.skills
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container min-h-[300px] mb-10 mx-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "text-center text-5xl xs:text-3xl text-[color:var(--clr-heading)] font-inter-bold",
          children: toolsProps.title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "grid grid-cols-4 xs:px-3 xs:grid-cols-3 align-center justify-center max-w-xl mx-auto mt-10",
        children: toolsProps.tech.map(function (skills, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SkillTech.default, {
            shref: skills.skillLink,
            sname: skills.skillName,
            sicon: skills.skillIcon
          }, index);
        })
      })]
    })
  });
}
;
var _default = Tools;
exports.default = _default;