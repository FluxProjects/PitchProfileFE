import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import {
  GetCities,
  GetStates,
  UpdateCandidateSummary,
  UpdateIsActive,
  UpdateResumeHeader,
  UploadImage,
  UploadProfileImg,
} from "../../../redux/action";
import {
  GetCityName,
  GetCountryName,
  GetStateName,
} from "../../../utils/functions";
import AttachVideo from "./AttachVideo";
import DropDownModalComponent from "./DropDownModalComponent";
import TextAreaModalComponent from "./TextAreaModalComponent";
import TextInputModal from "./TextInputModal";

export default function JobDetailHeader({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [ToggleIsActive, setToggleIsActive] = useState(
    state.userDetails.is_active
  );
  const [ResumeHeadline, setResumeHeadline] = useState(
    state.userDetails.headline
  );

  const [fname, setFname] = useState(state.userDetails.f_name);
  const [lname, setLname] = useState(state.userDetails.l_name);
  const [phone, setPhone] = useState(state.userDetails.phone);
  const [email, setEmail] = useState(state.userDetails.email);

  const userDetail = useSelector((state) => state.userDetails);

  const [stateName, setStateName] = useState();
  const [cityName, setCityName] = useState(state.PreviewPost?.city?.name);
  const [countryName, setCountryName] = useState(
    state.PreviewPost?.country?.name
  );
  const [city, setCity] = useState(state.PreviewPost?.state?.name);
  const [stateNameDrop, setStateNameDrop] = useState(
    state.PreviewPost?.state_id
  );
  const [country, setCountry] = useState(state.userDetails.country_id);
  const [hometownCountry, setHometownCountry] = useState(
    state.userDetails.hometown_country_id
  );
  const [cityLoading, setCityLoading] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const callUpdateCandidateSummary = async () => {
    dispatch(UpdateCandidateSummary(ResumeHeadline, handleClose()));
  };
  const [fieldAlert, setFieldAlert] = useState(false);

  const callUpdateResumeHeader = async () => {
    if (fname == null || fname == "") {
      setFieldAlert(true);
      return;
    }
    if (lname == null || lname == "") {
      setFieldAlert(true);
      return;
    }
    if (ResumeHeadline == null || ResumeHeadline == "") {
      setFieldAlert(true);
      return;
    }
    dispatch(
      UpdateResumeHeader(
        fname,
        lname,
        ResumeHeadline,
        city,
        stateNameDrop,
        country,
        hometownCountry,
        phone,
        email.toLowerCase(),
        handleClose()
      )
    );
  };

  const callUpdateIsActive = async (val) => {
    await dispatch(UpdateIsActive(val));
    setToggleIsActive(val);
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 candidate-info">
        <div className="candidate-detail  ">
          <div
            style={{
              height: "200px",
              width: "200px",
            }}
            className="canditate-des  text-center"
          >
            <Link to={""}>
              <img
                alt=""
                src={
                  state.PreviewPost?.company?.pic != null
                    ? state.PreviewPost?.company?.pic
                    : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
                style={{
                  minHeight: "200px",
                  maxHeight: "200px",
                  maxWidth: "200px",
                  minWidth: "200px",
                  height: "10px",
                  borderRadius: "30%",
                }}
              />
            </Link>
          </div>
          <div
            style={{}}
            className="text-white   align-self-center  browse-job text-left"
          >
            <h4 className="m-b0">{state.PreviewPost?.company?.company_name}</h4>
            <p className="m-b15 text-justify">
              {state.PreviewPost?.company?.description}
            </p>
            <ul className="clearfix">
              {state.PreviewPost.company?.facebook != "" && (
                <a href={state.PreviewPost?.company?.facebook} target="_blank">
                  <i className="ti-facebook text-white mr-2"></i>{" "}
                </a>
              )}
              {state.PreviewPost.company?.linkedin != "" && (
                <a href={state.PreviewPost?.company?.linkedin} target="_blank">
                  <i className="ti-linkedin text-white mr-2 "></i>{" "}
                </a>
              )}
              {state.PreviewPost.company?.twitter != "" && (
                <a href={state.PreviewPost?.company?.twitter} target="_blank">
                  <i className="ti-twitter text-white mr-2"></i>{" "}
                </a>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
