import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadProfileVid } from "../../../redux/action";

export default function AttachVideo({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  let inputRef;

  console.log("isView", isView);
  return (
    <>
      {/* Attach resume */}
      <div
        id="attach_resume_bx "
        style={{ backgroundColor: "transparent" }}
        className=" margin_bx_AttachVid m-b30 w-100"
      >
        {/* {state.userDetails.video == null && !isView && (
          <h5 className="m-b10 text-white">Attach Video</h5>
        )} */}
        {console.log(
          "state.userDetails.videostate.userDetails.video",
          state.userDetails.video
        )}
        {state.userDetails.video != null && (
          <div className="d-flex m-b15">
            {/* <h5 className="m-b15">My Video</h5> */}

            {!isView && (
              <span
                to={"#"}
                data-toggle="modal"
                data-target="#educations"
                onClick={() => {
                  inputRef.click();
                }}
                className="site-button add-btn button-sm"
              >
                <i className="fa fa-pencil m-r5"></i> Edit
              </span>
            )}
          </div>
        )}

        <form
          className="attach-resume-Video "
          style={{
            backgroundColor: "transparent",
            // border: !isView ? "1px solid white" : 0,
            borderRadius: 10,
          }}
        >
          <div className="row">
            {state.userDetails.video != null ? (
              <div className="col-lg-12 col-md-12">
                <div class="embed-responsive embed-responsive-16by9">
                  <video width="320" height="240" controls>
                    <source src={state.userDetails.video} type="video/mp4" />
                    <source src={state.userDetails.video} type="video/wmv" />
                    <source src={state.userDetails.video} type="video/mkv" />
                    <source src={state.userDetails.video} type="video/mov" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ) : (
              !isView && (
                <div className="form-group">
                  <div
                    style={{
                      padding: "40px",
                    }}
                    className="custom-file row AttachCompanyVid"
                  >
                    <div className="col-md-12 cl-sm-12 col-lg-12">
                      <h5 className="m-b10 z-10 text-center ">
                        Attach Video <span className="text-danger"> *</span>
                      </h5>
                      <p className="m-auto mt-3  align-self-center">
                        {/* <i className="fa  fa-upload"></i> */}
                        Pitch your skills, experience and achievements in a
                        short video. (Ideal video length should be 1-2 minutes)
                      </p>
                      <br />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          inputRef.click();
                        }}
                        className="align-self-center"
                        style={{ height: "45px", border: 0 }}
                      >
                        Choose file
                      </button>
                    </div>

                    <input
                      type="file"
                      className="site-button form-control"
                      // id="customFile"
                      onChange={(e) => {
                        console.log("files", e.target.files);
                        dispatch(UploadProfileVid(e.target.files));
                      }}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </form>
        <input
          type="file"
          style={{
            visibility: "hidden",
          }}
          id="customFile"
          ref={(refParam) => (inputRef = refParam)}
          onChange={(e) => {
            dispatch(UploadProfileVid(e.target.files));
          }}
        />
      </div>
    </>
  );
}
