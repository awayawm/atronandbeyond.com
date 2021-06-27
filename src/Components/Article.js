import React from 'react'
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import '../css/Article.css'
import { Helmet } from 'react-helmet'

let Article = (props) => {
    let { name } = useParams();
    let article = props.articles.find(article => article.link == name)
    // console.log(`name ${name}, articles: ${JSON.stringify(article)}`)
    return (
        <>
            <Helmet>
                <title>Atronandbeyond.com: {article.title}</title>
            </Helmet>
            <Paper className="paper-article">
                <h1>{article.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: article.content
                    }}
                />
            </Paper>
        </>)
}

export default Article;

Article.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
}
