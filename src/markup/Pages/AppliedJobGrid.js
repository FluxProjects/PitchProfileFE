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

var bnr = require("./../../images/banner/bnr1.jpg");

export default function AppliedJobGrid({ item, index }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    checkLiked();
  }, []);

  const checkLiked = () => {
    const val = state.wishlist.find((element) => {
      console.log("istrue yahoo", element.job_id, item.id);

      if (element.job_id == item.id) {
        console.log("istrue isliked yahoo");
        return true;
      }
      return false;
    });
    setIsLiked(val);
  };

  const onClickLike = async () => {
    if (state?.userDetails?.company_name) {
      console.log("called companu");
      await dispatch(AddWishlistCompany(item.id));
    } else {
      console.log("called acndid");

      await dispatch(AddWishlistCandidate(item.id));
    }
  };

  return (
    <li className="col-lg-4 col-md-6" key={index}>
      <div className="post-bx">
        <div className="mb-4">
          {item.video ? (
            <video className="card-img-top" width="auto" height="165" controls>
              <source src={item.video} type="video/mp4" />
              <source src={item.video} type="video/wmv" />
              <source src={item.video} type="video/mkv" />
              <source src={item.video} type="video/mov" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div style={{ width: "auto", height: "165px" }}>
              <img
                className="card-img-top"
                src={
                  item?.company?.pic != null
                    ? item?.company?.pic
                    : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                }
                style={{ width: "100%", height: "auto" }}
                alt="Card image cap"
              />
            </div>
          )}
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
                  pathname: `/job-detail`,
                  search: `?id=${item?.job?.id}&company=${item?.job?.company_id}`,
                  state: {
                    company_id: item?.job?.company_id,
                    post_id: item?.job?.id,
                  },
                }}
              >
                {/* {item?.job?.job_title?.substring(0, 5)}
                {"... "}
                {item?.job?.seniority_level != null && "- "} */}
                {item?.job?.job_title}
                <span
                  className="text-uppercase"
                  style={{
                    fontSize: "12px",
                    fontWeight: "normal",
                  }}
                >
                  {SeniorityLevel.findIndex(
                    (x) => x?.id == item?.job?.seniority_level
                  ) == -1
                    ? ""
                    : SeniorityLevel[
                        SeniorityLevel.findIndex(
                          (x) => x?.id == item?.job?.seniority_level
                        )
                      ].name}
                  {/* {item.department?.name} */}
                </span>
              </Link>

              <br />
              <Link
                to={{
                  pathname: "/company-detail",
                  search: `?company_id=${item?.job?.company_id}`,
                  state: {
                    company_id: item?.job?.company_id,
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
                  {/* {item.department?.name} */}
                </span>
              </Link>
            </h5>
            <ul
              style={{
                marginTop: "-12px",
                textDecoration: "none",
              }}
            >
              <li className="mb-0 cardGridFont">
                <i className="fa fa-map-marker"></i>
                {item?.job?.city?.name}
                {item.job?.city && ", "} {item.job?.state?.name}
                {item.job?.state && ", "}
                {item.job?.country?.sortname}
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
          <div className="mb-0 cardGridFont text-primary">
            <i className="fa fa-clock-o"></i>{" "}
            {jobTypeDrop.findIndex((x) => x?.id == item.job?.job_type) == -1
              ? ""
              : jobTypeDrop[
                  jobTypeDrop.findIndex((x) => x?.id == item.job?.job_type)
                ].name}
          </div>
        </div>

        <div className="d-flex">
          <div className="mb-0  cardGridFont job-time mr-auto">
            <Link to={""}>
              <span>
                {daysSinceGivenDate(new Date(item.job?.created_at))} ago
              </span>
            </Link>
          </div>
          <div className="mb-0 cardGridFont salary-bx">
            <span>
              {SalaryRange.findIndex((x) => x?.id == item?.job?.salary_range) ==
              -1
                ? ""
                : SalaryRange[
                    SalaryRange.findIndex(
                      (x) => x?.id == item?.job?.salary_range
                    )
                  ].name}
            </span>
          </div>
        </div>
        <label className="like-btn">
          <input
            type="checkbox"
            onClick={() => {
              onClickLike();
            }}
            defaultChecked={isLiked}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    </li>
  );
}
