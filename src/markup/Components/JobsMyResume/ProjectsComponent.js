import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectsComponent({}) {
  const [show, setShow] = useState(false);

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
          <h5 className="m-b15">Projects</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#projects"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <h6 className="font-14 m-b0">Job BoardEdit</h6>
        <p className="m-b0">w3itexpert (Offsite)</p>
        <p className="m-b0">Dec 2018 to Present (Full Time)</p>
        <p className="m-b0">Job Board Template</p>

        <div
          className="modal fade modal-bx-info editor"
          id="projects"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ProjectsModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ProjectsModalLongTitle">
                  Add Projects
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
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
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Project Title"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Tag this project with your Employment/Education
                        </label>
                        <select>
                          <option>Class 12th</option>
                          <option>Class 10th</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Client</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Client Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Project Status</label>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="inprogress"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="inprogress"
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
                                id="finished"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="finished"
                              >
                                Finished
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Started Working From</label>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <Form.Control as="select">
                              <option>2018</option>
                              <option>2017</option>
                              <option>2016</option>
                              <option>2015</option>
                              <option>2014</option>
                              <option>2013</option>
                              <option>2012</option>
                              <option>2011</option>
                              <option>2010</option>
                              <option>2009</option>
                              <option>2008</option>
                              <option>2007</option>
                              <option>2006</option>
                              <option>2005</option>
                              <option>2004</option>
                              <option>2003</option>
                              <option>2002</option>
                              <option>2001</option>
                            </Form.Control>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <Form.Control as="select">
                              <option>january</option>
                              <option>february</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                              <option>Jun</option>
                              <option>July</option>
                              <option>August</option>
                              <option>September</option>
                              <option>October</option>
                              <option>November</option>
                              <option>December</option>
                            </Form.Control>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Worked Till</label>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <Form.Control as="select">
                              <option>2018</option>
                              <option>2017</option>
                              <option>2016</option>
                              <option>2015</option>
                              <option>2014</option>
                              <option>2013</option>
                              <option>2012</option>
                              <option>2011</option>
                              <option>2010</option>
                              <option>2009</option>
                              <option>2008</option>
                              <option>2007</option>
                              <option>2006</option>
                              <option>2005</option>
                              <option>2004</option>
                              <option>2003</option>
                              <option>2002</option>
                              <option>2001</option>
                            </Form.Control>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <Form.Control as="select">
                              <option>january</option>
                              <option>february</option>
                              <option>March</option>
                              <option>April</option>
                              <option>May</option>
                              <option>Jun</option>
                              <option>July</option>
                              <option>August</option>
                              <option>September</option>
                              <option>October</option>
                              <option>November</option>
                              <option>December</option>
                            </Form.Control>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Details of Project</label>
                        <textarea
                          className="form-control"
                          placeholder="Type Description"
                        ></textarea>
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
                >
                  Cancel
                </button>
                <button type="button" className="site-button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
        id="employment"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="EmploymentModalLongTitle"
        aria-hidden="true"
      ></Modal>
    </>
  );
}
