import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import { useSelector, useDispatch } from "react-redux";
import {
  UpdateJobPost,
  GetCities,
  GetCountries,
  GetDepartments,
  GetIndustries,
  GetStates,
} from "../../redux/action";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import {
  employmentTypeDrop,
  jobTypeDrop,
  shiftDrop,
} from "../../utils/DropDownUtils";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import AttachVideoCompanyJob from "../Components/JobsMyResume/AttachVideoCompanyJob";
import Profilesidebar from "../Element/CompanyProfileSidebar";

export default function Componypostjobs(props) {
  const { item } = props.location.state;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(item.city_id);
  const [stateName, setStateName] = useState(item.state_id);
  const [country, setCountry] = useState(item.country_id);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState(
    item?.department_id ? item?.department_id : 1
  );
  const [shiftVal, setShiftVal] = useState(
    item?.preferred_shift ? item?.preferred_shift : 1
  );

  const [jobTitle, setJobTitle] = useState(item?.job_title);
  const [jobType, setJobType] = useState(item?.job_type);
  const [Expirience, setExpirience] = useState(item?.expirience);
  const [employmentType, setEmploymentType] = useState(item?.employment_type);
  const [minSalary, setMinSalary] = useState(item?.min_salary);
  const [maxSalary, setMaxSalary] = useState(item?.max_salary);
  const [closingDate, setClosingDate] = useState(item?.closing_date);
  const [role, setRole] = useState(item?.role);
  const [keyRes, setKeyRes] = useState(item?.key_responsibilities);
  const [lookingFor, setLookingFor] = useState(item?.looking_for);
  const [perks, setPerks] = useState(item?.the_perks);
  const [video, setVideo] = useState(item?.video);

  const [fieldAlert, setFieldAlert] = useState(false);
  // const [perks, setPerks] = useState("");

  useEffect(() => {
    console.log("testing the props", item);
    //  to get languages
    CallGetDropDown();
  }, []);

  const CallGetDropDown = async () => {
    await dispatch(GetCountries());
    // await dispatch(GetStates(230));
    // await dispatch(GetCities(3866));

    if (state.departments.length < 1) {
      await dispatch(GetDepartments());
    }
    if (state.industries.length < 1) {
      await dispatch(GetIndustries());
    }
    CallGetCities(item?.state_id);
    CallGetStates(item?.country_id);

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };
  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  const callUpdateJobPost = async () => {
    setLoading(true);

    if (jobTitle == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (jobType == null) {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (employmentType == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (minSalary == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (maxSalary == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (role == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (keyRes == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (closingDate == "") {
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (department == null) {
      setLoading(false);
      setFieldAlert(true);
      return;
    }

    await dispatch(
      UpdateJobPost(
        item.id,
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
        Expirience,
        department,
        shiftVal,
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
                    <Profilesidebar />
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
                            <label>Department</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setDepartment(e.target.value);
                              }}
                              value={department}
                              options={state.departments}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Shift</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setShiftVal(e.target.value);
                              }}
                              value={shiftVal}
                              options={shiftDrop}
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

                        <div className="col-lg-6 col-md-6">
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
                            <label>Expirience (Years)</label>
                            <TextInputModal
                              type={"number"}
                              onChange={(e) => {
                                console.log(e.target.value);
                                setExpirience(e.target.value);
                              }}
                              value={Expirience}
                              placeholder="2"
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
                      {fieldAlert && (
                        <p className="text-danger">
                          Please fill all the required fields.
                        </p>
                      )}
                      {!loading ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            callUpdateJobPost();
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
                      {!loading ? (
                        <Link
                          to={{
                            pathname: "job-detail",
                            state: {
                              company_id: state.SavePreviewPost?.company_id,
                              post_id: state.SavePreviewPost?.id,
                            },
                          }}
                          className="site-button  m-b30"
                        >
                          Preview
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="site-button mr-4 m-b30"
                        >
                          Loading...
                        </button>
                      )}
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
