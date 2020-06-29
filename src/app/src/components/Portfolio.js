import React, { Component } from "react";
import Helmet from "react-helmet"

import Nav from "./portfolio/Nav"
import Intro from "./portfolio/Intro"
import Profile from "./portfolio/Profile"

class Portfolio extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <header>
        <Helmet title="Portfolio - nobiki" />
          <Nav></Nav>
          <Intro></Intro>
          <Profile></Profile>
        </header>
      </div>
    );
  }
}
export default Portfolio;
