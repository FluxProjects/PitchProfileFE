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
import {
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import { GetFeaturedJobs, GetSingleJob } from "../../redux/action";
import JobDetailHeader from "../Components/JobsMyResume/JobDetailHeader";
import ReactPlayer from "react-player";
import {
  ApplyJobPost,
  ResetCoverLetterJob,
  UploadCoverLetterJob,
  UploadAdditionalDocsJobApply,
} from "../../redux/action/jobApplications/jobApplicationsActions";
import { useHistory } from "react-router-dom";

import ReactHtmlParser from "react-html-parser";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";
import ReactQuill from "react-quill";
import BrowsejobgridCard from "./BrowsejobgridCard";

var bnr = require("./../../images/banner/bnr1.jpg");

const blogGrid = [
  {
    image: require("./../../images/blog/grid/pic1.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic2.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic3.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic4.jpg"),
  },
];

export default function Jobdetail(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [btnloading, setBtnLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [useUploaded, setUseUploaded] = useState("uploadnew");
  const [uploadNew, setUploadNew] = useState(false);
  const [additionalDoc, setAdditionalDoc] = useState(false);
  const [hasGoBack, setHasGoBack] = useState(
    props?.location?.state?.isNavigateFromManageJob
      ? props?.location?.state?.isNavigateFromManageJob
      : false
  );

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
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    var company = url.searchParams.get("company");

    console.log("window.location.href", id);
    console.log("window.location.href", company);

    callGetSingleJob(id, company);
  }, []);

  const callGetSingleJob = async (id, company) => {
    await dispatch(GetSingleJob(company, id));
    await dispatch(GetFeaturedJobs(company));
    setLoading(false);
  };

  const callApplyJobPost = () => {
    setBtnLoading(true);
    dispatch(
      ApplyJobPost(
        state.PreviewPost.id,
        state.PreviewPost.company_id,
        0,
        description,
        state.PreviewPost.job_title,
        state.PreviewPost?.company?.company_name,
        state.PreviewPost?.company?.email,
        router,
        useUploaded,
        setBtnLoading
      )
    );

    handleClose();
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="page-wraper">
        {state.userDetails.company_name ? <Header2 /> : <Header />}

        <div className="page-content bg-white">
          {/* <div
            className="dez-bnr-inr overlay-black-middle"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <div className="container">

            </div>
          </div> */}
          <div
            className="overlay-black-dark profile-edit p-t50 "
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <div className="container">
              <div className="row">
                <JobDetailHeader isView={false} />
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
                          {state.PreviewPost != null &&
                            state.PreviewPost.video && (
                              <div className="m-b30">
                                <ReactPlayer
                                  url={
                                    state.PreviewPost?.video
                                      ? state.PreviewPost?.video
                                      : state.SavePreviewPost?.video
                                  }
                                  width="100%"
                                  height="100%"
                                  controls={true}
                                />
                              </div>
                            )}
                        </div>
                        <div className="col-lg-12 col-md-6">
                          <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                            <h4 className="text-black font-weight-700 p-t10 m-b15">
                              Job Details
                              {/* {hasGoBack && (
                                <span>
                                  <Link
                                    onClick={() => {
                                      router.goBack();
                                    }}
                                    className="site-button right-arrow button-sm float-right"
                                  >
                                    Back
                                  </Link>
                                </span>
                              )} */}
                            </h4>
                            <ul>
                              <li>
                                <i className="fa fa-user"></i>
                                <strong className="font-weight-700 text-black">
                                  Seniority Level
                                </strong>{" "}
                                {SeniorityLevel.findIndex(
                                  (x) =>
                                    x?.id == state.PreviewPost?.seniority_level
                                ) == -1
                                  ? ""
                                  : SeniorityLevel[
                                      SeniorityLevel.findIndex(
                                        (x) =>
                                          x?.id ==
                                          state.PreviewPost?.seniority_level
                                      )
                                    ].name}
                              </li>
                              <li>
                                <i className="fa fa-user"></i>
                                <strong className="font-weight-700 text-black">
                                  Employment Type
                                </strong>{" "}
                                {employmentTypeDrop?.findIndex(
                                  (x) =>
                                    x?.id == state.PreviewPost?.employment_type
                                ) == -1
                                  ? ""
                                  : employmentTypeDrop[
                                      employmentTypeDrop.findIndex(
                                        (x) =>
                                          x?.id ==
                                          state.PreviewPost?.employment_type
                                      )
                                    ].name}
                              </li>
                              <li>
                                <i className="fa fa-clock-o"></i>
                                <strong className="font-weight-700 text-black">
                                  Job Type
                                </strong>{" "}
                                {jobTypeDrop?.findIndex(
                                  (x) => x?.id == state.PreviewPost?.job_type
                                ) == -1
                                  ? ""
                                  : jobTypeDrop[
                                      jobTypeDrop.findIndex(
                                        (x) =>
                                          x?.id == state.PreviewPost?.job_type
                                      )
                                    ].name}
                              </li>
                              {state.PreviewPost?.expirience != 0 && (
                                <li>
                                  <i className="ti-shield"></i>
                                  <strong className="font-weight-700 text-black">
                                    Experience
                                  </strong>
                                  {state.PreviewPost?.expirience}{" "}
                                  {state.PreviewPost?.expirience > 1
                                    ? "Years"
                                    : "Year"}
                                </li>
                              )}

                              <li>
                                <i className="fa fa-money"></i>
                                <strong className="font-weight-700 text-black">
                                  Salary
                                </strong>{" "}
                                <p>
                                  {state.PreviewPost?.country?.currency_symbol}{" "}
                                  {SalaryRange.findIndex(
                                    (x) =>
                                      x?.id == state.PreviewPost?.salary_range
                                  ) == -1
                                    ? ""
                                    : SalaryRange[
                                        SalaryRange.findIndex(
                                          (x) =>
                                            x?.id ==
                                            state.PreviewPost?.salary_range
                                        )
                                      ].name}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="job-info-box">
                      <h3 className="m-t0 m-b10 font-weight-700 title-head">
                        <Link
                          to={""}
                          className="text-secondry text-capitalize m-r30"
                        >
                          {state.PreviewPost.job_title}{" "}
                          <span
                            className="text-uppercase"
                            style={{
                              fontSize: "12px",
                              fontWeight: "normal",
                            }}
                          >
                            {state.PreviewPost.department && "- "}

                            {state.PreviewPost.department?.name}
                          </span>
                          <Link
                            onClick={() => {
                              router.goBack();
                            }}
                            className="site-button right-arrow button-sm float-right"
                          >
                            Back
                          </Link>
                        </Link>
                      </h3>
                      <ul className="job-info">
                        {/* <li>
                          <strong>Company</strong>{" "}
                          {state.userDetails?.company_name}
                        </li> */}
                        <li>
                          <strong>Deadline:</strong>{" "}
                          {!loading && state.PreviewPost?.closingDate}
                        </li>
                        <li>
                          <strong>Location:</strong>{" "}
                          {/* <i className="ti-location-pin text-black m-r5"></i>{" "} */}
                          {state.PreviewPost.city?.name}
                          {state.PreviewPost.state?.name &&
                            state.PreviewPost.city?.name &&
                            ", "}{" "}
                          {state.PreviewPost.state?.name}
                          {state.PreviewPost.country?.name &&
                            state.PreviewPost.state?.name &&
                            ", "}
                          {state.PreviewPost.country?.name}
                        </li>
                      </ul>
                      <h5 className="mt-5 font-weight-600">Job Description:</h5>
                      <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                      <p>{ReactHtmlParser(state.PreviewPost?.role)}</p>
                      <h5 className="font-weight-600 mt-4">
                        Key Responsibilities:
                      </h5>
                      <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                      <p>
                        {ReactHtmlParser(
                          state.PreviewPost?.key_responsibilities
                        )}
                      </p>
                      <h5 className="font-weight-600">
                        What are we looking for?:
                      </h5>
                      <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                      <p>{ReactHtmlParser(state.PreviewPost?.looking_for)}</p>
                      <h5 className="font-weight-600">Perks:</h5>
                      <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                      <p>{ReactHtmlParser(state.PreviewPost?.the_perks)}</p>

                      {!state.userDetails.company_name && (
                        <>
                          {console.log(
                            "state?.userDetails?.job_applicationsstate?.userDetails?.job_applications",
                            state?.userDetails?.job_applications
                          )}
                          {state?.userDetails?.job_applications?.findIndex(
                            (x) => x?.job_id == state.PreviewPost.id
                          ) != -1 &&
                          state?.userDetails?.job_applications != null ? (
                            <Link
                              onClick={() => {
                                // dispatch(ResetCoverLetterJob());
                                // handleShow();
                              }}
                              className="site-button"
                            >
                              Applied
                            </Link>
                          ) : (
                            <>
                              <Link
                                onClick={() => {
                                  dispatch(ResetCoverLetterJob());
                                  handleShow();
                                }}
                                className="site-button"
                              >
                                Apply To This Job
                              </Link>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-3">
              <ul className="post-job-bx browse-job-grid row">
                {state?.FeaturedJobs != null &&
                  state?.FeaturedJobs?.map((item, index) => (
                    <>
                      {item.id != state.PreviewPost.id && (
                        <BrowsejobgridCard item={item} index={index} />
                      )}
                    </>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <Modal
          show={
            // true
            show
          }
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
                  {/* <label>Cover Letter</label> */}

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          onClick={() => {
                            setUseUploaded("uploadnew");
                          }}
                          id="setUseUploaded"
                          name="setUseUploaded"
                          defaultChecked={true}
                          type="radio"
                        />{" "}
                        Write cover letter
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          onClick={() => {
                            setUseUploaded("uploadCoverLetter");
                          }}
                          defaultChecked={false}
                          id="setUseUploadedAdditionla"
                          name="setUseUploaded"
                          type="radio"
                        />{" "}
                        Upload Cover Letter
                      </div>
                    </div>

                    {useUploaded == "uploadnew" && (
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Cover Letter</label>
                          {/* 
                          <TextAreaModalComponent
                            placeholder="Enter Cover Letter"
                            type="text"
                            value={description}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setDescription(e.target.value);
                            }}
                          /> */}
                          <ReactQuill
                            className="quillEditor"
                            value={description}
                            onChange={setDescription}
                          />
                        </div>
                      </div>
                    )}

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        {useUploaded == "uploadCoverLetter" && (
                          <>
                            {state.CoverLetterForApplying ? (
                              <p>{state.CoverLetterForApplying.name}</p>
                            ) : (
                              <UploadDataComponent
                                text={"Upload New Cover Letter"}
                                onChange={(e) => {
                                  console.log("e upload", e.target.value);
                                  setBtnLoading(true);
                                  dispatch(
                                    UploadCoverLetterJob(
                                      e.target.files,
                                      setBtnLoading
                                    )
                                  );
                                }}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        {/* <label>Upload Additional Supporting Documents</label> */}

                        {state.AddDocApply ? (
                          <p>{state.AddDocApply.name}</p>
                        ) : (
                          <UploadDataComponent
                            text={
                              "Upload Additional Supporting Documents (optional)"
                            }
                            onChange={(e) => {
                              console.log("e upload", e.target.value);
                              dispatch(
                                UploadAdditionalDocsJobApply(e.target.files)
                              );
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  onClick={(e) => {
                    handleClose();
                  }}
                  type="button"
                  className="site-button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <>
                  {btnloading ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      type="button"
                      className="site-button"
                    >
                      Loading...
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        callApplyJobPost();
                      }}
                      type="button"
                      className="site-button"
                    >
                      Apply
                    </button>
                  )}
                </>
              </div>
            </div>
          </div>
        </Modal>
        <Footer />
      </div>
    );
  }
}
