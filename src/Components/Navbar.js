import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import '../css/Navbar.css'

let Navbar = (props) => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    🏡 <Link to={"/"}>Home</Link>
                </li>
                {props.tags
                    .filter((tag) => tag.enabled)
                    .map((tag, i) => (
                        <li key={i}>
                            {tag.icon} <Link to={tag.link}>{tag.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
}