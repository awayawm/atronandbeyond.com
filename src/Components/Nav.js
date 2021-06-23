import React, { Component } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <Router>
                <ul>
                    {this.props.tags.filter(tag => tag.enabled).map((tag, i) => <li key={i}> <Link to={tag.link}>{tag.name}</Link> </li>)}
                </ul>
            </Router>
        )
    }
}

Nav.propTypes = {
    tags: PropTypes.array
};