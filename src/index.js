import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Element } from "react-scroll";
import Header from "../src/Components/Header_footer/header.js";
import Featured from "./Components/featured";
import VenueNFO from "./Components/venueNFO";
import Hightlight from "./Components/Highlight/index";
import Pricing from "./Components/Pricing/index";
import Location from "./Components/location/index";
import Footer from "./Components/Header_footer/Footer";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venuenfo">
          <VenueNFO />
        </Element>
        <Element name="highlight">
          <Hightlight />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
