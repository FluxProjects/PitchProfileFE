import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterCandidateAvailability } from "../../redux/action/candidates/FilterMyResumeAction";
import { AvailabliltyDrop } from "../../utils/DropDownUtils";
import DropDownModalComponent from "../Components/JobsMyResume/DropDownModalComponent";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";

export default function Jobfindbox({ isView }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [availabliltyFilter, setAvailabliltyFilter] = useState(0);
  const [skillFilter, setSkillFilter] = useState(0);
  const [companyFilter, setCompanyFilter] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");

  useEffect(() => {
    var i = 0;

    // Placeholder Animation Start
    var inputSelector = document.querySelectorAll("input, textarea");

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("focus", function (event) {
        return this.parentElement.parentElement.classList.add("focused");
      });
    }

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("blur", function (event) {
        var inputValue = this.value;
        if (inputValue === "") {
          this.parentElement.parentElement.classList.remove("filled");
          this.parentElement.parentElement.classList.remove("focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    }

    // Placeholder Animation End
  }, []);

  const callFilter = () => {
    dispatch(
      filterCandidateAvailability(
        availabliltyFilter,
        skillFilter,
        companyFilter,
        designationFilter
      )
    );
  };

  return (
    <div className="section-full browse-job-find">
      <div className="container">
        <div className="find-job-bx">
          <form className="dezPlaceAni">
            <div className="row">
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  {/* <label className="">Availablilty</label> */}
                  <div className="input-group mt-2 ">
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setAvailabliltyFilter(e.target.value);
                      }}
                      value={availabliltyFilter}
                      options={AvailabliltyDrop}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  {/* <label>Skill</label> */}
                  <div className="input-group mt-2">
                    <DropDownModalComponent
                      onChange={(e) => {
                        console.log("eee", e.target.value);
                        setSkillFilter(e.target.value);
                      }}
                      value={skillFilter}
                      options={state.skills}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>Company</label>
                  <div className="input-group ">
                    <TextInputModal
                      onChange={(e) => {
                        // console.log(e.target.value);

                        setCompanyFilter(e.target.value);
                        console.log(companyFilter);
                      }}
                      value={companyFilter}
                      placeholder=""
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="form-group">
                  <label>Designation Filter</label>
                  <div className="input-group">
                    <TextInputModal
                      onChange={(e) => {
                        console.log(e.target.value);
                        setDesignationFilter(e.target.value);
                      }}
                      value={designationFilter}
                      placeholder=""
                    />

                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fa fa-map-marker"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    callFilter();
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  Reset Filter
                </button>
              </div>
              <div className="col-lg-2 col-md-6">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    callFilter();
                  }}
                  type="submit"
                  className="site-button btn-block"
                >
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
