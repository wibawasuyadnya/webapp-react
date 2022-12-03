import { createTheme } from '@mui/material/styles';

const TypoHeading = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                h4: {
                    color: "var(--clr-secondary)",
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 600,
                },
            },
        },
    },
});

const CardStyle = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "var(--clr-primary)",
                    borderRadius: "15px",
                    borderColor: "var(--clr-border-card)",
                    '&:hover': {
                        background: "var(--clr-gradient)",
                        boxShadow: "0 0 15px 1px rgba(0,0,0,0.18)"
                    },
                },
            },      
        },
    },
});

const CardButton = createTheme({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: "35px",
                    color: "var(--clr-secondary)",
                },
            },
        },
    },
});

const CardContet = createTheme({
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
                    },
                },
            },
        },
    },    
});

const ButtonContact = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "25px",
                    backgroundColor: "var(--clr-border)",
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
                },
            },
        },
    },
});


const ButtonHero = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: "var(--clr-border)",
                    borderRadius: "25px",
                    backgroundColor: "var(--clr-border)",
                    color: "#F3F3F3",
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
                },
            }, 
        }, 
    },
});

const DividerStyle = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "#1a3d61",
                    width: "97%",
                    margin: "20px auto", 
                }
             }, 
        }, 
    },
});


export { TypoHeading, CardContet, CardStyle, CardButton, ButtonContact, ButtonHero, DividerStyle };