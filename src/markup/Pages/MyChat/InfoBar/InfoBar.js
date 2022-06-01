import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBarChat">
    <div className="leftInnerContainerChat">
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h3 style={{ color: "white" }}>{room}</h3>
    </div>
    <div className="rightInnerContainerChat">
      {/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
    </div>
  </div>
);

export default InfoBar;
