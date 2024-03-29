import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateReference,
  GetCandidateReferences,
  GetCities,
  GetCountries,
  GetStates,
} from "../../../redux/action";
import ReferencesModalComp from "./Modals/ReferencesModalComp";

export default function ReferencesCandidate({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    callGetCandidateReferences();
  }, []);

  const callGetCandidateReferences = async () => {
    await dispatch(GetCandidateReferences());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateReference(id, index));
  };

  return (
    <>
      {/* References */}
      <div id="reference_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="">References</h5>
          {!isView && (
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#desiredprofile"
              onClick={() => {
                setUpdateData(false);
                handleShow();
              }}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-plus m-r5"></i> Add
            </Link>
          )}
        </div>
        {/* map */}
        {state.singleUserData.references.map((item, index) => (
          <>
            <h6 className="font-14 mt-3 m-b0">
              {/* Education Board Edit{" "} */}
              {!isView && (
                <span className="float-right">
                  <span
                    onClick={() => {
                      setUpdateData(true);
                      setModalDataIndex(index);
                      handleShow();
                    }}
                    className="site-button add-btn button-sm"
                  >
                    <i className="fa fa-pencil m-r5"></i> Edit
                  </span>
                  <span
                    onClick={() => {
                      console.log("tests", index);

                      deleteCandidateVal(item.id, index);
                    }}
                    className="m-l15 cursorPointer font-14"
                  >
                    <i className="fa fa-minus text-danger"></i>
                  </span>
                </span>
              )}
            </h6>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Referee Name</label>
                  <span className="clearfix font-13">{item.referer_name}</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Organisation</label>
                  <span className="clearfix font-13">{item.organization}</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Role</label>
                  <span className="clearfix font-13">{item.job_title}</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Phone</label>
                  <span className="clearfix font-13">{item.phone}</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Email</label>
                  <span className="clearfix font-13">{item.email}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
