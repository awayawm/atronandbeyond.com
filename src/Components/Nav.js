import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Nav extends Component {
    render() {
        return (<nav>
            <ul>
                {this.props.tags.filter(tag => tag.enabled).map((tag, i) => <li key={i}> {tag.name} </li>)}
            </ul>
        </nav>)
    }
}

Nav.propTypes = {
    tags: PropTypes.array
};