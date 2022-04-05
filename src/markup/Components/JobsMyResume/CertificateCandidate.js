import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteCandidateCertificate,
  GetCandidateCertificates,
} from "../../../redux/action";
import { formatDate } from "../../../utils/functions";
import CertificatesModalComp from "./Modals/CertificatesModalComp";

export default function CertificateCandidate({ isView }) {
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
    callGetCandidateCertificates();
  }, []);

  const callGetCandidateCertificates = async () => {
    await dispatch(GetCandidateCertificates());
  };

  const deleteCandidateVal = async (id, index) => {
    await dispatch(DeleteCandidateCertificate(id, index));
  };

  return (
    <div id="Certification_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 clas2sName=" ">
        Certification{" "}
        <span className="float-right ml-2 ">
          {!isView && (
            <span
              onClick={() => {
                setUpdateData(false);
                setShow(true);
              }}
              className="site-button add-btn button-sm"
            >
              <i className="fa fa-plus m-r5"></i> Add
            </span>
          )}
        </span>
      </h5>

      {state.singleUserData.certificates.map((item, index) => (
        <>
          <h6 className="font-14 mt-3 m-b0">
            {/* Job BoardEdit{" "} */}
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
              <h6 className="font-14 m-b0">Certification Name</h6>
              <p className="m-b0">{item.name}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">Certification Body</h6>
              <p className="m-b0">{item.body}</p>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-4 mb-2">
              <h6 className="font-14 m-b0">Year Obtained</h6>
              <p className="m-b0">{formatDate(item.year_obtained)}</p>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 mb-2">
              <h6 className="font-14 m-b0">Certification ID</h6>
              <p className="m-b0">{item.ref_no}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
