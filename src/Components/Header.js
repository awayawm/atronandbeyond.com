import React from "react"
import PropTypes from "prop-types"
import {animated, config, useSpring} from "react-spring";
import {Typography} from "@mui/material";
import styled from "@emotion/styled";

let Header = (props) => {

    let headerSpring = useSpring({
        from: {x: -100, opacity:0},
        to: {x: 0, opacity:1},
        config: config.slow
    })

    let taglineSpring = useSpring({
        from: {x: -100, opacity:0},
        to: {x: 0, opacity:1},
        config: config.slow,
        delay: 100
    })

    let StyledHeader = styled.div`
      text-align: center;
      margin-top: 2em;
      margin-bottom: 1.1em;
      color: #e9c46a;
    `

    const AnimatedTypography = animated(Typography)

    return (
        <>
            <StyledHeader>
                <AnimatedTypography variant="h3"
                                    style={headerSpring}>{props.header.title}</AnimatedTypography>
                <AnimatedTypography style={taglineSpring}>{props.header.tagline}</AnimatedTypography>
            </StyledHeader>
        </>
    )
}

Header.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object,
}

export default Header
