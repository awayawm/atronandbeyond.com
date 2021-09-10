import React, {Component} from "react"
import PropTypes from "prop-types"
import "../css/Article.css"
import {Helmet} from "react-helmet"
import ArticlePaper from "../Styles/AritclePaper"
import {withRouter} from "react-router-dom"
import ReactMarkdown from "react-markdown";
import withData from './withData'

class Article extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Atronandbeyond.com: {this.props.article.title}</title>
                </Helmet>
                <ArticlePaper className="paper-article">
                    <h1>{this.props.article.title}</h1>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={this.props.data}/>
                </ArticlePaper>
            </>
        )
    }
}

export default withRouter(withData(Article));

Article.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    match: PropTypes.object,
    data: PropTypes.string,
    article: PropTypes.object
}
