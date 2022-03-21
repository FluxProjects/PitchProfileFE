import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateCandidateSummary } from "../../../redux/action";
import TextAreaModalComponent from "./TextAreaModalComponent";

export default function ProfileSummary({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(state.userDetails.summary);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const callUpdateCandidateSummary = async () => {
    dispatch(UpdateCandidateSummary(description, handleClose()));
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
        <br />
        <p className="m-b0">{state.userDetails.summary}</p>
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  callUpdateCandidateSummary();
                }}
                type="button"
                className="site-button"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
