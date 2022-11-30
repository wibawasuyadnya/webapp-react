"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _aboutSet = _interopRequireDefault(require("../images/about-data/about-set1.png"));
var _aboutSet2 = _interopRequireDefault(require("../images/about-data/about-set2.png"));
var _aboutSet3 = _interopRequireDefault(require("../images/about-data/about-set3.png"));
var _data = _interopRequireDefault(require("../assets/data/data"));
var _react2 = require("swiper/react");
var _swiper = require("swiper");
require("swiper/css");
require("swiper/css/effect-cards");
require("swiper/css/autoplay");
require("../assets/styles/AboutStyle/about-slider.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Import Swiper styles

// import required modules

function About() {
  var aboutProps = {
    desc: _data.default.about.desc
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "about",
      className: "container items-center w-full min-h-full pt-10 pb-20 xs:pt-5 xs:pb-10 mx-auto",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "w-2/3 xs:w-10/12 xs:p-4 flex flex-row justify-center items-center xs:flex-col m-auto ",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
            perspective: "false",
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            effect: "cards",
            grabCursor: true,
            modules: [_swiper.EffectCards, _swiper.Autoplay],
            className: "mySwiper xs:w-10/12 xs:order-2 xs:mx-auto",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              className: "mySwiperSlide ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: _aboutSet.default,
                alt: "aboutPic",
                className: " w-full "
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              className: "mySwiperSlide ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: _aboutSet2.default,
                alt: "aboutPic",
                className: " w-full "
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              className: "mySwiperSlide ",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: _aboutSet3.default,
                alt: "aboutPic",
                className: " w-full "
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
            className: "text-xl xs:text-base text-[color:var(--clr-text)] font-inter-normal xs:pb-8 xs:order-1 mx-14 xs:mx-0 tracking-wide",
            children: aboutProps.desc
          })]
        })
      })
    })
  });
}
var _default = About;
exports.default = _default;