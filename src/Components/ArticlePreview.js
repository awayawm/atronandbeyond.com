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

    let StyledDate = styled.div`
      color: #e9c46a;
      text-align: right;
    `

    const cardAnimation = useSpring({
        from: {x: -20,opacity: 0},
        to: {x: 0, opacity: 1},
        config: config.gentle
    })
    const AnimatedArticlesCard = animated(StyledCard)

    const titleAnimation = useSpring({
        from: {x: -40, opacity: 0},
        to: {x: 0, opacity: 1},
        config: config.gentle,
        delay: 80
    })
    const AnimatedTypography = animated(Typography)
    return (
        <AnimatedArticlesCard style={cardAnimation}>
            <CardContent>
                <AnimatedTypography variant="h4" style={titleAnimation}>
                    <StyledLink
                        to={`/article/${props.article.link}`}>{props.article.title}</StyledLink>
                </AnimatedTypography>
                <props.article.preview/>
                <Typography variant="body2">
                    <StyledDate>
                        {props.article.date}
                    </StyledDate>
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