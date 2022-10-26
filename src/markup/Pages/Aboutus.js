import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Latestblogowl from "./../Element/Owlblog2";
import Header2 from "../Layout/Header2";
import HeaderOffline from "../Layout/HeaderOffline";
import { useSelector } from "react-redux";

var bnr1 = require("./../../images/banner/bnr1.jpg");
var bnr2 = require("./../../images/background/bg4.jpg");

export default function AboutUs(props) {
  const state = useSelector((state) => state);

  return (
    <div className="page-wraper">
      {state.authToken == "" ? null : state.userDetails?.company_name ? (
        <Header2 />
      ) : (
        <Header />
      )}
      {state.authToken == "" && (
        <HeaderOffline textColor={"rgb(46, 85, 250)"} />
      )}
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{
            backgroundImage: "url(" + bnr1 + ")",
            backgroundSize: "cover",
            height: "200px",
          }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">About Us</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="section-full content-inner overlay-white-middle">
            <div className="container">
              <div className="row align-items-center m-b50">
                <div className="col-md-12 col-lg-6 m-b20">
                  <h2 className="m-b5">About Us</h2>
                  <h3 className="fw4">We create unique experiences</h3>
                  <p className="m-b15">
                    Pitch Profile is a video based profile sharing network that
                    allows professionals to pitch their skills and experience in
                    a short video recorded at their own time and comfort. It
                    enables employers and recruiters to view video profiles of
                    candidates in a quick effective manner to support their
                    shortlisting process. They do not have to go through
                    hundreds of pages of CVs to get a feel for candidate
                    competencies.
                  </p>
                </div>
                <div className="col-md-12 col-lg-6">
                  <img
                    src={require("./../../images/our-work/pic1.jpg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                  <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                    <div className="icon-md text-primary m-b20">
                      {" "}
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="ti-desktop"></i>
                      </Link>{" "}
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        Create Pitch
                      </h5>
                      <p>
                        Just create a quick video profile about your skills and
                        experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                  <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                    <div className="icon-md text-primary m-b20">
                      {" "}
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="ti-image"></i>
                      </Link>{" "}
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">
                        Attract Employers
                      </h5>
                      <p>
                        Get noticed by hundreds of companies & recruiters. Find
                        ideal job and apply
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m-b30">
                  <div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
                    <div className="icon-md text-primary m-b20">
                      {" "}
                      <Link to={"#"} className="icon-cell text-primary">
                        <i className="ti-cup"></i>
                      </Link>{" "}
                    </div>
                    <div className="icon-content">
                      <h5 className="dlab-tilte text-uppercase">Get Hired</h5>
                      <p>Secure your dream job</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix"
            style={{ backgroundImage: "url(" + bnr2 + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="m-b10">
                    Make a Difference with Your Online Resume!
                  </h2>
                  <p className="m-b0">
                    It is not always easy to explain your talent on paper. Make
                    a quick 2 min video to find your dream role.
                  </p>
                  <Link
                    to={"/login"}
                    className="site-button m-t20 outline outline-2 radius-xl"
                  >
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-full content-inner-2 overlay-white-middle">
            <div className="container">
              {/* <div className="section-head text-black text-center">
                <h2 className="text-uppercase m-b0">Our Latest Blog</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
              </div>
              <Latestblogowl /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
