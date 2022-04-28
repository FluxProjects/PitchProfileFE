import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Tab2 from "./../Element/Tab2";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCompanies } from "../../redux/action";
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

  return (
    <>
      {state.userDetails?.company_name ? <Header2 /> : <Header />}
      <div className="page-content bg-white">
        <div
          className="dez-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
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
            <div className="container">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul className="post-job-bx browse-job-grid row">
                  {state.AllCompanies.map((item, index) => (
                    <li className="col-lg-4 col-md-6" key={index}>
                      <Link
                        to={{
                          pathname: "/company-detail",
                          state: {
                            company_id: item?.id,
                          },
                        }}
                      >
                        <div className="post-bx">
                          <div className="mb-4">
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
                                }}
                                alt="Card image cap"
                              />
                            </div>
                          </div>
                          <div className="d-flex m-b30">
                            <div className="job-post-info ">
                              <h5
                                className="text-uppercase text-decoration-none"
                                style={{
                                  textDecoration: "none !important",
                                }}
                              >
                                <Link
                                  to={{
                                    pathname: "/company-detail",
                                    state: {
                                      company_id: item?.id,
                                    },
                                  }}
                                >
                                  {item?.company_name}{" "}
                                </Link>

                                <br />
                                <Link
                                  to={{
                                    pathname: "/company-detail",
                                    state: {
                                      company_id: item?.id,
                                    },
                                  }}
                                >
                                  <span
                                    className="text-uppercase"
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "normal",
                                      color: "#2e55fa",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {state?.industries.findIndex(
                                      (x) => x?.id == item?.industry
                                    ) == -1
                                      ? ""
                                      : state?.industries[
                                          state?.industries.findIndex(
                                            (x) => x?.id == item?.industry
                                          )
                                        ].name}
                                  </span>
                                </Link>
                              </h5>
                              <ul
                                style={{
                                  marginTop: "-12px",
                                  textDecoration: "none",
                                }}
                              >
                                <li>
                                  <i className="fa fa-map-marker"></i>
                                  {item.city?.name}
                                  {item.city && ", "} {item.state?.name}
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
