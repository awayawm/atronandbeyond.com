import React from "react"
import PropTypes from "prop-types"
import {animated, config, useSpring} from "react-spring";
import {Helmet} from "react-helmet";
import {Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

let Article = (props) => {

    let ArticlePaper = styled(Paper)`
      background-color: #2a9d8f;
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);

      img {
        height: 100%;
        width: 100%;
      }

      padding: 1em 2em;
    `

    let Title = styled(Typography)`
      color: #e9c46a;
      border-bottom: 1px solid #e9c46a;
    `

    let headerSpring = useSpring({
        from: {x: -20, opacity: 0},
        to: {x: 0, opacity: 1},
        config: config.slow
    })
    let AnimatedPaper = animated(ArticlePaper)
    return (
        <>
            <Helmet>
                <title>{props.header.title}: {props.article.title}</title>
            </Helmet>
            <AnimatedPaper style={headerSpring}>
                <Title variant="h3">{props.article.title}</Title>
                <props.article.content/>
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
