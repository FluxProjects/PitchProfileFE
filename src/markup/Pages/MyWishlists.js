import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import CompanyProfileSidebar from "../Element/CompanyProfileSidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetJobApplications } from "../../redux/action/jobApplications/jobApplicationsActions";
import { SalaryRange } from "../../utils/DropDownUtils";
import { URL } from "../../utils/APIUtils";
import { GetWishlistCandidate, GetWishlistCompany } from "../../redux/action";
import Profilesidebar from "../Element/Profilesidebar";
import Header from "../Layout/Header";

export default function MyWishlists() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const callGetWishlists = async () => {
    if (state?.userDetails?.company_name) {
      console.log("called companu");
      await dispatch(GetWishlistCompany());
    } else {
      console.log("called acndid");
      await dispatch(GetWishlistCandidate());
    }
    setLoading(false);
  };

  useEffect(() => {
    callGetWishlists();
  }, []);

  if (loading) {
    return (
      <div className="page-wraper">
        <p>Loading... </p>
      </div>
    );
  } else {
    return (
      <>
        {state.userDetails?.company_name ? <Header2 /> : <Header />}
        <div className="page-content bg-white">
          <div className="content-block">
            <div className="section-full bg-white p-t50 p-b20">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 m-b30">
                    {state.userDetails?.company_name ? (
                      <CompanyProfileSidebar
                        image={`require("./../../images/team/pic1.jpg")`}
                        isActive="My Wishlists"
                      />
                    ) : (
                      <Profilesidebar
                        image={`require("./../../images/team/pic1.jpg")`}
                        isActive="My Wishlists"
                      />
                    )}
                  </div>
                  <div className="col-xl-9 col-lg-8 m-b30">
                    <div className="job-bx clearfix">
                      <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700 pull-left text-uppercase">
                          {state.wishlist.length}{" "}
                          {state.userDetails?.company_name
                            ? "Candidates"
                            : "Jobs"}{" "}
                          Wishlisted
                        </h5>
                        <Link
                          to={"/company-manage-job"}
                          className="site-button right-arrow button-sm float-right"
                        >
                          Back
                        </Link>
                      </div>
                      <ul className="post-job-bx browse-candidate-grid post-resume row">
                        {state.wishlist?.map((item, index) => (
                          <li className="col-lg-6 col-md-6" key={index}>
                            <Link
                              to={{
                                pathname: "/company-detail",
                                state: {
                                  company_id: item?.company_id,
                                },
                              }}
                            >
                              <div className="post-bx">
                                <div className="d-flex m-b20">
                                  <div className="job-post-info">
                                    <h5 className="m-b0">
                                      <Link
                                        to={{
                                          pathname: "view-candidate-profile",
                                          state: { id: item.candidate_id },
                                        }}
                                      >
                                        {item?.job?.job_title}
                                      </Link>
                                    </h5>
                                    <p className="m-b5 font-13">
                                      {item?.job?.company?.company_name}
                                      <Link to={""} className="text-primary">
                                        {" "}
                                      </Link>
                                      {/* at Atract Solutions */}
                                    </p>
                                    <ul>
                                      <li>
                                        <i className="fa fa-map-marker"></i>
                                        {item?.job?.city?.name}
                                        {item?.job?.city && ", "}{" "}
                                        {item?.job?.state?.name}
                                        {item?.job?.state && ", "}
                                        {item?.job?.country?.sortname}
                                      </li>
                                      <li>
                                        <i className="fa fa-money"></i> ${" "}
                                        {SalaryRange.findIndex(
                                          (x) =>
                                            x?.id == item?.job?.salary_range
                                        ) == -1
                                          ? ""
                                          : SalaryRange[
                                              SalaryRange.findIndex(
                                                (x) =>
                                                  x?.id ==
                                                  item?.job?.salary_range
                                              )
                                            ].name}
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="job-time m-t15 m-b10">
                                  {item?.candidate?.candidate_skills.map(
                                    (skill) => (
                                      <Link to={""} className="mr-1">
                                        <span>
                                          {" "}
                                          {
                                            state.skills[
                                              state.skills.findIndex(
                                                (x) => x.id == skill.skill_id
                                              )
                                            ].name
                                          }
                                        </span>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="pagination-bx float-right">
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
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
