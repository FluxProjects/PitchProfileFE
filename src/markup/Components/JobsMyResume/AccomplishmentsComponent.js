import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import TextInputModal from "./TextInputModal";

export default function AccomplishmentsComponent({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div id="Certification_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 clas2sName="m-b10 ">
        Certification{" "}
        <span className="float-right ml-2 ">
          <span
            onClick={() => {
              setShow(true);
            }}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </span>
        </span>
      </h5>

      <h6 className="font-14">
        Certification{" "}
        <span
          onClick={() => {
            setShow(true);
          }}
          className="site-button  float-right add-btn button-sm"
        >
          <i className="fa fa-pencil m-r5"></i> Edit
        </span>
      </h6>
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
          <h6 className="font-14 m-b0">Certification Name</h6>
          <p className="m-b0">doret</p>
        </div>

        <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
          <h6 className="font-14 m-b0">Certification Body</h6>
          <p className="m-b0">doret lorem opsim</p>
        </div>

        <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
          <h6 className="font-14 m-b0">Year on Obtained</h6>
          <p className="m-b0">12/01/2011</p>
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
              <h5 className="modal-title" id="CertificationModalLongTitle">
                Certification
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
                      <label>Certification Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Certification Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Certification Body</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Certification Body"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Year on Obtained</label>
                      <TextInputModal
                        type="date"
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
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
    </div>
  );
}
