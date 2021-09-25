import React from 'react'
import PropTypes from 'prop-types'
import '../css/Navbar.css'
import NavItem from "./NavItem";
import {Grid} from "@mui/material";

let Navbar = (props) => {
    return (
        <div className="navbar">
            <Grid container spacing={4}>
                {props.tags
                    .filter((tag) => tag.enabled)
                    .map((tag, i) => (
                        <NavItem key={i} tag={tag}/>
                    ))}
            </Grid>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}