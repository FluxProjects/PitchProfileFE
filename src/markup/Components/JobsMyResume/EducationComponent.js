import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function EducationComponent({}) {
  const [show, setShow] = useState(false);
  const [Course, setCourse] = useState("");
  const [University, setUniversity] = useState("");
  const [Education, setEducation] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <div className="modal-dialog mx-0 my-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EmploymentModalLongTitle">
                Education
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
                      <label>Your Institute Name</label>
                      <TextInputModal
                        placeholder="Enter Your Institute Name"
                        // onChange={(e) => setOrganization(e.target.value)}
                        // value={organization}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Education Level</label>
                      <DropDownModalComponent
                        onChange={(e) => {
                          console.log("eee", e.target.value);
                          setEducation(e.target.value);
                        }}
                        value={Education}
                        options={[
                          { id: 1, name: "Doctorate/PhD" },
                          { id: 2, name: "Masters/Post-Graduation" },
                          { id: 3, name: "Graduation/Diploma" },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label>Course</label>
                      <TextInputModal placeholder="Enter Course" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label>Start Date</label>
                      <TextInputModal
                        // placeholder="Select University/Institute Name"
                        type="date"
                        onChange={(e) => setStartDate(e.target.value)}
                        value={StartDate}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="form-group">
                      <label>End Date</label>
                      <TextInputModal
                        // placeholder="Select University/Institute Name"
                        type="date"
                        onChange={(e) => setEndDate(e.target.value)}
                        value={EndDate}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Is this your current Institute Name?</label>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
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
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
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
      {/* Education */}
      <div id="education_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Education</h5>

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
          {/* Org name{" "} */}
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">Institute Name</label>
              <span className="clearfix font-13">Uni</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">Education Level</label>
              <span className="clearfix font-13">Doctorate/PHD</span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">Course</label>
              <span className="clearfix font-13">Doctorate/PHD</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">Start Date</label>
              <span className="clearfix font-13">12/2/2020</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">End Date</label>
              <span className="clearfix font-13">12/2/2022</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">Current Institute</label>
              <span className="clearfix font-13">Yes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
