import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UploadProfileVid } from "../../../redux/action";

export default function AttachVideo({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* Attach resume */}
      <div
        id="attach_resume_bx "
        style={{ backgroundColor: "transparent" }}
        className=" margin_bx_AttachVid m-b30"
      >
        <h5 className="m-b10 text-white">Attach Video</h5>

        <form
          className="attach-resume-Video "
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
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

                {/* <div className="form-group">
                  <div className="custom-file">
                    <p className="m-auto text-white align-self-center">
                      <i className="fa  fa-upload"></i>
                      Upload Video File
                    </p>
                    <input
                      type="file"
                      className="site-button form-control"
                      id="customFile"
                      onChange={(e) => {
                        dispatch(UploadProfileVid(e.target.files));
                      }}
                    />
                  </div>
                </div> */}
              </div>
            ) : (
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <div className="custom-file">
                    <p className="m-auto text-white align-self-center">
                      <i className="fa  fa-upload"></i>
                      Upload Video File
                    </p>
                    <input
                      type="file"
                      className="site-button form-control"
                      id="customFile"
                      onChange={(e) => {
                        dispatch(UploadProfileVid(e.target.value));
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
