import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginUser } from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";
import Footer from "../Layout/Footer";
import HeaderOffline from "../Layout/HeaderOffline";
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
  };
  const textInputFields = [
    {
      name: "email",
      required: "true",
      className: "form-control ",
      placeholder: "Your Email",
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
      placeholder: "Your Password",
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
      <section className="background-radial-gradient bgImageReg overflow-hidden">
        <HeaderOffline fromLogin={true} />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start ">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <img src={require("../../images/networkImg.png")} />
              <h1
                className="my-3 text-left display-5 fw-bold ls-tight"
                style={{ color: "blue" }}
              >
                <span
                  style={{
                    fontWeight: 100,
                    fontFamily: "montserrat",
                    fontSize: 80,
                    color: "white",
                  }}
                >
                  WHO
                </span>{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "montserrat",
                    textTransform: "capitalize",

                    color: "white",
                  }}
                >
                  WE ARE
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
            <div className="col-lg-6 mb-5 mb-lg-0 p-0 position-relative">
              <div
                className="card "
                style={{
                  background: "transparent",
                  border: 0,
                  // borderRadius: 50,
                }}
              >
                <div className="card-body p-0">
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
        <Footer />
      </section>
    </>
  );
}
