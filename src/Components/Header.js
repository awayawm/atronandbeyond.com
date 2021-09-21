import React from "react"
import PropTypes from "prop-types"
import "../css/Header.css"
import {useSpring, animated, config} from "react-spring";
import {Typography} from "@material-ui/core";

let Header = (props) => {
    let headerProps = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        config: config.slow
})
    const AnimatedTypography = animated(Typography)
    return (
        <>
            <header>
                <AnimatedTypography variant="h3" style={headerProps}>{props.header.title}</AnimatedTypography>
                <animated.div style={headerProps}>{props.header.tagline}</animated.div>
            </header>
        </>
    )
}

Header.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object,
}

export default Header
