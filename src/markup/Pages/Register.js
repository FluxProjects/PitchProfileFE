import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser, verifyCandidate } from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function Register({ setIsCurrentTab, isCurrentTab }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CnfrmPassword, setCnfrmPassword] = useState("");
  const [modal, setModal] = useState("");
  const [otp, setOTP] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const callRegisterUser = async () => {
    setIsDisabled(true);
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
      await dispatch(
        registerUser(
          fname,
          lname,
          email.toLowerCase(),
          password,
          history,
          setModal,
          setIsDisabled
        )
      );
      setIsDisabled(false);
    } else {
      toast.error(`Passwords don't match!`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsDisabled(false);
    }
    // router.push("/registration/");
  };

  const callVerifyOTP = async () => {
    if (otp == state.otp) await dispatch(verifyCandidate(setModal, history));
    else
      toast.error("OTP not matched!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  const textInputFields = [
    {
      name: "firstName",
      required: "true",
      className: "form-control ",
      placeholder: "Your first name",
      type: "text",
      label: "First Name",
      onChange: (e) => {
        setFName(e.target.value);
      },
      value: fname,
    },
    {
      name: "lastName",
      required: "true",
      className: "form-control ",
      placeholder: "Your last name",
      type: "text",
      label: "Last Name",
      onChange: (e) => {
        setLName(e.target.value);
      },
      value: lname,
    },
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
    {
      name: "cnfrmpassword",
      required: "true",
      className: "form-control ",
      placeholder: "Confirm Password",
      type: "password",
      label: "Confirm Password",
      onChange: (e) => {
        setCnfrmPassword(e.target.value);
      },
      value: CnfrmPassword,
    },
  ];

  return (
    <div>
      <Modal
        // backdrop={false}
        scrollable={true}
        show={
          modal
          // true
        }
        onHide={() => setModal(false)}
        className="modal fade modal-bx-info editor"
      >
        <div style={{ padding: 10 }}>
          <RegisterTextInput
            name={
              "A verification code has been sent to your email address. Please enter the code below to complete sign up"
            }
            widthStyle={"50%"}
            textCenter={true}
            showLabel={true}
            required={true}
            placeholder={"Enter OTP"}
            type={"text"}
            label={
              "A verification code has been sent to your email address. Please enter the code below to complete sign up"
            }
            // key={index}
            onChange={(e) => {
              setOTP(e.target.value);
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className=""
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                // callRegisterUser(e);
                callVerifyOTP(e);
              }}
              className="site-button"
            >
              Confirm
            </button>
          </div>
        </div>
      </Modal>
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
          <form id="login" className="tab-pane active col-12  ">
            <ul className="nav flexJustifyAround ">
              <li
                onClick={() => {
                  setIsCurrentTab("login");
                }}
                className="cursorPointer borderTab"
              >
                <a>Sign in</a>
              </li>
              <li
                onClick={() => {
                  setIsCurrentTab("register");
                }}
                className="cursorPointer borderTabActive borderTab"
              >
                <a>Sign up</a>
              </li>
            </ul>

            <h2 className="textHeadingLoginContainer">Sign up for free.</h2>
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
              If you have an account with us,{" "}
              <Link className="text-white" to={"/login"}>
                Log in
              </Link>
              .
            </p>
            <div className="text-left">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  callRegisterUser(e);
                }}
                disabled={isDisabled}
                style={
                  isDisabled
                    ? { background: "gray" }
                    : { background: "white", borderRadius: 50, color: "blue" }
                }
                className="site-button btnLoginReg"
              >
                Sign up
              </button>

              {/* <button
                        onClick={(e) => {
                          e.preventDefault();
                          setModal(true);
                        }}
                        className="site-button mr-2 ml-2"
                      >
                        Open Modal
                      </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
