import React, { useState } from "react";
import Certification from "./AccomplishmentsComponents/Certification";
import OnlineProfile from "./AccomplishmentsComponents/OnlineProfile";
import Patent from "./AccomplishmentsComponents/Patent";
import Presentation from "./AccomplishmentsComponents/Presentation";
import WhitePaper from "./AccomplishmentsComponents/WhitePaper";
import WorkSample from "./AccomplishmentsComponents/WorkSample";

export default function AccomplishmentsComponent({}) {
  return (
    <div id="accomplishments_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 className="m-b10 ">Accomplishments</h5>
      <div className="list-row">
        <div className="list-line">
          {/* Certification */}
          <Certification />
          {/* OnlineProfile */}
          <OnlineProfile />
          {/* Work sample */}
          <WorkSample />
          {/* White Paper / Research Publication / Journal Entry */}
          <WhitePaper />
          {/* Presentation */}
          <Presentation />
          {/* Patent */}
          <Patent />
        </div>
      </div>
    </div>
  );
}
