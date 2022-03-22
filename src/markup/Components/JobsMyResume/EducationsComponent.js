import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateEducation,
  GetCandidateEducations,
} from "../../../redux/action";
import { formatDate } from "../../../utils/functions";
import EducationsModalComp from "./Modals/EducationsModalComp";

export default function EducationsComponent({}) {
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
    callGetCandidateEducations();
  }, []);

  const callGetCandidateEducations = async () => {
    await dispatch(GetCandidateEducations());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateEducation(id, index));
  };

  return (
    <>
      {/* Education */}
      <div id="education_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Educations</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#educations"
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
        {state.candidateEducations.map((item, index) => (
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
                  <label className="m-b0">Institute Name</label>
                  <span className="clearfix font-13">{item.institute}</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Education Level</label>
                  <span className="clearfix font-13">
                    {state?.educationLevels.findIndex(
                      (x) => x?.id == item?.education_level_id
                    ) != -1
                      ? state?.educationLevels[
                          state?.educationLevels.findIndex(
                            (x) => x?.id == item?.education_level_id
                          )
                        ].name
                      : ""}
                  </span>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Major</label>
                  <span className="clearfix font-13">{item.course}</span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Start Date</label>
                  <span className="clearfix font-13">
                    {formatDate(item.start_date)}
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">End Date</label>
                  <span className="clearfix font-13">
                    {formatDate(item.end_date)}
                  </span>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="clearfix m-b20">
                  <label className="m-b0">Current Institute</label>
                  <span className="clearfix font-13">
                    {item.is_current == true ? "Yes" : "No"}
                  </span>
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
        <EducationsModalComp
          data={state.candidateEducations[modalDataIndex]}
          id={
            state.candidateEducations[modalDataIndex]
              ? state.candidateEducations[modalDataIndex].id
              : ""
          }
          educationLevelProp={
            state.candidateEducations[modalDataIndex]
              ? state.candidateEducations[modalDataIndex].education_level
              : ""
          }
          departmentProp={
            state.candidateEducations[modalDataIndex]
              ? state.candidateEducations[modalDataIndex].department_id
              : ""
          }
          isCurrentProp={
            state.candidateEducations[modalDataIndex]
              ? state.candidateEducations[modalDataIndex].is_current
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
