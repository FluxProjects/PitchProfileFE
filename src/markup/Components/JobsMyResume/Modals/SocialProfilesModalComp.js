import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateSocialProfile,
  UpdateCandidateSocialProfile,
} from "../../../../redux/action";
import TextAreaModalComponent from "../TextAreaModalComponent";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";
import { socialPlatformDrop } from "../../../../utils/DropDownUtils";
import {
  isValidHttpUrl,
  isValidUrl,
  validateURL,
} from "../../../../utils/functions";

export default function EmploymentsModalComp({
  data,
  socialProfileProp,
  index,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [socialProfile, setSocialProfile] = useState(
    isUpdate == true ? socialProfileProp : 1
  );
  const [url, setUrl] = useState(isUpdate == true ? data?.url : "");
  const [description, setDescription] = useState(
    isUpdate == true ? data?.description : ""
  );
  const [fieldAlert, setFieldAlert] = useState(false);
  const [FieldText, setFieldText] = useState("");

  const callAction = async () => {
    if (socialProfile == null || socialProfile == "") {
      setFieldAlert(true);
      setFieldText("select all values");

      return;
    }
    if (url == null || url == "") {
      setFieldAlert(true);
      setFieldText("Please enter URL");

      return;
    }

    console.log("tstegdehjcbgvf", isValidUrl(url));
    // if (url) {
    if (isValidUrl(url) == false) {
      setFieldAlert(true);
      setFieldText("Enter valid URL");
      return;
    }
    // }

    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateSocialProfile(
          data.id,
          socialProfile,
          url,
          description,
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateSocialProfile(
          socialProfile,
          url,
          description,
          index,
          handleClose()
        )
      );
    }
  };

  return (
    <>
      <div className="modal-dialog my-0 mx-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="AccomplishmentsModalLongTitle">
              Social Profiles
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => {
                setShow(false);
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
                    <label>Platform</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSocialProfile(e.target.value);
                      }}
                      value={socialProfile}
                      options={socialPlatformDrop}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>URL</label>
                    <TextInputModal
                      placeholder=""
                      onChange={(e) => setUrl(e.target.value)}
                      value={url}
                    />
                    <small>ex: https://www.url.com/profile_name</small>
                  </div>
                </div>
                {/* <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Description</label>
                    <TextAreaModalComponent
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={description}
                      placeholder="Type Description"
                    />
                  </div>
                </div> */}
              </div>
            </form>
            {fieldAlert && <p className="text-danger">{FieldText}</p>}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="site-button"
              data-dismiss="modal"
              onClick={() => handleClose()}
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
    </>
  );
}
