"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _data = _interopRequireDefault(require("../assets/data/data"));
var _material = require("@mui/material");
var _fa = require("react-icons/fa");
var _MuiComponent = require("../assets/styles/MaterialUIStyle/MuiComponent");
var _BannerFooter = _interopRequireDefault(require("../images/footer-data/BannerFooter.png"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getYearData() {
  var year = new Date().getFullYear();
  return year;
}
;
function Footer() {
  var footerdata = {
    ftrData: _data.default.footer,
    cpyrData: _data.default.footer.copyright,
    sclData: _data.default.footer.social
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "bg-[color:var(--clr-footer)] min-h-full py-8 mx-auto",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "container mx-auto flex flex-row xs:flex-col",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex items-center justify-start xs:justify-center w-2/4 xs:w-full",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            alt: "footer logo",
            className: "float-left xs:float-none",
            src: _BannerFooter.default,
            width: 250
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center justify-end xs:justify-center w-2/4 xs:w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
            className: "float-right xs:float-none",
            children: "  "
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex justify-center mt-4 space-x-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.github,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaGithub, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Github"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.facebook,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebook, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Facebook"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.instagram,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaInstagram, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Instagram"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.dribbble,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaDribbble, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Dribbble"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.twitter,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTwitter, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Twitter"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
              className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
              href: footerdata.sclData.email,
              target: "_blank",
              rel: "noreferrer",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEnvelope, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "sr-only",
                children: "Email"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Divider, {
        theme: _MuiComponent.DividerStyle,
        variant: "middle",
        margin: "100px 0"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col items-center space-y-2 justify-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h5", {
          className: "text-white text-base font-inter-regular",
          children: footerdata.ftrData.desc
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "text-white text-xs font-inter-regular",
          children: [" ", footerdata.cpyrData.before, "  ", getYearData(), " ", footerdata.cpyrData.after, " "]
        })]
      })]
    })
  });
}
;
var _default = Footer;
exports.default = _default;