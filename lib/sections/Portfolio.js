"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _data = _interopRequireDefault(require("../assets/data/data"));
var _SlidePortfolio = require("./Portfolio/SlidePortfolio");
var _react2 = require("swiper/react");
var _swiper = require("swiper");
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/autoplay");
require("../assets/styles/SwiperStyle/swiperstyle.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Swiper Core & modules

//style Swiper

function Portfolio() {
  var Title = _data.default.portfolio.title;
  var SlideOneProps = {
    ptechOne: _data.default.portfolio.iconListOne,
    pHeadTechOne: _data.default.portfolio.HeadingTitleOne,
    pDescTechOne: _data.default.portfolio.HeadingTitleOne
  };
  var SlideTwoProps = {
    ptechTwo: _data.default.portfolio.iconListTwo,
    pHeadTechTwo: _data.default.portfolio.HeadingTitleTwo,
    pDescTechTwo: _data.default.portfolio.HeadingTitleTwo
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container mx-auto min-h-full my-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: " pt-7 pb-20 xs:pb-8",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
          className: "text-5xl xs:text-3xl text-[color:var(--clr-heading)] font-inter-bold text-center ",
          children: [" ", Title, " "]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
        modules: [_swiper.Pagination, _swiper.Autoplay],
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 8000,
          disableOnInteraction: true
        },
        pagination: {
          clickable: true
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SlidePortfolio.PortfolioSlideOne, {
            ptechOne: SlideOneProps.ptechOne,
            pHeadTechOne: SlideOneProps.pHeadTechOne,
            pDescTechOne: SlideOneProps.pDescTechOne
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SlidePortfolio.PortfolioSlideTwo, {
            ptechTwo: SlideTwoProps.ptechTwo,
            pHeadTechTwo: SlideTwoProps.pHeadTechTwo,
            pDescTechTwo: SlideTwoProps.pDescTechTwo
          })
        })]
      })]
    })
  });
}
;
var _default = Portfolio;
exports.default = _default;