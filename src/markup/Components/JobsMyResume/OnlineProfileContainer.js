import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";

export default function OnlineProfileContainer({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div id="social_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 clas2sName="m-b10 ">
        Social Profiles{" "}
        <span className="float-right ml-2 ">
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#projects"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </span>
      </h5>

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
        <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
          <h6 className="font-14 m-b0">Platform</h6>
          <p className="m-b0">facebook</p>
        </div>

        <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
          <h6 className="font-14 m-b0">URL</h6>
          <p className="m-b0">fb.com</p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <div className="modal-dialog my-0 mx-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AccomplishmentsModalLongTitle">
                Social Profiles
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
                      <label>Platform</label>
                      <DropDownModalComponent
                        onChange={(e) => {
                          console.log("eee", e.target.value);
                          // setTagProject(e.target.value);
                        }}
                        // value={TagProject}
                        options={[
                          { id: 1, name: "facebook" },
                          { id: 2, name: "linkedin" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>URL</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="www.google.com"
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
    </div>
  );
}
