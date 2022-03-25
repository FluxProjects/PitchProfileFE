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
  GetCityName,
  GetCountryName,
  GetStateName,
} from "../../../utils/functions";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function DesiredCareerProfileComponent({ isView }) {
  const item = useSelector((state) => state.candidateDesiredCareer);
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
      desc: item.available_join,
    },
  ];

  const [industry, setIndustry] = useState(
    item?.industry_id ? item?.industry_id : 1
  );
  const [department, setDepartment] = useState(
    item?.department_id ? item?.department_id : 1
  );
  const [role, setRole] = useState(item?.role ? item?.role : "");
  const [jobType, setJobType] = useState(item?.job_type ? item?.job_type : "");
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
  const [stateName, setStateName] = useState();
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();

  useEffect(() => {
    GetStateName(item.state_id, setStateName);
    GetCityName(item.city_id, setCityName);
    GetCountryName(item.country_id, setCountryName);

    //  to get languages
    CallGetDropDown();
    callGetDesiredCareer();
  }, []);

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
        handleClose()
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
        {/* Desired career profile */}
        <div id="desired_career_profile_bx" className="job-bx bg-white m-b30">
          <div className="d-flex">
            <h5 className="m-b30">Desired Career Profile</h5>
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

          <Modal
            show={show}
            onHide={() => handleClose()}
            className="modal fade modal-bx-info editor"
          >
            <div className="modal-dialog my-0" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="DesiredprofileModalLongTitle">
                    Desired Career Profile{" "}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Industry</label>
                          <DropDownModalComponent
                            onChange={(e) => {
                              console.log("eee", e.target.value);
                              setIndustry(e.target.value);
                            }}
                            value={industry}
                            options={state.industries}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
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
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Role</label>
                          <TextInputModal
                            onChange={(e) => {
                              console.log(e.target.value);
                              setRole(e.target.value);
                            }}
                            value={role}
                            placeholder="Enter Role"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Job Type</label>
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="permanent"
                                  name="example1"
                                  checked={jobType == 0 ? true : false}
                                  value={0}
                                  onChange={() => setJobType(0)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="permanent"
                                >
                                  Permanent
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="contractual"
                                  name="example1"
                                  checked={jobType == 1 ? true : false}
                                  value={1}
                                  onChange={() => setJobType(1)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="contractual"
                                >
                                  Contractual
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Employment Type</label>
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="fulltime"
                                  name="example1"
                                  checked={employmentType == 1 ? true : false}
                                  value={1}
                                  onChange={() => setEmploymentType(1)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="fulltime"
                                >
                                  Full Time
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="parttime"
                                  name="example1"
                                  checked={employmentType == 2 ? true : false}
                                  value={2}
                                  onChange={() => setEmploymentType(2)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="parttime"
                                >
                                  Part Time
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Shift</label>
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="day"
                                  name="example1"
                                  checked={shift == 1 ? true : false}
                                  value={1}
                                  onChange={() => setShift(1)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="day"
                                >
                                  Day
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="night"
                                  name="example1"
                                  checked={shift == 2 ? true : false}
                                  value={2}
                                  onChange={() => setShift(2)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="night"
                                >
                                  Night
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  className="custom-control-input"
                                  id="flexible"
                                  name="example1"
                                  checked={shift == 3 ? true : false}
                                  value={3}
                                  onChange={() => setShift(3)}
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="flexible"
                                >
                                  Part Time
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                          <label>Availability To Join</label>
                          <TextInputModal
                            type="date"
                            onChange={(e) => {
                              setAvailableJoin(e.target.value);
                            }}
                            value={availableJoin}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Expected Salary</label>
                          <TextInputModal
                            placeholder="Enter your Expected Annual Salary in GBP"
                            onChange={(e) => {
                              console.log("tesing ", e.target.value);
                              setExpSalary(e.target.value);
                            }}
                            value={expSalary}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Preferred Location
                      </h5>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 mt-0 col-sm-12">
                        <div className="form-group">
                          <label>Country:</label>
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

                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>State:</label>
                          <DropDownModalComponent
                            onChange={(e) => {
                              console.log("eee", e.target.value);
                              CallGetCities(e.target.value);
                              setCState(e.target.value);
                            }}
                            value={cstate}
                            options={state.states}
                          />
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>City:</label>
                          <DropDownModalComponent
                            onChange={(e) => {
                              console.log("eee", e.target.value);
                              setCity(e.target.value);
                            }}
                            value={city}
                            options={state.cities}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="site-button"
                    data-dismiss="modal"
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      callUpdateDesiredCareer();
                    }}
                    type="button"
                    className="site-button"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Modal>

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
              <p className="m-b0">{cityName}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">State</h6>
              <p className="m-b0">{stateName}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">Country</h6>
              <p className="m-b0">{countryName}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
