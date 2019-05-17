import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../src/Components/Header_footer/header.js";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
