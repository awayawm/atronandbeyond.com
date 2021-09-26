import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {animated, config, useSpring} from "react-spring";
import {Button, Card, CardContent, Typography} from "@mui/material";
import styled from "@emotion/styled";

let ArticlePreview = (props) => {
    let StyledCard = styled(Card)`
      padding: 5px 1.1em;
      a {
        text-decoration: none;
      }
    `

    let StyledButton = styled(Button)`
      font-size: x-large;
      font-weight: bold;
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
        <AnimatedArticlesCard style={cardAnimation} elevation={5} square>
            <CardContent>
                <AnimatedTypography variant="h4" style={titleAnimation}>
                    <StyledButton component={Link}
                        to={`/article/${props.article.link}`}>{props.article.title}</StyledButton>
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