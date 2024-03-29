import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import { useSelector, useDispatch } from "react-redux";
import {
  AddCandidateSkill,
  AddJobPost,
  AddNewSkill,
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
import { useHistory } from "react-router-dom";

import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

export default function Componypostjobs() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [loading, setLoading] = useState(true);
  const [vidLoading, setVidLoading] = useState(true);

  const [TopSkill1, setTopSkill1] = useState(null);

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

  const [department, setDepartment] = useState(1);
  const [seniorityLevelVal, setSeniorityLevelVal] = useState(0);
  const [salaryRangeVal, setSalaryRangeVal] = useState(0);
  const [shiftVal, setShiftVal] = useState(1);

  const [jobTitle, setJobTitle] = useState("");
  const [jobType, setJobType] = useState(0);
  const [Expirience, setExpirience] = useState(0);
  const [employmentType, setEmploymentType] = useState(0);
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(0);
  const [closingDate, setClosingDate] = useState("");
  const [role, setRole] = useState("");
  const [keyRes, setKeyRes] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [perks, setPerks] = useState("");
  const [video, setVideo] = useState("");

  const [fieldAlert, setFieldAlert] = useState(false);
  const [FieldText, setFieldText] = useState("");

  // const [perks, setPerks] = useState("");
  const reactQuillRef = React.useRef();

  useEffect(() => {
    setDepartment(1);
    setSeniorityLevelVal(0);
    setSalaryRangeVal(0);
    setShiftVal(1);
    setJobType(0);
    setExpirience(0);
    setEmploymentType(1);

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

    CallGetStates(state.userDetails?.country_id);
    CallGetCities(state.userDetails?.state_id);

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId, setCity));
  };
  const CallGetStates = async (stateId) => {
    await dispatch(
      GetStates(
        stateId,
        setStateName,
        CallGetCities,
        false,
        state.userDetails?.state_id
      )
    );
  };

  const callAddJobPost = async () => {
    setLoading(true);

    if (city == "" || city == null) {
      console.log("city", city);
      setLoading(false);
      setFieldText("Enter City Name");

      setFieldAlert(true);
      return;
    }
    if (stateName == "" || stateName == null) {
      console.log("stateName", stateName);
      setLoading(false);
      setFieldText("Enter State Name");

      setFieldAlert(true);
      return;
    }
    if (country == "" || country == null) {
      console.log("country", country);
      setLoading(false);
      setFieldText("Enter Country Name");

      setFieldAlert(true);
      return;
    }
    if (jobTitle == "" || jobTitle == null) {
      console.log("jobTitle");
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Job title");
      return;
    }
    if (salaryRangeVal == null || salaryRangeVal == null) {
      console.log("salaryRangeVal", salaryRangeVal);
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Salary range");

      return;
    }
    if (seniorityLevelVal == null || seniorityLevelVal == null) {
      console.log("seniorityLevelVal");
      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Seniority level");

      return;
    }

    if (jobType == null || jobType == null) {
      console.log("jobType");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Job type");

      return;
    }
    if (employmentType == "" || employmentType == null) {
      console.log("employmentType");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Employment type");

      return;
    }

    if (role == "" || role == null) {
      console.log("role");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter your job description");

      return;
    }
    if (keyRes == "" || keyRes == null) {
      console.log("keyRes");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter key responsiblities");

      return;
    }
    if (closingDate == "" || closingDate == null) {
      console.log("closingDate");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter key closing date");

      return;
    }
    if (department == "" || department == null) {
      console.log("department");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter department");

      return;
    }
    if (lookingFor == "" || lookingFor == null) {
      console.log("lookingFor");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please describe what are you looking for.");

      return;
    }
    if (perks == "" || perks == null) {
      console.log("Perks");

      setLoading(false);
      setFieldAlert(true);
      setFieldText("Please enter Perks");

      return;
    }

    setFieldAlert(false);
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
        state.SaveJobVideo,
        TopSkill1,
        TopSkill2,
        TopSkill3,
        TopSkill4,
        TopSkill5,
        history
      )
    );
    setLoading(false);
  };

  const callAddNewSkill = async (OtherSkill, setItSkills) => {
    await dispatch(AddNewSkill(OtherSkill, setItSkills));
  };

  const checkCharacterCount = (event) => {
    const unprivilegedEditor = reactQuillRef.current.unprivilegedEditor;
    if (unprivilegedEditor.getLength() > 280 && event.key !== "Backspace")
      event.preventDefault();
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
                    <Profilesidebar
                      image={`require("./../../images/team/pic1.jpg")`}
                      isActive="Post A Job"
                    />
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
                              Job Title:
                              <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Department:{" "}
                              <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Seniority Level:{" "}
                              <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Salary Range (Per Annum):{" "}
                              {state.userDetails?.country?.currency_symbol}
                              <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Job Type: <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Employment Type:{" "}
                              <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              Experience (Years):{" "}
                              <span className="text-danger"> *</span>
                            </label>
                            <TextInputModal
                              type={"number"}
                              min={0}
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
                            <label>
                              Country: <span className="text-danger"> *</span>
                            </label>

                            {/* <DropdownSearch items={state.countries} /> */}
                            <DropDownModalComponent
                              onChange={(e) => {
                                console.log("eee", e.target.value);
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
                            <label>
                              State: <span className="text-danger"> *</span>
                            </label>
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
                            <label>
                              City: <span className="text-danger"> *</span>
                            </label>
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
                              Closing Date:
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

                        <div className="col-lg-6 col-md-6"></div>

                        {/* {handleDisplay >= 0 && ( */}
                        <>
                          <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>
                                Top Skill 1:
                                {/* <span className="text-danger"> *</span> */}
                              </label>
                              <select
                                value={TopSkill1}
                                onChange={(e) => {
                                  console.log("ret", e.target.value);
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
                                  <option key={item.id} value={item.id}>
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
                                {/* <span className="text-danger"> *</span> */}
                              </label>
                              <select
                                value={TopSkill2}
                                onChange={(e) => {
                                  console.log("ret", e.target.value);
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
                                  <option key={item.id} value={item.id}>
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

                          {/* <div className="col-lg-6 col-md-12">
                              <div
                                onClick={() => {
                                  setTopSkill3(1);
                                  sethandleDisplay(3);
                                }}
                                className="site-button add-btn button-sm"
                              >
                                <i className="fa fa-plus m-r5"></i> Add
                              </div>
                            </div> */}
                        </>
                        {/* )} */}

                        {/* {handleDisplay >= 3 && ( */}
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
                                  console.log("ret", e.target.value);
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
                                  <option key={item.id} value={item.id}>
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
                          {/* <div className="col-lg-6 col-md-12">
                              <div
                                onClick={() => {
                                  setTopSkill4(1);
                                  sethandleDisplay(4);
                                }}
                                className="site-button add-btn button-sm"
                              >
                                <i className="fa fa-plus m-r5"></i> Add
                              </div>
                            </div> */}
                        </>
                        {/* )} */}

                        {/* {handleDisplay >= 4 && ( */}
                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 4:
                                {/* <span className="text-danger"> *</span> */}
                              </label>
                              <select
                                value={TopSkill4}
                                onChange={(e) => {
                                  console.log("ret", e.target.value);
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
                                  <option key={item.id} value={item.id}>
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
                          {/* <div className="col-lg-6 col-md-12">
                              <div
                                onClick={() => {
                                  setTopSkill5(1);
                                  sethandleDisplay(5);
                                }}
                                className="site-button add-btn button-sm"
                              >
                                <i className="fa fa-plus m-r5"></i> Add
                              </div>
                            </div> */}
                        </>
                        {/* )} */}

                        {/* {handleDisplay >= 5 && ( */}
                        <>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                Top Skill 5:
                                {/* <span className="text-danger"> *</span> */}
                              </label>
                              <select
                                value={TopSkill5}
                                onChange={(e) => {
                                  console.log("ret", e.target.value);
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
                                  <option key={item.id} value={item.id}>
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
                              Job Description:
                              <span className="text-danger"> *</span>
                            </label>
                            <ReactQuill
                              // onKeyDown={checkCharacterCount}
                              className="quillEditor"
                              value={role}
                              onChange={setRole}
                            />
                            {/* <TextAreaModalComponent
                              placeholder="Enter Role Description"
                              onChange={(e) => setRole(e.target.value)}
                              value={role}
                            /> */}
                            {/* <small>Characters left: {150 - role.length}</small> */}
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Key Responsibilities:
                              <span className="text-danger"> *</span>
                            </label>

                            <ReactQuill
                              // onKeyDown={checkCharacterCount}
                              className="quillEditor"
                              value={keyRes}
                              onChange={setKeyRes}
                            />

                            {/* <TextAreaModalComponent
                              placeholder="Enter Key Responsibilities"
                              onChange={(e) => setKeyRes(e.target.value)}
                              value={keyRes}
                            /> */}

                            {/* <small>
                              Characters left: {150 - keyRes.length}
                            </small> */}
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              What are we looking for?
                              <span className="text-danger"> *</span>
                            </label>

                            <ReactQuill
                              // onKeyDown={checkCharacterCount}
                              className="quillEditor"
                              value={lookingFor}
                              onChange={setLookingFor}
                            />

                            {/* <TextAreaModalComponent
                              placeholder="Enter What you're looking for?"
                              onChange={(e) => setLookingFor(e.target.value)}
                              value={lookingFor}
                            /> */}
                            {/* <small>
                              Characters left: {150 - lookingFor.length}
                            </small> */}
                          </div>
                        </div>
                        <div className="mt-4 col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Perks:
                              <span className="text-danger"> *</span>
                            </label>

                            <ReactQuill
                              ref={reactQuillRef}
                              // onKeyDown={checkCharacterCount}
                              className="quillEditor"
                              value={perks}
                              onChange={setPerks}
                            />

                            {/* <TextAreaModalComponent
                              placeholder="Enter Perks"
                              onChange={(e) => {
                                // 150 - perks.length >= 0 &&
                                setPerks(e.target.value);
                              }}
                              maxLength={"500"}
                              value={perks}
                            /> */}
                          </div>
                        </div>

                        <div
                          style={{
                            margin: "0 14px",
                          }}
                          className="col-lg-12 col-md-12"
                        >
                          <AttachVideoCompanyJob
                            setLoading={(e) => {
                              console.log("eeee vid load", e);
                              setVidLoading(e);
                              // setLoading(e);
                            }}
                            isFullCol={true}
                            setVideoFile={(e) => {
                              console.log("files", e[0]);
                              setVideo(e);
                            }}
                          />
                          {/* {vidLoading ? "Uploading..." : ""} */}
                        </div>
                      </div>
                      {fieldAlert && <p className="text-danger">{FieldText}</p>}
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
                      {/* {!loading ? (
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
                      )} */}
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
