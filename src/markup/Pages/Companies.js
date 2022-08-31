import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Tab2 from "./../Element/Tab2";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCompanyAlphabetical,
  GetAllCompanies,
  ResetAllCompanies,
} from "../../redux/action";
import classnames from "classnames";
import {
  jobTypeDrop,
  SalaryRange,
  SeniorityLevel,
} from "../../utils/DropDownUtils";
import { daysSinceGivenDate } from "../../utils/functions";
import Header2 from "../Layout/Header2";
var bnr = require("./../../images/banner/bnr1.jpg");

export default function Companies(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    callGetAllCompanies();
  }, []);

  const callGetAllCompanies = async () => {
    await dispatch(GetAllCompanies());
    setLoading(false);
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
    dispatch(filterCompanyAlphabetical(tab));
  };

  return (
    <>
      {state.userDetails?.company_name ? <Header2 /> : <Header />}
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
              <h1 className="text-white">Companies</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li>Companies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-block">
          <div className="section-full bg-white content-inner">
            <div tabs="true">
              <div className="site-filters clearfix center  m-b40">
                <ul className="filters mr-3 ml-3" data-toggle="buttons">
                  <li
                    className={classnames({ active: activeTab === "All" })}
                    onClick={() => {
                      toggle("All");
                      dispatch(ResetAllCompanies());
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>All</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "a" })}
                    onClick={() => {
                      toggle("a");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>A</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "b" })}
                    onClick={() => {
                      toggle("b");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>B</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "c" })}
                    onClick={() => {
                      toggle("c");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>C</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "d" })}
                    onClick={() => {
                      toggle("d");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>D</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "e" })}
                    onClick={() => {
                      toggle("e");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>E</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "f" })}
                    onClick={() => {
                      toggle("f");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>F</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "g" })}
                    onClick={() => {
                      toggle("g");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>G</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "h" })}
                    onClick={() => {
                      toggle("h");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>H</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "i" })}
                    onClick={() => {
                      toggle("i");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>I</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "j" })}
                    onClick={() => {
                      toggle("j");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>J</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "k" })}
                    onClick={() => {
                      toggle("k");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>K</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "l" })}
                    onClick={() => {
                      toggle("l");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>L</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "m" })}
                    onClick={() => {
                      toggle("m");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>M</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "n" })}
                    onClick={() => {
                      toggle("n");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>N</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "o" })}
                    onClick={() => {
                      toggle("o");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>O</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "p" })}
                    onClick={() => {
                      toggle("p");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>P</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "q" })}
                    onClick={() => {
                      toggle("q");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>Q</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "r" })}
                    onClick={() => {
                      toggle("r");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>R</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "s" })}
                    onClick={() => {
                      toggle("s");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>S</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "t" })}
                    onClick={() => {
                      toggle("t");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>T</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "u" })}
                    onClick={() => {
                      toggle("u");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>U</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "v" })}
                    onClick={() => {
                      toggle("v");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>V</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "w" })}
                    onClick={() => {
                      toggle("w");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>W</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "x" })}
                    onClick={() => {
                      toggle("x");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>X</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "y" })}
                    onClick={() => {
                      toggle("y");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>Y</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "z" })}
                    onClick={() => {
                      toggle("z");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>Z</span>
                    </Link>
                  </li>
                  <li
                    className={classnames({ active: activeTab === "27" })}
                    onClick={() => {
                      toggle("27");
                    }}
                  >
                    <input type="radio" />
                    <Link to={"#"} className="site-button-secondry radius-sm">
                      <span>#</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul className="post-job-bx browse-job-grid row">
                  {state?.AllCompanies?.map((item, index) => (
                    <li className="col-lg-3 col-md-6" key={index}>
                      <Link
                        to={{
                          pathname: "/company-detail",
                          search: `?company_id=${item?.id}`,
                          state: {
                            company_id: item?.id,
                          },
                        }}
                      >
                        <div
                          className="post-bx"
                          style={{ margin: "0px 3px 8px" }}
                        >
                          <div className="">
                            <div style={{ width: "auto", height: "165px" }}>
                              <img
                                className="card-img-top"
                                src={
                                  item?.pic != null
                                    ? item?.pic
                                    : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                                }
                                style={{
                                  width: "100%",
                                  height: "auto",
                                  maxHeight: "165px",
                                  minHeight: "165px",
                                }}
                                alt="Card image cap"
                              />
                            </div>
                          </div>
                          <div className="d-flex m-b30">
                            <div className="job-post-info ">
                              <h5
                                className="text-uppercase fontTitle text-decoration-none"
                                style={{
                                  textDecoration: "none !important",
                                  fontSize: 15,
                                  marginTop: "2px",
                                }}
                              >
                                <Link
                                  to={{
                                    pathname: "/company-detail",
                                    search: `?company_id=${item?.id}`,
                                    state: {
                                      company_id: item?.id,
                                    },
                                  }}
                                >
                                  {/* {item?.company_name?.substring(0, 11)} */}
                                  {/* {item?.company_name?.length > 11 && "... "} */}
                                  {item?.company_name}
                                </Link>

                                <br />
                                <Link
                                  to={{
                                    pathname: "/company-detail",
                                    search: `?company_id=${item?.id}`,
                                    state: {
                                      company_id: item?.id,
                                    },
                                  }}
                                >
                                  <span
                                    className="text-uppercase fontLocationItems mb-0 cardGridFont "
                                    style={{
                                      // fontSize: "14px",
                                      fontWeight: "normal",
                                      color: "#1b6cd5",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {state?.industries.findIndex(
                                      (x) => x?.id == item?.industry
                                    ) == -1 ? (
                                      <div> ‎ </div>
                                    ) : (
                                      state?.industries[
                                        state?.industries.findIndex(
                                          (x) => x?.id == item?.industry
                                        )
                                      ].name
                                    )}
                                  </span>
                                </Link>
                              </h5>
                              <ul
                                className="mb-0 cardGridFont"
                                style={{
                                  marginTop: "-12px",
                                  textDecoration: "none",
                                }}
                              >
                                <li className="mb-0 fontLocationItems cardGridFont">
                                  <i className="fa fa-map-marker"></i>
                                  {item.city?.name}
                                  {/* {item?.city?.name?.length > 6 && "... "} */}
                                  {item.city && ", "} {item.state?.name}
                                  {/* {item?.state?.name?.length > 6 && "... "} */}
                                  {item.state && ", "}
                                  {item.country?.sortname}
                                </li>
                              </ul>
                            </div>
                          </div>

                          <label className="like-btn">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
