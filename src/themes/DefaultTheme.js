import {createTheme} from "@mui/material";
import baloo from "@fontsource/baloo-bhai-2/files/baloo-bhai-2-latin-400-normal.woff2"
console.log(baloo)
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
        fontFamily: 'Baloo Bhai 2, serif'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                  font-family: 'Baloo Bhai 2';
                  font-style: normal;
                  font-weight: 400;
                  src: url(${baloo}) format('woff2');
                }
              `,
        },
    },
})
