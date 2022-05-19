import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import UploadDataComponent from "../Components/UIComponents/UploadDataComponent";
import { useDispatch, useSelector } from "react-redux";
import Header2 from "../Layout/Header2";
import { daysSinceGivenDate, formatDate } from "../../utils/functions";
import { useHistory } from "react-router-dom";
import {
  CompanySizeLevel,
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import {
  GetFeaturedJobs,
  GetSingleCompany,
  GetSingleJob,
} from "../../redux/action";
import CompanyDetailHeader from "../Components/JobsMyResume/companyDetailHeader";
import ReactPlayer from "react-player";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Jobdetail(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    callGetSingleCompany();
  }, []);

  const callGetSingleCompany = async () => {
    await dispatch(GetSingleCompany(props.location.state.company_id));
    await dispatch(GetFeaturedJobs(props.location.state.company_id));
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="page-wraper">
        {state.userDetails.company_name ? <Header2 /> : <Header />}

        <div className="page-content bg-white">
          <div
            className="overlay-black-dark profile-edit  responsiveHeader "
            style={{
              backgroundImage: "url(" + bnr + ")",
              paddingTop: "21px",
            }}
          >
            <div className="container">
              <div className="row">
                <CompanyDetailHeader />
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="section-full content-inner-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="sticky-top">
                      <div className="row">
                        <div className="col-lg-12 col-md-6">
                          {state.PreviewSingleCompany != null &&
                            state.PreviewSingleCompany?.video && (
                              <div className="m-b30">
                                <ReactPlayer
                                  url={
                                    state.PreviewSingleCompany?.video
                                      ? state.PreviewSingleCompany?.video
                                      : state.SavePreviewSingleCompany?.video
                                  }
                                  width="100%"
                                  height="100%"
                                  controls={true}
                                />
                              </div>
                            )}
                        </div>
                        <div className="col-lg-12 col-md-6">
                          {props?.location?.state?.showBack && (
                            <span className="mt-2">
                              <Link
                                onClick={() => {
                                  router.goBack();
                                }}
                                style={{
                                  marginTop: 10,
                                  marginRight: 19,
                                }}
                                // to={"/company-manage-job"}
                                className="site-button right-arrow button-sm float-right"
                              >
                                Back
                              </Link>
                            </span>
                          )}
                          <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                            <strong className="font-weight-700 text-black m-b15">
                              Contact Details
                            </strong>
                            <ul>
                              <li>
                                <i className="fa fa-map-marker"></i>
                                <p className="mt-1 text-black">
                                  {/* Phone */}
                                  {state.PreviewSingleCompany?.address}{" "}
                                  {state.PreviewSingleCompany?.city?.name},{" "}
                                  {state.PreviewSingleCompany?.state?.name},{" "}
                                  {state.PreviewSingleCompany?.country?.name}
                                </p>{" "}
                              </li>
                              <li>
                                <i className="fa fa-phone"></i>
                                <p className="mt-1 text-black">
                                  {/* Phone */}
                                  {state.PreviewSingleCompany?.phone}
                                </p>{" "}
                              </li>
                              <li>
                                <i className="fa fa-envelope"></i>
                                <p className="mt-1 text-black">
                                  {/* Phone */}
                                  {state.PreviewSingleCompany?.email}
                                </p>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="job-info-box">
                      <h4 className="text-black font-weight-700 p-t10 m-b15">
                        <Link
                          to={""}
                          className="text-secondry text-capitalize m-r30"
                        >
                          About Company
                          <span
                            className="text-uppercase"
                            style={{
                              fontSize: "12px",
                              fontWeight: "normal",
                            }}
                          ></span>
                        </Link>
                      </h4>

                      {/* <h5 className="mt-5 font-weight-600">Job Description:</h5> */}
                      <div className="bg-gray-dark mb-4 mt-0"></div>
                      <p>{state.PreviewSingleCompany?.description}</p>

                      <h5 className="mt-5 font-weight-600">Company Size:</h5>
                      <div className="bg-gray-dark mb-4 mt-0"></div>
                      <p>
                        {CompanySizeLevel.findIndex(
                          (x) =>
                            x?.id == state.PreviewSingleCompany?.company_size
                        ) == -1
                          ? ""
                          : CompanySizeLevel[
                              CompanySizeLevel.findIndex(
                                (x) =>
                                  x?.id ==
                                  state.PreviewSingleCompany?.company_size
                              )
                            ].name}
                      </p>

                      <h5 className="mt-5 font-weight-600">Industry:</h5>
                      <div className="bg-gray-dark mb-4 mt-0"></div>
                      <p>{state.PreviewSingleCompany?.industry_name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-3">
              <ul className="row">
                {state?.FeaturedJobs != null &&
                  state?.FeaturedJobs?.map((item, index) => (
                    <li className="col-lg-3 col-md-6" key={index}>
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
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxHeight: "165px",
                                  minHeight: "165px",
                                }}
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
                                {item?.job_title?.substring(0, 5)}
                                {"... "}
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
                          <input
                            type="checkbox"
                            onClick={() => {
                              // onClickLike();
                            }}
                            // defaultChecked={isLiked}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <Modal
          show={show}
          onHide={() => handleClose()}
          className="modal fade modal-bx-info editor"
        >
          <div className="modal-dialog my-0 mx-0" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="CertificationModalLongTitle">
                  Apply to job
                </h5>
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
                <form>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Cover Letter</label>
                        <TextInputModal
                          placeholder="Enter Cover Letter"
                          type="text"
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    {/* <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Upload Resume</label>
                        <UploadDataComponent
                          onChange={(e) => {
                            console.log("e", e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Upload video</label>
                        <UploadDataComponent
                          onChange={(e) => {
                            console.log("e", e.target.value);
                          }}
                        />
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => handleClose()}
                  type="button"
                  className="site-button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <Link
                  // to={"/jobs-applied-job"}
                  type="button"
                  className="site-button"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </Modal>
        <Footer />
      </div>
    );
  }
}
