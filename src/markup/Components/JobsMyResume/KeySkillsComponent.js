import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextInputModal from "./TextInputModal";

export default function ResumeHeadlineComponent({}) {
  const [show, setShow] = useState(false);
  const [keySkills, setKeySkills] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Key skills */}
      <div id="key_skills_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Key Skills</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#keyskills"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <div className="job-time mr-auto">
          <Link to={""} className="mr-1">
            <span>Javascript</span>
          </Link>
          <Link to={""} className="mr-1">
            <span>CSS</span>
          </Link>
          <Link to={""} className="mr-1">
            <span>HTML</span>
          </Link>
          <Link to={""} className="mr-1">
            <span>Bootstrap</span>
          </Link>
          <Link to={""} className="mr-1">
            <span>Web Designing</span>
          </Link>
          <Link to={""} className="mr-1">
            <span>Photoshop</span>
          </Link>
        </div>

        <div
          className="modal fade modal-bx-info editor"
          id="keyskills"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="KeyskillsModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="KeyskillsModalLongTitle">
                  Key Skills
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
                  It is the first thing recruiters notice in your profile. Write
                  concisely what makes you unique and right person for the job
                  you are looking for.
                </p>
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control tags_input"
                          defaultValue="html,css,bootstrap,photoshop"
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
                Key Skills
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
                concisely what makes you unique and right person for the job you
                are looking for.
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Enter your top 3 skills?</label>

                      <TextInputModal
                        label=""
                        onChange={(e) => setKeySkills(e.target.value)}
                        value={keySkills}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Enter your skills?</label>

                      <TextInputModal
                        label=""
                        onChange={(e) => setKeySkills(e.target.value)}
                        value={keySkills}
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
