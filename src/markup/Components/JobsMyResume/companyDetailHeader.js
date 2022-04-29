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

export default function CompanyDetailHeader({ isView }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-12 candidate-info">
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
                  state.PreviewSingleCompany?.pic != null
                    ? state.PreviewSingleCompany?.pic
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
          <div className="text-white   align-self-center browse-job text-left">
            <h4 className="m-b0">{state.PreviewSingleCompany?.company_name}</h4>
            <p className="m-b15 text-justify">
              {state.PreviewSingleCompany?.tagline}
            </p>
            <ul className="clearfix">
              {state.PreviewPost.company?.facebook != "" && (
                <a href={state.PreviewSingleCompany?.facebook} target="_blank">
                  <i className="ti-facebook text-white mr-2"></i>{" "}
                </a>
              )}
              {state.PreviewPost.company?.linkedin != "" && (
                <a href={state.PreviewSingleCompany?.linkedin} target="_blank">
                  <i className="ti-linkedin text-white mr-2 "></i>{" "}
                </a>
              )}
              {state.PreviewPost.company?.twitter != "" && (
                <a href={state.PreviewSingleCompany?.twitter} target="_blank">
                  <i className="ti-twitter text-white mr-2"></i>{" "}
                </a>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-12">
        <div className=" text-white "></div>
      </div>
    </>
  );
}