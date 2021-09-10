import React, {Component} from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {CardContent} from "@material-ui/core";
import {Link} from "react-router-dom";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";
import withData from './withData'

class ArticlePreview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ArticlesCard className="article">
                <CardContent className="cardContent">
                    <h1 className="icon-header"><Link className="navLink"
                                                      to={`/article/${this.props.article.link}`}>{this.props.article.title}</Link>
                    </h1>
                    <div className="icon">
                        {this.props.article.tags.map(
                            (articleTag) =>
                                _.find(this.props.tags, (tag) => articleTag === tag.id).icon
                        )}
                    </div>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={_.truncate(this.props.data, {length: 250})}/>
                    <div>{this.props.article.date}</div>
                </CardContent>
            </ArticlesCard>
        )
    }

}

ArticlePreview.propTypes = {
    article: PropTypes.object,
    tags: PropTypes.array,
    data: PropTypes.string
}

export default withData(ArticlePreview);