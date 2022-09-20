import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateReference,
  GetCities,
  GetStates,
  UpdateCandidateReference,
} from "../../../../redux/action";
import { validatePhoneNumber } from "../../../../utils/functions";
// import { GetCities, GetCountries, GetStates } from "../../../redux/action";
import DropDownModalComponent from "../DropDownModalComponent";
import TextInputModal from "../TextInputModal";

export default function ReferencesModalComp({
  data,
  cityProp,
  cstateProp,
  countryProp,
  index,
  handleClose,
  isUpdate,
}) {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [refererName, setRefererName] = useState(
    isUpdate == true ? data?.referer_name : ""
  );
  const [organization, setOrganization] = useState(
    isUpdate == true ? data?.organization : ""
  );
  const [jobTitle, setJobTitle] = useState(
    isUpdate == true ? data?.job_title : ""
  );

  const [phone, setPhone] = useState(isUpdate == true ? data?.phone : "");
  const [email, setEmail] = useState(isUpdate == true ? data?.email : "");
  const [fieldAlert, setFieldAlert] = useState(false);
  const [FieldText, setFieldText] = useState("");

  const callAction = async () => {
    if (refererName == null || refererName == "") {
      setFieldAlert(true);
      setFieldText("Please enter referee name");
      return;
    }
    if (organization == null || organization == "") {
      setFieldAlert(true);
      setFieldText("Please enter organization name");

      return;
    }
    if (jobTitle == null || jobTitle == "") {
      setFieldAlert(true);
      setFieldText("Please enter job title");

      return;
    }
    if (phone == null || phone != "") {
      if (!validatePhoneNumber(phone)) {
        setFieldAlert(true);
        setFieldText("Please phone number");

        //   setFieldText("Phone not valid");
        //   setBtnLoading(false);
        return;
        console.log("this is not vlais");
      }
    }
    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateReference(
          data.id,
          refererName,
          organization,
          jobTitle,
          phone,
          email.toLowerCase(),
          index,
          handleClose()
        )
      );
    } else {
      console.log("add called");
      await dispatch(
        AddCandidateReference(
          refererName,
          organization,
          jobTitle,
          phone,
          email.toLowerCase(),
          handleClose()
        )
      );
    }
  };

  return (
    <>
      <div className="modal-dialog my-0" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="DesiredprofileModalLongTitle">
              References{" "}
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
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>
                      Referee Name <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      placeholder={"Enter Referee Name"}
                      onChange={(e) => setRefererName(e.target.value)}
                      value={refererName}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>
                      Organisation <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      placeholder={"Enter Referee Organisation Name"}
                      onChange={(e) => setOrganization(e.target.value)}
                      value={organization}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>
                      Role <span className="text-danger"> *</span>
                    </label>
                    <TextInputModal
                      placeholder={"Enter Referee Role"}
                      onChange={(e) => setJobTitle(e.target.value)}
                      value={jobTitle}
                    />
                  </div>
                </div>

                {/* Commented for enroll ment */}
                {/* <div className="col-lg-4 col-md-4 mt-0 col-sm-12">
                  <div className="form-group">
                    <label>Country:</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        CallGetStates(e.target.value);
                        setCity(-1);
                        setCountry(e.target.value);
                      }}
                      value={country}
                      options={state.countries}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="form-group">
                    <label>State:</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        CallGetCities(e.target.value);
                        setCState(e.target.value);
                      }}
                      value={cstate}
                      options={state.states}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="form-group">
                    <label>City:</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setCity(e.target.value);
                      }}
                      value={city}
                      options={state.cities}
                    />
                  </div>
                </div> */}

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <TextInputModal
                      placeholder={""}
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                    <small>ex: 00447123456789</small>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 ">
                  <div className="form-group">
                    <label>Email</label>
                    <TextInputModal
                      placeholder={"Enter Referee Email"}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                      value={email}
                    />
                  </div>
                </div>
              </div>
            </form>
            {fieldAlert && <p className="text-danger">{FieldText}</p>}
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
    </>
  );
}
