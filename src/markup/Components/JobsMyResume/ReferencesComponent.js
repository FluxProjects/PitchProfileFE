import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateReference,
  GetCandidateReferences,
} from "../../../redux/action";
import ReferencesModalComp from "./Modals/ReferencesModalComp";

export default function ReferencesComponent({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

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
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#desiredprofile"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </div>
        {/* map */}
        {state.candidateEmployments.map((item, index) => (
          <>
            <h6 className="font-14 mt-5 m-b0">
              {/* Education Board Edit{" "} */}
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
            </h6>

            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Referer Name</label>
                  <span className="clearfix font-13">Ali</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Organization</label>
                  <span className="clearfix font-13">Shalimar Hospital</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Designation</label>
                  <span className="clearfix font-13">Doctorate/PHD</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">City</label>
                  <span className="clearfix font-13">Lahore</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">State</label>
                  <span className="clearfix font-13">Punjab</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Country</label>
                  <span className="clearfix font-13">Pakistan</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Phone</label>
                  <span className="clearfix font-13">+92 333 7654326</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Emal</label>
                  <span className="clearfix font-13">test@test,com</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <ReferencesModalComp
          data={state.candidateReferences[modalDataIndex]}
          id={
            state.candidateSocialProfiles[modalDataIndex]
              ? state.candidateSocialProfiles[modalDataIndex].id
              : ""
          }
          cityProp={
            state.candidateSocialProfiles[modalDataIndex]
              ? state.candidateSocialProfiles[modalDataIndex].city_id
              : ""
          }
          cstateProp={
            state.candidateSocialProfiles[modalDataIndex]
              ? state.candidateSocialProfiles[modalDataIndex].state_id
              : ""
          }
          countryProp={
            state.candidateSocialProfiles[modalDataIndex]
              ? state.candidateSocialProfiles[modalDataIndex].country_id
              : ""
          }
          isUpdate={updateData}
          index={modalDataIndex}
          handleClose={() => handleClose()}
        />
      </Modal>
    </>
  );
}
