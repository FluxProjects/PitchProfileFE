import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCompanyName,
  filterSalaryRange,
  filterIndustryName,
  filterCompanySize,
  filterShiftType,
  filterJobType,
  filterJobAll,
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
import {
  AvailabliltyDrop,
  CompanySizeLevel,
  jobTypeDrop,
  SalaryRange,
  shiftDrop,
} from "../../utils/DropDownUtils";
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
  const [SalaryRangeVal, setSalaryRange] = useState("");
  const [JobTypeFilter, setJobTypeFilter] = useState("");
  const [ShiftTypeFilter, setShiftTypeFilter] = useState("");
  const [showMoreFilters, setshowMoreFilters] = useState(false);
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

  const callFilter = () => {
    var count = 0;
    if (CompanyNameFilter != null && CompanyNameFilter != "") {
      count++;
    }
    if (SalaryRangeVal != null && SalaryRangeVal != "") {
      count++;
    }
    if (IndustryFilter != null && IndustryFilter != "") {
      count++;
    }
    if (CompanySizeFilter != null && CompanySizeFilter != "") {
      count++;
    }
    if (count > 1) {
      dispatch(
        filterJobAll(
          CompanyNameFilter,
          SalaryRangeVal,
          IndustryFilter,
          CompanySizeLevel.findIndex((x) => x?.name == CompanySizeFilter) == -1
            ? ""
            : CompanySizeLevel[
                CompanySizeLevel.findIndex((x) => x?.name == CompanySizeFilter)
              ].id,
          shiftDrop.findIndex((x) => x?.name == ShiftTypeFilter) == -1
            ? ""
            : shiftDrop[shiftDrop.findIndex((x) => x?.name == ShiftTypeFilter)]
                .id,
          jobTypeDrop.findIndex((x) => x?.name == JobTypeFilter) == -1
            ? ""
            : jobTypeDrop[
                jobTypeDrop.findIndex((x) => x?.name == JobTypeFilter)
              ].id
        )
      );
      return;
    }
    if (CompanyNameFilter != null && CompanyNameFilter != "") {
      dispatch(filterCompanyName(CompanyNameFilter));
      return;
    }
    if (IndustryFilter != null && IndustryFilter != "") {
      dispatch(filterIndustryName(IndustryFilter));
      return;
    }
    if (CompanySizeFilter != null && CompanySizeFilter != "") {
      dispatch(
        filterCompanySize(
          CompanySizeLevel.findIndex((x) => x?.name == CompanySizeFilter) == -1
            ? ""
            : CompanySizeLevel[
                CompanySizeLevel.findIndex((x) => x?.name == CompanySizeFilter)
              ].id
        )
      );
      return;
    }
    if (SalaryRangeVal != null && SalaryRangeVal != "") {
      dispatch(
        filterSalaryRange(
          SalaryRange.findIndex((x) => x?.name == SalaryRangeVal) == -1
            ? ""
            : SalaryRange[SalaryRange.findIndex((x) => x?.id == SalaryRangeVal)]
                .id
        )
      );
      return;
    }
    if (ShiftTypeFilter != null && ShiftTypeFilter != "") {
      dispatch(
        filterShiftType(
          shiftDrop.findIndex((x) => x?.name == ShiftTypeFilter) == -1
            ? ""
            : shiftDrop[shiftDrop.findIndex((x) => x?.name == ShiftTypeFilter)]
                .id
        )
      );

      return;
    }
    if (JobTypeFilter != null && JobTypeFilter != "") {
      dispatch(
        filterJobType(
          jobTypeDrop.findIndex((x) => x?.name == JobTypeFilter) == -1
            ? ""
            : jobTypeDrop[
                jobTypeDrop.findIndex((x) => x?.name == JobTypeFilter)
              ].id
        )
      );
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
                        <option key={key} value={item.name} label={item.name} />
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
                        <option key={key} value={item.name} label={item.name} />
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

              {/* <div ></div> */}
              <div className="col-lg-2 col-md-2">
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
              <div className="col-lg-2 col-md-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setCompanyNameFilter("");
                    setLocationFilter("");
                    setIndustryFilter("");
                    setCompanySizeFilter("");
                    setSalaryRange("");
                    setJobTypeFilter("");
                    setShiftTypeFilter("");
                    setshowMoreFilters("");
                    dispatch(ResetfilterJobs());
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  Reset Filter
                </button>
              </div>
              <div className="col-lg-2 col-md-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // callFilter();
                    setshowMoreFilters(!showMoreFilters);
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  <i className="fa fa-search"></i> More Filters
                </button>
              </div>

              {showMoreFilters && (
                <>
                  <div className="col-lg-2 col-md-6">
                    <div className="form-group">
                      <label className="">Salary Range</label>
                      <div className="input-group  ">
                        <input
                          onChange={(e) => {
                            console.log("eee", e.target.value);
                            setSalaryRange(e.target.value);
                          }}
                          value={SalaryRangeVal}
                          placeholder=""
                          className="form-control w-85"
                          type="text"
                          list="SalaryRangeVal"
                        />

                        <datalist id="SalaryRangeVal">
                          {SalaryRange.map((item, key) => (
                            <option
                              key={key}
                              value={item.name}
                              label={item.name}
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="form-group">
                      <label className="">Job Type</label>
                      <div className="input-group  ">
                        <input
                          onChange={(e) => {
                            console.log("eee", e.target.value);

                            setJobTypeFilter(e.target.value);
                          }}
                          value={JobTypeFilter}
                          placeholder=""
                          className="form-control w-85"
                          type="text"
                          list="JobTypeFilter"
                        />

                        <datalist id="JobTypeFilter">
                          {jobTypeDrop.map((item, key) => (
                            <option
                              key={key}
                              value={item.name}
                              label={item.name}
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6">
                    <div className="form-group">
                      <label className="">Shift Type</label>
                      <div className="input-group  ">
                        <input
                          onChange={(e) => {
                            console.log("eee", e.target.value);

                            setShiftTypeFilter(e.target.value);
                          }}
                          value={ShiftTypeFilter}
                          placeholder=""
                          className="form-control w-85"
                          type="text"
                          list="ShiftTypeFilter"
                        />

                        <datalist id="ShiftTypeFilter">
                          {shiftDrop.map((item, key) => (
                            <option
                              key={key}
                              value={item.name}
                              label={item.name}
                            />
                          ))}
                        </datalist>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
