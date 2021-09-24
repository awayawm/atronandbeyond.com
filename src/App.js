import React from "react"
import config from "./config"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import {CssBaseline, Container} from "@material-ui/core"
import "./css/App.css"
import "@fontsource/baloo-bhai-2/400.css"
import "@fontsource/baloo-bhai-2/500.css"
import "@fontsource/baloo-bhai-2/700.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Helmet} from "react-helmet"
import Article from "./Components/Article"
import Navbar from "./Components/Navbar"
import _ from "lodash";

let App = () => {

    let getTagIdFromName = (tags, match) => {
        return tags.find((tag) => tag.name === _.startCase(match.params.name)).id
    }

    return (
        <>
            <Helmet>
                <body className="body"/>
            </Helmet>
            <CssBaseline/>
            <Container>
                <Header header={config.header} tags={config.tags}/>
                <BrowserRouter>
                    <Navbar tags={config.tags} header={config.header}/>
                    <Switch>
                        <Route path="/article/:name">
                            <Article
                                articles={config.articles}
                                tags={config.tags}
                                footer={config.footer}
                            />
                        </Route>
                        <Route path="/tags/:name" render={({match}) =>(
                            <Articles
                                articles={config.articles.filter((article) => article.tags.includes(getTagIdFromName(config.tags, match)))}
                                tags={config.tags}
                                footer={config.footer}
                            />
                        )}>
                        </Route>
                        <Route exact path="/">
                            <Articles
                                articles={config.articles}
                                tags={config.tags}
                                footer={config.footer}
                            />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </>
    )
}

export default App;