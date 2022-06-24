import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  registerCompany,
  registerUser,
  verifyCompany,
} from "../../redux/action";
import RegisterTextInput from "../Components/RegisterTextInput";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function CompanyRegister() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CnfrmPassword, setCnfrmPassword] = useState("");
  const [modal, setModal] = useState("");
  const [otp, setOTP] = useState("");
  const [isDisabled, setIsDisabled] = useState("");

  const callRegisterUser = async () => {
    if (password == CnfrmPassword) {
      setIsDisabled(true);
      await dispatch(
        registerCompany(
          companyName,
          email.toLowerCase(),
          password,
          setModal,
          setIsDisabled
        )
      );
    }
    // router.push("/registration/");
  };

  const callVerifyOTP = async () => {
    if (otp == state.otp) await dispatch(verifyCompany(setModal, history));
    else
      toast.error("OTP not matched!", {
        position: "top-right",
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
      name: "companyName",
      required: "true",
      className: "form-control ",
      placeholder: "Your Company Name",
      type: "text",
      label: "Company Name",
      onChange: (e) => {
        setCompanyName(e.target.value);
      },
      value: companyName,
    },
    // {
    //   name: "lastName",
    //   required: "true",
    //   className: "form-control ",
    //   placeholder: "Your last name",
    //   type: "text",
    //   label: "Last Name",
    //   onChange: (e) => {
    //     setLName(e.target.value);
    //   },
    //   value: lname,
    // },
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
    <div className="page-content bg-gray login-form-bx browse-job login-style2">
      <Modal
        // backdrop={false}
        scrollable={true}
        show={modal}
        onHide={() => setModal(false)}
        className="modal fade modal-bx-info editor"
      >
        <div style={{ padding: 10 }}>
          <RegisterTextInput
            name={"OTP"}
            required={true}
            placeholder={"Enter OTP"}
            type={"number"}
            label={
              "A verification code has been sent to your email address. Please enter the code below to complete sign up"
            }
            // key={index}
            onChange={(e) => {
              setOTP(e.target.value);
            }}
          />

          <div className="text-left">
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
                      If you have an account with us,{" "}
                      <Link to={"/login"}>Log in</Link>.
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
                        disabled={isDisabled}
                        onClick={(e) => {
                          e.preventDefault();
                          callRegisterUser(e);
                        }}
                        style={isDisabled ? { background: "gray" } : {}}
                        className="site-button"
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
