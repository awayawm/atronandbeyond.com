import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import '../css/Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        console.log()
    }

    render() {
        return (
            <footer className="footer">
                {this.props.footer.tagline}
            </footer>)
    }
}

Footer.propTypes = {
    footer: PropTypes.object
};