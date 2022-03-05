import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetCities, GetCountries, GetStates } from "../../../redux/action";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function DesiredCareerProfileComponent({}) {
  const DesiredCareerProfileFields = [
    {
      name: "Industry",
      desc: "IT-Software/Software Services",
    },
    {
      name: "Department",
      desc: "Design / Creative / User Experience",
    },
    {
      name: "Role",
      desc: "Web Designer",
    },
    {
      name: "Employment Type",
      desc: "Full Time",
    },
    {
      name: "Job Type",
      desc: "Permanent",
    },
    {
      name: "Shift",
      desc: "Morning",
    },
    {
      name: "Expected Salary",
      desc: "$ 2000",
    },
    {
      name: "Availability To Join",
      desc: "12 July 2022",
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const [loading, setLoading] = useState(true);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    //  to get languages
    CallGetDropDown();
  }, []);
  const CallGetDropDown = async () => {
    if (state.countries.length < 1) await dispatch(GetCountries());
    if (state.states.length < 1) await dispatch(GetStates());
    if (state.cities.length < 1) await dispatch(GetCities(4));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
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
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#desiredprofile"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
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
                          <Form.Control as="select">
                            <option>Accounting / Finance</option>
                            <option>
                              Banking / Financial Services / Broking
                            </option>
                            <option>Education / Teaching / Training</option>
                            <option>IT-Hardware &amp; Networking</option>
                            <option>Other</option>
                          </Form.Control>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Department</label>
                          <Form.Control as="select">
                            <option>Agent</option>
                            <option>Architecture / Interior Design</option>
                            <option>Beauty / Fitness / Spa Services</option>
                            <option>IT Hardware / Technical Support</option>
                            <option>IT Software - System Programming</option>
                            <option>Other</option>
                          </Form.Control>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Role</label>
                          <Form.Control as="select">
                            <option>Creative</option>
                            <option>Web Designer</option>
                            <option>Graphic Designer</option>
                            <option>National Creative Director</option>
                            <option>Fresher</option>
                            <option>Other</option>
                          </Form.Control>
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
                              console.log(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 ">
                        <div className="form-group">
                          <label>Expected Salary</label>
                          <TextInputModal
                            placeholder="Enter your Expected Salary"
                            onChange={() => {
                              console.log("test");
                            }}
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
                          {/* <DropdownSearch items={state.countries} /> */}
                          <DropDownModalComponent
                            onChange={(e) => {
                              console.log("eee", e.target.value);
                              CallGetCities(e.target.value);
                            }}
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
                              //   setLastUsed(e.target.value);
                            }}
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
                              //   setLastUsed(e.target.value);
                            }}
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
                  <button type="button" className="site-button">
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
              <p className="m-b0">London</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">State</h6>
              <p className="m-b0">England</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">Country</h6>
              <p className="m-b0">United Kingdom</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
