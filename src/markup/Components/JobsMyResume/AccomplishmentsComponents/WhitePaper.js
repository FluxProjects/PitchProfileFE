import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextInputModal from "../TextInputModal";

export default function WhitePaper({}) {
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
          <h6 className="font-14 m-b5">
            White Paper / Research Publication / Journal Entry
          </h6>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#journalentry"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p className="m-b0">Add links to your Online publications.</p>

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="JournalentryModalLongTitle">
                  White Paper / Research Publication / Journal Entry
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
                        <label>Title</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Title"
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
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Published On</label>
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
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          placeholder="Type Description"
                        ></textarea>
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
