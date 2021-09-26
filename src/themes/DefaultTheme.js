import baloo from "@fontsource/baloo-bhai-2/files/baloo-bhai-2-latin-400-normal.woff2"
import {createTheme, responsiveFontSizes} from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#e9c46a',
        },
        secondary: {
            main: '#e76f51',
        },
        background: {
            default: '#264653',
            paper: '#2a9d8f',
        },
    },
    typography: {
        body1: {
            fontSize: '1.3em',
        },
        fontFamily: 'BalooBhai2, serif'
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: `
                  @font-face {
                      font-family: 'BalooBhai2';
                      src: url('${baloo}') format('woff2');
                      font-weight: normal;
                      font-style: normal;
                    }
              `,
        },
        Link: {
            textDecoration: 'none'
        }
    },
})
export default responsiveFontSizes(theme)