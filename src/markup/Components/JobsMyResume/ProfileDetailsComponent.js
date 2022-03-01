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

  const [LangArr, setLangArr] = useState([
    {
      language: "",
      level: "",
    },
  ]);

  console.log("LangArrLangArr", LangArr);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...LangArr];
    list.splice(index, 1);
    setLangArr(list);
  };

  // handle click event of the Add button
  const handleAddClickOption = (i) => {
    const list = [...LangArr];
    list.push("");

    setLangArr(list);
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
                <form>
                  <div className="row m-b30">
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
                          <label>Disability Description:</label>
                          <textarea className="form-control"></textarea>
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      {LangArr.map((item, i) => (
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="form-group">
                              <label>Languages:</label>
                              <TextInputModal placeholder={"Enter Language"} />
                            </div>
                          </div>

                          <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="form-group">
                              <label>Choose Level:</label>
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
                          <div className="col-lg-3 col-md-3 col-sm-12">
                            <span
                              onClick={() => {
                                handleAddClickOption(i);
                              }}
                              className="btn btn-primary mt-4"
                            >
                              <i className="fa fa-plus m-r5"></i> Add
                            </span>
                          </div>

                          {LangArr.length !== 1 && (
                            <div className="col-lg-3 col-md-3 col-sm-12">
                              <span
                                onClick={() => {
                                  handleRemoveClick(i);
                                }}
                                className="btn btn-danger mt-4"
                              >
                                <i className="fa fa-minus m-r5"></i> Remove
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
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
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Date of Birth</label>
                <span className="clearfix font-13">31 July 1998</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Gender</label>
                <span className="clearfix font-13">male</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Marital Status</label>
                <span className="clearfix font-13">Single / unmarried</span>
              </div>

              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-4">
                <label className="m-b0">Differently Abled</label>
                <span className="clearfix font-13">None</span>
              </div>
              <div className="clearfix m-b20 col-md-6 col-sm-12 col-lg-8">
                <label className="m-b0">Languages</label>
                <span className="clearfix font-13">
                  English (Fluent), Spanish (Native), French (Basic)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
