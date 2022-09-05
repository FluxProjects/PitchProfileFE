import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Jobfindbox from "../Element/Jobfindbox";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCandidates } from "../../redux/action/candidates/BrowseCandidatesAction";
import Header2 from "../Layout/Header2";
import { AddWishlistCandidate, AddWishlistCompany } from "../../redux/action";
import BrowseCandidateGridCard from "./BrowseCandidateGridCard";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Browsecandidategrid({}) {
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    callGetAllCandidates();
  }, []);

  const callGetAllCandidates = async () => {
    await dispatch(GetAllCandidates());
    setLoading(false);
  };

  return (
    <div className="page-wraper">
      {state.userDetails.company_name ? <Header2 /> : <Header />}
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{
            backgroundImage: "url(" + bnr + ")",
            backgroundSize: "cover",
            height: "200px",
          }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Browse Candidates</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>All Candidates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <Jobfindbox />

          <div className="section-full bg-white browse-job p-b50">
            <div className="container">
              <div className="job-bx-title clearfix">
                <h5 className="font-weight-700 pull-left text-uppercase">
                  {loading
                    ? "Loading..."
                    : state.allCandidates.length > 0
                    ? state.allCandidates.length
                    : "No"}{" "}
                  Candidates Found
                </h5>
                {/* <div className="float-right">
                  <span className="select-title">Sort by freshness</span>
                  <select className="custom-btn">
                    <option>Last 2 Months</option>
                    <option>Last Months</option>
                    <option>Last Weeks</option>
                    <option>Last 3 Days</option>
                  </select>
                </div> */}
              </div>

              <div className=" row">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  state.allCandidates.map((item, index) => (
                    <BrowseCandidateGridCard item={item} index={index} />
                  ))
                )}
              </div>
              {/* <div className="pagination-bx m-t30">
                <ul className="pagination">
                  <li className="previous">
                    <Link to={""}>
                      <i className="ti-arrow-left"></i> Prev
                    </Link>
                  </li>
                  <li className="active">
                    <Link to={""}>1</Link>
                  </li>
                  <li>
                    <Link to={""}>2</Link>
                  </li>
                  <li>
                    <Link to={""}>3</Link>
                  </li>
                  <li className="next">
                    <Link to={""}>
                      Next <i className="ti-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
