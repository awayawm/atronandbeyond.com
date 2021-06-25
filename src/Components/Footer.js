import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import '../css/Footer.css'
export default class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <footer className="footer">
                <div>
                    <a href={this.props.footer.github}>Github</a>
                </div>
                <div>
                    <a href={this.props.footer.linkedin}>Linkedin</a>
                </div>
            </footer>)
    }
}

Footer.propTypes = {
    footer: PropTypes.object
};