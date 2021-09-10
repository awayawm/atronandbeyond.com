import React from "react"
import PropTypes from "prop-types"
import "../css/Article.css"
import {Helmet} from "react-helmet"
import ArticlePaper from "../Styles/AritclePaper"
import {withRouter} from "react-router-dom"
import ReactMarkdown from "react-markdown";
import withData from './withData'

let Article = (props) => {
    return (
        <>
            <Helmet>
                <title>Atronandbeyond.com: {props.article.title}</title>
            </Helmet>
            <ArticlePaper className="paper-article">
                <h1>{props.article.title}</h1>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown children={props.data}/>
            </ArticlePaper>
        </>
    )
}

export default withRouter(withData(Article));

Article.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    match: PropTypes.object,
    data: PropTypes.string,
    article: PropTypes.object
}
