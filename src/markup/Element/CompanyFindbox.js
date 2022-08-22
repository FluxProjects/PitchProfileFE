import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCompanyName,
  filterSalaryRange,
  filterDepartmentName,
  filterIndustryName,
  filterSeniorityLevel,
  filterEmploymentType,
  filterCompanySize,
  filterShiftType,
  filterJobType,
  filterJobAll,
  GetDepartments,
  GetEducationLevels,
  GetIndustries,
  GetSkills,
  ResetfilterJobs,
  GetCities,
  filterLocationFilter,
  filterJobName,
  filterSkillType,
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
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
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

  const [JobNameFilter, setJobNameFilter] = useState(null);
  const [CompanyNameFilter, setCompanyNameFilter] = useState(null);
  const [SalaryRangeVal, setSalaryRange] = useState(null);
  const [EmploymentTypeFilter, setEmploymentTypeFilter] = useState(null);
  const [ShiftTypeFilter, setShiftTypeFilter] = useState(null);
  const [showMoreFilters, setshowMoreFilters] = useState(false);
  const [LocationFilter, setLocationFilter] = useState(null);
  const [IndustryFilter, setIndustryFilter] = useState(null);
  const [CompanySizeFilter, setCompanySizeFilter] = useState(null);
  const [availaibityBool, setAvailaibityBool] = useState(null);
  const [DepartmentNameFilter, setDepartmentNameFilter] = useState(null);
  const [SeniorityLevelFilter, setSeniorityLevelFilter] = useState(null);
  const [SkillFilter, setSkillFilter] = useState(null);

  useEffect(() => {
    callGetDrop();
    CallGetCities(state.userDetails?.state_id);
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

  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  const callFilter = () => {
    var count = 0;

    if (JobNameFilter != null && JobNameFilter != "") {
      count++;
    }
    if (SkillFilter != null && SkillFilter != "") {
      count++;
    }
    if (CompanyNameFilter != null && CompanyNameFilter != "") {
      count++;
    }
    if (IndustryFilter != null && IndustryFilter != "") {
      count++;
    }
    if (SeniorityLevelFilter != null && SeniorityLevelFilter != "") {
      count++;
    }
    if (CompanySizeFilter != null && CompanySizeFilter != "") {
      count++;
    }
    if (SalaryRangeVal != null && SalaryRangeVal != "") {
      count++;
    }
    if (ShiftTypeFilter != null && ShiftTypeFilter != "") {
      count++;
    }
    if (EmploymentTypeFilter != null && EmploymentTypeFilter != "") {
      count++;
    }
    if (LocationFilter != null && LocationFilter != "") {
      count++;
    }
    if (count > 1) {
      dispatch(
        filterJobAll(
          CompanyNameFilter,
          DepartmentNameFilter,
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

          jobTypeDrop.findIndex((x) => x?.name == EmploymentTypeFilter) == -1
            ? ""
            : jobTypeDrop[
                jobTypeDrop.findIndex((x) => x?.name == EmploymentTypeFilter)
              ].id,

          state.cities.findIndex((x) => x?.name == LocationFilter) == -1
            ? ""
            : state.cities[
                state.cities.findIndex((x) => x?.name == LocationFilter)
              ].id,

          employmentTypeDrop.findIndex(
            (x) => x?.name == EmploymentTypeFilter
          ) == -1
            ? ""
            : employmentTypeDrop[
                employmentTypeDrop.findIndex(
                  (x) => x?.name == EmploymentTypeFilter
                )
              ].id,

          SeniorityLevel.findIndex((x) => x?.name == SeniorityLevelFilter) == -1
            ? ""
            : SeniorityLevel[
                SeniorityLevel.findIndex((x) => x?.name == SeniorityLevelFilter)
              ].id,

          SalaryRange.findIndex((x) => x?.name == SalaryRangeVal) == -1
            ? ""
            : SalaryRange[
                SalaryRange.findIndex((x) => x?.name == SalaryRangeVal)
              ].id,

          JobNameFilter,

          state.skills.findIndex((x) => x?.name == SkillFilter) == -1
            ? ""
            : state.skills[
                state.skills.findIndex((x) => x?.name == SkillFilter)
              ].id
        )
      );
      return;
    }

    if (JobNameFilter != null && JobNameFilter != "") {
      dispatch(filterJobName(JobNameFilter));
      return;
    }
    if (SkillFilter != null && SkillFilter != "") {
      dispatch(
        filterSkillType(
          state.skills.findIndex((x) => x?.name == SkillFilter) == -1
            ? ""
            : state.skills[
                state.skills.findIndex((x) => x?.name == SkillFilter)
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
    if (DepartmentNameFilter != null && DepartmentNameFilter != "") {
      dispatch(filterDepartmentName(DepartmentNameFilter));
      return;
    }
    if (SeniorityLevelFilter != null && SeniorityLevelFilter != "") {
      dispatch(
        filterSeniorityLevel(
          SeniorityLevel.findIndex((x) => x?.name == SeniorityLevelFilter) == -1
            ? ""
            : SeniorityLevel[
                SeniorityLevel.findIndex((x) => x?.name == SeniorityLevelFilter)
              ].id
        )
      );
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
            : SalaryRange[
                SalaryRange.findIndex((x) => x?.name == SalaryRangeVal)
              ].id
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
    if (EmploymentTypeFilter != null && EmploymentTypeFilter != "") {
      dispatch(
        filterEmploymentType(
          employmentTypeDrop.findIndex(
            (x) => x?.name == EmploymentTypeFilter
          ) == -1
            ? ""
            : employmentTypeDrop[
                employmentTypeDrop.findIndex(
                  (x) => x?.name == EmploymentTypeFilter
                )
              ].id
        )
      );
      return;
    }
    if (LocationFilter != null && LocationFilter != "") {
      dispatch(
        filterLocationFilter(
          state.cities.findIndex((x) => x?.name == LocationFilter) == -1
            ? ""
            : state.cities[
                state.cities.findIndex((x) => x?.name == LocationFilter)
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
                  <label className="">Job Title</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setJobNameFilter(e.target.value);
                      }}
                      value={JobNameFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="JobNameFilter"
                    />

                    <datalist id="JobNameFilter">
                      {state.AllJobNames.map((item, key) => (
                        <option key={key} value={item} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Skill</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSkillFilter(e.target.value);
                      }}
                      value={SkillFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="SkillFilter"
                    />

                    <datalist id="SkillFilter">
                      {state.skills.map((item, key) => (
                        <option key={key} value={item.name} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>

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

              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Department Name</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);

                        setDepartmentNameFilter(e.target.value);
                      }}
                      value={DepartmentNameFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="DepartmentNameFilter"
                    />

                    <datalist id="DepartmentNameFilter">
                      {state.departments.map((item, key) => (
                        <option key={key} value={item.name} label={item.name} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Seniority Level</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSeniorityLevelFilter(e.target.value);
                      }}
                      value={SeniorityLevelFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="SeniorityLevelFilter"
                    />

                    <datalist id="SeniorityLevelFilter">
                      {SeniorityLevel.map((item, key) => (
                        <option key={key} value={item.name} label={item.name} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">
                    Salary Range {state.userDetails?.country?.currency_symbol}
                  </label>
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
                        <option key={key} value={item.name} label={item.name} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label className="">Employment Type</label>
                  <div className="input-group  ">
                    <input
                      onChange={(e) => {
                        console.log("eee", e.target.value);

                        setEmploymentTypeFilter(e.target.value);
                      }}
                      value={EmploymentTypeFilter}
                      placeholder=""
                      className="form-control w-85"
                      type="text"
                      list="EmploymentTypeFilter"
                    />

                    <datalist id="EmploymentTypeFilter">
                      {employmentTypeDrop.map((item, key) => (
                        <option key={key} value={item.name} label={item.name} />
                      ))}
                    </datalist>
                  </div>
                </div>
              </div>
              {state.userDetails?.state_id != null && state.authToken && (
                <div className="col-lg-2 col-md-6">
                  <div className="form-group">
                    <label className="">Location</label>
                    <div className="input-group  ">
                      <input
                        onChange={(e) => {
                          console.log("eee", e.target.value);

                          setLocationFilter(e.target.value);
                        }}
                        value={LocationFilter}
                        placeholder=""
                        className="form-control w-85"
                        type="text"
                        list="LocationFilter"
                      />

                      <datalist id="LocationFilter">
                        {state.countries.map((item, key) => (
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
              )}

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
                    setJobNameFilter("");

                    setCompanyNameFilter("");
                    setSeniorityLevelFilter("");
                    setSkillFilter("");
                    setLocationFilter("");
                    setIndustryFilter("");
                    setCompanySizeFilter("");
                    setDepartmentNameFilter("");
                    setSalaryRange("");
                    setEmploymentTypeFilter("");
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
