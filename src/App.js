import React  from "react"
import * as data from "./data"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import { CssBaseline, Container } from "@material-ui/core"
import "./css/App.css"
import "@fontsource/baloo-bhai-2/400.css"
import "@fontsource/baloo-bhai-2/500.css"
import "@fontsource/baloo-bhai-2/700.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Article from "./Components/Article"
import Navbar from "./Components/Navbar"

let App = () => {
		return (
			<>
				<Helmet>
					<body className="body" />
				</Helmet>
				<CssBaseline />
				<Container>
					<Header header={data.header} tags={data.tags} />
					<BrowserRouter>
						<Navbar tags={data.tags} header={data.header} />
						<Switch>
							<Route path="/article/:name">
								<Article
									articles={data.articles}
									tags={data.tags}
								/>
							</Route>
							<Route path="/tags/:name">
								<Articles
									articles={data.articles}
									tags={data.tags}
								/>
							</Route>
							<Route exact path="/">
								<Articles
									articles={data.articles}
									tags={data.tags}
								/>
							</Route>
						</Switch>
					</BrowserRouter>
				</Container>
			</>
		)
}

export default App;