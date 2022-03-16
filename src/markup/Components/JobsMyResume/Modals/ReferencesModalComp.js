import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCandidateReference,
  UpdateCandidateReference,
} from "../../../../redux/action";
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
    isUpdate == true ? data?.refererName : ""
  );
  const [organization, setOrganization] = useState(
    isUpdate == true ? data?.organization : ""
  );
  const [jobTitle, setJobTitle] = useState(
    isUpdate == true ? data?.jobTitle : ""
  );
  const [city, setCity] = useState(cityProp);
  const [cstate, setCState] = useState(cstateProp);
  const [country, setCountry] = useState(countryProp);
  const [phone, setPhone] = useState(isUpdate == true ? data?.phone : "");
  const [email, setEmail] = useState(isUpdate == true ? data?.email : "");

  // const CallGetDropDown = async () => {
  //   if (state.countries.length < 1) await dispatch(GetCountries());
  //   if (state.states.length < 1) await dispatch(GetStates());
  //   if (state.cities.length < 1) await dispatch(GetCities(4));

  //   setLoading(false);
  // };
  // const CallGetCities = async (stateId) => {
  //   await dispatch(GetCities(stateId));
  // };

  const callAction = async () => {
    if (isUpdate) {
      console.log("update called");
      await dispatch(
        UpdateCandidateReference(
          data.id,
          refererName,
          organization,
          jobTitle,
          city,
          cstate,
          country,
          phone,
          email,
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
          city,
          cstate,
          country,
          phone,
          email,
          index,
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
              Desired Career Profile{" "}
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
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>Referer Name</label>
                    <TextInputModal
                      placeholder={"Enter Referer Name"}
                      onChange={(e) => setRefererName(e.target.value)}
                      value={refererName}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>Organization</label>
                    <TextInputModal
                      placeholder={"Enter Referer Organization Name"}
                      onChange={(e) => setOrganization(e.target.value)}
                      value={organization}
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 ">
                  <div className="form-group">
                    <label>Designation</label>
                    <TextInputModal
                      placeholder={"Enter Referer Designation"}
                      onChange={(e) => setJobTitle(e.target.value)}
                      value={jobTitle}
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 mt-0 col-sm-12">
                  <div className="form-group">
                    <label>Country:</label>
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
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
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Phone</label>
                    <TextInputModal
                      placeholder={"Enter Referer Phone"}
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 ">
                  <div className="form-group">
                    <label>Email</label>
                    <TextInputModal
                      placeholder={"Enter Referer Email"}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
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
