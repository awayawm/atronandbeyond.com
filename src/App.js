import React, { Component } from "react";
import "./App.css";
import * as data from "./data"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.title}
        </h1>
        <p>
          {this.state.tagline}
        </p>
        <ul>
          {this.state.tags.filter(tag => tag.enabled).map((tag, i) => <li key={i}> {tag.name} </li>)}
        </ul>
        {this.state.articles.map((article, i) =>
          <div key={i}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>)}
      </div>
    );
  }
}

export default App;