import React from 'react'
import PropTypes from 'prop-types'
import {Divider, Stack} from "@mui/material";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

let Navbar = (props) => {

    let StyledStack = styled(Stack)`
      justify-content: center;
      margin: 2.2em 0 1.5em 0;
    `

    let StyledLink = styled(Link)`
      font-size: x-large;
      vertical-align: middle;
      color: #e76f51;
      text-decoration: none;
    `

    return (
        <StyledStack direction="row"
                     divider={<Divider orientation="vertical" flexItem/>}
                     spacing={10}>
            {props.tags
                .filter((tag) => tag.enabled)
                .map((tag, i) => (
                    <StyledLink key={i} to={tag.link}>{tag.icon} {tag.name}</StyledLink>
                ))}
        </StyledStack>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}