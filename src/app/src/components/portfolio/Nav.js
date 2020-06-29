import React, { Component } from "react";

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" id="navbar">
        <div className="container"><a className="navbar-brand" href="#"><strong>Portfolio</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="#intro">Top</a></li>
              <li className="nav-item"><a className="nav-link" href="#profile">Profile</a></li>
              <li className="nav-item"><a className="nav-link" href="#activity">Activity</a></li>
              <li className="nav-item"><a className="nav-link" href="#history">History</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
