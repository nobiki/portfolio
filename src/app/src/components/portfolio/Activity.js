import React, { Component } from "react";

class Activity extends Component {

  render() {
    return (
      <section className="text-center py-5 grey lighten-4" id="activity">
        <div className="container">
          <div className="wow fadeIn">
            <h2 className="h1 pt-5 pb-3">Activity</h2>
            <p className="px-5 mb-5 pb-3 lead blue-grey-text">
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".3s"><i className="fa fa-github fa-3x black-text"></i>
              <a href="https://github.com/nobiki" target="_blank">
                <h3 className="h4 mt-3">Github</h3>
                <p className="mt-3 blue-grey-text">https://github.com/nobiki</p>
              </a>
            </div>
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".3s"><i className="fa fa-bitbucket fa-3x blue-text"></i>
              <a href="https://bitbucket.org/nobiki" target="_blank">
                <h3 className="h4 mt-3">Bitbucket</h3>
                <p className="mt-3 blue-grey-text">https://bitbucket.org/nobiki</p>
              </a>
            </div>
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".4s"><i className="fa lg-2 lg-docker fa-3x black-text"></i>
              <a href="https://hub.docker.com/u/nobiki" target="_blank">
                <h3 className="h4 mt-3">Docker Hub</h3>
                <p className="mt-3 blue-grey-text">https://hub.docker.com/u/nobiki</p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-pencil-square fa-3x green-text"></i>
              <a href="https://7me.oji.0j0.jp" target="_blank">
                <h3 className="h4 mt-3">Tech Blog</h3>
                <p className="mt-3 blue-grey-text">https://7me.oji.0j0.jp</p>
              </a>
            </div>
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-twitter fa-3x cyan-text"></i>
              <a href="https://twitter.com/_nobiki" target="_blank">
                <h3 className="h4 mt-3">Twitter</h3>
                <p className="mt-3 blue-grey-text">https://twitter.com/_nobiki</p>
              </a>
            </div>
            <div className="col-md-4 mb-r wow fadeInUp" data-wow-delay=".5s"><i className="fa fa-home fa-3x purple-text"></i>
              <a href="https://room.rakuten.co.jp/nobiki/items" target="_blank">
                <h3 className="h4 mt-3">my ROOM</h3>
                <p className="mt-3 blue-grey-text">https://room.rakuten.co.jp/nobiki/items</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Activity;
