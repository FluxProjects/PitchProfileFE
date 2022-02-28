import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextAreaModalComponent from "./TextAreaModalComponent";

export default function ProfileSummary({}) {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Profile Summary */}
      <div id="profile_summary_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Profile Summary</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#profilesummary"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p className="m-b0">
          Your Profile Summary should mention the highlights of your career and
          education, what your professional interests are, and what kind of a
          career you are looking for. Write a meaningful summary of more than 50
          characters.
        </p>

        <div
          className="modal fade modal-bx-info editor"
          id="profilesummary"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ProfilesummaryModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ProfilesummaryModalLongTitle">
                  Profile Summary
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
                <p>
                  Your Profile Summary should mention the highlights of your
                  career and education, what your professional interests are,
                  and what kind of a career you are looking for. Write a
                  meaningful summary of more than 50 characters.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Details Of Project</label>
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
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <div className="modal-dialog my-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ResumeheadlineModalLongTitle">
                Profile Summary
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => handleClose()}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Your Profile Summary should mention the highlights of your
                career and education, what your professional interests are, and
                what kind of a career you are looking for. Write a meaningful
                summary of more than 50 characters.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      {/* <label>Details Of Project</label> */}

                      <TextAreaModalComponent
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        value={description}
                        placeholder="Type Description"
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
