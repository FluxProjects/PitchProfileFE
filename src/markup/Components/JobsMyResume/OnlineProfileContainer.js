import React, { useState } from "react";
import OnlineProfile from "./AccomplishmentsComponents/OnlineProfile";

export default function OnlineProfileContainer({}) {
  return (
    <div id="social_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 clas2sName="m-b10 ">Social Profiles</h5>
      <div className="list-row">
        <div className="list-line">
          {/* OnlineProfile */}
          <OnlineProfile />
        </div>
      </div>
    </div>
  );
}
