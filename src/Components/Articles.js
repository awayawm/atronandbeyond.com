import React from "react"
import _ from "lodash"
import "../css/Articles.css"
import {Grid} from "@material-ui/core"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import Footer from "./Footer";
import ArticlePreview from "./ArticlePreview";

let Articles = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            <div className="articleGrid">
                <Grid container spacing={2}>
                    {//article is enabled
                        !props.hasArticles && props.articles
                            .filter((article) => article.enabled)
                            // has at least one tag that is enabled
                            .filter((article) => {
                                return (
                                    _.intersection(
                                        article.tags,
                                        props.tags
                                            .filter((tag) => tag.enabled)
                                            .map((value) => value.id)
                                    ).length > 0
                                )
                            })
                            .map((article) => (
                                <Grid item lg={6} key={Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}>
                                    <ArticlePreview article={article} tags={props.tags}/>
                                </Grid>
                            ))}

                </Grid>
            </div>
            <Footer {...props}/>
        </>
    )
}

export default Articles

Articles.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    title: PropTypes.string,
    hasArticles: PropTypes.bool
}
