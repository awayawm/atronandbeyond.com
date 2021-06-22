import React, { Component } from "react";
import "./App.css";
import * as data from "./data"
import Header from './Components/Header'
import Nav from './Components/Nav'
import Articles from './Components/Articles'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <div className="App">
        <Header title={this.state.header.title} tagline={this.state.header.tagline} />
        <Nav tags={this.state.tags} />
        <Articles articles={this.state.articles} tags={this.state.tags}/>
      </div>
    );
  }
}

export default App;