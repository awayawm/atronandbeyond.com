import React from "react"
import PropTypes from "prop-types"
import "../css/Header.css"
import {animated, config, useSpring} from "react-spring";
import {Typography} from "@material-ui/core";

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

    const AnimatedTypography = animated(Typography)

    return (
        <>
            <header>
                <AnimatedTypography variant="h3"
                                    style={headerSpring}>{props.header.title}</AnimatedTypography>
                <AnimatedTypography style={taglineSpring}>{props.header.tagline}</AnimatedTypography>
            </header>
        </>
    )
}

Header.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object,
}

export default Header
