import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddCandidateSkill, GetCandidateSkills } from "../../../redux/action";
import DropDownModalComponent from "./DropDownModalComponent";
import TextInputModal from "./TextInputModal";

export default function ItSkillsComponent({}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // callAddCandidateSkill();
    callGetCandidateSkill();
  }, []);

  const callGetCandidateSkill = async () => {
    await dispatch(GetCandidateSkills());
  };

  const callAddCandidateSkill = async () => {
    await dispatch(AddCandidateSkill());
  };

  const [show, setShow] = useState(false);
  const [ItSkills, setItSkills] = useState("");
  const [LastUsed, setLastUsed] = useState("");
  const [ExpDate, setExpDate] = useState("");
  const [IsTopSkill, setIsTopSkill] = useState(1);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* skills */}
      <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">Skills</h5>
          <Link
            to={"#"}
            data-toggle="modal"
            data-target="#itskills"
            onClick={() => handleShow()}
            className="site-button add-btn button-sm"
          >
            <i className="fa fa-pencil m-r5"></i> Edit
          </Link>
        </div>
        <p>
          Skills are the first thing recruiters notice in your profile. List
          down your expertise and identify Top 3 skills to highlight your
          profile.
        </p>
        <table>
          <thead>
            <tr>
              <th>Skill Type</th>
              <th>Skill Name</th>
              <th>Proficiency</th>
              <th>Expirience</th>
              <th>Select Top 3 Skills</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bootstrap</td>
              <td>3</td>
              <td>2018</td>
              <td>1 Year 5 Months</td>
              <td>1 Year 5 Months</td>
              <td>
                <Link
                  to={""}
                  className="m-l15 font-14"
                  data-toggle="modal"
                  data-target="#itskills"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td>Bootstrap</td>
              <td>4</td>
              <td>2013</td>
              <td>5 Year 5 Months</td>
              <td>5 Year 5 Months</td>
              <td>
                <Link
                  to={""}
                  className="m-l15 font-14"
                  data-toggle="modal"
                  data-target="#itskills"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td>html</td>
              <td>5</td>
              <td>2016</td>
              <td>2 Year 7 Months</td>
              <td>2 Year 7 Months</td>
              <td>
                <Link
                  to={""}
                  className="m-l15 font-14"
                  data-toggle="modal"
                  data-target="#itskills"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td>css</td>
              <td>3</td>
              <td>2018</td>
              <td>0 Year 5 Months</td>
              <td>0 Year 5 Months</td>
              <td>
                <Link
                  to={""}
                  className="m-l15 font-14"
                  data-toggle="modal"
                  data-target="#itskills"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
            <tr>
              <td>photoshop</td>
              <td>64bit</td>
              <td>2017</td>
              <td>1 Year 0 Months</td>
              <td>1 Year 0 Months</td>
              <td>
                <Link
                  to={""}
                  className="m-l15 font-14"
                  data-toggle="modal"
                  data-target="#itskills"
                >
                  <i className="fa fa-pencil"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className="modal fade modal-bx-info editor"
          id="itskills"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="ItskillsModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="ItskillsModalLongTitle">
                  Skills
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
                        <label>Skills</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Skills"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Last Used</label>
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
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Experience</label>
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
      >
        <div className="modal-dialog my-0" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EmploymentModalLongTitle">
                Skills
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
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Skill Name</label>
                      <TextInputModal
                        placeholder="Enter Skills"
                        onChange={(e) => setItSkills(e.target.value)}
                        value={ItSkills}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label>Skill Type</label>
                      <DropDownModalComponent
                        onChange={(e) => {
                          console.log("eee", e.target.value);
                          //   setLastUsed(e.target.value);
                        }}
                        options={[
                          { id: 1, name: "Business" },
                          { id: 2, name: "Technical" },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Proficiency</label>
                      <TextInputModal
                        placeholder="Rate your Skill from 1 to 10"
                        type="number"
                        min={1}
                        max={10}
                        onChange={(e) => setExpDate(e.target.value)}
                        value={ExpDate}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>Top Skill</label>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              className="custom-control-input"
                              id="employ_yes"
                              name="example1"
                              checked={IsTopSkill == 1 ? true : false}
                              value={1}
                              onChange={() => setIsTopSkill(1)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="employ_yes"
                            >
                              Yes
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
                              checked={IsTopSkill == 2 ? true : false}
                              value={2}
                              onChange={() => setIsTopSkill(2)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="employ_no"
                            >
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Expirience</label>
                      <TextInputModal
                        placeholder="Enter years of Expirience"
                        type="number"
                        min={1}
                        // max={10}
                        onChange={(e) => setExpDate(e.target.value)}
                        value={ExpDate}
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
