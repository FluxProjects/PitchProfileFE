import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextAreaModalComponent from "./TextAreaModalComponent";

export default function ResumeHeadlineComponent({
  label,
  onChange,
  required,
  type,
  placeholder,
}) {
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
      <div id="resume_headline_bx" className=" job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Resume Headline</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#resumeheadline"
            className="site-button add-btn button-sm"
            onClick={() => handleShow()}
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p className="m-b0">Job board currently living in USA</p>

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
          id="resumeheadline"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ResumeheadlineModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ResumeheadlineModalLongTitle">
                  Resume Headline
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
                  It is the first thing recruiters notice in your profile. Write
                  concisely what makes you unique and right person for the job
                  you are looking for.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <TextAreaModalComponent
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        value={description}
                        placeholder="Type Description"
                      />
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
