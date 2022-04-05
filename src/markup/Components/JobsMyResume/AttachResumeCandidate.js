import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadCoverLetter } from "../../../redux/action";

export default function AttachResumeCandidate({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  let inputRef;

  return (
    <>
      {/* Attach resume */}
      <div id="attach_resume_bx" className="job-bx bg-white m-b30">
        <h5 className="m-b10">Attach Cover Letter</h5>
        <p>
          Cover Letter is the most important document recruiters look for.
          Recruiters generally do not look at profiles without Cover Letters.
        </p>
        <form className="attach-resume">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              {state.singleUserData.cover_letter ? (
                <>
                  <span
                    onClick={() => inputRef.click()}
                    className="site-button add-btn button-sm float-right"
                  >
                    <i className="fa fa-pencil m-r5"></i> Edit
                    <input
                      ref={(refParam) => (inputRef = refParam)}
                      type="file"
                      className="site-button form-control"
                      id="customFile"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        dispatch(UploadCoverLetter(e.target.files));
                      }}
                    />
                  </span>
                  <br />
                  <br />
                  <a download href={state.singleUserData.cover_letter}>
                    {state.singleUserData.cover_letter}
                  </a>
                </>
              ) : (
                <div className="form-group">
                  {!isView && (
                    <div className="custom-file">
                      <p className="m-auto align-self-center">
                        <i className="fa fa-upload"></i>
                        Upload Cover Letter File size is 3 MB
                      </p>
                      <input
                        type="file"
                        className="site-button form-control"
                        id="customFile"
                        onChange={(e) => {
                          dispatch(UploadCoverLetter(e.target.files));
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </form>
        {/* <p className="text-center">
          If you do not have a Cover Letter document, you may write your brief
          professional profile{" "}
          <Link to={""} className="site-button-link">
            here
          </Link>
          .
        </p> */}
      </div>
    </>
  );
}
