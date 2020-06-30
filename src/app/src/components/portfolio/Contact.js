import React, { Component } from "react";

class Contact extends Component {

  render() {
    return (
      <section id="contact">
        <div className="rgba-black-strong py-5">
          <div className="container">
            <div className="wow fadeIn">
              <h2 className="h1 text-white pt-5 pb-3 text-center">Contact</h2>
              <p className="text-white px-5 mb-5 pb-3 lead text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
              </p>
            </div>
            <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-8">
                    <form action="https://formspree.io/youremail@example.com" method="POST">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="name" type="text" name="name" required="required"/>
                            <label for="name">Your name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="email" type="text" name="_replyto" required="required"/>
                            <label for="email">Your email</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form">
                            <input className="form-control" id="subject" type="text" name="subject" required="required"/>
                            <label for="subject">Subject</label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea className="md-textarea" id="message" name="message" required="required"></textarea>
                            <label for="message">Your message</label>
                          </div>
                        </div>
                      </div>
                      <div className="center-on-small-only mb-4">
                        <button className="btn btn-indigo ml-0" type="submit"><i className="fa fa-paper-plane-o mr-2"></i> Send</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-unstyled text-center">
                      <li className="mt-4"><i className="fa fa-map-marker indigo-text fa-2x"></i>
                        <p className="mt-2">Osaka, Japan</p>
                      </li>
                      <a href="https://twitter.com/_nobiki" target="_blank">
                      <li className="mt-4"><i className="fa fa-twitter indigo-text fa-2x"></i>
                        <p className="mt-2">@_nobiki</p>
                      </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
