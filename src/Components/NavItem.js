import React from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Grid} from "@material-ui/core";

let NavItem = (props) => {
    return (
        <Grid xs={4} key={props.key}>
            <div className="navbar-item">
                {props.tag.icon} <Link className="navbar-link" to={props.tag.link}>{props.tag.name}</Link>
            </div>
        </Grid>
    )
}

NavItem.propTypes = {
    tag: PropTypes.object,
    key: PropTypes.object
}

export default NavItem