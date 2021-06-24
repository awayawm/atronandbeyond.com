import React, { Component } from "react";
import * as data from "./data"
import Header from './Components/Header'
import Nav from './Components/Nav'
import Articles from './Components/Articles'
import { CssBaseline, Container } from '@material-ui/core'
import "@fontsource/baloo-bhai-2"
import "./css/App.css";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <>
      <CssBaseline/>
      <Container>
        <Header title={this.state.header.title} tagline={this.state.header.tagline} />
        <Nav tags={this.state.tags} />
        <Articles articles={this.state.articles} tags={this.state.tags} />
      </Container>
      </>
    );
  }
}

export default App;