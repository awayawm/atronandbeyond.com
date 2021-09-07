import React, {Component} from "react";
import ArticlesCard from "../Styles/ArticlesCard";
import {CardContent} from "@material-ui/core";
import {Link} from "react-router-dom";
import _ from "lodash";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

class ArticlePreview extends Component {

    constructor(props) {
        super(props);
        this.state = {...props}
    }

    componentDidMount() {
        // console.log(markdown)
        //https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
        fetch(this.state.article.content)
            .then((response) =>
                response.text()
            )
            .then((data) => {
                    this.setState({data: data});
                    // console.log(data);
                }
            )
    }

    render() {
        return (
            <ArticlesCard className="article">
                <CardContent className="cardContent">
                    <h1 className="icon-header"><Link className="navLink"
                                                      to={`/article/${this.state.article.link}`}>{this.state.article.title}</Link>
                    </h1>
                    <div className="icon">
                        {this.state.article.tags.map(
                            (articleTag) =>
                                _.find(this.state.tags, (tag) => articleTag === tag.id).icon
                        )}
                    </div>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={_.truncate(this.state.data, {length: 250})}/>
                    <div>{this.state.article.date}</div>
                </CardContent>
            </ArticlesCard>
        )
    }

}

ArticlePreview.propTypes = {
    article: PropTypes.object,
    tags: PropTypes.array,
}

export default ArticlePreview;