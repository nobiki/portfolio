import React, { Component } from "react";

class Profile extends Component {

  render() {
    return (
      <section className="py-5" id="profile">
        <div className="container">
          <div className="wow fadeIn">
            <h2 className="text-center h1 my-4">Profile</h2>
            <p className="px-5 mb-5 pb-3 lead blue-grey-text text-center">
            </p>
          </div>
          <div className="row wow fadeInLeft" data-wow-delay=".3s">
            <div className="col-lg-6 col-xl-5 pr-lg-5 pb-5 profile-image">
              <img className="img-fluid rounded z-depth-2" src={`${process.env.PUBLIC_URL}/img/nobiki.jpg`} alt="profile image"/>
            </div>
            <div className="col-lg-6 col-xl-7 pl-lg-5 pb-4">
              <div className="row mb-3">
                <div className="col-1 mr-1"><i className="fa lg-2 lg-docker fa-3x black-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">infrastructure & cloud</h5>
                  <p className="grey-text">
                    Docker, Linux, Hadoop, AWS, GCP
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-1 mr-1"><i className="fa lg-2 lg-python fa-3x black-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">server-side & database</h5>
                  <p className="grey-text">
                    PHP, Ruby, Python, MySQL, Postgres, SQL Server
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 mr-1"><i className="fa lg-2 lg-vue fa-3x black-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">front-end</h5>
                  <p className="grey-text">
                    Vue, React, jQuery, Webpack, Socket.io
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-1 mr-1"><i className="fa fa-certificate fa-2x cyan-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">certified</h5>
                  <p className="grey-text">
                    <a href="https://www.juse.jp/jcsqe/past_successful/11_20/" target="_blank" title="第13回 大阪"><i className="fa lg-2 lg-jcsqe fa-3x green-text"></i></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5 wow fadeInRight" data-wow-delay=".3s">
            <div className="col-lg-6 col-xl-7 mb-3">
              <div className="row mb-3">
                <div className="col-1 mr-1"><i className="fa lg-2 lg-aws fa-3x black-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">AWS</h5>
                  <p className="grey-text">
                    EC2, ECS, RDS, Elasticache, Aurora Serverless, Lambda, CloudFront, CodeBuild, Cognito, Route 53, VPC
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-1 mr-1"><i className="fa lg-2 lg-gcp fa-3x black-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">GCP</h5>
                  <p className="grey-text">
                    GCE, GAE, Cloud SQL, Cloud Datastore, BigQuery <br/>
                    <a href={`${process.env.PUBLIC_URL}/img/cloud-onboard-core-infrastructure.pdf`} target="_blank">Core Infrastructure(Coursera)</a>
                  </p>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-1 mr-1"><i className="fa fa-list-ul fa-2x gray-text"></i></div>
                <div className="col-10">
                  <h5 className="font-bold">other</h5>
                  <p className="grey-text">
                    Selenium, Robotframework, Jenkins, Apache Drill, JMeter, Node-RED, Terraform
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 mb-3">
              <center>Languages over Last 30 Days <a href="https://wakatime.com/share/@608a06e1-4f8f-4a57-893e-07c06958fb3e/16504a1c-3717-43ea-b0e3-9520207bf407.svg" target="_blank"><i className="fa fa-external-link"></i></a></center><br/>
              <figure>
                  <embed style={{height:"300px",width:"100%"}} src="https://wakatime.com/share/@608a06e1-4f8f-4a57-893e-07c06958fb3e/6d466267-3e77-42da-b804-341fde781ddc.svg"></embed>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
