import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateProject,
  GetCandidateProjects,
} from "../../../redux/action";
import ProjectsModalComp from "./Modals/ProjectsModalComp";

export default function ProjectsComponent({}) {
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
    callGetCandidateProjects();
  }, []);

  const callGetCandidateProjects = async () => {
    await dispatch(GetCandidateProjects());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateProject(id, index));
  };

  return (
    <>
      {/* Projects */}
      <div id="projects_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Projects </h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#projects"
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
        {state.candidateProjects.map((item, index) => (
          <>
            <h6 className="font-14 mt-5 m-b0">
              {/* Project Board Edit{" "} */}
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
              <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
                <h6 className="font-14 m-b0">Project Title</h6>
                <p className="m-b0">{item.title}</p>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
                <h6 className="font-14 m-b0">Client</h6>
                <p className="m-b0">{item.client_name}</p>
              </div>

              <div className="col-md-12 col-lg-12 col-sm-12">
                <h6 className="font-14 m-b0">Description</h6>
                <p className="m-b0">{item.description}</p>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
                <h6 className="font-14 m-b0">Start Date</h6>
                <p className="m-b0">{item.start_date}</p>
              </div>

              <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
                <h6 className="font-14 m-b0">End Date</h6>
                <p className="m-b0">{item.end_date}</p>
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
        <ProjectsModalComp
          data={state.candidateProjects[modalDataIndex]}
          isUpdate={updateData}
          index={modalDataIndex}
          handleClose={() => handleClose()}
        />
      </Modal>
    </>
  );
}
