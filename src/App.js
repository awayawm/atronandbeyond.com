import React from "react"
import config from "./config"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Article from "./Components/Article"
import Navbar from "./Components/Navbar"
import _ from "lodash";
import Favicon from "react-favicon";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from './themes/DefaultTheme'
import {Footer} from "./Components/Footer";

let App = () => {
    let getTagIdFromName = (tags, match) => {
        return tags.find((tag) => tag.name === _.startCase(match.params.name)).id
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Favicon url={config.favicon}/>
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
                    <Footer footer={config.footer} url={config.url}/>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    )
}

export default App;