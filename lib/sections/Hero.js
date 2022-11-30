"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _agus = _interopRequireDefault(require("../images/hero-data/agus.png"));
var _fa = require("react-icons/fa");
var _data = _interopRequireDefault(require("../assets/data/data"));
var _material = require("@mui/material");
var _MuiComponent = require("../assets/styles/MaterialUIStyle/MuiComponent");
var _reactTyped = _interopRequireDefault(require("react-typed"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Hero() {
  var heroProps = {
    heroData: _data.default.hero,
    socialData: _data.default.hero.social
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "container w-full mx-auto min-h-full pt-36 pb-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "m-auto text-center flex flex-col items-center justify-center",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: _agus.default,
            width: "140px",
            alt: "logoMain",
            className: "border-solid border-2 border-[#1a58a4] rounded-full m-auto"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h1", {
            className: "text-[color:var(--clr-heading)] text-6xl xs:text-3xl tracking-wider pb-[10px] pt-[10px] font-inter-extra-bold",
            children: ["Hey, I'm ", heroProps.heroData.name]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            className: "text-[color:var(--clr-typing)] text-2xl xs:text-lg tracking-wider pt-[10px] font-inter-semi-bold",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTyped.default, {
              strings: heroProps.heroData.occupation,
              typeSpeed: 50,
              backSpeed: 20,
              loop: true,
              backDelay: 2000
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-row align-center justify-center space-x-8 mt-5",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              theme: _MuiComponent.ButtonHero,
              href: heroProps.heroData.resume,
              target: "_blank",
              rel: "noreferrer",
              variant: "outlined",
              disableElevation: true,
              children: "Resume"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
              theme: _MuiComponent.ButtonHero,
              href: heroProps.heroData.contact,
              target: "_blank",
              rel: "noreferrer",
              variant: "outlined",
              disableElevation: true,
              children: "Contact"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex justify-center mt-4 space-x-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.github,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaGithub, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Github"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.facebook,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaFacebook, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Facebook"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.instagram,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaInstagram, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Instagram"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.dribbble,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaDribbble, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Dribbble"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.twitter,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaTwitter, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Twitter"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("a", {
            className: "text-xl p-2 text-[color:var(--clr-btn-text)] hover:bg-[color:var(--clr-link)] border-2 border-[color:var(--clr-btn-border)] hover:border-[color:var(--clr-link)] rounded-full hover:text-white transition-colors duration-300",
            href: heroProps.socialData.email,
            target: "_blank",
            rel: "noreferrer",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaEnvelope, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "sr-only",
              children: "Email"
            })]
          })]
        })]
      })
    })
  });
}
var _default = Hero;
exports.default = _default;