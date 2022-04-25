import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { SaveJobVideo, UploadProfileVid } from "../../../redux/action";

export default function AttachVideoCompanyJob({ isView, setVideoFile }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [videoSelected, setvideoSelected] = useState(false);

  let inputRef;

  return (
    <>
      {/* Attach resume */}
      <div
        id="attach_resume_bx "
        style={{ backgroundColor: "transparent" }}
        className=" margin_bx_AttachVid m-b30 w-100"
      >
        {/* {state.SaveJobVideo == null && !isView && (
  <h5 className="m-b10 text-white">Attach Video</h5>
)} */}
        {state.SaveJobVideo != null && (
          <div className="d-flex m-b15">
            {/* <h5 className="m-b15">My Video</h5> */}

            {state.SaveJobVideo != null &&
              state.SaveJobVideo != "" &&
              state.SaveJobVideo != {} && (
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
            border: !isView ? "1px solid white" : 0,
            borderRadius: 10,
          }}
        >
          <div className="row">
            {console.log("state.SaveJobVideo", state.SaveJobVideo)}
            <div className="col-lg-6 col-md-6">
              {state.SaveJobVideo != null && state.SaveJobVideo != "" ? (
                <div className="col-lg-12 col-md-12">
                  <ReactPlayer
                    url={state.SaveJobVideo}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              ) : (
                <div className="form-group">
                  <div
                    style={{
                      padding: "40px",
                    }}
                    className="custom-file row AttachCompanyVid"
                  >
                    <div className="col-md-12 cl-sm-12 col-lg-12">
                      <h5 className="m-b10 z-10 text-center ">Attach Video</h5>
                      <p className="m-auto mt-3  align-self-center">
                        {/* <i className="fa  fa-upload"></i> */}
                        Attract the top talent by providing a Video Job
                        Description
                      </p>
                      <br />
                      <button
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
                        setVideoFile(e.target.files);

                        dispatch(SaveJobVideo(e.target.files));
                        setvideoSelected(true);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
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
            console.log("files", e.target.files);
            setVideoFile(e.target.files);

            dispatch(SaveJobVideo(e.target.files));
            setvideoSelected(true);
          }}
        />
      </div>
    </>
  );
}
