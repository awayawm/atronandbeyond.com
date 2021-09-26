import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from "@mui/material";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

let Navbar = (props) => {

    let StyledStack = styled(Stack)`
      justify-content: center;
      margin: 2.2em 20% 1.5em;
    `

    let StyledLink = styled(Link)`
      font-size: x-large;
      vertical-align: middle;
      margin-left: 0.5em;
      color: #e76f51;
      text-decoration: none;
    `

    return (
        <StyledStack direction="row" spacing={10}>
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