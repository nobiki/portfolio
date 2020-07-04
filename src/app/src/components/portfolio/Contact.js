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
      message: "",
      submit_text: "送信",
      submit_color: "indigo",
      submit_disabled: "",
      status_text: "",
      status_color: "red"
    }

    // this.getCsrfToken(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getCsrfToken(event) {
    const url = "//{process.env.REACT_APP_API_SERVER}/protected"
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

    console.log(document.getElementById("g-recaptcha-response").value);

    if("" != document.getElementById("g-recaptcha-response").value)
    {
      this.setState({
        status_text:"",
        submit_text:"送信中",
        submit_color:"light-blue",
        submit_disabled:"disabled"
      });

      const url = event.target.action;
      const submitData = new FormData();
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
          this.setState({
            status_text: "メッセージの送信ありがとうございました。\n返信が必要な物については、近日中に入力頂いたアドレスにご連絡させて頂きます。",
            status_color: "green",
            submit_text:"送信完了",
            submit_color:"light-green",
            submit_disabled:"disabled"
          });
        })
        .catch(error => {
          this.setState({
            submit_text:"送信失敗",
            submit_color:"unique",
            submit_disabled:""
          });
          console.log(error)
        });
    }else{
      this.setState({
        status_text: "reCAPTCHAをチェックして下さい",
        status_color: "red"
      });
    }
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
              </p>
            </div>
            <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-md-8">
                    <form action={"//"+process.env.REACT_APP_API_SERVER+"/send-contact"} method="POST" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="name" type="text" name="name" value={this.state.name} required="required" placeholder="Your Name" disabled={this.state.submit_disabled} onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="md-form">
                            <input className="form-control" id="email" type="email" name="email" value={this.state.email} required="required" placeholder="Your Email" disabled={this.state.submit_disabled} onChange={this.handleChange}/>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="md-form">
                            <input className="form-control" id="subject" type="text" name="subject" required="required" value={this.state.subject} placeholder="Subject" disabled={this.state.submit_disabled} onChange={this.handleChange}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form">
                            <textarea className="md-textarea" id="message" name="message" required="required" value={this.state.message} placeholder="Message" disabled={this.state.submit_disabled} onChange={this.handleChange}/>
                          </div>
                        </div>
                      </div>
                      <div className="center-on-small-only mb-4">
                        <div class="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}></div>
                        <div class={`row m-3 status-text ${this.state.status_color}-text`}>{this.state.status_text}</div>
                        <button className={`btn btn-${this.state.submit_color} ml-0`} type="submit" disabled={this.state.submit_disabled}> <i className="fa fa-paper-plane-o mr-2"></i>{this.state.submit_text}</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-4">
                    <ul className="list-unstyled text-center">
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
