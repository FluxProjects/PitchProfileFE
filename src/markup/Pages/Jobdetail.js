import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import UploadDataComponent from "../Components/UIComponents/UploadDataComponent";
import { useDispatch, useSelector } from "react-redux";
import Header2 from "../Layout/Header2";
import { formatDate } from "../../utils/functions";
import { employmentTypeDrop, jobTypeDrop } from "../../utils/DropDownUtils";

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

export default function Jobdetail() {
  const [show, setShow] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="page-wraper">
      {state.userDetails.company_name ? <Header2 /> : <Header />}

      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Job Detail</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>Job Detail</li>
                </ul>
              </div>
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
                        <div className="m-b30">
                          <video width="320" height="240" controls>
                            <source
                              src={state.PreviewPost.video}
                              type="video/mp4"
                            />
                            <source
                              src={state.PreviewPost.video}
                              type="video/wmv"
                            />
                            <source
                              src={state.PreviewPost.video}
                              type="video/mkv"
                            />
                            <source
                              src={state.PreviewPost.video}
                              type="video/mov"
                            />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-6">
                        <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                          <h4 className="text-black font-weight-700 p-t10 m-b15">
                            Job Details
                          </h4>
                          <ul>
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
                            <li>
                              <i className="ti-shield"></i>
                              <strong className="font-weight-700 text-black">
                                Experience
                              </strong>
                              {state.PreviewPost?.expirience} Year Experience
                            </li>
                            <li>
                              <i className="ti-money"></i>
                              <strong className="font-weight-700 text-black">
                                Salary
                              </strong>{" "}
                              $ {state.PreviewPost?.max_salary} - ${" "}
                              {state.PreviewPost?.min_salary}
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
                        {state.PreviewPost.job_title}
                      </Link>
                    </h3>
                    <ul className="job-info">
                      {/* <li>
                         <strong>Education</strong> {state.PreviewPost?.closing_date 
                      </li> */}
                      <li>
                        <strong>Deadline:</strong>{" "}
                        {formatDate(state.PreviewPost?.closing_date)}
                      </li>
                      <li>
                        <i className="ti-location-pin text-black m-r5"></i>{" "}
                        NewYark{" "}
                      </li>
                    </ul>
                    {/* <p className="p-t20">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p> */}
                    <h5 className="font-weight-600 mt-4">
                      Key Responsibilities
                    </h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{state.PreviewPost?.key_responsibilities}</p>
                    <h5 className="font-weight-600">Looking for</h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{state.PreviewPost?.looking_for}</p>
                    <h5 className="font-weight-600">Perks</h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{state.PreviewPost?.the_perks}</p>
                    <h5 className="font-weight-600">Role</h5>
                    <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
                    <p>{state.PreviewPost?.role}</p>
                    <Link
                      onClick={() => handleShow()}
                      // to={"/jobs-applied-job"}
                      className="site-button"
                    >
                      Apply To This Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-full content-inner">
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
                            <Link to={"/blog-details"}>Title of blog post</Link>
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
                            All the Lorem Ipsum generators on the Internet tend
                            to repeat predefined chunks.
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
              <h5 className="modal-title" id="CertificationModalLongTitle">
                Apply to job
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

                  <div className="col-lg-12 col-md-12">
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
              <Link
                to={"/jobs-applied-job"}
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
