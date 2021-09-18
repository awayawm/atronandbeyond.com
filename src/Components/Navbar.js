import React from 'react'
import PropTypes from 'prop-types'
import '../css/Navbar.css'
import NavItem from "./NavItem";
import {Grid} from "@material-ui/core";

let Navbar = (props) => {
    return (
        <div className="navbar">
            <Grid container spacing={4}>
                <Grid xs={2}>
                </Grid>
                <Grid container xs={8}>
                    {props.tags
                        .filter((tag) => tag.enabled)
                        .map((tag, i) => (
                            <NavItem key={i} tag={tag}/>
                        ))}
                </Grid>
                <Grid xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}