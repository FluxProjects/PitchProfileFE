import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import UploadDataComponent from "../Components/UIComponents/UploadDataComponent";
import { useDispatch, useSelector } from "react-redux";
import Header2 from "../Layout/Header2";
import { formatDate } from "../../utils/functions";
import {
  CompanySizeLevel,
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import { GetSingleCompany, GetSingleJob } from "../../redux/action";
import CompanyDetailHeader from "../Components/JobsMyResume/companyDetailHeader";
import ReactPlayer from "react-player";

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

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    // console.log(
    //   ".location.state.company_id",
    //   props.location.state.company_id,
    //   props.location.state.post_id
    // );
    callGetSingleCompany();
  }, []);

  const callGetSingleCompany = async () => {
    await dispatch(GetSingleCompany(props.location.state.company_id));
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
            className="overlay-black-dark profile-edit p-t50 "
            style={{ backgroundImage: "url(" + bnr + ")" }}
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
                          About Comapny
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

            {/* <div className="section-full content-inner">
              <div className="container">
                <div className="row">
                  {blogGrid.map((item, index) => (
                    <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                      <div className="m-b30 blog-grid">
                        <div className="dez-post-media dez-img-effect ">
                          {" "}
                          <Link to={"/blog-details"}>
                            <img src={item.image} alt="" />
                          </Link>{" "}
                        </div>
                        <div className="dez-info p-a20 border-1">
                          <div className="dez-post-title ">
                            <h5 className="post-title">
                              <Link to={"/blog-details"}>
                                Title of blog post
                              </Link>
                            </h5>
                          </div>
                          <div className="dez-post-meta ">
                            <ul>
                              <li className="post-date">
                                {" "}
                                <i className="ti-location-pin"></i> London{" "}
                              </li>
                              <li className="post-author">
                                <i className="ti-user"></i>By{" "}
                                <Link to={"#"}>Jone</Link>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="dez-post-text">
                            <p>
                              All the Lorem Ipsum generators on the Internet
                              tend to repeat predefined chunks.
                            </p>
                          </div>
                          <div className="dez-post-readmore">
                            <Link
                              to={"/blog-details"}
                              title="READ MORE"
                              rel="bookmark"
                              className="site-button-link"
                            >
                              <span className="fw6">READ MORE</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
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
