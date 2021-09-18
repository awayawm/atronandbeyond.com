import React from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {CardContent} from "@material-ui/core";
import {Link} from "react-router-dom";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import withData from './withData'
import '../css/Articles.css'

let ArticlePreview = (props) => {
    return (
        <ArticlesCard className="articles-card">
            <CardContent className="cardContent">
                <h1 className="icon-header">
                    <Link className="navLink"
                          to={`/article/${props.article.link}`}>{props.article.title}</Link>
                </h1>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown className="article-preview-text" children={_.truncate(props.data, {length: props.article.preview_length})}/>
                <div className="date">{props.article.date}</div>
            </CardContent>
        </ArticlesCard>
    )
}

ArticlePreview.propTypes = {
    article: PropTypes.object,
    tags: PropTypes.array,
    data: PropTypes.string
}

export default withData(ArticlePreview);