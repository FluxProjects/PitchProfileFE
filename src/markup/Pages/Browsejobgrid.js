import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Jobfindbox from "./../Element/Jobfindbox";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCandidates } from "../../redux/action/candidates/BrowseCandidatesAction";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function Browsejobgrid({}) {
  const [loading, setLoading] = useState(true);

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
      <Header />
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dez-bnr-inr-entry">
              <h1 className="text-white">Browse Candidates Grid</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>Browse Candidates Grid</li>
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
                  2269 Candidates Found
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

              <div className="post-job-bx browse-job-grid row">
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  state.allCandidates.map((item, index) => (
                    <div className="col-md-3 col-lg-4 col-xs-12 col-sm-12 mb-4">
                      <div
                        className="card"
                        style={{
                          width: "18rem",
                          borderWidth: 2,
                          borderRadius: 20,
                          borderColor: "#0275d8",
                        }}
                      >
                        <div className="containerImageGrid">
                          <video
                            className="card-img-top"
                            width="320"
                            height="240"
                            controls
                          >
                            <source src={item.video} type="video/mp4" />
                            <source src={item.video} type="video/wmv" />
                            <source src={item.video} type="video/mkv" />
                            <source src={item.video} type="video/mov" />
                            Your browser does not support the video tag.
                          </video>
                          {/* <img
                            className="card-img-top"
                            src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                            alt="Card image cap"
                          /> */}
                          <p className="playBtn">Play</p>
                          <span
                            style={{
                              zIndex: 10,
                              backgroundColor: "red",
                              color: "white",
                              width: "100%",
                              textAlign: "center",
                            }}
                            className="isAvail"
                          >
                            {item.is_active == true
                              ? "Available"
                              : "Unavailable"}
                          </span>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">
                            {item.f_name} {item.l_name}
                          </h5>
                          <p>
                            {item.headline}, {item.employments[0].organization}
                          </p>
                          <br />

                          <ul>
                            {item.candidate_skills.map((skill) => (
                              <li style={{ display: "block" }} className="">
                                {
                                  state.skills[
                                    state.skills.findIndex(
                                      (x) => x.id == skill.skill_id
                                    )
                                  ].name
                                }
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="pagination-bx m-t30">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
