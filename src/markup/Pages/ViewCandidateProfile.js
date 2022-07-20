import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Listingsidebar from "./../Element/Listingsidebar";
import ResumeHeadlineComponent from "../Components/JobsMyResume/ResumeHeadlineComponent";
import SkillCandidate from "../Components/JobsMyResume/SkillCandidate";
import EducaionCandidate from "../Components/JobsMyResume/EducaionCandidate";
import EmploymentsComponent from "../Components/JobsMyResume/EmploymentsComponent";
import ProjectsComponent from "../Components/JobsMyResume/ProjectsComponent";
import CertificatesComponent from "../Components/JobsMyResume/CertificatesComponent";
import ReferencesComponent from "../Components/JobsMyResume/ReferencesComponent";
import SocialProfilesComponent from "../Components/JobsMyResume/SocialProfilesComponent";
import DesiredCareerProfileComponent from "../Components/JobsMyResume/DesiredCareerProfileComponent";
import ProfileDetailsComponent from "../Components/JobsMyResume/ProfileDetailsComponent";
import AttachResumeComponent from "../Components/JobsMyResume/AttachResumeComponent";

import { useDispatch, useSelector } from "react-redux";
import { AddRoom, getSingleUserData } from "../../redux/action";
import { GetStateName, SortSameVals } from "../../utils/functions";
import HeaderCandidateResume from "../Components/JobsMyResume/HeaderCandidateResume";
import ProfileCandidateSummary from "../Components/JobsMyResume/ProfileCandidateSummary";
import EmploymentCandidate from "../Components/JobsMyResume/EmploymentCandidate";
import ProfileCandidate from "../Components/JobsMyResume/ProfileCandidate";
import AttachResumeCandidate from "../Components/JobsMyResume/AttachResumeCandidate";
import ProjectCandidate from "../Components/JobsMyResume/ProjectCandidate";
import CertificateCandidate from "../Components/JobsMyResume/CertificateCandidate";
import SocialProfileCandidate from "../Components/JobsMyResume/SocialProfileCandidate";
import ReferencesCandidate from "../Components/JobsMyResume/ReferencesCandidate";
import DesiredCandidateCareerProfile from "../Components/JobsMyResume/DesiredCandidateCareerProfile";
import Header2 from "../Layout/Header2";
import Chat from "./MyChat/Chat/Chat";
var bnr = require("./../../images/banner/bnr1.jpg");
var bnr2 = require("./../../images/background/bg3.jpg");

export default function ViewCandidateProfile(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [otherId, setOtherId] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    //  to get languages
    callGetSingleUserData();
  }, []);

  const callGetSingleUserData = async () => {
    var url_string = window.location.href; //
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    setOtherId(id);
    console.log("window.location.href", id);

    await dispatch(getSingleUserData(id));
    console.log("singleUserData", state.singleUserData);
    setLoading(false);
  };

  const callGetStateName = async () => {
    GetStateName();
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
  };

  return (
    <>
      {state.userDetails?.company_name ? <Header2 /> : <Header />}
      {!loading ? (
        <div className="page-content">
          <div
            className="overlay-black-dark profile-edit p-t50 p-b20"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <div className="container">
              <div className="row">
                <HeaderCandidateResume
                  isView={true}
                  callAddRoom={callAddRoom}
                />
              </div>
            </div>
          </div>

          <div className="content-block">
            <div className="section-full browse-job content-inner-2">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
                    <Listingsidebar
                      isCompany={state.userDetails?.company_name ? true : false}
                      isMyProfile={
                        state.userDetails?.id == state.singleUserData?.id
                      }
                      isView={true}
                    />
                  </div>
                  <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
                    {/* Resume Headline */}
                    {/* <ResumeHeadlineComponent /> */}

                    {/* ProfileSummaryComponent */}
                    {state.singleUserData.summary && (
                      <ProfileCandidateSummary isView={true} />
                    )}
                    {/* Employment */}
                    {state.singleUserData.employments.length > 0 && (
                      <EmploymentCandidate isView={true} />
                    )}

                    {/* Education */}
                    {state.singleUserData.educations.length > 0 && (
                      <EducaionCandidate isView={true} />
                    )}

                    {/* SkillCandidate */}
                    {state.singleUserData.candidate_skills.length > 0 && (
                      <SkillCandidate isView={true} />
                    )}

                    {/* ProjectsComponent */}
                    {state.singleUserData.projects.length > 0 && (
                      <ProjectCandidate isView={true} />
                    )}

                    {/* Certification */}
                    {state.singleUserData.certificates.length > 0 && (
                      <CertificateCandidate isView={true} />
                    )}

                    {/* Social  */}
                    {state.singleUserData.social_profiles.length > 0 && (
                      <SocialProfileCandidate isView={true} />
                    )}

                    {/* Reference Component */}
                    {state.singleUserData.references.length > 0 && (
                      <ReferencesCandidate isView={true} />
                    )}
                    {/* DesiredCareerProfileComponent */}
                    {state.singleUserData?.desired_careers?.length > 0 && (
                      <DesiredCandidateCareerProfile isView={true} />
                    )}

                    {/* ProfileDetailsComponent */}
                    {state.singleUserData.dob && (
                      <ProfileCandidate isView={true} />
                    )}

                    {/* AttachResumeComponent */}
                    {state.singleUserData.cover_letter && (
                      <AttachResumeCandidate isView={true} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade lead-form-modal"
              id="car-details"
              tabIndex="-1"
              role="dialog"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => handleClose()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="modal-body row m-a0 clearfix">
                    <div
                      className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0"
                      style={{
                        backgroundImage: "url(" + bnr2 + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="form-info text-white align-self-center">
                        <h3 className="m-b15">Login To You Now</h3>
                        <p className="m-b15">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry has been the industry.
                        </p>
                        <ul className="list-inline m-a0">
                          <li>
                            <Link to={""} className="m-r10 text-white">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to={""} className="m-r10 text-white">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to={""} className="m-r10 text-white">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to={""} className="m-r10 text-white">
                              <i className="fa fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to={""} className="m-r10 text-white">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 p-a0">
                      <div className="lead-form browse-job text-left">
                        <form>
                          <h3 className="m-t0">Personal Details</h3>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="E-Mail Address"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                          <div className="clearfix">
                            <button
                              type="button"
                              className="btn-primary site-button btn-block"
                            >
                              Submit{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Footer />
    </>
  );
}
