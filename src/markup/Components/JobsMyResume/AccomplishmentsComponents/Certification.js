import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import TextInputModal from "../TextInputModal";

export default function Certification({}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="list-line">
        <div className="d-flex">
          <h6 className="font-14 m-b5">Certification</h6>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#certification"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p className="m-b0">Add details of Certification you have filed.</p>

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
                <h5 className="modal-title" id="CertificationModalLongTitle">
                  Certification
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
                        <label>Year Onlabel</label>
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
