import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Modal } from "react-bootstrap";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import UploadDataComponent from "../Components/UIComponents/UploadDataComponent";
import { useDispatch, useSelector } from "react-redux";
import Header2 from "../Layout/Header2";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { daysSinceGivenDate, formatDate } from "../../utils/functions";
import {
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import {
  getAllUserData,
  GetFeaturedJobs,
  GetSingleJob,
  UploadProfileisReviewd,
} from "../../redux/action";
import JobDetailHeader from "../Components/JobsMyResume/JobDetailHeader";
import ReactPlayer from "react-player";
import {
  ApplyJobPost,
  ResetCoverLetterJob,
  UploadCoverLetterJob,
} from "../../redux/action/jobApplications/jobApplicationsActions";
import { useHistory } from "react-router-dom";

import ReactHtmlParser from "react-html-parser";
import TextAreaModalComponent from "../Components/JobsMyResume/TextAreaModalComponent";

var bnr = require("./../../images/banner/bnr1.jpg");

const blogGrid = [
  {
    image: require("./../../images/blog/grid/pic1.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic2.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic3.jpg"),
  },
  {
    image: require("./../../images/blog/grid/pic4.jpg"),
  },
];

export default function AdminPage(props) {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");

  const router = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    callGetAllUserData();
  }, []);

  const callGetAllUserData = async () => {
    await dispatch(getAllUserData());
    setLoading(false);
  };

  const callUploadProfileisReviewd = async (val, index) => {
    await dispatch(UploadProfileisReviewd(val, index));
  };
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="page-wraper">
        {state.userDetails.company_name ? <Header2 /> : <Header />}

        <div className="page-content bg-white">
          {/* <div
            className="dez-bnr-inr overlay-black-middle"
            style={{ backgroundImage: "url(" + bnr + ")" }}
          >
            <div className="container">

            </div>
          </div> */}

          <div className="content-block">
            <div
              id="it_skills_bx"
              className="job-bx table-job-bx bg-white m-b30"
            >
              <div className="d-flex">
                <h5 className="m-b15">Candidates</h5>
                {/* {!isView && (
                    <Link
                    to={"#"}
                    data-toggle="modal"
                    data-target="#itskills"
                    onClick={() => {
                        setUpdateData(false);
                        handleShow();
                    }}
                    className="site-button add-btn button-sm"
                    >
                    <i className="fa fa-pencil m-r5"></i> Add
                    </Link>
                )} */}
              </div>
              <p>All candidates data</p>
              <table>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Video</th>
                    <th>Action</th>
                    {/* <th>Top 3 Skills</th> */}
                    {/* <th></th> */}
                  </tr>
                </thead>
                <tbody>
                  {state.AllUserData?.length > 0 &&
                    state.AllUserData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item?.f_name} {item?.l_name}
                        </td>

                        <td>
                          {item?.video}
                          {/* <ReactPlayer
                            url={item?.video}
                            width="100%"
                            height="100%"
                            controls={true}
                          /> */}
                        </td>
                        <td>
                          <Toggle
                            defaultChecked={item?.is_reviewed}
                            onChange={async () => {
                              await callUploadProfileisReviewd(
                                !item?.is_reviewed,
                                index
                              );
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
