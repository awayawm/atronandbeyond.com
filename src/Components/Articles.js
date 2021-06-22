import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash'

export default class Articles extends Component {
    render() {
        return (
            // article is enabled
            this.props.articles.filter(article => article.enabled)
                // has at least one tag that is enabled
                .filter(article => {
                    return _.intersection(article.tags, this.props.tags.filter(tag => tag.enabled).map(value => value.id)).length > 0
                })
                .map((article, i) =>
                    <div key={i}>
                        <h2>{article.title}</h2>
                        <div>{article.tags.map(articleTag => _.find(this.props.tags, (tag) => articleTag == tag.id).name)}</div>
                        <p dangerouslySetInnerHTML={{ __html: _.truncate(article.content, { 'length': 200 }) }} />
                    </div>)
        )
    }
}

Articles.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array
};