import React, { useDebugValue, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddCandidateProject,
  UpdateCandidateProject,
} from "../../../../redux/action";
import TextAreaModalComponent from "../TextAreaModalComponent";
import TextInputModal from "../TextInputModal";

export default function ProjectsModalComp({
  data,
  isUpdate,
  index,
  handleClose,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ProjectsTitle, setProjectsTitle] = useState(data.title);
  const [TagProject, setTagProject] = useState(data);
  const [Client, setClient] = useState(data.client_name);
  //   const [ProgressStatus, setProgressStatus] = useState(data.);
  const [description, setDescription] = useState(data.description);
  const [startedWorking, setStartedWorking] = useState(data.start_date);
  const [WorkedTill, setWorkedTill] = useState(data.end_date);

  const callAction = async () => {
    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateProject(
          data.id,
          ProjectsTitle,
          Client,
          description,
          startedWorking,
          WorkedTill,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateProject(
          ProjectsTitle,
          Client,
          description,
          startedWorking,
          WorkedTill,
          index,
          handleClose()
        )
      );
    }
  };

  return (
    <>
      <div className="modal-dialog my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="EmploymentModalLongTitle">
              Add Projects
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={() => handleClose()}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Projects Title</label>
                    <TextInputModal
                      placeholder="Enter Projects Title"
                      onChange={(e) => setProjectsTitle(e.target.value)}
                      value={ProjectsTitle}
                    />
                  </div>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        Tag this project with your Employment/Education
                      </label>
                      <DropDownModalComponent
                        onChange={(e) => {
                          console.log("eee", e.target.value);
                          setTagProject(e.target.value);
                        }}
                        value={TagProject}
                        options={[
                          { id: 1, name: "test 1" },
                          { id: 2, name: "test 2" },
                        ]}
                      />
                    </div>
                  </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Client</label>
                    <TextInputModal
                      placeholder="Enter Client Name"
                      onChange={(e) => setClient(e.target.value)}
                      value={Client}
                    />
                  </div>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Status</label>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="employ_yes"
                            name="example1"
                            checked={ProgressStatus == 1 ? true : false}
                            value={1}
                            onChange={() => setProgressStatus(1)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="employ_yes"
                          >
                            In Progress
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="employ_no"
                            name="example1"
                            checked={ProgressStatus == 2 ? true : false}
                            value={2}
                            onChange={() => setProgressStatus(2)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="employ_no"
                          >
                            Finished
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextInputModal
                          label=""
                          type="date"
                          onChange={(e) => {
                            console.log("test", e.target.value);
                            setStartedWorking(e.target.value);
                          }}
                          value={startedWorking}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <TextInputModal
                          label=""
                          type="date"
                          onChange={(e) => {
                            console.log("test", e.target.value);
                            setWorkedTill(e.target.value);
                          }}
                          value={WorkedTill}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <TextAreaModalComponent
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={description}
                      placeholder="Type Description"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="site-button"
              data-dismiss="modal"
              onClick={() => handleClose()}
            >
              Cancel
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                callAction();
              }}
              type="button"
              className="site-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
