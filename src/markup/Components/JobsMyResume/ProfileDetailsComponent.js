import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function ProfileDetailsComponent({}) {
  const [show, setShow] = useState(false);
  const [Disability, setHasDisability] = useState(false);

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
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="job-bx-title clearfix">
                  <h5 className="font-weight-700 pull-left text-uppercase">
                    Basic Information
                  </h5>
                </div>
                <form>
                  <div className="row m-b30">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Your Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Alexander Weir"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Date of birth:</label>
                        <TextInputModal
                          type="date"
                          onChange={(e) => console.log(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Gender</label>
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="male"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="male"
                              >
                                Male
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="female"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="female"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Marital Status</label>
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="married"
                                name="married"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="married"
                              >
                                Married
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="single"
                                name="married"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="single"
                              >
                                Single
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Passport Number:</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your passport number"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Any disability?</label>
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="yes"
                                onChange={() => {
                                  setHasDisability(true);
                                }}
                                name="disability"
                              />

                              <label
                                className="custom-control-label"
                                htmlFor="yes"
                              >
                                Yes
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="no"
                                onChange={() => {
                                  setHasDisability(false);
                                }}
                                name="disability"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="no"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {Disability && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Disability description:</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                    )}

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Language:</label>
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
                  </div>

                  <div className="job-bx-title clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      Contact Information
                    </h5>
                  </div>
                  <div className="row">
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
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

                    <div className="col-lg-6 col-md-6 col-sm-12">
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

                    <div className="col-lg-6 col-md-6 col-sm-12">
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
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Hometown:</label>
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
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-dismiss="modal"
                  onClick={() => setShow(false)}
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
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/* <h5 className="m-b30">Personal Details</h5> */}
            <div className="row">
              <div className="clearfix col-md-6 col-sm-12 col-lg-6 m-b20">
                <label className="m-b0">Your Name:</label>
                <span className="clearfix font-13">John Doe</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Date of Birth</label>
                <span className="clearfix font-13">31 July 1998</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Gender</label>
                <span className="clearfix font-13">male</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Marital Status</label>
                <span className="clearfix font-13">Single / unmarried</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Passport Number</label>
                <span className="clearfix font-13">+ 123 456 7890</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Differently Abled</label>
                <span className="clearfix font-13">None</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Languages</label>
                <span className="clearfix font-13">English</span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="m-b30">Contact Details</h5>
            <div className="row">
              <div className="clearfix m-b20 col-md-12 col-sm-12 col-lg-12">
                <label className="m-b0">Headline</label>
                <span className="clearfix font-13">
                  Lorem ipsum tdjfshdia hidawy efsd ddw de{" "}
                </span>
              </div>
              <div className="clearfix m-b20 col-md-12 col-sm-12 col-lg-12">
                <label className="m-b0">Summary</label>
                <span className="clearfix font-13">
                  Lorem ipsum tdjfshdia hidawy efsd ddw de{" "}
                </span>
              </div>

              <div className="clearfix m-b20 col-md-12 col-sm-12 col-lg-12">
                <label className="m-b0">Full Address</label>
                <span className="clearfix font-13">Add Permanent Address</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Country</label>
                <span className="clearfix font-13">UK</span>
              </div>

              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">State</label>
                <span className="clearfix font-13">UK</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">City</label>
                <span className="clearfix font-13">UK</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Hometown</label>
                <span className="clearfix font-13">Delhi</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Email</label>
                <span className="clearfix font-13">John@gmail.com</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-6">
                <label className="m-b0">Phone</label>
                <span className="clearfix font-13">+92632984</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
