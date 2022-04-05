import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateCandidateSummary } from "../../../redux/action";
import TextAreaModalComponent from "./TextAreaModalComponent";

export default function ProfileCandidateSummary({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(state.singleUserData.summary);
  const [fieldAlert, setFieldAlert] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const callUpdateCandidateSummary = async () => {
    if (description == null || description == "") {
      setFieldAlert(true);
      return;
    }
    dispatch(UpdateCandidateSummary(description, handleClose()));
  };

  return (
    <>
      {/* Profile Summary */}
      <div id="profile_summary_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="">Profile Summary</h5>
          {!isView && (
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#profilesummary"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
          )}
        </div>

        <p className="m-b0 ">{state.singleUserData.summary}</p>
      </div>
    </>
  );
}
