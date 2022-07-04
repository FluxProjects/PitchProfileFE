import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "../Element/CompanyProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetJobApplications } from "../../redux/action/jobApplications/jobApplicationsActions";
import { JobStatus, SalaryRange } from "../../utils/DropDownUtils";
import { URL } from "../../utils/APIUtils";
import { formatDate } from "../../utils/functions";
import moment from "moment";

const postResume = [
  { title: "Tammy Dixon" },
  { title: "John Doe" },
  { title: "Ali Tufan" },
  { title: "David kamal" },
  { title: "Tammy Dixon" },
  { title: "John Doe" },
  { title: "David kamal" },
  { title: "Ali Tufan" },
];

export default function Companyresume(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("props.location.state.id", props.location?.state?.fromFilter);
    callGetJobApplications();
  }, []);

  const callGetJobApplications = async () => {
    if (!props.location?.state?.fromFilter) {
      await dispatch(GetJobApplications());
    }
    setLoading(false);
  };

  const downloadFile = async (fileURL) => {
    fetch(fileURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        // Create blob link to download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `FileName.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      });
  };

  if (loading) {
    return (
      <div className="page-wraper">
        <p>Loading... </p>
      </div>
    );
  } else {
    return (
      <>
        <Header2 />
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white p-t50 p-b20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 m-b30">
                    <Profilesidebar
                      image={`require("./../../images/team/pic1.jpg")`}
                      isActive="Resume"
                    />
                  </div>
                  <div className="col-xl-9 col-lg-8 m-b30">
                    <div className="job-bx clearfix">
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          {state.JobApplications.length} Applications
                        </h5>
                        <Link
                          to={"/company-manage-job"}
                          className="site-button right-arrow button-sm float-right"
                        >
                          Back
                        </Link>
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
                            <th>Candidate Name</th>
                            <th>Job Title</th>
                            <th>Applied Date</th>
                            <th>Attachments</th>
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
                                    pathname: "view-candidate-profile",
                                    search: `?id=${item?.candidate?.id}`,
                                    state: { id: item?.candidate?.id },
                                  }}
                                >
                                  <span className=" text-capitalize">
                                    {item?.candidate?.f_name}{" "}
                                    {item?.candidate?.l_name}
                                  </span>{" "}
                                </Link>
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
                                  <span
                                    style={{ fontWeight: "normal" }}
                                    className=" text-capitalize"
                                  >
                                    {item?.job?.job_title}
                                  </span>{" "}
                                </Link>
                              </td>

                              <td className=" pending">
                                {item?.job?.created_at
                                  ? moment(item?.job?.created_at).format(
                                      "DD-MM-YYYY"
                                    )
                                  : ""}{" "}
                              </td>

                              <td className="text-center job-links">
                                {item?.attachment_url != null ? (
                                  <a
                                    className="text-center"
                                    href={item?.attachment_url}
                                  >
                                    <i
                                      class="fa fa-download"
                                      aria-hidden="true"
                                    ></i>
                                  </a>
                                ) : (
                                  "None uploaded"
                                )}

                                {/* {item?.attachment_url} */}
                              </td>

                              <td className="expired pending">
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
                      {/* <div className="pagination-bx float-right">
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
}
