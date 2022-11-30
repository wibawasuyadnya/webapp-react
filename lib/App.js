"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _theme = require("./contexts/theme");
var _Navbar = _interopRequireDefault(require("./sections/Navbar"));
var _Header = _interopRequireDefault(require("./sections/Header"));
var _Hero = _interopRequireDefault(require("./sections/Hero"));
var _About = _interopRequireDefault(require("./sections/About"));
var _Tools = _interopRequireDefault(require("./sections/Tools"));
var _Portfolio = _interopRequireDefault(require("./sections/Portfolio"));
var _Education = _interopRequireDefault(require("./sections/Education"));
var _Project = _interopRequireDefault(require("./sections/Project"));
var _Contact = _interopRequireDefault(require("./sections/Contact"));
var _Footer = _interopRequireDefault(require("./sections/Footer"));
var _Scroll = _interopRequireDefault(require("./sections/Scroll"));
var _reactScroll = require("react-scroll");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function App() {
  var _useContext = (0, _react.useContext)(_theme.ThemeContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    themeName = _useContext2[0].themeName;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(themeName, " app"),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Navbar.default, {})]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Hero.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactScroll.Element, {
          name: "section1",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_About.default, {
            loading: true
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tools.default, {})]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Element, {
          name: "section2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Portfolio.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Element, {
          name: "section3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Education.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Element, {
          name: "section4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Project.default, {})
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Element, {
          name: "section5",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Contact.default, {})
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer.default, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Scroll.default, {})]
    })
  });
}
var _default = App;
exports.default = _default;