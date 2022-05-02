import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CompanyFindbox from "../Element/CompanyFindbox";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAllJobPosts,
  GetWishlistCandidate,
  GetWishlistCompany,
} from "../../redux/action";
import {
  employmentTypeDrop,
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
  shiftDrop,
} from "../../utils/DropDownUtils";
import { daysSinceGivenDate } from "../../utils/functions";
import Header2 from "../Layout/Header2";
import BrowsejobgridCard from "./BrowsejobgridCard";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Browsejobgrid() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const CallGetMyJobPosts = async () => {
    await dispatch(GetAllJobPosts());
    if (state?.userDetails?.company_name) {
      console.log("called companu");
      await dispatch(GetWishlistCompany());
    } else {
      console.log("called acndid");

      await dispatch(GetWishlistCandidate());
    }
    setLoading(false);
  };

  useEffect(() => {
    CallGetMyJobPosts();
  }, []);

  return (
    <div className="page-wraper">
      {state.userDetails?.company_name ? <Header2 /> : <Header />}
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Browse Jobs</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>All Jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <CompanyFindbox />

          <div className="section-full bg-white browse-job p-b50">
            <div className="container">
              <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">
                  {state.Alljobs.length} Jobs Found
                </h5>
                <div className="float-right"></div>
              </div>

              {loading ? (
                "Loading..."
              ) : (
                <ul className="post-job-bx browse-job-grid row">
                  {state.Alljobs.map((item, index) => (
                    <BrowsejobgridCard item={item} index={index} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
