import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCompanyName,
  filterIndustryName,
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetSkills,
  ResetfilterJobs,
} from "../../redux/action";
import {
  filterCandidateAll,
  filterCandidateAvailability,
  filterCandidateCompany,
  filterCandidateRole,
  filterCandidateSkill,
  ResetfilterCandidate,
} from "../../redux/action/candidates/FilterMyResumeAction";
import { AvailabliltyDrop, CompanySizeLevel } from "../../utils/DropDownUtils";
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

  const [CompanyNameFilter, setCompanyNameFilter] = useState("");
  const [LocationFilter, setLocationFilter] = useState(null);
  const [IndustryFilter, setIndustryFilter] = useState(null);
  const [CompanySizeFilter, setCompanySizeFilter] = useState(null);
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

  // const callFilter = () => {
  //   var count = 0;
  //   if (CompanyNameFilter != null && CompanyNameFilter != "") {
  //     count++;
  //   }
  //   if (LocationFilter != null && LocationFilter != "") {
  //     count++;
  //   }
  //   if (IndustryFilter != null && IndustryFilter != "") {
  //     count++;
  //   }
  //   if (CompanySizeFilter != null && CompanySizeFilter != "") {
  //     count++;
  //   }

  //   if (count > 1) {
  //     dispatch(
  //       filterCandidateAll(
  //         availaibityBool,
  //         LocationFilter,
  //         IndustryFilter,
  //         CompanySizeFilter
  //       )
  //     );
  //     return;
  //   }
  //   if (CompanyNameFilter != null && CompanyNameFilter != "") {
  //     console.log("CompanyNameFilter");
  //     dispatch(
  //       filterCandidateAvailability(
  //         CompanyNameFilter == "Available" ? true : "Unavailable" && false
  //       )
  //     );
  //     return;
  //   }
  //   if (LocationFilter != null && LocationFilter != "") {
  //     console.log("LocationFilter");

  //     dispatch(filterCandidateSkill(LocationFilter));
  //     return;
  //   }
  //   if (IndustryFilter != null && IndustryFilter != "") {
  //     console.log("IndustryFilter");

  //     dispatch(filterCandidateCompany(IndustryFilter));
  //     return;
  //   }
  //   if (CompanySizeFilter != null && CompanySizeFilter != "") {
  //     console.log("CompanySizeFilter");

  //     dispatch(filterCandidateRole(CompanySizeFilter));
  //     return;
  //   }
  // };

  const callFilter = () => {
    dispatch(filterCompanyName(CompanyNameFilter));
    // dispatch(filterIndustryName(IndustryFilter));
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
                        setCompanyNameFilter(e.target.value);
                      }}
                      value={CompanyNameFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="CompanyNameFilter"
                    />

                    <datalist id="CompanyNameFilter">
                      {state.AllCompanyNames.map((item, key) => (
                        <option key={key} value={item} />
                      ))}
                    </datalist>
                    {/* <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setCompanyNameFilter(e.target.value);
                      }}
                      value={CompanyNameFilter}
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
                  <label>Location</label>
                  <div className="input-group ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setLocationFilter(e.target.value);
                      }}
                      value={LocationFilter}
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
                        setLocationFilter(e.target.value);
                      }}
                      value={LocationFilter}
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
                      {state?.skills.findIndex(
                        (x) => x?.id == LocationFilter
                      ) == -1
                        ? ""
                        : state?.skills[
                            state?.skills.findIndex(
                              (x) => x?.id == LocationFilter
                            )
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
                        setIndustryFilter(e.target.value);
                        console.log(IndustryFilter);
                      }}
                      value={IndustryFilter}
                      placeholder=""
                      className="form-control"
                      type="text"
                      list="organizationDrop"
                    />

                    <datalist id="organizationDrop">
                      {state.industries.map((item, key) => (
                        <option key={key} value={item.id} label={item.name} />
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
                        setCompanySizeFilter(e.target.value);
                      }}
                      value={CompanySizeFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="DesignationDrop"
                    />

                    <datalist id="DesignationDrop">
                      {CompanySizeLevel.map((item, key) => (
                        <option key={key} value={item.id} label={item.name} />
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
                    setCompanyNameFilter("");
                    setLocationFilter("");
                    setIndustryFilter("");
                    setCompanySizeFilter("");
                    dispatch(ResetfilterJobs());
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
