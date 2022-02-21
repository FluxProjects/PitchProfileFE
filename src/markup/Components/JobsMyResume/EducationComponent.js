import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function EducationComponent({
  label,
  onChange,
  required,
  type,
  placeholder,
}) {
  const [show, setShow] = useState(false);
  const [Course, setCourse] = useState("");
  const [University, setUniversity] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Education */}
      <div id="education_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Education</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#education"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p>
          Mention your employment details including your current and previous
          company work experience
        </p>

        <div
          className="modal fade modal-bx-info editor"
          id="education"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="EducationModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="EducationModalLongTitle">
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
                        <label>Education</label>
                        <Form.Control as="select">
                          <option>Doctorate/PhD</option>
                          <option>Masters/Post-Graduation</option>
                          <option>Graduation/Diploma</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Course</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Select Course"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>University/Institute</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Select University/Institute"
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
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="clearfix m-b20">
              <label className="m-b0">London - 12th</label>
              <span className="clearfix font-13">2017</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">London - 10th</label>
              <span className="clearfix font-13">2015</span>
            </div>
          </div>
        </div>
        <Link to={""} className="clearfix">
          Add Doctorate/PhD
        </Link>
        <Link to={""} className="clearfix">
          Add Masters/Post-Graduation
        </Link>
        <Link to={""} className="clearfix">
          Add Graduation/Diploma
        </Link>
      </div>
      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
        id="employment"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="EmploymentModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog my-0" role="document">
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
                      <label>Education</label>
                      <DropDownModalComponent
                        onChange={(e) => {
                          console.log("eee", e.target.value);
                        }}
                        options={[
                          { id: 1, name: "test 1" },
                          { id: 2, name: "test 2" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Course</label>
                      <TextInputModal
                        placeholder="Select Course"
                        onChange={(e) => setCourse(e.target.value)}
                        value={Course}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>University/Institute</label>
                      <TextInputModal
                        placeholder="Select University/Institute"
                        onChange={(e) => setUniversity(e.target.value)}
                        value={University}
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
    </>
  );
}
