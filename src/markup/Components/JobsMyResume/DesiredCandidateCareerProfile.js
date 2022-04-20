import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  GetCities,
  GetCountries,
  GetDesiredCareer,
  GetStates,
  UpdateDesiredCareer,
} from "../../../redux/action";
import {
  employmentTypeDrop,
  jobTypeDrop,
  shiftDrop,
} from "../../../utils/DropDownUtils";
import {
  formatDate,
  GetCityName,
  GetCountryName,
  GetStateName,
} from "../../../utils/functions";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function DesiredCandidateCareerProfile({ isView }) {
  const item = useSelector((state) => state.singleUserData?.desired_careers[0]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const DesiredCareerProfileFields = [
    {
      name: "Industry",
      desc:
        state?.industries.findIndex((x) => x?.id == item?.industry_id) == -1
          ? ""
          : state?.industries[
              state?.industries.findIndex((x) => x?.id == item?.industry_id)
            ].name,
    },
    {
      name: "Department",
      desc:
        state?.departments.findIndex((x) => x?.id == item?.department_id) == -1
          ? ""
          : state?.departments[
              state?.departments.findIndex((x) => x?.id == item?.department_id)
            ].name,
    },
    {
      name: "Role",
      desc: item.role,
    },
    {
      name: "Employment Type",
      desc:
        employmentTypeDrop.findIndex((x) => x?.id == item.employment_type) == -1
          ? ""
          : employmentTypeDrop[
              employmentTypeDrop.findIndex((x) => x?.id == item.employment_type)
            ].name,
    },
    {
      name: "Job Type",
      desc:
        shiftDrop.findIndex((x) => x?.id == item.job_type) == -1
          ? ""
          : shiftDrop[shiftDrop.findIndex((x) => x?.id == item.job_type)].name,
    },
    {
      name: "Shift",
      desc:
        jobTypeDrop.findIndex((x) => x?.id == item.preferred_shift) == -1
          ? ""
          : jobTypeDrop[
              jobTypeDrop.findIndex((x) => x?.id == item.preferred_shift)
            ].name,
    },
    {
      name: "Expected Annual Salary in GBP",
      desc: item?.expected_salary,
    },
    {
      name: "Availability To Join",
      desc: item.available_join != null ? formatDate(item.available_join) : "",
    },
  ];

  const [industry, setIndustry] = useState(
    item?.industry_id ? item?.industry_id : 1
  );
  const [department, setDepartment] = useState(
    item?.department_id ? item?.department_id : 1
  );
  const [role, setRole] = useState(item?.role ? item?.role : "");
  const [jobType, setJobType] = useState(item?.job_type ? item?.job_type : 1);
  const [employmentType, setEmploymentType] = useState(
    item?.employment_type ? item?.employment_type : ""
  );
  const [shift, setShift] = useState(
    item?.preferred_shift ? item?.preferred_shift : 1
  );
  const [availableJoin, setAvailableJoin] = useState(
    item?.available_join ? item?.available_join : ""
  );
  const [expSalary, setExpSalary] = useState(
    item?.expected_salary ? item?.expected_salary : ""
  );
  const [country, setCountry] = useState(
    item?.country_id ? item?.country_id : 0
  );
  const [city, setCity] = useState(item?.city_id ? item?.city_id : 0);
  const [cstate, setCState] = useState(item?.state_id ? item?.state_id : 0);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  const [loading, setLoading] = useState(true);
  const [cityLoading, setCityLoading] = useState(true);
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    callGetCityState(item.state_id, item.city_id, item.country_id);
    //  to get languages
    CallGetDropDown();
    callGetDesiredCareer();
  }, []);

  const callGetCityState = async (state_id, city_id, country_id) => {
    console.log("test workddddd", state_id, city_id, country_id);
    setCityLoading(true);
    await GetStateName(state_id, setStateName);
    await GetCityName(city_id, setCityName);
    await GetCountryName(country_id, setCountryName);
    setCityLoading(false);
  };

  const callGetDesiredCareer = async () => {
    dispatch(GetDesiredCareer());
  };

  const CallGetDropDown = async () => {
    if (state.countries.length < 1) await dispatch(GetCountries());
    if (state.states.length < 1) await dispatch(GetStates());
    if (state.cities.length < 1) await dispatch(GetCities(4));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  const callUpdateDesiredCareer = async () => {
    await dispatch(
      UpdateDesiredCareer(
        industry,
        department,
        role,
        jobType,
        employmentType,
        shift,
        availableJoin,
        expSalary,
        city,
        cstate,
        country,
        handleClose(),
        callGetCityState
      )
    );
  };

  if (loading) {
    return (
      <div className="page-wraper">
        <p>Loading... </p>
      </div>
    );
  } else {
    return (
      <>
        {/* Desired career */}
        <div id="desired_career_profile_bx" className="job-bx bg-white m-b30">
          <div className="d-flex">
            <h5 className="m-b30">Desired Career</h5>
            {!isView && (
              <Link
                to={"#"}
                data-toggle="modal"
                data-target="#desiredprofile"
                onClick={() => handleShow()}
                className="site-button add-btn button-sm"
              >
                <i className="fa fa-pencil m-r5"></i> Edit
              </Link>
            )}
          </div>

          <div className="row">
            {DesiredCareerProfileFields.map((item) => (
              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">{item.name}</h6>
                <p className="m-b0">{item.desc}</p>
              </div>
            ))}
          </div>

          <h5 className="mt-3">Preferred Location</h5>
          <div className="row">
            {/* <h6 className="col-12  my-2 mt-1 m-b0"></h6> */}

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">City</h6>
              <p className="m-b0">{cityLoading ? "Loading..." : cityName}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">State</h6>
              <p className="m-b0">{cityLoading ? "Loading..." : stateName}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">Country</h6>
              <p className="m-b0">{cityLoading ? "Loading..." : countryName}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
