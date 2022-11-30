"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSidebar = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledSidebar = _styledComponents.default.nav(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: var(--clr-sdbr);\n  height: 100vh;\n  width: 270px;\n  padding: 2rem;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: transform 0.35s ease-in-out;\n  transform: ", ";\n  z-index: 10;\n  box-shadow: 0 0 10px 1px rgba(0,0,0,0.18);\n  \n  @media (max-width: 600px) {\n    width: 100%;\n    height: 100%;\n  }\n"])), function (_ref) {
  var open = _ref.open;
  return open ? 'translateX(0)' : 'translateX(-100%)';
});
exports.StyledSidebar = StyledSidebar;