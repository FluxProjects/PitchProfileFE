import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function DesiredCareerProfileComponent({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

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
                    <div className="col-lg-12 col-md-12">
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
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Functional Area / Department</label>
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
                    <div className="col-lg-12 col-md-12">
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
                    <div className="col-lg-12 col-md-12">
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
                    <div className="col-lg-12 col-md-12">
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
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Preferred Shift</label>
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
                        <label>Availability to Join</label>
                        <TextInputModal
                          type="date"
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
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

                    <div className="col-lg-4 col-md-4 col-sm-12">
                      <div className="form-group">
                        <label>Country:</label>
                        <DropDownModalComponent
                          onChange={(e) => {
                            console.log("eee", e.target.value);
                            //   setLastUsed(e.target.value);
                          }}
                          options={[
                            { id: 1, name: "United Kingdom" },
                            { id: 2, name: "test 2" },
                          ]}
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
                          options={[
                            { id: 1, name: "test 1" },
                            { id: 2, name: "test 2" },
                          ]}
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
                          options={[
                            { id: 1, name: "test 1" },
                            { id: 2, name: "test 2" },
                          ]}
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
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="clearfix m-b20">
              <label className="m-b0">Industry</label>
              <span className="clearfix font-13">
                IT-Software/Software Services
              </span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Role</label>
              <span className="clearfix font-13">Web Designer</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Employment Type</label>
              <span className="clearfix font-13">Full Time</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Availability to Join</label>
              <span className="clearfix font-13">12 july</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Country</label>
              <span className="clearfix font-13">Add Country</span>
            </div>

            <div className="clearfix m-b20">
              <label className="m-b0">State</label>
              <span className="clearfix font-13">Add State</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="clearfix m-b20">
              <label className="m-b0">Functional Area</label>
              <span className="clearfix font-13">
                Design / Creative / User Experience
              </span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Job Type</label>
              <span className="clearfix font-13">permanent</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Preferred Shift</label>
              <span className="clearfix font-13">Add Preferred Shift</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Expected Salary</label>
              <span className="clearfix font-13">1 Lakhs</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">City</label>
              <span className="clearfix font-13">Add City</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
