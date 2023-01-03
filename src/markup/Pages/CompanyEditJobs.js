import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
  UpdateJobWithVideoPost,
  AddNewSkill,
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
import ReactQuill from "react-quill";

export default function Componypostjobs(props) {
  const router = useHistory();
  const { item } = props.location.state;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [city, setCity] = useState(item.city?.id);
  const [stateName, setStateName] = useState(item.state?.id);
  const [country, setCountry] = useState(item.country?.id);
  const [loading, setLoading] = useState(true);
  const [department, setDepartment] = useState(
    item?.department_id ? item?.department_id : 1
  );
  const [seniorityLevelVal, setSeniorityLevelVal] = useState(
    item?.seniority_level ? item?.seniority_level : 0
  );
  const [salaryRangeVal, setSalaryRangeVal] = useState(
    item?.salary_range ? item?.salary_range : 0
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
  const [UpdatedVideo, setUpdatedVideo] = useState(false);
  const [TopSkill1, setTopSkill1] = useState(1);
  const [TopSkillName1, setTopSkillName1] = useState("");
  const [TopSkillName2, setTopSkillName2] = useState("");
  const [TopSkillName3, setTopSkillName3] = useState("");
  const [TopSkillName4, setTopSkillName4] = useState("");
  const [TopSkillName5, setTopSkillName5] = useState("");
  const [handleDisplay, sethandleDisplay] = useState(1);
  const [TopSkill2, setTopSkill2] = useState(null);
  const [TopSkill3, setTopSkill3] = useState(null);
  const [TopSkill4, setTopSkill4] = useState(null);
  const [TopSkill5, setTopSkill5] = useState(null);
  const [OtherSkills, setOtherSkills] = useState(null);
  const [fieldAlert, setFieldAlert] = useState(false);
  const [FieldText, setFieldText] = useState("");

  useEffect(() => {
    console.log("testing the props", item);
    //  to get languages
    CallGetDropDown();
  }, []);

  const callAddNewSkill = async (OtherSkill, setItSkills) => {
    await dispatch(AddNewSkill(OtherSkill, setItSkills));
  };
  const CallGetDropDown = async () => {
    await dispatch(GetCountries());
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
    await dispatch(GetCities(stateId, setCity));
  };
  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId, setStateName, CallGetCities));
  };
  const callUpdateJobPost = async () => {
    setLoading(true);
    if (city == "" || city == null) {
      setLoading(false);
      setFieldText("Enter City Name");
      setFieldAlert(true);
      return;
    }
    if (stateName == "" || stateName == null) {
      setLoading(false);
      setFieldText("Enter State Name");
      setFieldAlert(true);
      return;
    }
    if (country == "" || country == null) {
      setLoading(false);
      setFieldText("Enter Country Name");
      setFieldAlert(true);
      return;
    }
    if (jobTitle == "" || jobTitle == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Job title");
      return;
    }
    if (salaryRangeVal == null || salaryRangeVal == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Salary range");
      return;
    }
    if (seniorityLevelVal == null || seniorityLevelVal == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Seniority level");
      return;
    }
    if (jobType == null || jobType == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Job type");
      return;
    }
    if (employmentType == "" || employmentType == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Employment type");
      return;
    }
    if (role == "" || role == null || role == "<p><br></p>") {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter your job description");
      return;
    }
    if (keyRes == "" || keyRes == null || keyRes == "<p><br></p>") {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter key responsiblities");
      return;
    }
    if (closingDate == "" || closingDate == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter key closing date");
      return;
    }
    if (department == "" || department == null) {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter department");
      return;
    }
    if (lookingFor == "" || lookingFor == null || lookingFor == "<p><br></p>") {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please describe what are you looking for.");
      return;
    }
    if (perks == "" || perks == null || perks == "<p><br></p>") {
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Perks");
      return;
    }
    setFieldAlert(false);
    await dispatch(
      UpdateJobPost(
        item?.id,
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
        seniorityLevelVal,
        salaryRangeVal,
        state.SaveJobVideo,
        router
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
                            <label>
                              Job Title
                              <span className="text-danger"> *</span>
                            </label>
                            <TextInputModal
                              onChange={(e) => {
                                setJobTitle(e.target.value);
                              }}
                              value={jobTitle}
                              placeholder="Enter Job Title"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Department</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setDepartment(e.target.value);
                              }}
                              value={department}
                              options={state.departments}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Seniority Level</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setSeniorityLevelVal(e.target.value);
                              }}
                              value={seniorityLevelVal}
                              options={SeniorityLevel}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Salary Range (Per Annum){" "}
                              {state.userDetails?.country?.currency_symbol}{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setSalaryRangeVal(e.target.value);
                              }}
                              value={salaryRangeVal}
                              options={SalaryRange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Job Type</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setJobType(e.target.value);
                              }}
                              value={jobType}
                              options={jobTypeDrop}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Employment Type</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setEmploymentType(e.target.value);
                              }}
                              value={employmentType}
                              options={employmentTypeDrop}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>Experience (Years)</label>{" "}
                            <span className="text-danger"> *</span>
                            <TextInputModal
                              type={"number"}
                              onChange={(e) => {
                                setExpirience(e.target.value);
                              }}
                              value={Expirience}
                              placeholder="2"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Country:</label>{" "}
                            <span className="text-danger"> *</span>
                            {/* <DropdownSearch items={state.countries} /> */}
                            <DropDownModalComponent
                              onChange={(e) => {
                                CallGetStates(e.target.value);
                                setCity(-1);
                                setCountry(e.target.value);
                              }}
                              value={country}
                              options={state.countries}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>State:</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                CallGetCities(e.target.value);
                                setStateName(e.target.value);
                              }}
                              value={stateName}
                              options={state.states}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>City:</label>{" "}
                            <span className="text-danger"> *</span>
                            <DropDownModalComponent
                              onChange={(e) => {
                                setCity(e.target.value);
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
                                setClosingDate(e.target.value);
                              }}
                              type={"date"}
                              value={closingDate}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6"></div>

                        <>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>
                                Top Skill 1:
                              </label>
                              <select
                                value={TopSkill1}
                                onChange={(e) => {
                                  setTopSkill1(e.target.value);
                                  var c =
                                    state?.skills.findIndex(
                                      (x) => x?.id == e.target.value
                                    ) == -1
                                      ? ""
                                      : setTopSkillName1(
                                          state?.skills[
                                            state?.skills.findIndex(
                                              (x) => x?.id == e.target.value
                                            )
                                          ].name
                                        );
                                }}
                                className="form-control"
                              >
                                <option key={-1} value={-1}>
                                  Select option
                                </option>
                                {state.skills.map((item) => (
                                  <option key={item?.id} value={item?.id}>
                                    {item.name}
                                  </option>
                                ))}
                                <option key={"other"} value={"other"}>
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          {TopSkill1 == "other" ? (
                            <>
                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label>New Skill Title</label>
                                  </div>

                                  <TextInputModal
                                    placeholder=""
                                    onChange={(e) => {
                                      setOtherSkills(e.target.value);
                                    }}
                                    value={OtherSkills}
                                  />
                                  <div style={{ marginBottom: 10 }}>
                                    <small></small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label></label>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      callAddNewSkill(
                                        OtherSkills,
                                        setTopSkill1
                                      );
                                      setOtherSkills("");
                                    }}
                                    type="button"
                                    className="site-button mr-4 m-b30"
                                  >
                                    Save New Skill
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-md-6 col-lg-6" />
                          )}
                        </>

                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 2:
                              </label>
                              <select
                                value={TopSkill2}
                                onChange={(e) => {
                                  setTopSkill2(e.target.value);

                                  var c =
                                    state?.skills.findIndex(
                                      (x) => x?.id == e.target.value
                                    ) == -1
                                      ? ""
                                      : setTopSkillName2(
                                          state?.skills[
                                            state?.skills.findIndex(
                                              (x) => x?.id == e.target.value
                                            )
                                          ].name
                                        );
                                }}
                                className="form-control"
                              >
                                <option key={-1} value={-1}>
                                  Select option
                                </option>
                                {state.skills.map((item) => (
                                  <option key={item?.id} value={item?.id}>
                                    {item.name}
                                  </option>
                                ))}
                                <option key={"other"} value={"other"}>
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          {TopSkill2 == "other" ? (
                            <>
                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label>New Skill Title</label>
                                  </div>

                                  <TextInputModal
                                    placeholder=""
                                    onChange={(e) => {
                                      setOtherSkills(e.target.value);
                                    }}
                                    value={OtherSkills}
                                  />
                                  <div style={{ marginBottom: 10 }}>
                                    <small></small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label></label>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      callAddNewSkill(
                                        OtherSkills,
                                        setTopSkill2
                                      );
                                      setOtherSkills("");
                                    }}
                                    type="button"
                                    className="site-button mr-4 m-b30"
                                  >
                                    Save New Skill
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-md-6 col-lg-6" />
                          )}

                        </>

                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 3:
                                {/* <span className="text-danger"> *</span> */}
                              </label>
                              <select
                                value={TopSkill3}
                                onChange={(e) => {
                                  setTopSkill3(e.target.value);
                                  var c =
                                    state?.skills.findIndex(
                                      (x) => x?.id == e.target.value
                                    ) == -1
                                      ? ""
                                      : setTopSkillName3(
                                          state?.skills[
                                            state?.skills.findIndex(
                                              (x) => x?.id == e.target.value
                                            )
                                          ].name
                                        );
                                }}
                                className="form-control"
                              >
                                <option key={-1} value={-1}>
                                  Select option
                                </option>
                                {state.skills.map((item) => (
                                  <option key={item?.id} value={item?.id}>
                                    {item.name}
                                  </option>
                                ))}
                                <option key={"other"} value={"other"}>
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          {TopSkill3 == "other" ? (
                            <>
                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label>New Skill Title</label>
                                  </div>

                                  <TextInputModal
                                    placeholder=""
                                    onChange={(e) => {
                                      setOtherSkills(e.target.value);
                                    }}
                                    value={OtherSkills}
                                  />
                                  <div style={{ marginBottom: 10 }}>
                                    <small></small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label></label>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      callAddNewSkill(
                                        OtherSkills,
                                        setTopSkill3
                                      );
                                      setOtherSkills("");
                                    }}
                                    type="button"
                                    className="site-button mr-4 m-b30"
                                  >
                                    Save New Skill
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-md-6 col-lg-6" />
                          )}
                        </>

                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 4:
                              </label>
                              <select
                                value={TopSkill4}
                                onChange={(e) => {
                                  setTopSkill4(e.target.value);

                                  var c =
                                    state?.skills.findIndex(
                                      (x) => x?.id == e.target.value
                                    ) == -1
                                      ? ""
                                      : setTopSkillName4(
                                          state?.skills[
                                            state?.skills.findIndex(
                                              (x) => x?.id == e.target.value
                                            )
                                          ].name
                                        );
                                }}
                                className="form-control"
                              >
                                <option key={-1} value={-1}>
                                  Select option
                                </option>
                                {state.skills.map((item) => (
                                  <option key={item?.id} value={item?.id}>
                                    {item.name}
                                  </option>
                                ))}
                                <option key={"other"} value={"other"}>
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          {TopSkill4 == "other" ? (
                            <>
                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label>New Skill Title</label>
                                  </div>

                                  <TextInputModal
                                    placeholder=""
                                    onChange={(e) => {
                                      setOtherSkills(e.target.value);
                                    }}
                                    value={OtherSkills}
                                  />
                                  <div style={{ marginBottom: 10 }}>
                                    <small></small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label></label>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      callAddNewSkill(
                                        OtherSkills,
                                        setTopSkill4
                                      );
                                      setOtherSkills("");
                                    }}
                                    type="button"
                                    className="site-button mr-4 m-b30"
                                  >
                                    Save New Skill
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-md-6 col-lg-6" />
                          )}
                        </>

                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 5:
                              </label>
                              <select
                                value={TopSkill5}
                                onChange={(e) => {
                                  setTopSkill5(e.target.value);
                                  var c =
                                    state?.skills.findIndex(
                                      (x) => x?.id == e.target.value
                                    ) == -1
                                      ? ""
                                      : setTopSkillName5(
                                          state?.skills[
                                            state?.skills.findIndex(
                                              (x) => x?.id == e.target.value
                                            )
                                          ].name
                                        );
                                }}
                                className="form-control"
                              >
                                <option key={-1} value={-1}>
                                  Select option
                                </option>
                                {state.skills.map((item) => (
                                  <option key={item?.id} value={item?.id}>
                                    {item.name}
                                  </option>
                                ))}
                                <option key={"other"} value={"other"}>
                                  Other
                                </option>
                              </select>
                            </div>
                          </div>

                          {TopSkill5 == "other" ? (
                            <>
                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label>New Skill Title</label>
                                  </div>

                                  <TextInputModal
                                    placeholder=""
                                    onChange={(e) => {
                                      setOtherSkills(e.target.value);
                                    }}
                                    value={OtherSkills}
                                  />
                                  <div style={{ marginBottom: 10 }}>
                                    <small></small>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 col-md-12">
                                <div className="form-group">
                                  <div>
                                    <label></label>
                                  </div>

                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      callAddNewSkill(
                                        OtherSkills,
                                        setTopSkill5
                                      );
                                      setOtherSkills("");
                                    }}
                                    type="button"
                                    className="site-button mr-4 m-b30"
                                  >
                                    Save New Skill
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="col-md-6 col-lg-6" />
                          )}
                        </>
                        {/* )} */}

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Job Description
                              <span className="text-danger"> *</span>
                            </label>
                            <ReactQuill
                              className="quillEditor"
                              value={role}
                              onChange={setRole}
                            />
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Key Responsibilities
                              <span className="text-danger"> *</span>
                            </label>

                            <ReactQuill
                              className="quillEditor"
                              value={keyRes}
                              onChange={setKeyRes}
                            />
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              What are we looking for?
                              <span className="text-danger"> *</span>
                            </label>

                            <ReactQuill
                              className="quillEditor"
                              value={lookingFor}
                              onChange={setLookingFor}
                            />
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              The Perks
                              <span className="text-danger"> *</span>
                            </label>
                            <ReactQuill
                              className="quillEditor"
                              value={perks}
                              onChange={setPerks}
                            />
                          </div>
                        </div>
                        <div className=" col-lg-12 col-md-12">
                          <AttachVideoCompanyJob
                            isFullCol={true}
                            setVideoFile={(e) => {
                              setUpdatedVideo(true);
                              setVideo(e);
                            }}
                          />
                        </div>
                      </div>
                      {fieldAlert && <p className="text-danger">{FieldText}</p>}
                      {!loading ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            callUpdateJobPost();
                          }}
                          type="button"
                          className="site-button mr-4 m-b30"
                        >
                          Update
                        </button>
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
