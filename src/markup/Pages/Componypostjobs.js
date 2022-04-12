import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import { useSelector, useDispatch } from "react-redux";
import {
  AddJobPost,
  GetCities,
  GetCountries,
  GetStates,
} from "../../redux/action";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import { employmentTypeDrop, jobTypeDrop } from "../../utils/DropDownUtils";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import AttachVideoCompanyJob from "../Components/JobsMyResume/AttachVideoCompanyJob";

export default function Componypostjobs() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [loading, setLoading] = useState(true);

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState(0);
  const [employmentType, setEmploymentType] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [closingDate, setClosingDate] = useState("");
  const [role, setRole] = useState("");
  const [keyRes, setKeyRes] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [perks, setPerks] = useState("");
  const [video, setVideo] = useState("");

  // const [perks, setPerks] = useState("");

  useEffect(() => {
    //  to get languages
    CallGetDropDown();
  }, []);

  const CallGetDropDown = async () => {
    await dispatch(GetCountries());
    await dispatch(GetStates(230));
    await dispatch(GetCities(3866));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };
  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  const callAddJobPost = async () => {
    console.log("callAddJobPostcallAddJobPost");
    setLoading(true);
    await dispatch(
      AddJobPost(
        jobTitle,
        jobType,
        employmentType,
        minSalary,
        maxSalary,
        city,
        stateName,
        country,
        role,
        keyRes,
        lookingFor,
        perks,
        closingDate,
        video
      )
    );
    setLoading(false);
  };

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <div className="candidate-info company-info">
                      <div className="candidate-detail text-center">
                        <div className="canditate-des">
                          <Link to={""}>
                            <img
                              alt=""
                              src={require("./../../images/logo/icon3.jpg")}
                            />
                          </Link>
                          <div
                            className="upload-link"
                            title="update"
                            data-toggle="tooltip"
                            data-placement="right"
                          >
                            <input type="file" className="update-flie" />
                            <i className="fa fa-pencil"></i>
                          </div>
                        </div>
                        <div className="candidate-title">
                          <h4 className="m-b5">
                            <Link to={""}>@COMPANY</Link>
                          </h4>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <Link to={"/company-profile"}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span>Company Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-post-jobs"} className="active">
                            <i
                              className="fa fa-file-text-o"
                              aria-hidden="true"
                            ></i>
                            <span>Post A Job</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-transactions"}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            <span>Transactions</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-manage-job"}>
                            <i
                              className="fa fa-briefcase"
                              aria-hidden="true"
                            ></i>
                            <span>Manage jobs</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/company-resume"}>
                            <i
                              className="fa fa-id-card-o"
                              aria-hidden="true"
                            ></i>
                            <span>Resume</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/jobs-change-password"}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span>
                          </Link>
                        </li>
                        <li>
                          <Link to={"./"}>
                            <i
                              className="fa fa-sign-out"
                              aria-hidden="true"
                            ></i>
                            <span>Log Out</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx submit-resume">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Post A Job
                      </h5>
                      <Link
                        to={"/company-profile"}
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
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setJobTitle(e.target.value);
                              }}
                              value={jobTitle}
                              placeholder="Enter Job Title"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Job Type</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setJobType(e.target.value);
                              }}
                              value={jobType}
                              options={jobTypeDrop}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>Employment Type</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setEmploymentType(e.target.value);
                              }}
                              value={employmentType}
                              options={employmentTypeDrop}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Minimum Salary ($):</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setMinSalary(e.target.value);
                              }}
                              value={minSalary}
                              placeholder="e.g. 10000"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Maximum Salary ($):</label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setMaxSalary(e.target.value);
                              }}
                              value={maxSalary}
                              placeholder="e.g. 20000"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Country:</label>

                            {/* <DropdownSearch items={state.countries} /> */}
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                CallGetStates(e.target.value);
                                setCountry(e.target.value);
                              }}
                              value={country}
                              options={state.countries}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>State:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                CallGetCities(e.target.value);

                                setStateName(e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              value={stateName}
                              options={state.states}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>City:</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setCity(e.target.value);
                                //   setLastUsed(e.target.value);
                              }}
                              value={city}
                              options={state.cities}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Closing Date
                              <span className="text-danger"> *</span>
                            </label>
                            <TextInputModal
                              onChange={(e) => {
                                console.log(e.target.value);
                                setClosingDate(e.target.value);
                              }}
                              type={"date"}
                              value={closingDate}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              The Role
                              <span className="text-danger"> *</span>
                            </label>
                            <TextAreaModalComponent
                              placeholder="Enter Role Description"
                              onChange={(e) => setRole(e.target.value)}
                              value={role}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Key Responibilities
                              <span className="text-danger"> *</span>
                            </label>
                            <TextAreaModalComponent
                              placeholder="Enter Key Responsibilities"
                              onChange={(e) => setKeyRes(e.target.value)}
                              value={keyRes}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              What are we looking for?
                              <span className="text-danger"> *</span>
                            </label>
                            <TextAreaModalComponent
                              placeholder="Enter What you're looking for?"
                              onChange={(e) => setLookingFor(e.target.value)}
                              value={lookingFor}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              The Perks
                              <span className="text-danger"> *</span>
                            </label>
                            <TextAreaModalComponent
                              placeholder="Enter Perks"
                              onChange={(e) => setPerks(e.target.value)}
                              value={perks}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <AttachVideoCompanyJob
                            setVideoFile={(e) => {
                              console.log("files", e[0]);
                              setVideo(e);
                            }}
                          />
                        </div>
                      </div>
                      {!loading ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            callAddJobPost();
                          }}
                          type="button"
                          className="site-button mr-4 m-b30"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="site-button mr-4 m-b30"
                        >
                          Loading...
                        </button>
                      )}
                      <Link to={"/job-detail"} className="site-button  m-b30">
                        Preview
                      </Link>
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
