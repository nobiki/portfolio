import React, { Component } from "react";

import axios from "axios";

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      csrf_token: "",
      name: "",
      email: "",
      subject: "",
      message: ""
    }

    // this.getCsrfToken(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCsrfToken(event) {
    const url = "//localhost:3001/protected"
    const config = {}

    axios.get(url, config)
      .then(results => {
        this.setState({ csrf_token: results.data });
        console.log(this.state.csrf_token);
      })
      .catch(error => {console.log(error)});
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const url = event.target.action
    const submitData = new FormData()
    submitData.append("name", this.state.name);
    submitData.append("email", this.state.email);
    submitData.append("subject", this.state.subject);
    submitData.append("message", this.state.message);

    axios.post(url, submitData,
      {
        headers: {
          'content-type': 'multipart/form-data',
          // 'X-CSRF-Token': this.state.csrf_token
        },
      })
      .then(results => {
      })
      .catch(error => {console.log(error)});
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
            <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-8">
                    <form action="http://localhost:3001/send-contact" method="POST" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="name" type="text" name="name" value={this.state.name} required="required" placeholder="Your Name" onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="email" type="text" name="email" value={this.state.email} required="required" placeholder="Your Email" onChange={this.handleChange}/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form">
                            <input className="form-control" id="subject" type="text" name="subject" value={this.state.subject} placeholder="Subject" onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea className="md-textarea" id="message" name="message" required="required" value={this.state.message} placeholder="Message" onChange={this.handleChange}/>
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
