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
                {this.props.header.title}
            </h1>
            <div>
                {this.props.header.tagline}
            </div>
            <Nav tags={this.props.tags} />
            <div>
                <a href={this.props.header.github}>Github</a>
            </div>
            <div>
                <a href={this.props.header.linkedin}>Linkedin</a>
            </div>
        </header>)
    }
}

Header.propTypes = {
    tags: PropTypes.array,
    header: PropTypes.object
};