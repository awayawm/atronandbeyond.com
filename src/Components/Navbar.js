import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../css/Navbar.css'
import NavItem from "./NavItem";

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
                        <NavItem key={i} tag={tag}/>
                    ))}
            </ul>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}