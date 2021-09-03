import React from "react"
import PropTypes from "prop-types"
import "../css/Header.css"

let Header = (props) => {
	return(
			<>
				<header>
					<h1>{props.header.title}</h1>
					<div>{props.header.tagline}</div>
				</header>
			</>
		)
}

Header.propTypes = {
	tags: PropTypes.array,
	header: PropTypes.object,
}

export default Header
