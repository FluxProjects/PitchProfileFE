import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ItSkillsComponent({
  label,
  onChange,
  required,
  type,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* It skills */}
      <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className="m-b15">IT Skills</h5>
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
          Mention your employment details including your current and previous
          company work experience
        </p>
        <table>
          <thead>
            <tr>
              <th>Skills</th>
              <th>Version</th>
              <th>Last Used</th>
              <th>Experience</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bootstrap</td>
              <td>3</td>
              <td>2018</td>
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
                  IT Skills
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
                        <label>IT Skills</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter IT Skills"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>Version</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Version"
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
    </>
  );
}
