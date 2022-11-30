"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separatorStyle = exports.dotStyle = exports.connectorStyle = void 0;
var _styles = require("@mui/material/styles");
var connectorStyle = (0, _styles.createTheme)({
  components: {
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#c9c9c9',
          width: 3,
          borderRadius: '25px',
          margin: '5px 0 3px 0'
        }
      }
    }
  }
});
exports.connectorStyle = connectorStyle;
var separatorStyle = (0, _styles.createTheme)({
  components: {
    MuiTimelineSeparator: {
      styleOverrides: {
        root: {
          height: '70px',
          margin: '20px 0'
        }
      }
    }
  }
});
exports.separatorStyle = separatorStyle;
var dotStyle = (0, _styles.createTheme)({
  components: {
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: '#c9c9c9',
          margin: 'unset'
        }
      }
    }
  }
});
exports.dotStyle = dotStyle;