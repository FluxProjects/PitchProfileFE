import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function EmploymentComponent({}) {
  const [show, setShow] = useState(false);
  const [startedWorking, setStartedWorking] = useState("");
  const [WorkedTill, setWorkedTill] = useState("");
  const [description, setDescription] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [Category, setCategory] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Employment */}
      <div id="employment_bx" className="job-bx bg-white m-b30 ">
        <div className="d-flex">
          <h5 className=" mb-2">Employment </h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#projects"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </div>
        <h6 className="font-14 m-b0">
          Org name{" "}
          <span className="float-right ml-2 ">
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#employment"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
          </span>
        </h6>

        <div className="row">
          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Industry</h6>
            <p className="m-b0">W3itexperts</p>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Department</h6>
            <p className="m-b0">lorem</p>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Role</h6>
            <p className="m-b0">ipsum</p>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Your Designation</h6>
            <p className="m-b0">doret</p>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Started working from</h6>
            <p className="m-b0">doret</p>
          </div>

          <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
            <h6 className="font-14 m-b0">Stopped working</h6>
            <p className="m-b0">doret</p>
          </div>

          <div className="col-md-12 col-sm-12 col-lg-12 mb-2">
            <h6 className="font-14 m-b0">Describe your Job Profile</h6>
            <p className="m-b0">
              lorem ipsum doret lorem ipsum doretlorem ipsum doretlorem ipsum
              doretlorem ipsum doretlorem ipsum doretlorem ipsum doretlorem
              ipsum doretlorem ipsum doretlorem ipsum doretlorem ipsum
              doretlorem ipsum doretlorem ipsum doret
            </p>
          </div>
        </div>

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="EmploymentModalLongTitle">
                  Add Employment
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => handleClose()}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Organization</label>
                        <TextInputModal
                          placeholder="Enter Your Organization"
                          onChange={(e) => setOrganization(e.target.value)}
                          value={organization}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Industry</label>
                        <DropDownModalComponent
                          onChange={(e) => {
                            console.log("eee", e.target.value);
                            // setEducation(e.target.value);
                          }}
                          // value={Education}
                          options={[
                            { id: 1, name: "test 1" },
                            { id: 2, name: "test 2" },
                          ]}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Department</label>
                        <DropDownModalComponent
                          onChange={(e) => {
                            console.log("eee", e.target.value);
                            // setEducation(e.target.value);
                          }}
                          // value={Education}
                          options={[
                            { id: 1, name: "test 1" },
                            { id: 2, name: "test 2" },
                          ]}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Role</label>
                        <DropDownModalComponent
                          onChange={(e) => {
                            console.log("eee", e.target.value);
                            // setEducation(e.target.value);
                          }}
                          // value={Education}
                          options={[
                            { id: 1, name: "test 1" },
                            { id: 2, name: "test 2" },
                          ]}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Designation</label>
                        <TextInputModal
                          placeholder="Enter Your Designation"
                          onChange={(e) => setDesignation(e.target.value)}
                          value={designation}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Describe your Job Profile</label>
                        <TextAreaModalComponent
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          value={description}
                          placeholder="Type Description"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Started Working From</label>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <TextInputModal
                              label=""
                              type="date"
                              onChange={(e) => {
                                console.log("test", e.target.value);
                                setStartedWorking(e.target.value);
                              }}
                              value={startedWorking}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Worked Till</label>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <TextInputModal
                              label=""
                              type="date"
                              onChange={(e) => {
                                console.log("test", e.target.value);
                                setWorkedTill(e.target.value);
                              }}
                              value={WorkedTill}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Is this your current company?</label>
                        <div className="row">
                          <div className="col-lg-4 mb-2 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="employ_yes"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="employ_yes"
                              >
                                Yes
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-4 mb-2 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="employ_no"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="employ_no"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
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
                  onClick={() => handleClose()}
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
      </div>
    </>
  );
}
