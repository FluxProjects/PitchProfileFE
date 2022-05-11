import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import Profilesidebar from "../Element/CompanyProfileSidebar";
import {
  GetMyJobPosts,
  DeleteSingle,
  UpdateJobVideo,
} from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import { employmentTypeDrop, jobTypeDrop } from "../../utils/DropDownUtils";
import { formatDate } from "../../utils/functions";
import { textSpanContainsTextSpan } from "typescript";

export default function Companymanage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const CallGetMyJobPosts = async () => {
    await dispatch(GetMyJobPosts());
  };

  const CallDeleteSingle = async (id, index) => {
    await dispatch(DeleteSingle(id, index));
  };

  useEffect(() => {
    CallGetMyJobPosts();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Header2 />

      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <div className="sticky-top">
                    <Profilesidebar
                      image={`require("./../../images/team/pic1.jpg")`}
                      isActive="Manage jobs"
                    />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx browse-job clearfix">
                    <div className="job-bx-title  clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Manage jobs
                      </h5>
                      <div className="float-right">
                        <span className="select-title">Sort by freshness</span>
                        <select className="custom-btn">
                          <option>All</option>
                          <option>None</option>
                          <option>Read</option>
                          <option>Unread</option>
                          <option>Starred</option>
                          <option>Unstarred</option>
                        </select>
                      </div>
                    </div>
                    <table className="table-job-bx cv-manager company-manage-job">
                      <thead>
                        <tr>
                          <th className="feature">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                id="check12"
                                className="custom-control-input selectAllCheckBox"
                                name="example1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="check12"
                              ></label>
                            </div>
                          </th>
                          <th>Job Title</th>
                          <th>Applications</th>
                          <th>Closing Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.MyPostedJobs?.map((item, index) => (
                          <tr>
                            <td className="feature">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="check1"
                                  name="example1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="check1"
                                ></label>
                              </div>
                            </td>
                            <td className="job-name">
                              <Link
                                to={{
                                  pathname: "/job-detail",
                                  state: {
                                    company_id: item?.company_id,
                                    post_id: item?.id,
                                    isNavigateFromManageJob: true,
                                  },
                                }}
                              >
                                <span className=" text-capitalize">
                                  {item.job_title}
                                </span>{" "}
                                {item.department?.name && (
                                  <span
                                    className="text-uppercase"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "normal",
                                    }}
                                  >
                                    - {item.department?.name}
                                  </span>
                                )}
                              </Link>
                              <ul className="job-post-info">
                                <li>
                                  <i className="fa fa-map-marker"></i>{" "}
                                  {item.city?.name} {item.state?.name},{" "}
                                  {item.country?.name}
                                </li>
                                <li>
                                  <i className="fa fa-clock-o"></i>{" "}
                                  {employmentTypeDrop.findIndex(
                                    (x) => x?.id == item.employment_type
                                  ) == -1
                                    ? ""
                                    : employmentTypeDrop[
                                        employmentTypeDrop.findIndex(
                                          (x) => x?.id == item.employment_type
                                        )
                                      ].name}
                                </li>
                                <li>
                                  <i className="fa fa-clock-o"></i>{" "}
                                  {jobTypeDrop.findIndex(
                                    (x) => x?.id == item.preferred_shift
                                  ) == -1
                                    ? ""
                                    : jobTypeDrop[
                                        jobTypeDrop.findIndex(
                                          (x) => x?.id == item.preferred_shift
                                        )
                                      ].name}
                                </li>
                                {/* <li>
                                  <i className="fa fa-filter"></i> Web Designer
                                </li> */}
                              </ul>
                            </td>
                            <td className="application text-primary">
                              (0) Applications
                            </td>
                            <td className="expired pending">
                              {item?.closing_date
                                ? formatDate(item?.closing_date)
                                : ""}{" "}
                            </td>
                            <td className="job-links">
                              <Link
                                to={{
                                  pathname: "company-edit-job",
                                  state: { item: item },
                                }}
                                onClick={() => {
                                  dispatch(UpdateJobVideo(item.video));
                                }}
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <span
                                className="cursorPointer"
                                onClick={() => {
                                  CallDeleteSingle(item.id, index);
                                }}
                              >
                                <i className="ti-trash cursorPointer"></i>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* <div className="pagination-bx m-t30 float-right">
                      <ul className="pagination">
                        <li className="previous">
                          <Link to={""}>
                            <i className="ti-arrow-left"></i> Prev
                          </Link>
                        </li>
                        <li className="active">
                          <Link to={""}>1</Link>
                        </li>
                        <li>
                          <Link to={""}>2</Link>
                        </li>
                        <li>
                          <Link to={""}>3</Link>
                        </li>
                        <li className="next">
                          <Link to={""}>
                            Next <i className="ti-arrow-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </div> */}

                    <Modal
                      show={show}
                      onHide={() => handleClose()}
                      className="modal fade modal-bx-info"
                      id="exampleModalLong"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLongTitle"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog my-0" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="logo-img">
                              <img
                                alt=""
                                src={require("./../../images/logo/icon2.png")}
                              />
                            </div>
                            <h5 className="modal-title">Company Name</h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => handleClose()}
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <ul>
                              <li>
                                <strong>Job Title :</strong>
                                <p> Web Developer – PHP, HTML, CSS </p>
                              </li>
                              <li>
                                <strong>Experience :</strong>
                                <p>5 Year 3 Months</p>
                              </li>
                              <li>
                                <strong>Deseription :</strong>
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry has been the
                                  industry's standard dummy text ever since.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                              onClick={() => handleClose()}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
