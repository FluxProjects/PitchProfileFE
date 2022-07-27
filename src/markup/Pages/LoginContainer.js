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
    <>
      {/* Section: Design Block */}
      <section className="background-radial-gradient bgImageReg overflow-hidden">
        {/* <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        /> */}
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start ">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <img src={require("../../images/networkImg.png")} />

              <h1
                className="my-3 text-left display-5 fw-bold ls-tight"
                style={{ color: "blue" }}
              >
                <span style={{ fontWeight: 100, fontSize: 80, color: "white" }}>
                  WHO
                </span>{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  we are
                </span>{" "}
                <br />
              </h1>
              <p
                className="mb-4 text-left opacity-70"
                style={{ color: "white" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <p className="font-weight-600 text-white text-center">
                <Link className="text-white" to={"/company-login"}>
                  Login as a comapny
                </Link>
                .
              </p>
              <div
                className="card "
                style={{
                  background: "transparent",
                  border: 0,
                  // borderRadius: 50,
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
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
        </div>
      </section>
      {/* Section: Design Block */}
    </>

    // <div className="page-content bg-gray login-form-bx browse-job login-style2">
    //   <div className="section-full">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-lg-6 col-md-7 box-skew ">
    //           {/* Container left */}
    //         </div>
    //         <div className="col-lg-6 col-sm-12 col-xs-12 col-md-5 d-flex ">
    //           {/* Container right */}
    // <p className="font-weight-600 text-center">
    //   <Link to={"/company-login"}>Login as a comapny</Link>.
    // </p>
    // {isCurrentTab == "login" ? (
    //   <Loginpage3
    //     isCurrentTab={isCurrentTab}
    //     setIsCurrentTab={(e) => {
    //       console.log("test", e);
    //       setIsCurrentTab(e);
    //     }}
    //   />
    // ) : (
    //   <Register
    //     isCurrentTab={isCurrentTab}
    //     setIsCurrentTab={(e) => {
    //       console.log("test", e);
    //       setIsCurrentTab(e);
    //     }}
    //   />
    // )}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <footer className="login-footer">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-12 text-center">
    //           {/* <span className="float-left text-black-light">
    //             {" "}
    //             © Copyright by{" "}
    //             <i className="fa fa-heart m-lr5 text-red heart"></i>
    //             <Link to={"#"} className="text-primary">
    //               Pitch profile{" "}
    //             </Link>
    //           </span>
    //           <span className="float-right">All rights reserved.</span> */}
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}
