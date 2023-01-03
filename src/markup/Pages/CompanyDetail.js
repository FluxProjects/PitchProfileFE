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
  AddRoom,
  GetFeaturedJobs,
  getMyRoomsCandidate,
  getMyRoomsCompany,
  GetSingleCompany,
  GetSingleJob,
} from "../../redux/action";
import CompanyDetailHeader from "../Components/JobsMyResume/companyDetailHeader";
import ReactPlayer from "react-player";
import BrowsejobgridCard from "./BrowsejobgridCard";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Jobdetail(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [otherId, setOtherId] = useState("");
  const router = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClickLetter = () => {};
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
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var id = url.searchParams.get("company_id");

    setOtherId(id);

    await dispatch(GetSingleCompany(id));
    await dispatch(GetFeaturedJobs(id));
    setLoading(false);
  };

  const callAddRoom = (setModal) => {
    dispatch(
      AddRoom(
        state.userDetails?.company_name ? otherId : state.userDetails?.id,
        state.userDetails?.company_name ? state.userDetails?.id : otherId,
        (state.userDetails?.company_name ? otherId : state.userDetails?.id) +
          (state.userDetails?.company_name ? state.userDetails?.id : otherId),
        setModal
      )
    );
    callGetRooms();
  };

  const callGetRooms = async (id) => {
    if (state.userDetails?.company_name) {
      await dispatch(getMyRoomsCompany());
    } else {
      await dispatch(getMyRoomsCandidate());
    }
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
                <CompanyDetailHeader callAddRoom={callAddRoom} />
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
                          {/* {props?.location?.state?.showBack && (
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
                          )} */}
                          <div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
                            <h5 className=" text-black m-b15">
                              Contact Details
                            </h5>
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
                                  {state.PreviewSingleCompany?.phone}
                                </p>{" "}
                              </li>
                              <li>
                                <i className="fa fa-envelope"></i>
                                <p className="mt-1 text-black">
                                  {/* Phone */}
                                  <a
                                    href={`mailto:${state.PreviewSingleCompany?.email}`}
                                  >
                                    {state.PreviewSingleCompany?.email}
                                  </a>
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
                        About Company
                        <span
                          className="text-uppercase"
                          style={{
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                        ></span>
                        <Link
                          onClick={() => {
                            router.goBack();
                          }}
                          // to={"/companies"}
                          className="site-button right-arrow button-sm float-right"
                        >
                          Back
                        </Link>
                      </h4>

                      {/* <h5 className="mt-5 font-weight-600">Job Description:</h5> */}
                      <div className="bg-gray-dark mb-4 mt-0"></div>
                      <div
                        style={{
                          overflowWrap: "break-word",
                          wordWrap: "breakWord",
                          hyphens: "auto",
                          whiteSpace: "normal",
                        }}
                      >
                        <p>{state.PreviewSingleCompany?.description}</p>
                      </div>

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
              <h4>
                Recently Posted Jobs by{" "}
                {state.PreviewSingleCompany?.company_name}:
              </h4>
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
