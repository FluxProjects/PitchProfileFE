import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import CountUp from "react-countup";
import Jobcategories from "./../Element/Jobcategories";
import Featureblog from "./../Element/Featureblog";
import Jobsection from "./../Element/Jobsection";
import Owltestimonial from "./../Element/Owlblog1";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../../redux/action";
import { useHistory } from "react-router-dom";

var bnr1 = require("./../../images/main-slider/slide2.jpg");
var bnr2 = require("./../../images/background/bg4.jpg");
var bnr3 = require("./../../images/lines.png");

export default function Homepage() {
  useEffect(() => {
    var i = 0;

    // Placeholder Animation Start
    var inputSelector = document.querySelectorAll("input, textarea");

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("focus", function (event) {
        return this.parentElement.parentElement.classList.add("focused");
      });
    }

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("blur", function (event) {
        var inputValue = this.value;
        if (inputValue === "") {
          this.parentElement.parentElement.classList.remove("filled");
          this.parentElement.parentElement.classList.remove("focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    }

    // Placeholder Animation End
  }, []);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useHistory();
  useEffect(() => {
    // auth
    if (state.authToken) {
      callGetAuth();
    } else {
      router.push("/login");
    }
  }, []);

  const callGetAuth = async () => {
    await dispatch(getAuthToken(state.authToken, router));
  };

  return (
    <div className="page-wraper">
      <Header />

      <div className="page-content">
        <div
          className="dez-bnr-inr dez-bnr-inr-md"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry align-m">
              <div className="find-job-bx">
                <Link to={"/browse-job"} className="site-button button-sm">
                  Find Jobs, Employment & Career Opportunities
                </Link>
                <h2>
                  Search Between More Then <br />{" "}
                  <span className="text-primary">50,000</span> Open Jobs.
                </h2>
                <form className="dezPlaceAni">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="form-group">
                        <label>Job Title, Keywords, or Phrase</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fa fa-search"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="form-group">
                        <label>Email address</label>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fa fa-map-marker"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="form-group">
                        <Form.Control as="select" custom className="select-btn">
                          <option>Select Sector</option>
                          <option>Construction</option>
                          <option>Corodinator</option>
                          <option>Employer</option>
                          <option>Financial Career</option>
                          <option>Information Technology</option>
                          <option>Marketing</option>
                          <option>Quality check</option>
                          <option>Real Estate</option>
                          <option>Sales</option>
                          <option>Supporting</option>
                          <option>Teaching</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                      <button
                        type="submit"
                        to="/browse-job"
                        className="site-button btn-block"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="section-full job-categories content-inner-2 bg-white">
          <div className="container">
            <div className="section-head d-flex head-counter clearfix">
              <div className="mr-auto">
                <h2 className="m-b5">Popular Categories</h2>
                <h6 className="fw3">20+ Catetories work wating for you</h6>
              </div>
              <div className="head-counter-bx">
                <h2 className="m-b5 counter">
                  <CountUp end={1800} duration={5} />
                </h2>
                <h6 className="fw3">Jobs Posted</h6>
              </div>
              <div className="head-counter-bx">
                <h2 className="m-b5 counter">
                  <CountUp end={4500} duration={5} />
                </h2>
                <h6 className="fw3">Tasks Posted</h6>
              </div>
              <div className="head-counter-bx">
                <h2 className="m-b5 counter">
                  <CountUp end={1500} duration={5} />
                </h2>
                <h6 className="fw3">Freelancers</h6>
              </div>
            </div>
            <Jobcategories />
          </div>
        </div>

        <Featureblog />

        <Jobsection />
        <div
          className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix"
          style={{ backgroundImage: "url(" + bnr2 + ")" }}
        >
          <div className="container">
            <div className="section-head text-center text-white">
              <h2 className="m-b5">Testimonials</h2>
              <h5 className="fw4">Few words from candidates</h5>
            </div>

            <Owltestimonial />
          </div>
        </div>

        <div
          className="section-full content-inner-2 overlay-white-middle"
          style={{
            backgroundImage: "url( " + bnr3 + ")",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
        >
          <div className="container">
            <div className="section-head text-black text-center">
              <h2 className="m-b0">Membership Plans</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </p>
            </div>

            <div className="section-content box-sort-in button-example m-t80">
              <div className="pricingtable-row">
                <div className="row max-w1000 m-auto">
                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
                          <div className="pricingtable-bx">
                            <span>Free</span>
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/register"}
                            className="site-button radius-xl"
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                    <div className="pricingtable-wrapper style2 bg-primary text-white active">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">
                            Professional
                          </h4>
                          <div className="pricingtable-bx">
                            {" "}
                            $ <span>29</span> / Per Installation{" "}
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/register"}
                            className="site-button white radius-xl"
                          >
                            <span className="text-primary p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                    <div className="pricingtable-wrapper style2 bg-white">
                      <div className="pricingtable-inner">
                        <div className="pricingtable-price">
                          <h4 className="font-weight-300 m-t10 m-b0">
                            Extended
                          </h4>
                          <div className="pricingtable-bx">
                            {" "}
                            $ <span>29</span> / Per Installation{" "}
                          </div>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet adipiscing elit sed do
                          eiusmod tempors labore et dolore magna siad enim
                          aliqua
                        </p>
                        <div className="m-t20">
                          <Link
                            to={"/register"}
                            className="site-button radius-xl"
                          >
                            <span className="p-lr30">Sign Up</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
