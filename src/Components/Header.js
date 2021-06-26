import React, { Component } from "react"
import PropTypes from "prop-types"
import "../css/Header.css"

export default class Header extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<>
				<header>
					<h1>{this.props.header.title}</h1>
					<div>{this.props.header.tagline}</div>
				</header>
				<div className="links">
					<a href={this.props.header.github}>Github</a>
					<a href={this.props.header.linkedin}>Linkedin</a>
				</div>
			</>
		)
	}
}

Header.propTypes = {
	tags: PropTypes.array,
	header: PropTypes.object,
}
