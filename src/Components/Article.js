import React from "react"
import PropTypes from "prop-types"
import "../css/Article.css"
import ArticlePaper from "../Styles/AritclePaper"
import ReactMarkdown from "react-markdown";
import withData from './withData'
import Footer from "./Footer";
import {animated, config, useSpring} from "react-spring";
import {Helmet} from "react-helmet";

let Article = (props) => {
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
            <AnimatedPaper style={headerSpring} className="paper-article article">
                <h1>{props.article.title}</h1>
                <ReactMarkdown linkTarget="_blank">
                    {props.data}
                </ReactMarkdown>
            </AnimatedPaper>
            <Footer {...props} />
        </>
    )
}

export default withData(Article);

Article.propTypes = {
    data: PropTypes.string,
    article: PropTypes.object,
    header: PropTypes.object
}
