import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function ProjectsComponent({}) {
  const [show, setShow] = useState(false);
  const [ProjectsTitle, setProjectsTitle] = useState("");
  const [TagProject, setTagProject] = useState("");
  const [Client, setClient] = useState("");
  const [ProgressStatus, setProgressStatus] = useState(1);
  const [description, setDescription] = useState("");
  const [startedWorking, setStartedWorking] = useState("");
  const [WorkedTill, setWorkedTill] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
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
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-plus m-r5"></i> Add
          </Link>
        </div>
        <h6 className="font-14 m-b0">
          {/* Job BoardEdit{" "} */}
          <span className="float-right">
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#projects"
              onClick={() => handleShow()}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-pencil m-r5"></i> Edit
            </Link>
          </span>
        </h6>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
            <h6 className="font-14 m-b0">Project Title</h6>
            <p className="m-b0">w3itexpert (Offsite)</p>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
            <h6 className="font-14 m-b0">Client</h6>
            <p className="m-b0">w3itexpert (Offsite)</p>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
            <h6 className="font-14 m-b0">Status</h6>
            <p className="m-b0">In progress</p>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
            <h6 className="font-14 m-b0">Start Date</h6>
            <p className="m-b0">12/12/2021</p>
          </div>

          <div className="col-md-6 col-lg-4 col-sm-12 mb-2 mt-2">
            <h6 className="font-14 m-b0">End Date</h6>
            <p className="m-b0">1/2/2022</p>
          </div>

          <div className="col-md-12 col-lg-12 col-sm-12">
            <h6 className="font-14 m-b0">Description</h6>
            <p className="m-b0">lorem ipsum doret doretlorem dorey</p>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
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
                  <div className="col-lg-12 col-md-12">
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
              <button type="button" className="site-button">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
