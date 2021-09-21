import React from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {CardContent} from "@material-ui/core";
import {Link} from "react-router-dom";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import withData from './withData'
import '../css/Articles.css'
import {animated, config, useSpring} from "react-spring";

let ArticlePreview = (props) => {
    const previewProp = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
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
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown className="article-preview-text">
                    {_.truncate(props.data, {length: props.article.preview_length})}
                </ReactMarkdown>
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

export default withData(ArticlePreview);