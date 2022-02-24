import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function ProfileDetailsComponent({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Profile details */}
      <div id="personal_details_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b30">Personal Details</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#personaldetails"
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
          id="employment"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="EmploymentModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="PersonaldetailsModalLongTitle">
                  Personal Details
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
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
                        <label>Date of Birth</label>{" "}
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
                        <label>Permanent Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Permanent Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Hometown</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Hometown"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Pincode</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Pincode"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Passport Number</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Passport Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>What assistance do you need</label>
                        <textarea
                          className="form-control"
                          placeholder="Type Description"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Work Permit for Other Countries</label>
                        <Form.Control as="select">
                          <option>India</option>
                          <option>Australia</option>
                          <option>Bahrain</option>
                          <option>China</option>
                          <option>Dubai</option>
                          <option>France</option>
                          <option>Germany</option>
                          <option>Hong Kong</option>
                          <option>Kuwait</option>
                        </Form.Control>
                      </div>
                    </div>
                  </div>

                  <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      Contact Information
                    </h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Headline:</label>
                        <TextAreaModalComponent
                          onChange={(e) => {
                            // setDescription(e.target.value);
                          }}
                          //   value={description}
                          placeholder="Type Description"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Summary:</label>
                        <TextAreaModalComponent
                          onChange={(e) => {
                            // setDescription(e.target.value);
                          }}
                          //   value={description}
                          placeholder="Type Description"
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
                            { id: 1, name: "test 1" },
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

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Email Address:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="info@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Phone:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Full Address:</label>
                        <TextAreaModalComponent
                          onChange={(e) => {
                            // setDescription(e.target.value);
                          }}
                          //   value={description}
                          placeholder="Full address"
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
              <label className="m-b0">Date of Birth</label>
              <span className="clearfix font-13">31 July 1998</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Gender</label>
              <span className="clearfix font-13">male</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Marital Status</label>
              <span className="clearfix font-13">Single / unmarried</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Passport Number</label>
              <span className="clearfix font-13">+ 123 456 7890</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Differently Abled</label>
              <span className="clearfix font-13">None</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Languages</label>
              <span className="clearfix font-13">English</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="clearfix m-b20">
              <label className="m-b0">Permanent Address</label>
              <span className="clearfix font-13">Add Permanent Address</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Area Pin Code</label>
              <span className="clearfix font-13">302010</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Hometown</label>
              <span className="clearfix font-13">Delhi</span>
            </div>
            <div className="clearfix m-b20">
              <label className="m-b0">Work permit of other country</label>
              <span className="clearfix font-13">USA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
