"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioSlideOne = PortfolioSlideOne;
exports.PortfolioSlideTwo = PortfolioSlideTwo;
var _react = _interopRequireWildcard(require("react"));
var _wnf = _interopRequireDefault(require("../../images/portfolio-data/wnf.png"));
var _agb = _interopRequireDefault(require("../../images/portfolio-data/agb.png"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
//Component for Icon Here
//Icon One
var PortfolioIconOne = function PortfolioIconOne(_ref) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex xs:justify-center xs:items-center",
        children: data.piconOne
      })
    })
  });
};
//Icon Two
var PortfolioIconTwo = function PortfolioIconTwo(_ref2) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref2), _ref2));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex xs:justify-center xs:items-center",
        children: data.piconTwo
      })
    })
  });
};
//End of Component for Icon 

//Component for Heading Here
//Heading One
var PortfolioHeadingOne = function PortfolioHeadingOne(_ref3) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref3), _ref3));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "font-inter-bold text-3xl xs:text-2xl xs:text-center text-[color:var(--clr-heading)] ",
        children: data.pHeadOne
      })
    })
  });
};
//Heading Two
var PortfolioHeadingTwo = function PortfolioHeadingTwo(_ref4) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref4), _ref4));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "font-inter-bold text-3xl xs:text-2xl xs:text-center  text-[color:var(--clr-heading)] ",
        children: data.pHeadTwo
      })
    })
  });
};
//End of Component for Heading

//Component for Description Here
//Description One
var PortfolioDescOne = function PortfolioDescOne(_ref5) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref5), _ref5));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "font-inter-normal text-lg xs:text-base xs:text-center text-[color:var(--clr-text)] tracking-wide",
        children: data.pDescOne
      })
    })
  });
};
//Description Two
var PortfolioDescTwo = function PortfolioDescTwo(_ref6) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref6), _ref6));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "font-inter-normal text-lg xs:text-base xs:text-center text-[color:var(--clr-text)] tracking-wide",
        children: data.pDescTwo
      })
    })
  });
};
//End of Component for Description

// Merge all components array element below
//Slide One
function PortfolioSlideOne(_ref7) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref7), _ref7));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container flex xs:flex-col mx-auto w-10/12",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-2/4 xs:w-full pr-6 xs:pr-0",
        children: [data.pHeadTechOne.map(function (HeadingTitleOne, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioHeadingOne, {
            pHeadOne: HeadingTitleOne.PortfolioHeading
          }, index);
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-[350px] xs:w-10/12 xs:mx-auto ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "grid grid-cols-4 justify-center mt-3.5 mb-5",
            children: data.ptechOne.map(function (iconListOne, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioIconOne, {
                piconOne: iconListOne.PortfolioIcon
              }, index);
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: data.pDescTechOne.map(function (HeadingTitleOne, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioDescOne, {
              pDescOne: HeadingTitleOne.PortfolioDescription
            }, index);
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-3/5 xs:w-full xs:mt-4 flex items-center",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "rounded-[15px]",
          alt: "Wealthandfreedom",
          src: _wnf.default
        })
      })]
    })
  });
}
;

//Slide Two
function PortfolioSlideTwo(_ref8) {
  var data = _extends({}, (_objectDestructuringEmpty(_ref8), _ref8));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "container flex xs:flex-col mx-auto w-10/12",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-2/4 xs:w-full pr-6 xs:pr-0 ",
        children: [data.pHeadTechTwo.map(function (HeadingTitleTwo, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioHeadingTwo, {
            pHeadTwo: HeadingTitleTwo.PortfolioHeading
          }, index);
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "w-[350px] xs:w-10/12 xs:mx-auto ",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "grid grid-cols-4 justify-center mt-3.5 mb-5",
            children: data.ptechTwo.map(function (iconListTwo, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioIconTwo, {
                piconTwo: iconListTwo.PortfolioIcon
              }, index);
            })
          })
        }), data.pDescTechTwo.map(function (HeadingTitleTwo, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(PortfolioDescTwo, {
            pDescTwo: HeadingTitleTwo.PortfolioDescription
          }, index);
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-3/5 xs:w-full xs:mt-4 flex items-center ",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "rounded-[15px]",
          alt: "AllGoodBud",
          src: _agb.default
        })
      })]
    })
  });
}
;