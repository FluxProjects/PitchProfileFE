import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateCertificate,
  UpdateCandidateCertificate,
} from "../../../../redux/action";
import TextInputModal from "../TextInputModal";

export default function CertificatesModalComp({
  data,
  isUpdate,
  index,
  handleClose,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [name, setName] = useState(isUpdate == true ? data?.name : "");
  const [body, setBody] = useState(isUpdate == true ? data?.body : "");
  const [yearObtained, setYearObtained] = useState(
    isUpdate == true ? data?.year_obtained : ""
  );
  const [refNo, setrefNo] = useState(isUpdate == true ? data?.ref_no : "");
  const [fieldAlert, setFieldAlert] = useState(false);

  const callAction = async () => {
    if (name == null || name == "") {
      setFieldAlert(true);
      return;
    }
    if (yearObtained == null || yearObtained == "") {
      setFieldAlert(true);
      return;
    }
    if (refNo == null || refNo == "") {
      setFieldAlert(true);
      return;
    }
    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateCertificate(
          data.id,
          name,
          body,
          yearObtained,
          refNo,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateCertificate(name, body, yearObtained, refNo, handleClose())
      );
    }
  };

  return (
    <div className="modal-dialog my-0" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="CertificationModalLongTitle">
            Certifications
          </h5>
          <button
            type="button"
            className="close"
            onClick={() => {
              handleClose();
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    Certification Name <span className="text-danger"> *</span>
                  </label>
                  <TextInputModal
                    placeholder="Enter Certification Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>Certification Body</label>
                  <TextInputModal
                    placeholder="Enter Certification Body"
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                    value={body}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    Year Obtained <span className="text-danger"> *</span>
                  </label>
                  <TextInputModal
                    type="date"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setYearObtained(e.target.value);
                    }}
                    value={yearObtained}
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    Credential ID. <span className="text-danger"> *</span>
                  </label>
                  <TextInputModal
                    type=""
                    onChange={(e) => {
                      console.log(e.target.value);
                      setrefNo(e.target.value);
                    }}
                    value={refNo}
                  />
                </div>
              </div>
            </div>
          </form>
          {fieldAlert && (
            <p className="text-danger">Please fill all the required fields.</p>
          )}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="site-button"
            data-dismiss="modal"
            onClick={() => {
              handleClose();
            }}
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              callAction();
            }}
            type="button"
            className="site-button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
