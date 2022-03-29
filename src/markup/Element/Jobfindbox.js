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
  filterCandidateAvailability,
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

  const [availabliltyFilter, setAvailabliltyFilter] = useState();
  const [skillFilter, setSkillFilter] = useState();
  const [companyFilter, setCompanyFilter] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");

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
    dispatch(
      filterCandidateAvailability(
        availabliltyFilter,
        skillFilter,
        companyFilter,
        designationFilter
      )
    );
  };

  return (
    <div className="section-full browse-job-find">
      <div className="container">
        <div className="find-job-bx">
          <form className="dezPlaceAni">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Status</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setAvailabliltyFilter(e.target.value);
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
                  <label>Skill</label>
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
                        <option key={key} label={item.name} value={item.id} />
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
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>Organization</label>
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
                  <label>Designation</label>
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
