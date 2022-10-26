import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Form, ToggleButton } from "react-bootstrap";
import Listingsidebar from "./../Element/Listingsidebar";
import ResumeHeadlineComponent from "../Components/JobsMyResume/ResumeHeadlineComponent";
import ProfileSummary from "../Components/JobsMyResume/ProfileSummary";
import SkillsComponent from "../Components/JobsMyResume/SkillsComponent";
import EducationsComponent from "../Components/JobsMyResume/EducationsComponent";
import EmploymentsComponent from "../Components/JobsMyResume/EmploymentsComponent";
import ProjectsComponent from "../Components/JobsMyResume/ProjectsComponent";
import CertificatesComponent from "../Components/JobsMyResume/CertificatesComponent";
import ReferencesComponent from "../Components/JobsMyResume/ReferencesComponent";
import SocialProfilesComponent from "../Components/JobsMyResume/SocialProfilesComponent";
import DesiredCareerProfileComponent from "../Components/JobsMyResume/DesiredCareerProfileComponent";
import ProfileDetailsComponent from "../Components/JobsMyResume/ProfileDetailsComponent";
import AttachResumeComponent from "../Components/JobsMyResume/AttachResumeComponent";

import HeaderMyResume from "../Components/JobsMyResume/HeaderMyResume";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthToken,
  GetCandidateLanguages,
  GetCities,
  GetCountries,
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetLanguages,
  GetSkills,
  GetStates,
} from "../../redux/action";
import { GetStateName, SortSameVals } from "../../utils/functions";
var bnr = require("./../../images/banner/bnr1.jpg");
var bnr2 = require("./../../images/background/bg3.jpg");

export default function Jobmyresume() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const router = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    //  to get languages
    CallGetDropDown();
    CallGetCandidateLanguages();
  }, []);

  const callGetStateName = async () => {
    GetStateName();
  };

  const CallGetCandidateLanguages = async () => {
    await dispatch(GetCandidateLanguages());
  };

  const CallGetDropDown = async () => {
    if (state.languages != null) await dispatch(GetLanguages());
    await dispatch(GetSkills());
    await dispatch(GetEducationLevels());
    await dispatch(GetDepartments());
    await dispatch(GetIndustries());

    setLoading(false);
  };

  const uniqueResults = Array.from(
    new Set(state.pedningActions.map((a) => a.message))
  ).map((id) => {
    return state.pedningActions.find((a) => a.message === id);
  });
  console.log(
    "uniqueResultsuniqueResults",
    state.pedningActions,
    uniqueResults
  );

  return (
    <>
      <Header />
      <div className="page-content">
        <div
          className="overlay-black-dark profile-edit p-t50 "
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="row">
              <HeaderMyResume isView={false} />
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
                {state.pedningActions.length >= 1 && (
                  <div className="col-12 m-b30">
                    <div className="pending-info text-white p-a25">
                      <h5>Pending Action</h5>

                      <ul className="list-check secondry">
                        {/* {uniqueResults.map((item) => (
                          <li>{item.message}</li>
                        ))} */}

                        {state.candidateEmployments?.length < 1 && (
                          <li>No employments added</li>
                        )}
                        {state.candidateSocialProfiles?.length < 1 && (
                          <li>No social profiles added</li>
                        )}
                        {state.candidateEducations?.length < 1 && (
                          <li>No educations added</li>
                        )}
                        {state.candidateSkills?.length < 1 && (
                          <li>No skills added</li>
                        )}

                        {!state.userDetails.video && <li>No Video uploaded</li>}

                        {state.candidateDesiredCareer.role == "" && <li></li>}
                      </ul>
                    </div>
                  </div>
                )}
                {/* 
                This section is mandatory please add at least top 3 skills.
                This section is mandatory please add at least 1 previous employment. 
                */}
                {/* {!state.userDetails.is_reviewed && state.userDetails.video && (
                  <div className="col-12 m-b30 ">
                    <div
                      style={{ backgroundColor: "yellow" }}
                      className="pending-info text-white p-a25"
                    >
                      <ul className="list-check secondry">
                        <li style={{ color: "black" }}>
                          Your profile is under review by admin. It will be
                          public once it has been reviewed
                        </li>
                      </ul>
                    </div>
                  </div>
                )} */}
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                  <Listingsidebar isMyProfile={true} />
                </div>
                <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                  {/* Resume Headline */}
                  {/* <ResumeHeadlineComponent /> */}

                  {/* ProfileSummaryComponent */}
                  <ProfileSummary />

                  {/* Employment */}
                  <EmploymentsComponent />

                  {/* Education */}
                  <EducationsComponent />

                  {/* SkillsComponent */}
                  <SkillsComponent />

                  {/* ProjectsComponent */}
                  <ProjectsComponent />

                  {/* Certification */}
                  <CertificatesComponent />

                  {/* Social  */}
                  <SocialProfilesComponent />

                  {/* Reference Component */}
                  <ReferencesComponent />

                  {/* DesiredCareerProfileComponent */}
                  <DesiredCareerProfileComponent />

                  {/* ProfileDetailsComponent */}
                  <ProfileDetailsComponent />

                  <p style={{ fontStyle: "italic", fontSize: 18 }}>
                    <i
                      class="fa fa-exclamation-circle text-danger"
                      aria-hidden="true"
                    ></i>{" "}
                    Note:Your profile will be visible for public view once the
                    uploaded video is approved by admin.
                  </p>

                  {/* AttachResumeComponent */}
                  {/* <AttachResumeComponent /> */}
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
