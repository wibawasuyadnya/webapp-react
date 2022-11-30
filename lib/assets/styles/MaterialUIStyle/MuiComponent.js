"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypoHeading = exports.DividerStyle = exports.CardStyle = exports.CardContet = exports.CardButton = exports.ButtonHero = exports.ButtonContact = void 0;
var _styles = require("@mui/material/styles");
var TypoHeading = (0, _styles.createTheme)({
  components: {
    MuiTypography: {
      styleOverrides: {
        h4: {
          color: "var(--clr-heading)",
          fontSize: "24px",
          lineHeight: "32px",
          fontWeight: 600
        }
      }
    }
  }
});
exports.TypoHeading = TypoHeading;
var CardStyle = (0, _styles.createTheme)({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--clr-bg-card)",
          borderRadius: "15px",
          '&:hover': {
            boxShadow: "0 0 15px 1px rgba(0,0,0,0.18)"
          }
        }
      }
    }
  }
});
exports.CardStyle = CardStyle;
var CardButton = (0, _styles.createTheme)({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "35px",
          color: "var(--clr-heading)"
        }
      }
    }
  }
});
exports.CardButton = CardButton;
var CardContet = (0, _styles.createTheme)({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            padding: "16px",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            justifyContent: "center"
          }
        }
      }
    }
  }
});
exports.CardContet = CardContet;
var ButtonContact = (0, _styles.createTheme)({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          backgroundColor: "var(--clr-hmbrg)",
          color: "#FFF",
          margin: "40px 0",
          padding: "5px 40px",
          textTransform: "capitalize",
          fontSize: "22px",
          transition: "all .25s ease-in-out",
          fontWeight: 500,
          '&:hover': {
            backgroundColor: "var(--clr-link)",
            transform: "scale(1.05)",
            color: "#FFF"
          }
        }
      }
    }
  }
});
exports.ButtonContact = ButtonContact;
var ButtonHero = (0, _styles.createTheme)({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "var(--clr-btn-border)",
          borderRadius: "25px",
          backgroundColor: "var(--clr-btn)",
          color: "var(--clr-btn-text)",
          borderWidth: 2,
          padding: "5px 35px",
          textTransform: "capitalize",
          fontSize: "20px",
          fontWeight: 500,
          '&:hover': {
            backgroundColor: "var(--clr-link)",
            borderWidth: 2,
            borderColor: "var(--clr-link)",
            color: "#F3F3F3"
          }
        }
      }
    }
  }
});
exports.ButtonHero = ButtonHero;
var DividerStyle = (0, _styles.createTheme)({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#1a3d61",
          width: "97%",
          margin: "20px auto"
        }
      }
    }
  }
});
exports.DividerStyle = DividerStyle;