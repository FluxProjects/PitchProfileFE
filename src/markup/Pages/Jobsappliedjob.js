import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import AppliedJobListCard from "../Components/Candidate/AppliedJobListCard";
import Profilesidebar from "../Element/Profilesidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  GetJobApplications,
  GetJobCandidateApplications,
} from "../../redux/action/jobApplications/jobApplicationsActions";
import BrowsejobgridCard from "./BrowsejobgridCard";
import AppliedJobGrid from "./AppliedJobGrid";

const postBlog = [
  { title: "PHP Web Developer", application: "Short listed" },
  { title: "Software Developer", application: "Applied" },
];

export default function Jobsappliedjob() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CallGetJobCandidateApplications();
  }, []);

  const CallGetJobCandidateApplications = async () => {
    await dispatch(GetJobCandidateApplications());
    setLoading(false);
  };

  useEffect(() => {
    callGetJobApplications();
  }, []);

  const callGetJobApplications = async () => {
    await dispatch(GetJobApplications());
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <Header2 />
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white p-t50 p-b20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 m-b30">
                    <Profilesidebar
                      image={`require("./../../images/team/pic1.jpg")`}
                      isActive="Applied Jobs"
                    />
                  </div>

                  <div className="col-xl-9 col-lg-8 m-b30 browse-job">
                    <div className="job-bx-title  clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        {state?.JobApplicationsBackup?.length} Jobs Applied
                      </h5>

                      <div className="float-right">
                        <Link
                          className="btn btn-primary mr-1"
                          onClick={() => {
                            console.log("test");
                            // dispatch(filterClosingDate());
                          }}
                        >
                          Sort by newest
                        </Link>

                        <Link
                          className="btn btn-primary"
                          onClick={() => {
                            console.log("test");
                            // dispatch(resetFilterClosingDate());
                          }}
                        >
                          Reset
                        </Link>
                      </div>
                      {/* <div className="float-right">
                        <span className="select-title">ess</span>
                        <select className="custom-btn">
                          <option>Last 2 Months</option>
                          <option>Last Months</option>
                          <option>Last Weeks</option>
                          <option>Last 3 Days</option>
                        </select>
                      </div> */}
                    </div>
                    <ul className="post-job-bx browse-job-grid row">
                      {state?.JobApplicationsBackup?.map((item, index) => (
                        <AppliedJobGrid item={item} index={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
