import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
              <div className="widget">
                <img
                  src={require("./../../images/logo.png")}
                  width="180"
                  className="m-b15"
                  alt=""
                />
                <div className="widget border-0">
                  <ul className="list-2 list-line">
                    <li>
                      <Link className="textFooter" to={"/about-us"}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="textFooter" to={"/about-us"}>
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link to={""}>Support</Link>
                    </li>
                    <li>
                      <Link to={""}>Privacy Policy</Link>
                    </li>

                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>
                      <Link to={""}>How It Works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12"></div>

            <div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
              <h4
                style={{
                  fontSize: 18,
                  color: "black",
                }}
              >
                Email Newsletters
              </h4>
              <p style={{ color: "gray" }} className="text-capitalize  m-b20">
                Sign up to receive email updates on product announcements, new
                features, promotions and special subscription offers
              </p>
              <div className="subscribe-form m-b20">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="input-group">
                    <input
                      name="dzEmail"
                      required="required"
                      className="form-control"
                      placeholder="Your Email Address"
                      type="email"
                    />
                    <span className="input-group-btn">
                      <button
                        name="submit"
                        value="Submit"
                        type="submit"
                        className="site-button radius-xl"
                      >
                        Subscribe
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <span>
                {" "}
                © Copyright by{" "}
                <i className="fa fa-heart m-lr5 text-red heart"></i>
                <Link to={""}>Pitch profile</Link> All rights reserved.
              </span>
            </div>

            {/* Icons */}
            <div className="col-lg-6 col-sm-12 text-right">
              <ul className="list-inline m-a0 fontBgColor">
                <li style={{}}>
                  <Link to={""} className="site-button white facebook circle ">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={""}
                    className="site-button white google-plus circle "
                  >
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                {/* <li>
                    <Link
                      to={""}
                      className="site-button white linkedin circle "
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li> */}
                {/* <li>
                    <Link
                      to={""}
                      className="site-button white instagram circle "
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li> */}
                <li>
                  <Link to={""} className="site-button white twitter circle ">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
