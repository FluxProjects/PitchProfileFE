import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginUser } from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";

export default function Loginpage3({ setIsCurrentTab, isCurrentTab }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div
      style={{}}
      className="align-items-baseline d-flex justify-content-center"
    >
      <div
        className=" tab-content nav"
        // style={{
        //   padding: "35px",
        //   borderRadius: "11px",
        //   border: "5px solid white",
        //   borderRadius: 10,
        // }}
      >
        <form id="login" className="tab-pane active col-12 p-a0 ">
          <ul className="nav flexJustifyAround nav-tabs">
            <li
              onClick={() => {
                setIsCurrentTab("login");
              }}
              className="cursorPointer borderTabActive active tabLoginPage"
            >
              <a>Sign in</a>
            </li>
            <li
              onClick={() => {
                setIsCurrentTab("register");
              }}
              className="cursorPointer borderTab"
            >
              <a>Sign up</a>
            </li>
          </ul>

          <h2
            style={{
              fontWeight: "bolder",
              color: "blue",
              textTransform: "uppercase",
              marginBottom: 0,
            }}
          >
            Sign in
          </h2>

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

          <p className="font-weight-600 text-center">
            Don't have an account with us, <Link to={"/register"}>Sign up</Link>
            .
          </p>
          <div className="text-left">
            <button
              onClick={(e) => {
                e.preventDefault();
                callLoginUser(e);
              }}
              className="site-button"
              style={{ background: "white", borderRadius: 50, color: "blue" }}
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
        <form id="forgot-password" className="tab-pane fade col-12 p-a0">
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
  );
}
