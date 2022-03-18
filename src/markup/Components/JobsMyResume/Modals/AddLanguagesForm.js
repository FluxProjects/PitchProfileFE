import React, { useEffect, useState } from "react";
import DropDownModalComponent from "../../JobsMyResume/DropDownModalComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  GetCities,
  GetCountries,
  GetLanguages,
  GetStates,
  updateUser,
  GetCandidateLanguages,
  AddCandidateLanguages,
} from "../../../../redux/action";
import { proficiencyLevelDrop } from "../../../../utils/DropDownUtils";

export default function AddLanguagesForm({ i, item }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // states
  const [fname, setFname] = useState(state.userDetails.f_name);
  const [lname, setLname] = useState(state.userDetails.l_name);
  const [dob, setDob] = useState(state.userDetails.dob);
  const [gender, setGender] = useState(state.userDetails.gender);
  const [passport, setPassport] = useState(state.userDetails.passport_number);
  const [isMarried, setIsMarried] = useState(state.userDetails.marital_status);
  const [Disability, setHasDisability] = useState(state.userDetails.disability);
  const [disabilityDescription, setDisabilityDescription] = useState(
    state.userDetails.disability_description
  );
  const [city, setCity] = useState(state.userDetails.city_id);
  const [stateName, setStateName] = useState(state.userDetails.state_id);
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [hometownCountry, setHometownCountry] = useState(
    state.userDetails.hometown_country_id
  );
  const [address, setAddress] = useState(state.userDetails.address);
  const [phone, setPhone] = useState(state.userDetails.phone);
  const [email, setEmail] = useState(state.userDetails.email);

  const [LangArr, setLangArr] = useState([
    {
      language: "",
      level: "",
    },
  ]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  to get languages
    CallGetDropDown();
    CallGetCandidateLanguages();
  }, []);

  const CallGetCandidateLanguages = async () => {
    await dispatch(GetCandidateLanguages());
  };

  const CallGetDropDown = async () => {
    if (state.languages.length < 1) await dispatch(GetLanguages());

    if (state.countries.length < 1) await dispatch(GetCountries());
    if (state.states.length < 1) await dispatch(GetStates(230));
    if (state.cities.length < 1) await dispatch(GetCities(3866));

    setLoading(false);
  };
  const CallGetCities = async (stateId) => {
    await dispatch(GetCities(stateId));
  };

  const CallGetStates = async (stateId) => {
    await dispatch(GetStates(stateId));
  };

  const callUpdateUser = async () => {
    await dispatch(
      updateUser(
        state.userDetails.id,
        fname,
        lname,
        dob,
        gender,
        isMarried,
        passport,
        Disability,
        disabilityDescription,
        address,
        city,
        stateName,
        country,
        hometownCountry,
        phone,
        email,
        state.userDetails.authToken
        // router
      )
    );
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    // dispatch(DeleteCandidateLanguages(,index))
    // const list = [...LangArr];
    // list.splice(index, 1);
    // setLangArr(list);
  };

  // handle click event of the Add button
  const handleAddClickOption = (i) => {
    dispatch(AddCandidateLanguages());

    // const list = [...LangArr];
    // list.push("");

    // setLangArr(list);
  };

  return (
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="form-group">
          <label>Languages:</label>
          {/* <DropdownSearch items={state.languages} /> */}
          <DropDownModalComponent
            onChange={(e) => {
              console.log("eee", e.target.value);
            }}
            options={state.languages}
          />
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="form-group">
          <label>Proficiency Level:</label>
          <DropDownModalComponent
            onChange={(e) => {
              console.log("eee", e.target.value);
            }}
            options={proficiencyLevelDrop}
          />
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12">
        <span
          onClick={() => {
            handleAddClickOption(i);
          }}
          className="btn btn-primary mt-4"
        >
          <i className="fa fa-plus m-r5"></i> Add
        </span>
      </div>

      {LangArr.length !== 1 && (
        <div className="col-lg-3 col-md-3 col-sm-12">
          <span
            onClick={() => {
              handleRemoveClick(i);
            }}
            className="btn btn-danger mt-4"
          >
            <i className="fa fa-minus m-r5"></i> Remove
          </span>
        </div>
      )}
    </div>
  );
}
