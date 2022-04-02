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
                    : "No Candidates Found"}{" "}
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
                    <Link
                      style={{
                        paddingRight: 3,
                        paddingLeft: 3,
                      }}
                      to={{
                        pathname: "view-candidate-profile",

                        state: { thing: "asdf", another1: "stuff" },
                      }}
                      className=" col-md-4 col-lg-3 col-xs-12 col-sm-6  mb-2 marginMobileBrowseCard "
                    >
                      <div
                        className="card p-3"
                        style={{
                          // width: "18rem",
                          borderWidth: 4,
                          borderRadius: 20,
                          borderColor: "#0275d8",
                          paddingBottom: 9,
                          minHeight: "380px",
                          maxHeight: "380px",
                        }}
                      >
                        <div className="containerImageGrid">
                          {item.video ? (
                            <video
                              className="card-img-top"
                              width="auto"
                              height="165"
                              controls
                            >
                              <source src={item.video} type="video/mp4" />
                              <source src={item.video} type="video/wmv" />
                              <source src={item.video} type="video/mkv" />
                              <source src={item.video} type="video/mov" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <img
                              className="card-img-top"
                              src={
                                item?.pic != null
                                  ? item?.pic
                                  : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                              }
                              alt="Card image cap"
                            />
                          )}

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
                        <div
                          style={{
                            padding: 0,
                            paddingTop: 10,
                          }}
                          className="card-body"
                        >
                          <h5
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "clip",
                            }}
                            className=" card-title"
                          >
                            <i className="fa mr-2  fa-user"></i> {item.f_name}{" "}
                            {item.l_name}
                          </h5>
                          <p
                            style={{
                              marginTop: "-10px",
                              marginLeft: "25px",
                            }}
                            className="mb-0 cardGridFont"
                          >
                            {item?.employments[0]?.role != null &&
                            item?.employments[0]?.role != "" ? (
                              <>{item?.employments[0]?.role},</>
                            ) : (
                              "Role"
                            )}{" "}
                          </p>
                          <p
                            style={{
                              marginTop: "-10px",
                              marginLeft: "25px",
                            }}
                            className="mb-0 cardGridFont"
                          >
                            {item.employments[0]?.organization != null &&
                            item.employments[0]?.organization != ""
                              ? item.employments[0].organization
                              : "Confidential"}
                          </p>
                          <br />
                          <h5
                            style={{
                              marginTop: "-10px",
                            }}
                            className="mb-0  card-title"
                          >
                            <i className="fa fa-list"></i> Top Skills
                          </h5>
                          <ul className="mb-0">
                            {item.candidate_skills.length > 1 ? (
                              item.candidate_skills.map((skill) => (
                                <li
                                  style={{
                                    display: "block",
                                    color: "#6f6f6f",
                                    marginLeft: "25px",
                                  }}
                                  className="cardGridFont"
                                >
                                  {
                                    state.skills[
                                      state.skills.findIndex(
                                        (x) => x.id == skill.skill_id
                                      )
                                    ].name
                                  }
                                </li>
                              ))
                            ) : (
                              <>
                                <li
                                  style={{
                                    display: "block",
                                    color: "#6f6f6f",
                                    marginLeft: "25px",
                                  }}
                                  className="cardGridFont"
                                >
                                  Skill 1
                                </li>
                                <li
                                  style={{
                                    display: "block",
                                    color: "#6f6f6f",
                                    marginLeft: "25px",
                                  }}
                                  className="cardGridFont"
                                >
                                  Skill 2
                                </li>
                                <li
                                  style={{
                                    display: "block",
                                    color: "#6f6f6f",
                                    marginLeft: "25px",
                                  }}
                                  className="cardGridFont"
                                >
                                  Skill 3
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </Link>
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
