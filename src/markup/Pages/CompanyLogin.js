import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginCompany, LoginUser } from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";

export default function CompanyLogin() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const callLoginUser = async () => {
    await dispatch(LoginCompany(email.toLowerCase(), password, history));
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
            <div className="col-lg-6 col-md-7 box-skew d-flex">
              <div
                className="login-2 p-a30 seth d-flex align-self-center m-auto wow fadeInRight"
                data-wow-delay="0.8s"
              >
                <div className="tab-content nav">
                  <form id="login" className="tab-pane active col-12 p-a0 ">
                    <p className="font-weight-600 text-center">
                      Don't have an account with us,{" "}
                      <Link to={"/register"}>Sign up</Link>.
                    </p>
                    {textInputFields.map((item, index) => (
                      <RegisterTextInput
                        name={item.name}
                        required={item.required}
                        placeholder={item.placeholder}
                        type={item.type}
                        label={item.label}
                        key={index}
                        onChange={item.onChange}
                      />
                    ))}

                    <div className="text-left">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          callLoginUser(e);
                        }}
                        className="site-button"
                      >
                        login
                      </button>
                      <Link
                        data-toggle="tab"
                        to="#forgot-password"
                        className="site-button-link forget-pass pull-right m-t15"
                      >
                        <i className="fa fa-unlock-alt"></i> Forgot Password
                      </Link>
                    </div>
                  </form>
                  <form
                    id="forgot-password"
                    className="tab-pane fade col-12 p-a0"
                  >
                    <p>We will send you an email to reset your password. </p>
                    <div className="form-group">
                      <label>E-Mail address *</label>
                      <div className="input-group">
                        <input
                          name="dzName"
                          required=""
                          className="form-control"
                          placeholder="Your Email Address"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="text-left">
                      <Link
                        className="site-button outline gray"
                        data-toggle="tab"
                        to="#login"
                      >
                        Back
                      </Link>
                      <button className="site-button pull-right">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 d-flex box-skew1">
              <div className="text-white max-w400 align-self-center">
                <div className="logo">
                  <Link to={"./"}>
                    <img
                      src={require("./../../images/logo-white2.png")}
                      alt=""
                    />
                  </Link>
                </div>
                <h2 className="m-b10">Login To You Now</h2>
                <p className="m-b30">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry.
                </p>
                <ul className="list-inline m-a0">
                  <li>
                    <Link to={""} className="m-r10 text-white">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="m-r10 text-white">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="m-r10 text-white">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="m-r10 text-white">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="m-r10 text-white">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
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
