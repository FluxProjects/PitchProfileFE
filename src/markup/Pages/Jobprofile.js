import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "./../Element/Profilesidebar";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";

export default function Jobprofile() {
  const [Disability, setHasDisability] = useState(false);

  return (
    <div className="page-wraper">
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <Profilesidebar />
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx job-profile">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Basic Information
                      </h5>
                      <Link
                        to={"./"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <form>
                      <div className="row m-b30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Your Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Alexander Weir"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Date of birth:</label>
                            <TextInputModal
                              type="date"
                              onChange={(e) => console.log(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Gender</label>
                            <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="male"
                                    name="example1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="male"
                                  >
                                    Male
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="female"
                                    name="example1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="female"
                                  >
                                    Female
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Marital Status</label>
                            <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="married"
                                    name="married"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="married"
                                  >
                                    Married
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="single"
                                    name="married"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="single"
                                  >
                                    Single
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Passport Number:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your passport number"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Any disability?</label>
                            <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="yes"
                                    onChange={() => {
                                      setHasDisability(true);
                                    }}
                                    name="disability"
                                  />

                                  <label
                                    className="custom-control-label"
                                    htmlFor="yes"
                                  >
                                    Yes
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="custom-control custom-radio">
                                  <input
                                    type="radio"
                                    className="custom-control-input"
                                    id="no"
                                    onChange={() => {
                                      setHasDisability(false);
                                    }}
                                    name="disability"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="no"
                                  >
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {Disability && (
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Disability description:</label>
                              <textarea className="form-control"></textarea>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Language:</label>
                          <DropDownModalComponent
                            onChange={(e) => {
                              console.log("eee", e.target.value);
                              //   setLastUsed(e.target.value);
                            }}
                            options={[
                              { id: 1, name: "test 1" },
                              { id: 2, name: "test 2" },
                            ]}
                          />
                        </div>
                      </div>

                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          Contact Information
                        </h5>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Full Address:</label>
                            <TextAreaModalComponent
                              onChange={(e) => {
                                // setDescription(e.target.value);
                              }}
                              //   value={description}
                              placeholder="Full address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group">
                            <label>Country:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              options={[
                                { id: 1, name: "United Kingdom" },
                                { id: 2, name: "test 2" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group">
                            <label>City:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              options={[
                                { id: 1, name: "test 1" },
                                { id: 2, name: "test 2" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group">
                            <label>State:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              options={[
                                { id: 1, name: "test 1" },
                                { id: 2, name: "test 2" },
                              ]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <label>Hometown:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              options={[
                                { id: 1, name: "test 1" },
                                { id: 2, name: "test 2" },
                              ]}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Email Address:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="info@example.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Phone:</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="site-button m-b30">
                        Save Setting
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
    </div>
  );
}
