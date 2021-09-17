import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import '../css/Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul className="footer-links">
                <li>
                    {this.props.footer.tagline}
                </li>
                <li>
                    <a href={this.props.footer.github} target="_blank" rel="noreferrer">Github</a>
                </li>
                <li>
                    <a href={this.props.footer.linkedin} target="_blank" rel="noreferrer">Linkedin</a>
                </li>
            </ul>
        )
    }
}

Footer.propTypes = {
    footer: PropTypes.object,
    header: PropTypes.object
};