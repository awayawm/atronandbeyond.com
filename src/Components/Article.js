import React from "react"
import PropTypes from "prop-types"
import "../css/Article.css"
import {Helmet} from "react-helmet"
import ArticlePaper from "../Styles/AritclePaper"
import ReactMarkdown from "react-markdown";
import withData from './withData'
import Footer from "./Footer";
import {animated, config, useSpring} from "react-spring";

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
                <title>Atronandbeyond.com: {props.article.title}</title>
            </Helmet>
            <AnimatedPaper style={headerSpring} className="paper-article article">
                <h1>{props.article.title}</h1>
                {/* eslint-disable-next-line react/no-children-prop */}
                <ReactMarkdown>
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
    article: PropTypes.object
}
