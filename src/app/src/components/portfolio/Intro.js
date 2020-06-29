import React, { Component } from "react";

class Intro extends Component {

  render() {
    return (
      <section className="view hm-gradient" id="intro">
        <div className="full-bg-img d-flex align-items-center">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                <div className="white-text">
                  <div className="wow fadeInLeft" data-wow-delay="0.3s">
                    <h1 className="h1-responsive font-bold mt-sm-5">Naoaki Obiki</h1>
                    <div className="h6">
                      Freelance engineer working in Osaka.
                      LAMP Stack has a career of over 15 years. I have a career as a project manager.
                      I like Docker and Debian.
                    </div>
                  </div><br/>
                  <a className="btn btn-outline-white" href="#profile">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Intro;
