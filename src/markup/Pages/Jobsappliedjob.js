import React from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import AppliedJobListCard from "../Components/Candidate/AppliedJobListCard";
import Profilesidebar from "../Element/Profilesidebar";

const postBlog = [
  { title: "PHP Web Developer", application: "Short listed" },
  { title: "Software Developer", application: "Applied" },
];

export default function Jobsappliedjob() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <Profilesidebar
                    image={`require("./../../images/team/pic1.jpg")`}
                    isActive="Applied Jobs"
                  />
                </div>
                <div className="col-xl-9 col-lg-8 m-b30 browse-job">
                  <div className="job-bx-title  clearfix">
                    <h5 className="font-weight-700 pull-left text-uppercase">
                      2269 Jobs Found
                    </h5>
                    <div className="float-right">
                      <span className="select-title">Sort by freshness</span>
                      <select className="custom-btn">
                        <option>Last 2 Months</option>
                        <option>Last Months</option>
                        <option>Last Weeks</option>
                        <option>Last 3 Days</option>
                      </select>
                    </div>
                  </div>
                  <ul className="post-job-bx browse-job">
                    {postBlog.map((item, index) => (
                      <AppliedJobListCard item={item} index={index} />
                    ))}
                  </ul>
                  {/* <div className="pagination-bx m-t30">
                    <ul className="pagination">
                      <li className="previous">
                        <Link to={" "}>
                          <i className="ti-arrow-left"></i> Prev
                        </Link>
                      </li>
                      <li className="active">
                        <Link to={" "}>1</Link>
                      </li>
                      <li>
                        <Link to={" "}>2</Link>
                      </li>
                      <li>
                        <Link to={" "}>3</Link>
                      </li>
                      <li className="next">
                        <Link to={" "}>
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

      <Footer />
    </>
  );
}
