import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "./../Layout/Header2";
import Footer from "./../Layout/Footer";
import { UpdateUserPassword } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import TextInputModal from "../Components/JobsMyResume/TextInputModal";
import { toast } from "react-toastify";
import Profilesidebar from "../Element/Profilesidebar";

export default function Changepasswordpage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [CnfrmPassword, setCnfrmPassword] = useState("");
  const CallUpdateUserPassword = async () => {
    if (password.length < 8 || CnfrmPassword.length < 8) {
      toast.error("Password length should be at least 8 characters!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (password == CnfrmPassword) {
      dispatch(
        UpdateUserPassword(state.userDetails.id, password, state.authToken)
      );
    } else {
      toast.error("Passwords do not match!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <div className="content-block">
          <div className="section-full bg-white browse-job p-t50 p-b20">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 m-b30">
                  <Profilesidebar
                    image={`require("./../../images/team/pic1.jpg")`}
                    isActive="Change Password"
                  />
                </div>
                <div className="col-xl-9 col-lg-8 m-b30">
                  <div className="job-bx job-profile">
                    <div className="job-bx-title clearfix">
                      <h5 className="font-weight-700 pull-left text-uppercase">
                        Change Password
                      </h5>
                      <Link
                        to={"/jobs-cv-manager"}
                        className="site-button right-arrow button-sm float-right"
                      >
                        Back
                      </Link>
                    </div>
                    <form>
                      <div className="row">
                        {/* <div className="col-lg-12">
                          <div className="form-group">
                            <label>Old Password</label>
                            <input type="password" className="form-control" />
                          </div>
                        </div> */}
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>New Password </label>
                            <TextInputModal
                              type="password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Confirm New Password</label>
                            <TextInputModal
                              type="password"
                              onChange={(e) => {
                                setCnfrmPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 m-b10">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              CallUpdateUserPassword();
                            }}
                            className="site-button"
                          >
                            Update Password
                          </button>
                        </div>
                      </div>
                    </form>
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
