import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  forgetPassFuncCandidate,
  LoginUser,
  verifyCandidate,
} from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";

export default function Loginpage3({ setIsCurrentTab, isCurrentTab }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [emailForPass, setEmailForPass] = useState("");
  const [showForget, setShowForget] = useState(false);

  const [password, setPassword] = useState("");

  const callLoginUser = async () => {
    await dispatch(LoginUser(email.toLowerCase(), password, history));
    // router.push("/registration/");
  };

  const onForgetPass = async () => {
    await dispatch(forgetPassFuncCandidate(email, setShowForget()));
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
        className=" conatinerLogin tab-content nav"

        // style={{
        //   padding: "35px",
        //   borderRadius: "11px",
        //   border: "5px solid white",
        //   borderRadius: 10,
        // }}
      >
        <form id="login" className="tab-pane active col-12 p-a0 ">
          <ul className="nav flexJustifyAround ">
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

          <h2 className="textHeadingLoginContainer">Sign in.</h2>
          <p className="font-weight-600 text-white text-left">
            Join Thousands of Companies that <br /> use Pitch Profile everyday
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

          <p className="font-weight-600 text-white text-center">
            Don't have an account with us,{" "}
            <Link
              onClick={() => {
                setIsCurrentTab("register");
              }}
              className="text-white"
            >
              Sign up
            </Link>
            .
          </p>
          <div className="text-left">
            <button
              onClick={(e) => {
                e.preventDefault();
                callLoginUser(e);
              }}
              className="site-button btnLoginReg"
            >
              Login
            </button>
            <Link
              onClick={() => {
                setShowForget(!showForget);
              }}
              data-toggle="tab"
              to="#forgot-password"
              className="site-button-link text-white forget-pass pull-right m-t15"
            >
              <i className="fa fa-unlock-alt"></i> Forgot Password
            </Link>
          </div>
        </form>

        <Modal
          // backdrop={false}
          scrollable={true}
          show={showForget}
          onHide={() => setShowForget()}
          className="modal fade modal-bx-info editor"
        >
          <div className="p-6">
            <p>We will send you an email to reset your password. </p>
            <div className="form-group">
              <label>E-Mail address *</label>
              <div className="input-group">
                <input
                  name="dzName"
                  onChange={(e) => {
                    setEmailForPass(e.target.value.toLowerCase());
                  }}
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onForgetPass();
                }}
                className="site-button pull-right"
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
