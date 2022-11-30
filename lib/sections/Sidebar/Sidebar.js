"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _SidebarStyle = require("../../assets/styles/SidebarStyle/SidebarStyle");
var _propTypes = require("prop-types");
var _reactScroll = require("react-scroll");
var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Sidebar = function Sidebar(_ref) {
  var open = _ref.open,
    setOpen = _ref.setOpen;
  var isMobile = (0, _useMediaQuery.default)('(max-width:600px)');
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SidebarStyle.StyledSidebar, {
      open: open,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section1",
        spy: true,
        onClick: function onClick() {
          return setOpen(!open);
        },
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "About"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section2",
        spy: true,
        onClick: function onClick() {
          return setOpen(!open);
        },
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Portfolio"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section3",
        spy: true,
        onClick: function onClick() {
          return setOpen(!open);
        },
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Education"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section4",
        spy: true,
        onClick: function onClick() {
          return setOpen(!open);
        },
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Project"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section5",
        spy: true,
        onClick: function onClick() {
          return setOpen(!open);
        },
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Contact"
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_SidebarStyle.StyledSidebar, {
      open: open,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section1",
        spy: true,
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "About"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section2",
        spy: true,
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Portfolio"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section3",
        spy: true,
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Education"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section4",
        spy: true,
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Project"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactScroll.Link, {
        to: "section5",
        spy: true,
        smooth: true,
        duration: 500,
        className: "cursor-pointer text-3xl text-[color:var(--clr-heading)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4",
        children: "Contact"
      })]
    })
  });
};
Sidebar.propTypes = {
  open: _propTypes.bool.isRequired,
  setOpen: _propTypes.func.isRequired
};
var _default = Sidebar;
exports.default = _default;