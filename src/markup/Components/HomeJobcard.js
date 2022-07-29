import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddWishlistCandidate } from "../../redux/action";
import { jobTypeDrop, SalaryRange } from "../../utils/DropDownUtils";
import { daysSinceGivenDate } from "../../utils/functions";

export default function HomeJobcard({ item, index }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState();

  const onClickLike = async () => {
    console.log("called acndid");

    await dispatch(AddWishlistCandidate(item.id));
  };
  return (
    <li key={index}>
      <div className="post-bx">
        <div className="d-flex m-b30">
          <div className="job-post-company">
            <span>
              <img
                alt=""
                src={
                  item?.company?.pic != null
                    ? item?.company?.pic
                    : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                }
              />
            </span>
          </div>
          <div className="job-post-info">
            <h4>
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

                {/* {item?.job_title?.length > 8 && "... "} */}
                {/* {item?.seniority_level != null && "- "} */}
                {/* <span
            className="text-uppercase"
            style={{
              fontSize: "12px",
              fontWeight: "normal",
            }}
          >
            {SeniorityLevel.findIndex(
              (x) => x?.id == item?.seniority_level
            ) == -1
              ? ""
              : SeniorityLevel[
                  SeniorityLevel.findIndex(
                    (x) => x?.id == item?.seniority_level
                  )
                ].name}
             {item.department?.name} 
          </span> */}
              </Link>
            </h4>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i> {item?.city?.name}
                {item?.city && ", "} {item?.state?.name}
                {item?.state && ", "}
                {item?.country?.sortname}
              </li>
              <li>
                <i className="fa fa-bookmark-o"></i>{" "}
                {jobTypeDrop.findIndex((x) => x?.id == item?.job_type) == -1
                  ? ""
                  : jobTypeDrop[
                      jobTypeDrop.findIndex((x) => x?.id == item?.job_type)
                    ].name}
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div className="job-time mr-auto">
            <Link to={""}>
              <span>{daysSinceGivenDate(new Date(item?.created_at))} ago</span>
            </Link>
          </div>
          <div className="salary-bx">
            <span>
              {SalaryRange.findIndex((x) => x?.id == item?.salary_range) == -1
                ? ""
                : ` 
$
             ${
               SalaryRange[
                 SalaryRange.findIndex((x) => x?.id == item?.salary_range)
               ].name
             }`}
            </span>
          </div>
        </div>
        {/* <label className="like-btn">
          <input
            onClick={() => {
              onClickLike();
            }}
            defaultChecked={isLiked}
            type="checkbox"
          />
          <span className="checkmark"></span>
        </label> */}
      </div>
    </li>
  );
}
