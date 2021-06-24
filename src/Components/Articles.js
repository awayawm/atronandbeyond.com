import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash'
import '../css/Articles.css'
import { Card, CardContent } from '@material-ui/core'

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
                    <Card className="article" key={i}>
                        <CardContent>
                            <h1 className="icon">{article.title}</h1>
                            <div className="icon">{article.tags.map(articleTag => _.find(this.props.tags, (tag) => articleTag == tag.id).icon)}</div>
                            <p dangerouslySetInnerHTML={{ __html: _.truncate(article.content, { 'length': 250 }) }} />
                        </CardContent>
                    </Card>)
        )
    }
}

Articles.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array
};