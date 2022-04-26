import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import Tab2 from "./../Element/Tab2";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCompanies } from "../../redux/action";
var bnr = require("./../../images/banner/bnr1.jpg");

export default function Companies(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    callGetAllCompanies();
  }, []);

  const callGetAllCompanies = async () => {
    await dispatch(GetAllCompanies());
  };

  return (
    <>
      <Header />
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
              <Tab2 />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
