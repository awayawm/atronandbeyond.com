import React, {Component} from "react"
import PropTypes from "prop-types"
import "../css/Article.css"
import {Helmet} from "react-helmet"
import ArticlePaper from "../Styles/AritclePaper"
import {withRouter} from "react-router-dom"
import ReactMarkdown from "react-markdown";

class Article extends Component {
    constructor(props) {
        super(props)
        let name = props.match.params.name
        let article = props.articles.find((article) => article.link === name)
        console.log(article)
        this.state = {
            article: article,
            name: name
        }
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
        // console.log(`name ${name}, articles: ${JSON.stringify(article)}`)
        return (
            <>
                <Helmet>
                    <title>Atronandbeyond.com: {this.state.article.title}</title>
                </Helmet>
                <ArticlePaper className="paper-article">
                    <h1>{this.state.article.title}</h1>
                    {/* eslint-disable-next-line react/no-children-prop */}
                    <ReactMarkdown children={this.state.data}/>
                </ArticlePaper>
            </>
        )
    }
}

export default withRouter(Article)

Article.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    match: PropTypes.object,
}
