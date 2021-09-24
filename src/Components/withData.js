import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

let WithData = (ComposedElement) => {
    class WithData extends Component {
        constructor(props) {
            super(props);
            if (this.props.article) {
                this.state = {
                    article: props.article,
                }
            } else {
                let name = props.match.params.name
                let article = props.articles.find((article) => article.link === name)
                this.state = {
                    article: article,
                    name: name
                }
            }
        }

        componentDidMount() {
            fetch(this.state.article.content)
                .then((response) =>
                    response.text()
                )
                .then((data) => {
                        this.setState({data: data});
                    }
                )
        }

        render() {
            return (<ComposedElement {...this.state} {...this.props}/>)
        }

    }

    WithData.propTypes = {
        article: PropTypes.object,
        articles: PropTypes.array,
        match: PropTypes.object,
    }
    return withRouter(WithData);
}

export default WithData;
