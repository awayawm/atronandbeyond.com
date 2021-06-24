import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (<header>
            <h1>
                {this.props.title}
            </h1>
            <div>
                {this.props.tagline}
            </div>
        </header>)
    }
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
};