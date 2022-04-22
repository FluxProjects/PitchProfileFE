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
  GetDepartments,
  GetIndustries,
  GetStates,
} from "../../redux/action";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import {
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
  shiftDrop,
} from "../../utils/DropDownUtils";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import AttachVideoCompanyJob from "../Components/JobsMyResume/AttachVideoCompanyJob";
import Profilesidebar from "../Element/CompanyProfileSidebar";
import { toast } from "react-toastify";

export default function Componypostjobs() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState(
    state.userDetails?.department_id != null
      ? state.userDetails?.department_id
      : 1
  );
  const [seniorityLevelVal, setSeniorityLevelVal] = useState(
    state.userDetails?.seniority_level != null
      ? state.userDetails?.seniority_level
      : 0
  );
  const [salaryRangeVal, setSalaryRangeVal] = useState(
    state.userDetails?.salary_range != null
      ? state.userDetails?.salary_range
      : 0
  );
  const [shiftVal, setShiftVal] = useState(
    state.userDetails?.preferred_shift != null
      ? state.userDetails?.preferred_shift
      : 1
  );

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState(0);
  const [Expirience, setExpirience] = useState(0);
  const [employmentType, setEmploymentType] = useState(1);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [closingDate, setClosingDate] = useState("");
  const [role, setRole] = useState("");
  const [keyRes, setKeyRes] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [perks, setPerks] = useState("");
  const [video, setVideo] = useState("");

  const [fieldAlert, setFieldAlert] = useState(false);
  // const [perks, setPerks] = useState("");

  useEffect(() => {
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

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };
  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  const callAddJobPost = async () => {
    setLoading(true);

    if (jobTitle == "") {
      console.log("jobTitle");
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (salaryRangeVal == null) {
      console.log("salaryRangeVal", salaryRangeVal);
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (seniorityLevelVal == null) {
      console.log("seniorityLevelVal");
      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (video == "") {
      console.log("video");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (jobType == null) {
      console.log("jobType");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (employmentType == "") {
      console.log("employmentType");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    // if (minSalary == "") {
    //   console.log("minSalary");

    //   setLoading(false);
    //   setFieldAlert(true);
    //   return;
    // }
    // if (maxSalary == "") {
    //   console.log("maxSalary");

    //   setLoading(false);
    //   setFieldAlert(true);
    //   return;
    // }
    if (role == "") {
      console.log("role");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (keyRes == "") {
      console.log("keyRes");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (closingDate == "") {
      console.log("closingDate");

      setLoading(false);
      setFieldAlert(true);
      return;
    }
    if (department == null) {
      console.log("department");

      setLoading(false);
      setFieldAlert(true);
      return;
    }

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
        Expirience,
        department,
        shiftVal,
        salaryRangeVal,
        seniorityLevelVal,
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
                            <label>Seniority Level</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setSeniorityLevelVal(e.target.value);
                              }}
                              value={seniorityLevelVal}
                              options={SeniorityLevel}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Salary Range</label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
                                setSalaryRangeVal(e.target.value);
                              }}
                              value={salaryRangeVal}
                              options={SalaryRange}
                            />
                          </div>
                        </div>

                        {/* <div className="col-lg-6 col-md-6">
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
                        </div> */}
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

                        {/* <div className="col-lg-6 col-md-6">
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
                        </div> */}

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
                              Job Description
                              <span className="text-danger"> *</span>
                            </label>
                            <TextAreaModalComponent
                              placeholder="Enter Role Description"
                              onChange={(e) => setRole(e.target.value)}
                              value={role}
                            />
                            {/* <small>Characters left: {150 - role.length}</small> */}
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
                            {/* <small>
                              Characters left: {150 - keyRes.length}
                            </small> */}
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
                            {/* <small>
                              Characters left: {150 - lookingFor.length}
                            </small> */}
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
                              onChange={(e) => {
                                // 150 - perks.length >= 0 &&
                                setPerks(e.target.value);
                              }}
                              value={perks}
                            />
                            {/* <small>Characters left: {150 - perks.length}</small> */}
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
