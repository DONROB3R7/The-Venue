import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../src/Components/Header_footer/header.js";
import Featured from "./Components/featured";
import VenueNFO from "./Components/venueNFO";
import Hightlight from "./Components/Highlight/index";
import Pricing from "./Components/Pricing/index";
import Location from "./Components/location/index";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Featured />
        <VenueNFO />
        <Hightlight />
        <Pricing />
        <Location />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
