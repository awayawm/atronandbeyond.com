import React, { Component } from "react"
import * as data from "./data"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import { CssBaseline, Container } from "@material-ui/core"
import "./css/App.css"
import { Helmet } from "react-helmet"
import "@fontsource/baloo-bhai-2/400.css"
import "@fontsource/baloo-bhai-2/500.css"
import "@fontsource/baloo-bhai-2/700.css"
import { BrowserRouter, Link } from "react-router-dom"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { ...data }
	}

	render() {
		return (
			<>
				<Helmet>
					<title>atronandbeyond.com: Beats and Code</title>
					<body className="body" />
				</Helmet>
				<CssBaseline />
				<Container>
					<Header header={this.state.header} tags={this.state.tags} />
					<BrowserRouter>
						<div className="navbar">
							<ul>
								{this.state.tags
									.filter((tag) => tag.enabled)
									.map((tag, i) => (
										<li key={i}>
											{tag.icon} <Link to={tag.link}>{tag.name}</Link>{" "}
										</li>
									))}
							</ul>
						</div>
					</BrowserRouter>
					<Articles articles={this.state.articles} tags={this.state.tags} />
				</Container>
			</>
		)
	}
}

export default App
