import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/Navbar.css'

let Navbar = (props) => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    🏡 <Link className="navbar-link" to={"/"}>Home</Link>
                </li>
                {props.tags
                    .filter((tag) => tag.enabled)
                    .map((tag, i) => (
                        <li key={i}>
                            {tag.icon} <Link className="navbar-link" to={tag.link}>{tag.name}</Link>
                        </li>
                    ))}
                <li>
                    🏡 <a className="navbar-link" href={props.header.github}>Github</a>
                </li>
                <li>
                    🏡 <a className="navbar-link" href={props.header.linkedin}>Linkedin</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}