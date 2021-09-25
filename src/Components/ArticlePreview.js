import React from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import '../css/Articles.css'
import {animated, config, useSpring} from "react-spring";
import {CardContent, Typography} from "@mui/material";

let ArticlePreview = (props) => {
    const previewProp = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: config.molasses
    })
    const AnimatedArticlesCard = animated(ArticlesCard)
    return (
        <AnimatedArticlesCard style={previewProp} className="articles-card">
            <CardContent className="cardContent">
                <Typography variant="h4">
                    <Link style={{textDecoration: 'none'}}
                          to={`/article/${props.article.link}`}>{props.article.title}</Link>
                </Typography>
                <props.article.preview/>
                <Typography variant="body2">
                    {props.article.date}
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