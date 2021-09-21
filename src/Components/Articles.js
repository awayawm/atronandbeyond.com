import React from "react"
import _ from "lodash"
import "../css/Articles.css"
import {Grid} from "@material-ui/core"
import {useParams} from "react-router-dom"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import Footer from "./Footer";
import ArticlePreview from "./ArticlePreview";

let Articles = (props) => {
    let {name} = useParams()
    let articles
    let title;
    if (name !== undefined) {
        let id = props.tags.find((tag) => tag.name === _.startCase(name)).id
        // console.log(`name: ${name}, id: ${id}, article.tags ${JSON.stringify(props.articles)}`)
        articles = props.articles.filter((article) => article.tags.includes(id))
        title = `Atronandbeyond.com: ${_.startCase(name)}`
    } else {
        articles = props.articles
        title = `Atronandbeyond.com: Beats and Code`
    }
    console.log(props)

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="articleGrid">
                <Grid container spacing={2}>
                    {//article is enabled
                        articles
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
                            .map((article, i) => (
                                <Grid item lg={6} key={i}>
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
}
