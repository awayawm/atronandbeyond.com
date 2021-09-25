import baloo from "@fontsource/baloo-bhai-2/files/baloo-bhai-2-latin-400-normal.woff2"
import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff4400',
        }
    },
    typography: {
        body1: {
            fontSize: '1.2em',
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
    },
})
