import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";

export default function CompanyPostJobView() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 col-lg-12 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        View Job
                      </h5>
                      <Link
                        to={"/"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Job Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Job Title"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Job Type</label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Employment Type</label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Minimum Salary ($):</label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Maximum Salary ($):</label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              City
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              State
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Contry
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Closing Date
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              The Role
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Key Responsibilities
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              What are we looking for?
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              The Perks
                              <span className="text-danger"> *</span>
                            </label>
                            <p className="m-b0">{}</p>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Video File</label>
                            {/* <div className="custom-file">
                              <p className="m-a0">
                                <i className="fa fa-upload"></i>
                                Upload Video File
                              </p>
                              <p className="m-b0">{}</p>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <button type="button" className="site-button mr-4 m-b30">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
