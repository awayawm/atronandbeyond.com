import React from "react"
import PropTypes from "prop-types"
import {animated, config, useSpring} from "react-spring";
import {Helmet} from "react-helmet";
import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

let Article = (props) => {

    let StyledPaper = styled(Paper)`
      img {
        height: 100%;
        width: 100%;
      }
      
      a {
        text-decoration: none;
      }

      padding: 1.5em 2em;
    `

    let Title = styled.div`
      color: #e9c46a;
      border-bottom: 1px solid #e9c46a;
    `

    let headerSpring = useSpring({
        from: {x: -20, opacity: 0},
        to: {x: 0, opacity: 1},
        config: config.slow
    })
    let AnimatedPaper = animated(StyledPaper)
    return (
        <>
            <Helmet>
                <title>{props.header.title}: {props.article.title}</title>
            </Helmet>
            <AnimatedPaper style={headerSpring} elevation={10} square>
                <Typography variant="h3" component={Title}>{props.article.title}</Typography>
                <props.article.content />
            </AnimatedPaper>
        </>
    )
}

export default Article;

Article.propTypes = {
    data: PropTypes.string,
    article: PropTypes.object,
    header: PropTypes.object
}
