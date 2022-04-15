import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadProfileVid } from "../../../redux/action";

export default function AttachVideoCompanyJob({ isView, setVideoFile }) {
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

  return (
    <>
      {/* Attach resume */}
      <div
        id="attach_resume_bx "
        style={{ backgroundColor: "transparent" }}
        className=" margin_bx_AttachVid m-b30 w-100"
      >
        {state.userDetails.video != null && (
          <>
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
          </>
        )}

        <form
          className="attach-resume-Video "
          style={{
            backgroundColor: "transparent",
            border: !isView ? "1px solid white" : 0,
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
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="custom-file row">
                      <div className="col-md-6 cl-sm-12 col-lg-6">
                        {state.userDetails.video == null && !isView && (
                          <h5 className="m-b10 z-10 text-left ">
                            Attach Video
                          </h5>
                        )}
                        <p className="m-auto mt-3  align-self-center">
                          {/* <i className="fa  fa-upload"></i> */}
                          Attract the top talent by providing a Video Job
                          Description
                        </p>
                      </div>

                      <div className="bg-primary h-100 w-100 align-self-center d-flex justify-content-center col-md-6 cl-sm-12 col-lg-6">
                        <button
                          className="align-self-center"
                          style={{ height: "50px" }}
                        >
                          Choose file
                        </button>
                      </div>

                      <input
                        type="file"
                        className="site-button form-control"
                        // id="customFile"
                        onChange={(e) => {
                          setVideoFile(e.target.files);
                        }}
                      />
                    </div>
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
            setVideoFile(e.target.files);
          }}
        />
      </div>
    </>
  );
}