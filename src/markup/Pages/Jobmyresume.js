import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import Listingsidebar from "./../Element/Listingsidebar";
import ResumeHeadlineComponent from "../Components/JobsMyResume/ResumeHeadlineComponent";
import KeySkillsComponent from "../Components/JobsMyResume/KeySkillsComponent";
import EmploymentComponent from "../Components/JobsMyResume/EmploymentComponent";
import EducationComponent from "../Components/JobsMyResume/EducationComponent";
import ItSkillsComponent from "../Components/JobsMyResume/ItSkillsComponent";
import ProjectsComponent from "../Components/JobsMyResume/ProjectsComponent";
import ProfileSummary from "../Components/JobsMyResume/ProfileSummary";
import AccomplishmentsComponent from "../Components/JobsMyResume/AccomplishmentsComponent";
import DesiredCareerProfileComponent from "../Components/JobsMyResume/DesiredCareerProfileComponent";
import ProfileDetailsComponent from "../Components/JobsMyResume/ProfileDetailsComponent";
import AttachResumeComponent from "../Components/JobsMyResume/AttachResumeComponent";

var bnr = require("./../../images/banner/bnr1.jpg");
var bnr2 = require("./../../images/background/bg3.jpg");

export default function Jobmyresume() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <div
          className="overlay-black-dark profile-edit p-t50 p-b20"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7 candidate-info">
                <div className="candidate-detail">
                  <div className="canditate-des text-center">
                    <Link to={""}>
                      <img
                        alt=""
                        src={require("./../../images/team/pic1.jpg")}
                      />
                    </Link>
                    <div
                      className="upload-link"
                      title="update"
                      data-toggle="tooltip"
                      data-placement="right"
                    >
                      <input type="file" className="update-flie" />
                      <i className="fa fa-camera"></i>
                    </div>
                  </div>
                  <div className="text-white browse-job text-left">
                    <h4 className="m-b0">
                      John Doe
                      <Link
                        to={""}
                        className="m-l15 font-16 text-white"
                        data-toggle="modal"
                        data-target="#profilename"
                      >
                        <i className="fa fa-pencil"></i>
                      </Link>
                    </h4>
                    <p className="m-b15">
                      Freelance Senior PHP Developer at various agencies
                    </p>
                    <ul className="clearfix">
                      <li>
                        <i className="ti-location-pin"></i> Sacramento,
                        California
                      </li>
                      <li>
                        <i className="ti-mobile"></i> +1 123 456 7890
                      </li>
                      <li>
                        <i className="ti-briefcase"></i> Fresher
                      </li>
                      <li>
                        <i className="ti-email"></i> info@example.com
                      </li>
                    </ul>
                    <div className="progress-box m-t10">
                      <div className="progress-info">
                        Profile Strength (Average)<span>70%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "80%" }}
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <Link to={""}>
                  <div className="pending-info text-white p-a25">
                    <h5>Pending Action</h5>
                    <ul className="list-check secondry">
                      <li>Verify Mobile Number</li>
                      <li>Add Preferred Location</li>
                      <li>Add Resume</li>
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="modal fade browse-job modal-bx-info editor"
            id="profilename"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="ProfilenameModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="ProfilenameModalLongTitle">
                    Basic Details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Name</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="fresher"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="fresher"
                                >
                                  Fresher
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="experienced"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="experienced"
                                >
                                  Experienced
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Select Your Country</label>
                          <Form.Control as="select">
                            <option>India</option>
                            <option>Australia</option>
                            <option>Bahrain</option>
                            <option>China</option>
                            <option>Dubai</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Hong Kong</option>
                            <option>Kuwait</option>
                          </Form.Control>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Select Your Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select Your Country"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Select Your City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select Your City"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Telephone Number</label>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country Code"
                              />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Area Code"
                              />
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Email Address</label>
                          <h6 className="m-a0 font-14">info@example.com</h6>
                          <Link to={""}>Change Email Address</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="site-button"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="site-button">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="section-full browse-job content-inner-2">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                  <Listingsidebar />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                  {/* Resume Headline */}
                  <ResumeHeadlineComponent />

                  {/* Key skills */}
                  <KeySkillsComponent />

                  {/* Employment */}
                  <EmploymentComponent />

                  {/* Education */}
                  <EducationComponent />

                  {/* ItSkillsComponent */}
                  <ItSkillsComponent />

                  {/* ProjectsComponent */}
                  <ProjectsComponent />

                  {/* ProfileSummaryComponent */}
                  <ProfileSummary />

                  {/* Accomplishments */}
                  <AccomplishmentsComponent />

                  {/* DesiredCareerProfileComponent */}
                  <DesiredCareerProfileComponent />

                  {/* ProfileDetailsComponent */}
                  <ProfileDetailsComponent />

                  {/* AttachResumeComponent */}
                  <AttachResumeComponent />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade lead-form-modal"
            id="car-details"
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleClose()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <div className="modal-body row m-a0 clearfix">
                  <div
                    className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0"
                    style={{
                      backgroundImage: "url(" + bnr2 + ")",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="form-info text-white align-self-center">
                      <h3 className="m-b15">Login To You Now</h3>
                      <p className="m-b15">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry has been the industry.
                      </p>
                      <ul className="list-inline m-a0">
                        <li>
                          <Link to={""} className="m-r10 text-white">
                            <i className="fa fa-facebook"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""} className="m-r10 text-white">
                            <i className="fa fa-google-plus"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""} className="m-r10 text-white">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""} className="m-r10 text-white">
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to={""} className="m-r10 text-white">
                            <i className="fa fa-twitter"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 p-a0">
                    <div className="lead-form browse-job text-left">
                      <form>
                        <h3 className="m-t0">Personal Details</h3>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="E-Mail Address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>
                        <div className="clearfix">
                          <button
                            type="button"
                            className="btn-primary site-button btn-block"
                          >
                            Submit{" "}
                          </button>
                        </div>
                      </form>
                    </div>
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
