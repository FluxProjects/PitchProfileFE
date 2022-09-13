import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Jobfindbox from "../Element/Jobfindbox";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCandidates } from "../../redux/action/candidates/BrowseCandidatesAction";
import Header2 from "../Layout/Header2";
import { AddWishlistCandidate, AddWishlistCompany } from "../../redux/action";

import ProfileIcon from "./../../images/profile.png";
import SkillIcon from "./../../images/topskills.png";
var bnr = require("./../../images/banner/bnr1.jpg");

export default function BrowseCandidateGridCard({
  item,
  index,
  isWishlistPage,
  fromHomeScreen,
}) {
  console.log("BrowseCandidateGridCardBrowseCandidateGridCard", item);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    checkLiked();
  }, []);

  const checkLiked = () => {
    const val = state.wishlist.find((element) => {
      console.log("istrue yahoo", element.candidate_id, item?.id);

      if (element.candidate_id == item?.id) {
        console.log("istrue isliked yahoo");
        return true;
      }
      return false;
    });
    setIsLiked(val);
  };

  const onClickLike = async (item) => {
    console.log("test click ");
    if (state?.userDetails?.company_name) {
      console.log("called companu");
      await dispatch(AddWishlistCompany(item?.id));
      setIsLiked(!isLiked);
    }
  };

  return (
    <Link
      style={{
        paddingRight: 3,
        paddingLeft: 3,
        fontFamily: "montserrat",
      }}
      className={` ${
        isWishlistPage ? "col-md-4 col-lg-4" : "col-md-4 col-lg-3"
      }   col-xs-12 col-sm-12  mb-2 marginMobileBrowseCard `}
    >
      <div
        className="card p-3"
        style={{
          // width: "18rem",
          borderWidth: 4,
          borderRadius: 8,
          borderColor: "#0275d8",
          paddingBottom: 9,
          minHeight: "380px",
          maxHeight: "380px",
          fontFamily: "montserrat",
        }}
      >
        <div className="containerImageGrid">
          {state?.userDetails?.company_name && (
            <label
              onClick={() => {
                console.log("tetsings ss cicic");
                onClickLike(item);
              }}
              className="like-btn heartBtn zIndexHeart"
            >
              <input
                type="checkbox"
                onClick={() => {
                  // console.log("tetsings ss cicic");
                  onClickLike(item);
                }}
                defaultChecked={isLiked}
              />
              <span className="checkmark"></span>
            </label>
          )}

          {item?.video ? (
            <video className="card-img-top" width="auto" height="165" controls>
              <source src={item?.video} type="video/mp4" />
              <source src={item?.video} type="video/wmv" />
              <source src={item?.video} type="video/mkv" />
              <source src={item?.video} type="video/mov" />
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
              fontFamily: "montserrat",
              fontSize: "12px",
              padding: "2px 0px",
            }}
            className="isAvail"
          >
            {item?.is_active == true ? "Available" : "Employed"}
          </span>
        </div>

        <Link
          to={{
            pathname: "view-candidate-profile",
            search: `?id=${item?.id}`,
            state: { id: item?.id },
          }}
          style={
            {
              // padding: "10px 15px 0px",
              // paddingTop: 10,
            }
          }
          className="card-body"
        >
          <h5
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "clip",
              fontFamily: "montserrat",
              marginBottom: 4,
            }}
            className=" card-title"
          >
            {/* <i className="fa mr-2  fa-user"></i> */}
            <img
              style={{
                width: "20px",
                marginRight: "7px",
              }}
              src={ProfileIcon}
            />
            {item?.f_name} {item?.l_name}
          </h5>
          <p
            style={{
              marginTop: "-10px",
              marginLeft: "25px",
              color: "rgb(111, 111, 111)",
              fontFamily: "montserrat",
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
              color: "rgb(111, 111, 111)",
              fontFamily: "montserrat",
            }}
            className="mb-0 cardGridFont"
          >
            {item?.employments[0]?.organization != null &&
            item?.employments[0]?.organization != ""
              ? item?.employments[0].organization
              : "Confidential"}
          </p>
          <br />
          <h5
            style={{
              marginTop: "-10px",
              fontFamily: "montserrat",
            }}
            className="mb-0  card-title"
          >
            {/* <i className="fa fa-list"></i>  */}
            <img
              style={{
                width: "20px",
                marginRight: "7px",
              }}
              src={SkillIcon}
            />
            Top Skills
          </h5>
          <ul className="mb-0">
            {item?.candidate_skills.length > 0 ? (
              item?.candidate_skills.map((skill) => (
                <li
                  style={{
                    display: "block",
                    color: "#6f6f6f",
                    marginLeft: "25px",
                    fontFamily: "montserrat",
                  }}
                  className="cardGridFont"
                >
                  {!fromHomeScreen
                    ? state.skills[
                        state.skills.findIndex((x) => x.id == skill.skill_id)
                      ].name
                    : skill.name}
                </li>
              ))
            ) : (
              <>
                <li
                  style={{
                    display: "block",
                    color: "#6f6f6f",
                    marginLeft: "25px",
                    fontFamily: "montserrat",
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
                    fontFamily: "montserrat",
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
                    fontFamily: "montserrat",
                  }}
                  className="cardGridFont"
                >
                  Skill 3
                </li>
              </>
            )}
          </ul>
        </Link>
      </div>
    </Link>
  );
}
