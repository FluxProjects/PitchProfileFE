import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function ResumeHeadlineComponent({}) {
  const RefFields = [
    {
      name: "Referer Name",
      desc: "Max Jones",
    },
    {
      name: "Organization",
      desc: "Design / Creative / User Experience",
    },
    {
      name: "Job Title",
      desc: "Web Designer",
    },
    {
      name: "City",
      desc: "city",
    },
    {
      name: "State",
      desc: "state",
    },
    {
      name: "Country",
      desc: "country",
    },
    {
      name: "Phone",
      desc: "+3456787654",
    },
    {
      name: "Email",
      desc: "test@test.com",
    },
  ];
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
          <h5 className="">References</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#desiredprofile"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </div>

        <h6 className="font-14 m-b0">
          {/* Job BoardEdit{" "} */}
          <span className="float-right">
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#projects"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
          </span>
        </h6>

        <div className="row">
          {RefFields.map((item) => (
            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">{item.name}</h6>
              <p className="m-b0">{item.desc}</p>
            </div>
          ))}
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
                        <label>Referer Name</label>
                        <TextInputModal placeholder={"Enter Referer Name"} />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 ">
                      <div className="form-group">
                        <label>Organization</label>
                        <TextInputModal
                          placeholder={"Enter Organization Name"}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 ">
                      <div className="form-group">
                        <label>Job Title</label>
                        <TextInputModal placeholder={"Enter Job Title"} />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mt-0 col-sm-12">
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

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <TextInputModal placeholder={"Enter Phone No."} />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                      <div className="form-group">
                        <label>Email</label>
                        <TextInputModal placeholder={"Enter Email"} />
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
      </div>
    </>
  );
}
