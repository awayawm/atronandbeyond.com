import React from 'react'
import PropTypes from 'prop-types'
import {Button, Divider, Stack} from "@mui/material";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

let Navbar = (props) => {

    let StyledStack = styled(Stack)`
      && {
        justify-content: center;
        margin: 2.2em 0 1.5em 0;
      }
    `

    let StyledButton = styled(Button)`
      && {
        font-size: x-large;
        padding: .5em 1em;
      }
    `

    return (
        <StyledStack direction="row"
                     divider={<Divider orientation="vertical" flexItem/>}
                     spacing={4}>
            {props.tags
                .filter((tag) => tag.enabled)
                .map((tag, i) => (
                    <StyledButton color="secondary" component={Link} key={i}
                                  to={tag.link}>{tag.icon} {tag.name}</StyledButton>
                ))}
        </StyledStack>
    )
}

export default Navbar;

Navbar.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
}