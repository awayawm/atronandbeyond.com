import React, {Component} from "react"
import _ from "lodash"
import "../css/Articles.css"
import {Grid} from "@material-ui/core"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import Footer from "./Footer";
import ArticlePreview from "./ArticlePreview";

class Articles extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("mounting Articles")
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{this.props.title}</title>
                </Helmet>
                <div className="articleGrid">
                    <Grid container spacing={2}>
                        {//article is enabled
                            !this.props.hasArticles && this.props.articles // check if it's a reset
                                .filter((article) => article.enabled)
                                // has at least one tag that is enabled
                                .filter((article) => {
                                    return (
                                        _.intersection(
                                            article.tags,
                                            this.props.tags
                                                .filter((tag) => tag.enabled)
                                                .map((value) => value.id)
                                        ).length > 0
                                    )
                                })
                                .map((article, i) => (
                                    <Grid item lg={6} key={i}>
                                        <ArticlePreview article={article} tags={this.props.tags}/>
                                    </Grid>
                                ))}

                    </Grid>
                </div>
                <Footer {...this.props}/>
            </>
        )
    }
}

export default Articles

Articles.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    title: PropTypes.string,
    hasArticles: PropTypes.bool
}
