import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DeleteCandidateSocialProfile,
  GetCandidateSocialProfiles,
} from "../../../redux/action";
import { socialPlatformDrop } from "../../../utils/DropDownUtils";
import SocialProfilesModalComp from "./Modals/SocialProfilesModalComp";

export default function SocialProfilesComponent({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [modalDataIndex, setModalDataIndex] = useState(0);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    callGetCandidateSocialProfiles();
  }, []);

  const callGetCandidateSocialProfiles = async () => {
    await dispatch(GetCandidateSocialProfiles());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateSocialProfile(id, index));
  };

  return (
    <>
      {/* SocialProfile */}
      <div id="social_bx" className="job-bx bg-white m-b30">
        <div className="d-flex">
          <h5 className=" mb-2">Social Profiles </h5>
          {!isView && (
            <Link
              to={"#"}
              data-toggle="modal"
              data-target="#socialprofiles"
              onClick={() => {
                setUpdateData(false);
                handleShow();
              }}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-plus m-r5"></i> Add
            </Link>
          )}
        </div>

        {/* map */}
        {state.candidateSocialProfiles != null &&
          state.candidateSocialProfiles.map((item, index) => (
            <>
              <h6 className="font-14 mt-3 m-b0">
                {/* Project Board Edit{" "} */}
                {!isView && (
                  <span className="float-right">
                    <span
                      onClick={() => {
                        setUpdateData(true);
                        setModalDataIndex(index);
                        handleShow();
                      }}
                      className="site-button add-btn button-sm"
                    >
                      <i className="fa fa-pencil m-r5"></i> Edit
                    </span>
                    <span
                      onClick={() => {
                        console.log("tests", index);

                        deleteCandidateVal(item.id, index);
                      }}
                      className="m-l15 cursorPointer font-14"
                    >
                      <i className="fa fa-minus text-danger"></i>
                    </span>
                  </span>
                )}
              </h6>

              <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                  <h6 className="font-14 m-b0">Platform</h6>

                  <p className="m-b0">
                    {socialPlatformDrop.findIndex(
                      (x) => x.id == item.social_profile_id
                    ) != -1
                      ? socialPlatformDrop[
                          socialPlatformDrop.findIndex(
                            (x) => x.id == item.social_profile_id
                          )
                        ].name
                      : ""}
                  </p>
                </div>

                <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
                  <h6 className="font-14 m-b0">URL</h6>
                  <a href={item.url} target="_blank" className="m-b0">
                    {item.url}
                  </a>
                </div>
              </div>
            </>
          ))}
      </div>
      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal fade modal-bx-info editor"
      >
        <SocialProfilesModalComp
          data={
            state?.candidateSocialProfiles != null &&
            state?.candidateSocialProfiles[modalDataIndex]
          }
          id={
            state?.candidateSocialProfiles != null
              ? state?.candidateSocialProfiles[modalDataIndex]?.id
              : ""
          }
          socialProfileProp={
            state?.candidateSocialProfiles != null
              ? state?.candidateSocialProfiles[modalDataIndex]
                  ?.social_profile_id
              : ""
          }
          isUpdate={updateData}
          index={modalDataIndex}
          handleClose={() => handleClose()}
        />
      </Modal>
    </>
  );
}
