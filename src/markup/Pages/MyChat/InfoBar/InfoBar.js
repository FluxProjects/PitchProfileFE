import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBarChat">
    <div className="leftInnerContainerChat">
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h3 style={{ color: "white", marginBottom: 0, paddingBottom: 0 }}>
        {room}
      </h3>
    </div>
  </div>
);

export default InfoBar;
