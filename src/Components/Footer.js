import React from 'react'
import PropTypes from 'prop-types'
import {Divider, Link, Stack} from "@mui/material";
import styled from "@emotion/styled";

export let Footer = (props) => {
    let StyledStack = styled(Stack)`
      padding: 1.8em;
      justify-content: center;
    `

    let StyledLink = styled(Link)`
      text-decoration: none;
      font-size: .8em;
    `

    return (
        <StyledStack
            direction="row"
            divider={<Divider orientation="vertical" flexItem/>}
            spacing={5}
        >
            <StyledLink href={props.url} target="_blank"
                  rel="noreferrer">{props.footer.tagline}</StyledLink>
            <StyledLink href={props.footer.github} target="_blank" rel="noreferrer">Github</StyledLink>
            <StyledLink href={props.footer.linkedin} target="_blank" rel="noreferrer">Linkedin</StyledLink>
        </StyledStack>
    )
}

Footer.propTypes = {
    footer: PropTypes.object,
    url: PropTypes.string
};