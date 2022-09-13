import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import AppliedJobListCard from "../Components/Candidate/AppliedJobListCard";
import Profilesidebar from "../Element/Profilesidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  GetJobApplications,
  GetJobCandidateApplications,
  resetSortByFreshnessApplicationJobs,
  SortByFreshnessApplicationJobs,
} from "../../redux/action/jobApplications/jobApplicationsActions";
import BrowsejobgridCard from "./BrowsejobgridCard";
import AppliedJobGrid from "./AppliedJobGrid";
import { formatDate } from "../../utils/functions";
import { JobStatus } from "../../utils/DropDownUtils";
import Header from "../Layout/Header";
import moment from "moment";

export default function Jobsappliedjob() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CallGetJobCandidateApplications();
    // callGetJobApplications();
  }, []);

  const CallGetJobCandidateApplications = async () => {
    await dispatch(GetJobCandidateApplications());
    setLoading(false);
  };

  const callGetJobApplications = async () => {
    await dispatch(GetJobApplications());
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        {state.userDetails?.company_name ? <Header2 /> : <Header />}
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white p-t50 p-b20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 m-b30">
                    <Profilesidebar
                      image={`require("./../../images/team/pic1.jpg")`}
                      isActive="Applied Jobs"
                    />
                  </div>

                  <div className="col-xl-9 col-lg-8 m-b30 table-responsive job-bx browse-job clearfix">
                    <div className="job-bx-title  clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        {state?.JobApplications?.length} Jobs Applied
                      </h5>

                      <div className="float-right">
                        <Link
                          className="btn btn-primary mr-1"
                          onClick={async () => {
                            console.log("test");

                            await dispatch(SortByFreshnessApplicationJobs());
                          }}
                        >
                          Sort by Closing Date
                        </Link>

                        <Link
                          className="btn btn-primary"
                          onClick={async () => {
                            console.log("test");

                            await dispatch(
                              resetSortByFreshnessApplicationJobs()
                            );
                          }}
                        >
                          Reset
                        </Link>
                      </div>
                      {/* <div className="float-right">
                        <span className="select-title">ess</span>
                        <select className="custom-btn">
                          <option>Last 2 Months</option>
                          <option>Last Months</option>
                          <option>Last Weeks</option>
                          <option>Last 3 Days</option>
                        </select>
                      </div> */}
                    </div>
                    <table
                      width="100%"
                      className="table-job-bx table cv-manager company-manage-job"
                    >
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
                          <th>Closing Date</th>
                          <th>Applied Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.JobApplications?.map((item, index) => (
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
                                  pathname: `/job-detail`,
                                  search: `?id=${item?.job?.id}&company=${item?.job?.company_id}`,
                                  state: {
                                    company_id: item?.job?.company_id,
                                    post_id: item?.job?.id,
                                  },
                                }}
                              >
                                <span className=" text-capitalize">
                                  {item?.job?.job_title}
                                </span>{" "}
                                {item.department?.name && (
                                  <span
                                    className="text-uppercase"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "normal",
                                    }}
                                  >
                                    - {item?.job?.department?.name}
                                  </span>
                                )}
                              </Link>
                              <ul className="job-post-info">
                                <li>
                                  <i className="fa fa-map-marker"></i>{" "}
                                  {item?.job?.city?.name}{" "}
                                  {item.job?.state?.name},{" "}
                                  {item.job?.country?.name}
                                </li>
                              </ul>
                            </td>

                            <td className="expired pending">
                              {item?.job?.closing_date
                                ? formatDate(item?.job?.closing_date)
                                : ""}{" "}
                            </td>
                            <td className=" pending">
                              {item?.created_at
                                ? moment
                                    .utc(item?.created_at)
                                    .format("DD-MM-YYYY")
                                : ""}{" "}
                            </td>
                            <td className="font-weight-bold pending">
                              {JobStatus.findIndex(
                                (x) => x?.id == item?.status
                              ) == -1
                                ? ""
                                : JobStatus[
                                    JobStatus.findIndex(
                                      (x) => x?.id == item?.status
                                    )
                                  ].name}
                            </td>
                            {/* <td className="job-links">
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
                            </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* <ul className="post-job-bx browse-job-grid row">
                      {state?.JobApplications?.map((item, index) => (
                        <AppliedJobGrid item={item} index={index} />
                      ))}
                    </ul> */}
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
}
