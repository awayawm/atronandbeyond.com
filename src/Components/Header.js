import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (<header>
            <h1>
                {this.props.title}
            </h1>
            <p>
                {this.props.tagline}
            </p>
        </header>)
    }
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
};