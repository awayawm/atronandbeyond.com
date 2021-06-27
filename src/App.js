import React, { Component } from "react"
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

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { ...data }
	}

	render() {
		return (
			<>
				<Helmet>
					<body className="body" />
				</Helmet>
				<CssBaseline />
				<Container>
					<Header header={this.state.header} tags={this.state.tags} />
					<BrowserRouter>
						<Navbar tags={this.state.tags} header={this.state.header} />
						<Switch>
							<Route path="/article/:name">
								<Article
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
							<Route path="/tags/:name">
								<Articles
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
							<Route exact path="/">
								<Articles
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
						</Switch>
					</BrowserRouter>
				</Container>
			</>
		)
	}
}

export default App
