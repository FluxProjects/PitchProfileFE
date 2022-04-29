import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CompanyFindbox from "../Element/CompanyFindbox";
import { useSelector, useDispatch } from "react-redux";
import { GetAllJobPosts } from "../../redux/action";
import {
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
  shiftDrop,
} from "../../utils/DropDownUtils";
import { daysSinceGivenDate } from "../../utils/functions";
import Header2 from "../Layout/Header2";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Browsejobgrid() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const CallGetMyJobPosts = async () => {
    await dispatch(GetAllJobPosts());
  };

  useEffect(() => {
    CallGetMyJobPosts();
  }, []);
  return (
    <div className="page-wraper">
      {state.userDetails?.company_name ? <Header2 /> : <Header />}
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Browse Jobs</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>All Jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <CompanyFindbox />

          <div className="section-full bg-white browse-job p-b50">
            <div className="container">
              <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">
                  {state.Alljobs.length} Jobs Found
                </h5>
                <div className="float-right"></div>
              </div>
              <ul className="post-job-bx browse-job-grid row">
                {state.Alljobs.map((item, index) => (
                  <li className="col-lg-4 col-md-6" key={index}>
                    <Link
                      to={{
                        pathname: "/job-detail",
                        state: {
                          company_id: item?.company_id,
                          post_id: item?.id,
                        },
                      }}
                    >
                      <div className="post-bx">
                        <div className="mb-4">
                          {item.video ? (
                            <video
                              className="card-img-top"
                              width="auto"
                              height="165"
                              controls
                            >
                              <source src={item.video} type="video/mp4" />
                              <source src={item.video} type="video/wmv" />
                              <source src={item.video} type="video/mkv" />
                              <source src={item.video} type="video/mov" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <div style={{ width: "auto", height: "165px" }}>
                              <img
                                className="card-img-top"
                                src={
                                  item?.company?.pic != null
                                    ? item?.company?.pic
                                    : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                }
                                style={{ width: "100%", height: "auto" }}
                                alt="Card image cap"
                              />
                            </div>
                          )}
                        </div>
                        <div className="d-flex m-b30">
                          <div className="job-post-info ">
                            <h5
                              className="text-uppercase text-decoration-none"
                              style={{
                                textDecoration: "none !important",
                              }}
                            >
                              <Link
                                to={{
                                  pathname: "/job-detail",
                                  state: {
                                    company_id: item?.company_id,
                                    post_id: item?.id,
                                  },
                                }}
                              >
                                {item.job_title}{" "}
                                {item.seniority_level != null && "- "}
                                <span
                                  className="text-uppercase"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "normal",
                                  }}
                                >
                                  {SeniorityLevel.findIndex(
                                    (x) => x?.id == item.seniority_level
                                  ) == -1
                                    ? ""
                                    : SeniorityLevel[
                                        SeniorityLevel.findIndex(
                                          (x) => x?.id == item.seniority_level
                                        )
                                      ].name}
                                  {/* {item.department?.name} */}
                                </span>
                              </Link>

                              <br />
                              <Link
                                to={{
                                  pathname: "/company-detail",
                                  state: {
                                    company_id: item?.company_id,
                                  },
                                }}
                              >
                                <span
                                  className="text-uppercase mb-0 cardGridFont"
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "normal",
                                    color: "#2e55fa",
                                    textDecoration: "none",
                                  }}
                                >
                                  {item.company.company_name}
                                  {/* {item.department?.name} */}
                                </span>
                              </Link>
                            </h5>
                            <ul
                              style={{
                                marginTop: "-12px",
                                textDecoration: "none",
                              }}
                            >
                              <li className="mb-0 cardGridFont">
                                <i className="fa fa-map-marker"></i>
                                {item.city?.name}
                                {item.city && ", "} {item.state?.name}
                                {item.state && ", "}
                                {item.country?.sortname}
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div
                          className="mb-2 d-flex "
                          style={{ marginTop: "-30px" }}
                        >
                          {/* <div className="text-primary">
                            <i className="fa fa-bookmark-o"></i>{" "}
                            {employmentTypeDrop.findIndex(
                              (x) => x?.id == item.employment_type
                            ) == -1
                              ? ""
                              : employmentTypeDrop[
                                  employmentTypeDrop.findIndex(
                                    (x) => x?.id == item.employment_type
                                  )
                                ].name}
                          </div> */}
                          <div className="mb-0 cardGridFont text-primary">
                            <i className="fa fa-clock-o"></i>{" "}
                            {jobTypeDrop.findIndex(
                              (x) => x?.id == item.job_type
                            ) == -1
                              ? ""
                              : jobTypeDrop[
                                  jobTypeDrop.findIndex(
                                    (x) => x?.id == item.job_type
                                  )
                                ].name}
                          </div>
                        </div>

                        <div className="d-flex">
                          <div className="mb-0  cardGridFont job-time mr-auto">
                            <Link to={""}>
                              <span>
                                {daysSinceGivenDate(new Date(item.created_at))}{" "}
                                ago
                              </span>
                            </Link>
                          </div>
                          <div className="mb-0 cardGridFont salary-bx">
                            <span>
                              {SalaryRange.findIndex(
                                (x) => x?.id == item?.salary_range
                              ) == -1
                                ? ""
                                : SalaryRange[
                                    SalaryRange.findIndex(
                                      (x) => x?.id == item?.salary_range
                                    )
                                  ].name}
                            </span>
                          </div>
                        </div>
                        <label className="like-btn">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pagination-bx m-t30">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
