import React, { Component } from "react";
import { Link } from "react-scroll";
import ListingSidebarRouterLink from "./ListingSidebarRouterLink";
import { useHistory } from "react-router-dom";
export default function Listingsidebar({ isView, isCompany, isMyProfile }) {
  const router = useHistory();
  return (
    <div className="sticky-top bg-white">
      <div className="candidate-info onepage">
        <ul>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="profile_summary_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Profile Summary</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="employment_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Employment</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="education_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Education</span>
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="it_skills_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="projects_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Projects</span>
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="Certification_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Certification</span>
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="social_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Social Profiles</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="reference_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>References</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="desired_career_profile_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Desired Career Profile</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="personal_details_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Personal Details</span>
            </Link>
          </li>
          {/* <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              to="attach_resume_bx"
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Attach Cover Letter</span>
            </Link>
          </li> */}
          {console.log("isMyProfileisMyProfileisMyProfile", isMyProfile)}
          {!isCompany && isMyProfile && (
            <ListingSidebarRouterLink isView={isView} />
          )}
          <li>
            <Link
              activeClass="active"
              className="scroll-bar nav-link"
              onClick={() => {
                router.goBack();
              }}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span>Go back</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
