import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          </div>
        </form>
      </div>
    </>
  );
}
