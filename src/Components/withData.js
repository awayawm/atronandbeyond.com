import React, {Component} from "react";
import PropTypes from "prop-types";

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
            //https://dev.to/anobjectisa/how-to-dynamically-load-markdown-files-in-react-markdown-to-jsx-53fl
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
    return WithData;
}

export default WithData;
