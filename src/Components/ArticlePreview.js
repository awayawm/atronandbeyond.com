import React from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import '../css/Articles.css'
import {animated, config, useSpring} from "react-spring";
import {CardContent} from "@mui/material";

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
                <h1 className="icon-header">
                    <Link className="navLink"
                          to={`/article/${props.article.link}`}>{props.article.title}</Link>
                </h1>
                <props.article.preview/>
                <div className="date">{props.article.date}</div>
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