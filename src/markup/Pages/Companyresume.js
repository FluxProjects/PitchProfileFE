import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import Profilesidebar from "../Element/CompanyProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetJobApplications } from "../../redux/action/jobApplications/jobApplicationsActions";
import { SalaryRange } from "../../utils/DropDownUtils";
import { URL } from "../../utils/APIUtils";

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

export default function Companyresume() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callGetJobApplications();
  }, []);

  const callGetJobApplications = async () => {
    await dispatch(GetJobApplications());
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
                      <ul className="post-job-bx browse-candidate-grid post-resume row">
                        {state.JobApplications?.map((item, index) => (
                          <li className="col-lg-6 col-md-6" key={index}>
                            <Link
                              to={{
                                pathname: "view-candidate-profile",
                                state: { id: item.candidate_id },
                              }}
                            >
                              <div className="post-bx">
                                <div className="d-flex m-b20">
                                  <div className="job-post-info">
                                    <h5 className="m-b0">
                                      <Link
                                        to={{
                                          pathname: "view-candidate-profile",
                                          state: { id: item.candidate_id },
                                        }}
                                      >
                                        {item?.candidate?.f_name}{" "}
                                        {item?.candidate?.l_name}
                                      </Link>
                                    </h5>
                                    <p className="m-b5 font-13">
                                      {item?.candidate?.headline}
                                      <Link to={""} className="text-primary">
                                        {" "}
                                      </Link>
                                      {/* at Atract Solutions */}
                                    </p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        {item?.candidate?.city?.name}
                                        {item?.candidate?.city && ", "}{" "}
                                        {item?.candidate?.state?.name}
                                        {item?.candidate?.state && ", "}
                                        {item?.candidate?.country?.sortname}
                                      </li>
                                      <li>
                                        <i className="fa fa-money"></i> ${" "}
                                        {SalaryRange.findIndex(
                                          (x) =>
                                            x?.id == item?.job?.salary_range
                                        ) == -1
                                          ? ""
                                          : SalaryRange[
                                              SalaryRange.findIndex(
                                                (x) =>
                                                  x?.id ==
                                                  item?.job?.salary_range
                                              )
                                            ].name}
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="job-time m-t15 m-b10">
                                  {item?.candidate?.candidate_skills.map(
                                    (skill) => (
                                      <Link to={""} className="mr-1">
                                        <span>
                                          {" "}
                                          {
                                            state.skills[
                                              state.skills.findIndex(
                                                (x) => x.id == skill.skill_id
                                              )
                                            ].name
                                          }
                                        </span>
                                      </Link>
                                    )
                                  )}
                                </div>
                                {item?.candidate?.cover_letter_url && (
                                  <Link
                                    onClick={() => {
                                      downloadFile(
                                        item?.candidate?.cover_letter_url
                                      );
                                    }}
                                    className="job-links"
                                  >
                                    <i className="fa fa-download "></i>
                                  </Link>
                                )}
                                {/* <Link
                              to={"/files/pdf-sample.pdf"}
                              target="blank"
                              className="job-links"
                            >
                              <i className="fa fa-play "></i>
                            </Link> */}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
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
