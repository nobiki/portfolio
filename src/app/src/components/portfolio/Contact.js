import React, { Component } from "react";

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

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
            <form onSubmit={this.handleSubmit}>
              <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-8">
                      <form action="https://formspree.io/youremail@example.com" method="POST">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="md-form">
                              <input className="form-control" id="name" type="text" name="name" required="required" placeholder="Your Name" onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="md-form">
                              <input className="form-control" id="email" type="text" name="email" required="required" placeholder="Your Email" onChange={this.handleChange}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="md-form">
                              <input className="form-control" id="subject" type="text" name="subject" placeholder="Subject" onChange={this.handleChange}/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="md-form">
                              <textarea className="md-textarea" id="message" name="message" required="required" placeholder="Message" onChange={this.handleChange}></textarea>
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
            </form>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
