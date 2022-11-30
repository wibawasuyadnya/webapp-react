"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBurger = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledBurger = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    /* position: ", "; */\n    top: 5%;\n    left: 2rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 2rem;\n    height: 2rem;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    z-index: 15;\n\n    &:focus {\n        outline: none;\n      }\n      \n      div {\n        width: 2rem;\n        height: 0.25rem;\n        background: var(--clr-hmbrg);\n        border-radius: 10px;\n        transition: all 0.3s linear;\n        position: relative;\n        transform-origin: 1px;\n\n        :first-child {\n          transform: ", ";\n        }\n        :nth-child(2) {\n          opacity: ", ";\n          transform: ", ";\n        }\n        :nth-child(3) {\n          transform: ", ";\n        }\n      }\n      \n      @media (max-width: 600px) {\n        position: absolute;\n      }\n\n    "])), function (_ref) {
  var open = _ref.open;
  return open ? 'fixed' : 'relative';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 'rotate(45deg)' : 'rotate(0)';
}, function (_ref3) {
  var open = _ref3.open;
  return open ? '0' : '1';
}, function (_ref4) {
  var open = _ref4.open;
  return open ? 'translateX(20px)' : 'translateX(0)';
}, function (_ref5) {
  var open = _ref5.open;
  return open ? 'rotate(-45deg)' : 'rotate(0)';
});
exports.StyledBurger = StyledBurger;