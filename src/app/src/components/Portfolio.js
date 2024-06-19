import React, { Component } from "react";
import Helmet from "react-helmet"

import Nav from "./portfolio/Nav"
import Intro from "./portfolio/Intro"
import Profile from "./portfolio/Profile"
import Activity from "./portfolio/Activity"
import History from "./portfolio/History"
import Contact from "./portfolio/Contact"
import Footer from "./portfolio/Footer"

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
          <Activity></Activity>
          <History></History>
          <Footer></Footer>
        </header>
      </div>
    );
  }
}
export default Portfolio;
