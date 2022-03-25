import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const [ProjectsTitle, setProjectsTitle] = useState(
    isUpdate == true ? data?.title : ""
  );
  const [Client, setClient] = useState(
    isUpdate == true ? data?.client_name : ""
  );
  //   const [ProgressStatus, setProgressStatus] = useState(data.);
  const [description, setDescription] = useState(
    isUpdate == true ? data?.description : ""
  );
  const [startedWorking, setStartedWorking] = useState(
    isUpdate == true ? data?.start_date : ""
  );
  const [WorkedTill, setWorkedTill] = useState(
    isUpdate == true ? data?.end_date : ""
  );

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
                    <label>Project Title</label>
                    <TextInputModal
                      placeholder="Enter Project Title"
                      onChange={(e) => setProjectsTitle(e.target.value)}
                      value={ProjectsTitle}
                    />
                  </div>
                </div>

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
