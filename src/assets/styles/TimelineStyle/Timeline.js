import { createTheme } from '@mui/material/styles';

const connectorStyle = createTheme({
    components: {
        MuiTimelineConnector : {
            styleOverrides: {
                root: {
                    backgroundColor: '#c9c9c9', 
                    width: 3,
                    borderRadius: '25px',
                    margin: '5px 0 3px 0',
                },
            },
        },
    },
});

const separatorStyle = createTheme({
    components: {
        MuiTimelineSeparator : {
            styleOverrides: {
                root: {
                    height: '70px',
                    margin: '20px 0',
                },
            },
        },
    },    
});

const dotStyle = createTheme({
    components: {
        MuiTimelineDot: {
            styleOverrides: {
                root: {
                    backgroundColor: '#c9c9c9', 
                    margin: 'unset',
                },
            },
        },
    },
});

export { connectorStyle, separatorStyle, dotStyle };