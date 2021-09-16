import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

let NavItem = (props) => {
    return(
        <li key={props.key}>
            {props.tag.icon} <Link className="navbar-link" to={props.tag.link}>{props.tag.name}</Link>
        </li>
    )
}

NavItem.propTypes = {
    tag: PropTypes.object,
    key: PropTypes.object
}

export default NavItem