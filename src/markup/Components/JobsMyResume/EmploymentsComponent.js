import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateEmployment,
  GetCandidateEmployments,
} from "../../../redux/action";
import EmploymentsModalComp from "./Modals/EmploymentsModalComp";

export default function EmploymentsComponent({}) {
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
    callGetCandidateEmployments();
  }, []);

  const callGetCandidateEmployments = async () => {
    await dispatch(GetCandidateEmployments());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateEmployment(id, index));
  };

  return (
    <>
      {/* Employment */}
      <div id="employment_bx" className="job-bx bg-white m-b30 ">
        <div className="d-flex">
          <h5 className=" mb-2">Employments </h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#employments"
            onClick={() => {
              setUpdateData(false);
              handleShow();
            }}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </div>

        {/* map */}
        {state.candidateEmployments.map((item, index) => (
          <>
            <h6 className="font-14 mt-5 m-b0">
              {/* Employment Board Edit{" "} */}
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
              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Organization</h6>
                <p className="m-b0">W3itexperts</p>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Industry</h6>
                <p className="m-b0">W3itexperts</p>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Department</h6>
                <p className="m-b0">lorem</p>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Designation</h6>
                <p className="m-b0">doret</p>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Start Date</h6>
                <p className="m-b0">doret</p>
              </div>

              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">End Date</h6>
                <p className="m-b0">doret</p>
              </div>

              <div className="col-md-12 col-sm-12 col-lg-12 mb-2">
                <h6 className="font-14 m-b0">Description</h6>
                <p className="m-b0">
                  lorem ipsum doret lorem ipsum doretlorem ipsum doretlorem
                  ipsum doretlorem ipsum doretlorem ipsum doretlorem ipsum
                  doretlorem ipsum doretlorem ipsum doretlorem ipsum doretlorem
                  ipsum doretlorem ipsum doretlorem ipsum doret
                </p>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                <h6 className="font-14 m-b0">Current Job</h6>
                <p className="m-b0">Yes</p>
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
        <EmploymentsModalComp
          data={state.candidateEmployments[modalDataIndex]}
          id={
            state.candidateEmployments[modalDataIndex]
              ? state.candidateEmployments[modalDataIndex].id
              : ""
          }
          industryProp={
            state.candidateEmployments[modalDataIndex]
              ? state.candidateEmployments[modalDataIndex].industry_id
              : ""
          }
          departmentProp={
            state.candidateEmployments[modalDataIndex]
              ? state.candidateEmployments[modalDataIndex].department_id
              : ""
          }
          isCurrentProp={
            state.candidateEmployments[modalDataIndex]
              ? state.candidateEmployments[modalDataIndex].is_current
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
