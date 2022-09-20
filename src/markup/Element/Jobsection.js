import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import { daysSinceGivenDate } from "../../utils/functions";
import HomeJobcard from "../Components/HomeJobcard";
const postBlog = [
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
  {
    image: require("./../../images/logo/icon1.png"),
  },
];

export default function Jobsection() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="section-full bg-white content-inner-2">
      <div className="container">
        <div className="d-flex job-title-bx section-head">
          <div className="mr-auto">
            <h2 className="m-b5">Recent Jobs</h2>
            <h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
          </div>
          <div className="align-self-end">
            <Link
              to={state?.authToken ? "/browse-job-grid" : "login"}
              className="site-button button-sm"
            >
              Browse All Jobs <i className="fa fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <ul
              style={{ marginBottom: "10px", marginTop: "10px" }}
              className="post-job-bx browse-job"
            >
              {state.Alljobs.splice(0, 5).map((item, index) => (
                <HomeJobcard item={item} index={index} />
              ))}
            </ul>
            <div className="m-t30">
              {/* <div className="d-flex">
									<Link className="site-button button-sm mr-auto" to={""}><i className="ti-arrow-left"></i> Prev</Link>
									<Link className="site-button button-sm" to={""}>Next <i className="ti-arrow-right"></i></Link>
								</div> */}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="sticky-top">
              <div className="candidates-are-sys m-b30">
                <div className="candidates-bx">
                  <div className="testimonial-pic radius">
                    <img
                      src={require("./../../images/testimonials/pic3.jpg")}
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="testimonial-text">
                    <p>
                      I just got a job that I applied for via careerfy! I used
                      the site all the time during my job hunt.
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    {" "}
                    <strong className="testimonial-name">
                      Richard Anderson
                    </strong>{" "}
                    <span className="testimonial-position">Nevada, USA</span>{" "}
                  </div>
                </div>
              </div>
              <div className="quote-bx">
                <div className="quote-info">
                  <h4>Make a Difference with Your Online Resume!</h4>
                  <p>
                    Your resume in minutes with JobBoard resume assistant is
                    ready!
                  </p>
                  <Link to={"/login"} className="site-button">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
