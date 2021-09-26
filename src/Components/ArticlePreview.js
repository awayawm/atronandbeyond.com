import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {animated, config, useSpring} from "react-spring";
import {Card, CardContent, Typography} from "@mui/material";
import styled from "@emotion/styled";

let ArticlePreview = (props) => {
    let StyledCard = styled(Card)`
      background-color: #2a9d8f;
      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
      padding: 5px 1.1em;
    `
    let StyledLink = styled(Link)`
      text-decoration: none;
      color: #e9c46a;
    `

    let StyledFooter = styled.div`
      color: #e9c46a;
      text-align: right;
    `

    const cardAnimation = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: config.molasses
    })
    const AnimatedArticlesCard = animated(StyledCard)

    const titleAnimation = useSpring({
        from: {x: -100, opacity: 0},
        to: {x: 0, opacity: 1},
        config: config.slow,
        delay: 200
    })
    const AnimatedLink = animated(StyledLink)
    return (
        <AnimatedArticlesCard style={cardAnimation}>
            <CardContent>
                <Typography variant="h4">
                    <AnimatedLink style={titleAnimation}
                                  to={`/article/${props.article.link}`}>{props.article.title}</AnimatedLink>
                </Typography>
                <props.article.preview/>
                <Typography variant="body2">
                    <StyledFooter>
                        {props.article.date}
                    </StyledFooter>
                </Typography>
            </CardContent>
        </AnimatedArticlesCard>
    )
}

ArticlePreview.propTypes = {
    article: PropTypes.object,
    tags: PropTypes.array,
    data: PropTypes.string
}

export default ArticlePreview;