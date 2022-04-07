import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetSkills,
} from "../../redux/action";
import {
  filterCandidateAll,
  filterCandidateAvailability,
  filterCandidateCompany,
  filterCandidateRole,
  filterCandidateSkill,
  ResetfilterCandidate,
} from "../../redux/action/candidates/FilterMyResumeAction";
import { AvailabliltyDrop } from "../../utils/DropDownUtils";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";

export default function Jobfindbox({ isView }) {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [availabliltyFilter, setAvailabliltyFilter] = useState("");
  const [skillFilter, setSkillFilter] = useState(null);
  const [skillFilterLabel, setSkillFilterLabel] = useState(null);
  const [companyFilter, setCompanyFilter] = useState(null);
  const [designationFilter, setDesignationFilter] = useState(null);
  const [availaibityBool, setAvailaibityBool] = useState(null);

  useEffect(() => {
    callGetDrop();
    var i = 0;

    // Placeholder Animation Start
    var inputSelector = document.querySelectorAll("input, textarea");

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("focus", function (event) {
        return this.parentElement.parentElement.classList.add("focused");
      });
    }

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("blur", function (event) {
        var inputValue = this.value;
        if (inputValue === "") {
          this.parentElement.parentElement.classList.remove("filled");
          this.parentElement.parentElement.classList.remove("focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    }

    // Placeholder Animation End
  }, []);

  const callGetDrop = async () => {
    if (state.departments.length < 1) {
      await dispatch(GetDepartments());
    }
    if (state.industries.length < 1) {
      await dispatch(GetIndustries());
    }
    // if (state.skills.length < 1) {
    await dispatch(GetSkills());
    // }
    if (state.educationLevels.length < 1) {
      await dispatch(GetEducationLevels());
    }
  };

  const callFilter = () => {
    var count = 0;
    if (availabliltyFilter != null && availabliltyFilter != "") {
      count++;
    }
    if (skillFilter != null && skillFilter != "") {
      count++;
    }
    if (companyFilter != null && companyFilter != "") {
      count++;
    }
    if (designationFilter != null && designationFilter != "") {
      count++;
    }

    if (count > 1) {
      dispatch(
        filterCandidateAll(
          availaibityBool,
          skillFilter,
          companyFilter,
          designationFilter
        )
      );
      return;
    }
    if (availabliltyFilter != null && availabliltyFilter != "") {
      console.log("availabliltyFilter");
      dispatch(
        filterCandidateAvailability(
          availabliltyFilter == "Available" ? true : "Unavailable" && false
        )
      );
      return;
    }
    if (skillFilter != null && skillFilter != "") {
      console.log("skillFilter");

      dispatch(filterCandidateSkill(skillFilter));
      return;
    }
    if (companyFilter != null && companyFilter != "") {
      console.log("companyFilter");

      dispatch(filterCandidateCompany(companyFilter));
      return;
    }
    if (designationFilter != null && designationFilter != "") {
      console.log("designationFilter");

      dispatch(filterCandidateRole(designationFilter));
      return;
    }
  };

  return (
    <div className="section-full browse-job-find">
      <div className="container">
        <div className="find-job-bx">
          <form className="dezPlaceAni">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Company Name</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setAvailabliltyFilter(e.target.value);
                        if (e.target.value == "Available")
                          setAvailaibityBool(true);
                        else if (e.target.value == "Unavailable")
                          setAvailaibityBool(false);
                        else if (e.target.value == "") setAvailaibityBool("");
                        else if (e.target.value == null) setAvailaibityBool("");
                      }}
                      value={availabliltyFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="availabliltyFilter"
                    />

                    <datalist id="availabliltyFilter">
                      {AvailabliltyDrop.map((item, key) => (
                        <option key={key} label={item.name} value={item.id} />
                      ))}
                    </datalist>
                    {/* <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setAvailabliltyFilter(e.target.value);
                      }}
                      value={availabliltyFilter}
                      options={AvailabliltyDrop}
                    /> */}
                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>location</label>
                  <div className="input-group ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSkillFilter(e.target.value);
                      }}
                      value={skillFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="SkillsDropDown"
                    />

                    <datalist id="SkillsDropDown">
                      {state.skills.map((item, key) => (
                        <option key={key} label={item.name} value={item.name} />
                      ))}
                    </datalist>
                    {/* <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSkillFilter(e.target.value);
                      }}
                      value={skillFilter}
                      options={state.skills}
                    /> */}
                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <small>
                      {state?.skills.findIndex((x) => x?.id == skillFilter) ==
                      -1
                        ? ""
                        : state?.skills[
                            state?.skills.findIndex((x) => x?.id == skillFilter)
                          ].name}
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>Industry</label>
                  <div className="input-group ">
                    <input
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setCompanyFilter(e.target.value);
                        console.log(companyFilter);
                      }}
                      value={companyFilter}
                      placeholder=""
                      className="form-control"
                      type="text"
                      list="organizationDrop"
                    />

                    <datalist id="organizationDrop">
                      {state.organizationDrop.map((item, key) => (
                        <option key={key} value={item} />
                      ))}
                    </datalist>

                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>Company Size</label>
                  <div className="input-group">
                    <input
                      onChange={(e) => {
                        console.log(e.target.value);
                        setDesignationFilter(e.target.value);
                      }}
                      value={designationFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="DesignationDrop"
                    />

                    <datalist id="DesignationDrop">
                      {state.DesignationDrop.map((item, key) => (
                        <option key={key} value={item} />
                      ))}
                    </datalist>

                    {/* <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    callFilter();
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  <i className="fa fa-search"></i> Apply Filter
                </button>
              </div>
              <div className="col-lg-2 col-md-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAvailabliltyFilter("");
                    setSkillFilter("");
                    setCompanyFilter("");
                    setDesignationFilter("");
                    dispatch(ResetfilterCandidate());
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  Reset Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
