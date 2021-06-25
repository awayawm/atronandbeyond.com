import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../css/Header.css'
import Nav from '../Components/Nav'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<header>
            <h1>
                {this.props.title}
            </h1>
            <div>
                {this.props.tagline}
            </div>
            <Nav tags={this.props.tags} />
        </header>)
    }
}

Header.propTypes = {
    title: PropTypes.string,
    tagline: PropTypes.string,
    tags: PropTypes.array,
};