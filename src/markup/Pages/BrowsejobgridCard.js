import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import CompanyFindbox from "../Element/CompanyFindbox";
import { useSelector, useDispatch } from "react-redux";
import {
  AddWishlistCandidate,
  AddWishlistCompany,
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
import ReactPlayer from "react-player";

var bnr = require("./../../images/banner/bnr1.jpg");

export default function BrowsejobgridCard({
  item,
  index,
  isWishlistPage,
}) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    checkLiked();
  }, []);

  const checkLiked = () => {
    const val = state.wishlist.find((element) => {
      if (element.job_id == item?.id) {
        return true;
      }
      return false;
    });
    setIsLiked(val);
  };

  const onClickLike = async () => {
    await dispatch(AddWishlistCandidate(item?.id));
  };

  return (
    <li
      className={`   ${
        isWishlistPage ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"
      } `}
      key={index}
    >
      <div
        style={isWishlistPage ? { padding: "1rem", margin: 3 } : { margin: 3 }}
        className="post-bx "
      >
        <div className="">
          {item?.video ? (
            <video className="card-img-top" width="auto" height="165" controls>
              <source src={item?.video} type="video/mp4" />
              <source src={item?.video} type="video/wmv" />
              <source src={item?.video} type="video/mkv" />
              <source src={item?.video} type="video/mov" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div style={{ width: "auto", height: "170px" }}>
              <img
                className="card-img-top"
                src={
                  item?.company?.pic != null
                    ? item?.company?.pic
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
          )}
        </div>
        <div className="d-flex m-b30">
          <div className="job-post-info ">
            <h5
              className="text-uppercase text-decoration-none fontTitle"
              style={{
                textDecoration: "none !important",
                fontSize: 15,
              }}
            >
              <Link
                to={{
                  pathname: `/job-detail`,
                  search: `?id=${item?.id}&company=${item?.company_id}`,
                  state: {
                    company_id: item?.company_id,
                    post_id: item?.id,
                  },
                }}
              >
                {item?.job_title}
              </Link>

              {/* <br /> */}
              <div
                className="text-uppercase mbt00 cardGridFont"
                style={{
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
              >
                {SeniorityLevel.findIndex(
                  (x) => x?.id == item?.seniority_level
                ) == -1
                  ? "Not mentioned"
                  : SeniorityLevel[
                      SeniorityLevel.findIndex(
                        (x) => x?.id == item?.seniority_level
                      )
                    ].name}
              </div>
              <div>
                <Link
                  to={{
                    pathname: "/company-detail",
                    search: `?company_id=${item?.company_id}`,
                    state: {
                      company_id: item?.company_id,
                    },
                  }}
                >
                  <span
                    className="text-uppercase mb-0 cardGridFont"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#1b6cd5",
                      textDecoration: "none",
                    }}
                  >
                    {item?.company?.company_name}
                  </span>
                </Link>
              </div>
            </h5>
            <ul
              style={{
                marginTop: "-12px",
                textDecoration: "none",
              }}
            >
              <li
                style={{ marginBottom: 0 }}
                className="mb-0 cardGridFont fontLocationItems"
              >
                <i className="fa fa-map-marker"></i>
                {item?.city?.name}
                {item?.city && ", "}
                {item?.state?.name}
                {item?.state?.name?.length > 6 && "... "}
                {item?.country?.name}
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-2 d-flex " style={{ marginTop: "-30px" }}>
          {/* <div className="text-primary">
          <i className="fa fa-bookmark-o"></i>{" "}
          {employmentTypeDrop.findIndex(
            (x) => x?.id == item.employment_type
          ) == -1
            ? ""
            : employmentTypeDrop[
                employmentTypeDrop.findIndex(
                  (x) => x?.id == item.employment_type
                )
              ].name}
        </div> */}
          <div className="mb-0 cardGridFont fontLocationItems text-primary">
            <i className="fa fa-clock-o"></i>{" "}
            {jobTypeDrop.findIndex((x) => x?.id == item?.job_type) == -1
              ? ""
              : jobTypeDrop[
                  jobTypeDrop.findIndex((x) => x?.id == item?.job_type)
                ].name}
          </div>
        </div>

        <div className="d-flex">
          <div className="mb-0  cardGridFont job-time mr-auto">
            <span>{daysSinceGivenDate(new Date(item?.created_at))} ago</span>
          </div>
          <div className="mb-0 cardGridFont salary-bx">
            <span style={{ fontSize: 15 }}>
              {SalaryRange.findIndex((x) => x?.id == item?.salary_range) == -1
                ? ""
                : ` ${item?.country ? item?.country?.currency_symbol : ""} ${
                    SalaryRange[
                      SalaryRange.findIndex((x) => x?.id == item?.salary_range)
                    ].name
                  }`}
            </span>
          </div>
        </div>
        {state?.userDetails?.company_name ? (
          ""
        ) : (
          <label className="like-btn">
            <input
              type="checkbox"
              onClick={() => {
                onClickLike();
              }}
              defaultChecked={isLiked}
            />

            <span className="checkmark">
              {isLiked ? (
                <i className="iconPosDet fa fa-heart" aria-hidden="true"></i>
              ) : (
                <i className="iconPosDet fa fa-heart-o" aria-hidden="true"></i>
              )}
            </span>
          </label>
        )}
      </div>
    </li>
  );
}
