import React from "react"
import config from "./config"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import {CssBaseline, Container} from "@material-ui/core"
import "./css/App.css"
import "@fontsource/baloo-bhai-2/400.css"
import "@fontsource/baloo-bhai-2/500.css"
import "@fontsource/baloo-bhai-2/700.css"

import BalooBhai2 from '@fontsource/baloo-bhai-2'

import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Helmet} from "react-helmet"
import Article from "./Components/Article"
import Navbar from "./Components/Navbar"
import _ from "lodash";
import Favicon from "react-favicon";
import {createTheme, ThemeProvider} from "@mui/material";

let App = () => {

    let theme = createTheme({
        typography: {
            fontFamily: [
                'Baloo Bhai 2',
                'Roboto',
                'Arial',
                'sans-serif'
            ].join(','),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
                    @font-face {
                        src: url(${BalooBhai2})
                    }
                `
            }
        }
    })

    let getTagIdFromName = (tags, match) => {
        return tags.find((tag) => tag.name === _.startCase(match.params.name)).id
    }

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <body className="body"/>
            </Helmet>
            <Favicon url={config.favicon}/>
            <CssBaseline/>
            <Container>
                <Header header={config.header} tags={config.tags}/>
                <BrowserRouter>
                    <Navbar tags={config.tags} header={config.header}/>
                    <Switch>
                        <Route path="/article/:name" render={({match}) => (
                            <Article
                                article={config.articles.filter(article => article.link === match.params.name)[0]}
                                tags={config.tags}
                                footer={config.footer}
                                header={config.header}
                            />
                        )}>
                        </Route>
                        <Route path="/tags/:name" render={({match}) => (
                            <Articles
                                articles={config.articles.filter(article => article.tags.includes(getTagIdFromName(config.tags, match)))}
                                tags={config.tags}
                                footer={config.footer}
                                header={config.header}
                            />
                        )}>
                        </Route>
                        <Route exact path="/">
                            <Articles
                                articles={config.articles}
                                tags={config.tags}
                                footer={config.footer}
                                header={config.header}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    )
}

export default App;