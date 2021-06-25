import React, { Component } from "react";
import * as data from "./data"
import Header from './Components/Header'
import Articles from './Components/Articles'
// import Footer from './Components/Footer'
import { CssBaseline, Container } from '@material-ui/core'
import "./css/App.css";
import { Helmet } from 'react-helmet'
import '@fontsource/baloo-bhai-2/400.css'
import '@fontsource/baloo-bhai-2/500.css'
import '@fontsource/baloo-bhai-2/700.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>atronandbeyond.com: beats and code</title>
          <body className="body" />
        </Helmet>
        <CssBaseline />
        <Container>
          <Header header={this.state.header} tags={this.state.tags} />
          <Articles articles={this.state.articles} tags={this.state.tags} />
          {/* <Footer footer={this.state.footer} /> */}
        </Container>
      </>
    );
  }
}

export default App;