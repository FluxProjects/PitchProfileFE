import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginUser } from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";
import Loginpage3 from "./Loginpage3";
import Register from "./Register";

export default function LoginContainer() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isCurrentTab, setIsCurrentTab] = useState("login");

  const callLoginUser = async () => {
    await dispatch(LoginUser(email.toLowerCase(), password, history));
    // router.push("/registration/");
  };

  const textInputFields = [
    {
      name: "email",
      required: "true",
      className: "form-control ",
      placeholder: "Your email",
      type: "text",
      label: "Email",
      onChange: (e) => {
        setEmail(e.target.value.toLowerCase());
      },
      value: email.toLowerCase(),
    },
    {
      name: "password",
      required: "true",
      className: "form-control ",
      placeholder: "Your password",
      type: "password",
      label: "Password",
      onChange: (e) => {
        setPassword(e.target.value);
      },
      value: password,
    },
  ];

  return (
    <div className="page-content bg-gray login-form-bx browse-job login-style2">
      <div className="section-full">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-7 box-skew ">
              {/* Container left */}
            </div>
            <div className="col-lg-6 col-md-5 d-flex ">
              {/* Container right */}
              <p className="font-weight-600 text-center">
                <Link to={"/company-login"}>Login as a comapny</Link>.
              </p>
              {isCurrentTab == "login" ? (
                <Loginpage3
                  isCurrentTab={isCurrentTab}
                  setIsCurrentTab={(e) => {
                    console.log("test", e);
                    setIsCurrentTab(e);
                  }}
                />
              ) : (
                <Register
                  isCurrentTab={isCurrentTab}
                  setIsCurrentTab={(e) => {
                    console.log("test", e);
                    setIsCurrentTab(e);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <footer className="login-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* <span className="float-left text-black-light">
                {" "}
                © Copyright by{" "}
                <i className="fa fa-heart m-lr5 text-red heart"></i>
                <Link to={"#"} className="text-primary">
                  Pitch profile{" "}
                </Link>
              </span>
              <span className="float-right">All rights reserved.</span> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
