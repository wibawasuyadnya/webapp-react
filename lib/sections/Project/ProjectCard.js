"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material/");
var _iconsMaterial = require("@mui/icons-material");
var _MuiComponent = require("../../assets/styles/MaterialUIStyle/MuiComponent");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ProjectCard(props) {
  var displayProject = function displayProject(props) {
    var projects = props.projects;
    if (projects.length > 0) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "container w-3/4 xs:w-10/12 mx-auto",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "grid gap-5 xs:gap-10 grid-cols-3 xs:grid-cols-1 px-7 xs:px-0",
          children: projects.map(function (project) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                justifyItems: "center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Card, {
                  variant: "outlined",
                  theme: _MuiComponent.CardStyle,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.CardContent, {
                    theme: _MuiComponent.CardContet,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                      theme: _MuiComponent.TypoHeading,
                      variant: "h4",
                      component: "div",
                      children: project.title
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
                      className: "text-base text-[color:var(--clr-text)] font-inter-normal",
                      variant: "body",
                      component: "div",
                      children: project.desc
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
                      className: "flex flex-row gap-2",
                      children: project.stack.map(function (stack, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
                            className: "text-[color:var(--clr-text)] text-sm font-inter-medium",
                            children: stack
                          })
                        }, index);
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Tooltip, {
                      title: "See Project",
                      placement: "right-start",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.IconButton, {
                        theme: _MuiComponent.CardButton,
                        size: "small",
                        href: project.link,
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.GitHub, {})
                      })
                    })]
                  })
                })
              })
            }, project.id);
          })
        })
      });
    } else {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "No Project Listed Madafaka"
        })
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {
    children: displayProject(props)
  });
}
var _default = ProjectCard;
exports.default = _default;