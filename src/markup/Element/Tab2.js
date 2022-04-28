import React, { useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const imgBlog1 = [
  {
    image: require("./../../images/gallery/pic1.jpg"),
    image2: require("./../../images/logo/logo/logo1.png"),
  },
];

const Tab2 = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <div tabs="true">
        <div className="site-filters clearfix center  m-b40">
          <ul className="filters " data-toggle="buttons">
            <li
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>A</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>B</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>C</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>D</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>E</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "6" })}
              onClick={() => {
                toggle("6");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>F</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "7" })}
              onClick={() => {
                toggle("7");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>G</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "8" })}
              onClick={() => {
                toggle("8");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>H</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "9" })}
              onClick={() => {
                toggle("9");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>I</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "10" })}
              onClick={() => {
                toggle("10");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>J</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "11" })}
              onClick={() => {
                toggle("11");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>K</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "12" })}
              onClick={() => {
                toggle("12");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>L</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "13" })}
              onClick={() => {
                toggle("13");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>M</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "14" })}
              onClick={() => {
                toggle("14");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>N</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "15" })}
              onClick={() => {
                toggle("15");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>O</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "16" })}
              onClick={() => {
                toggle("16");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>P</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "17" })}
              onClick={() => {
                toggle("17");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>Q</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "18" })}
              onClick={() => {
                toggle("18");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>R</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "19" })}
              onClick={() => {
                toggle("19");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>S</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "20" })}
              onClick={() => {
                toggle("20");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>T</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "21" })}
              onClick={() => {
                toggle("21");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>U</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "22" })}
              onClick={() => {
                toggle("22");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>V</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "23" })}
              onClick={() => {
                toggle("23");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>W</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "24" })}
              onClick={() => {
                toggle("24");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>X</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "25" })}
              onClick={() => {
                toggle("25");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>Y</span>
              </Link>
            </li>
            <li
              className={classnames({ active: activeTab === "26" })}
              onClick={() => {
                toggle("26");
              }}
            >
              <input type="radio" />
              <Link to={"#"} className="site-button-secondry radius-sm">
                <span>Z</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ul
            id="masonry"
            className="dez-gallery-listing gallery-grid-4 gallery mfp-gallery row"
          >
            {state.AllCompanies.map((item, index) => (
              <li
                className="web card-container col-lg-3 col-md-4 col-sm-4"
                key={index}
              >
                <div className="dez-gallery-box">
                  <div className="dez-media overlay-black-light">
                    <Link to={""}>
                      {" "}
                      <img
                        src={{
                          uri:
                            item?.pic != null
                              ? item?.pic
                              : "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640",
                        }}
                        alt=""
                      />{" "}
                    </Link>
                    {console.log("item?.company_name", item?.company_name)}
                    <div className="overlay-icon overlay-logo">
                      <img src={item?.company_name} alt="" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </TabPane>
      </TabContent>
    </div>
  );
};
export default Tab2;
