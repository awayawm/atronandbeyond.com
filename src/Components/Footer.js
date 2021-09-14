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
                    🏡 <a className="navbar-link" href={this.props.footer.github}>Github</a>
                </li>
                <li>
                    🏡 <a className="navbar-link" href={this.props.footer.linkedin}>Linkedin</a>
                </li>
            </ul>
        )
    }
}

Footer.propTypes = {
    footer: PropTypes.object,
    header: PropTypes.object
};