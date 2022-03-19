import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadCoverLetter } from "../../../redux/action";

export default function AttachResumeComponent({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

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
              {state.userDetails.cover_letter && (
                <a download href={state.userDetails.cover_letter}>
                  Download link
                </a>
              )}
              <div className="form-group">
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
              </div>
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
