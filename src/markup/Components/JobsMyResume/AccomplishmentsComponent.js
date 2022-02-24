import React, { useState } from "react";
import Certification from "./AccomplishmentsComponents/Certification";
import OnlineProfile from "./AccomplishmentsComponents/OnlineProfile";
import Patent from "./AccomplishmentsComponents/Patent";
import Presentation from "./AccomplishmentsComponents/Presentation";
import WhitePaper from "./AccomplishmentsComponents/WhitePaper";
import WorkSample from "./AccomplishmentsComponents/WorkSample";

export default function AccomplishmentsComponent({}) {
  return (
    <div id="Certification_bx" className="job-bx bg-white m-b30">
      {/* Accomplishments */}
      <h5 clas2sName="m-b10 ">Certification</h5>
      <div className="list-row">
        <div className="list-line">
          {/* Certification */}
          <Certification />

          {/*          
          <WorkSample />
          <WhitePaper />
          <Presentation />
          <Patent /> */}
        </div>
      </div>
    </div>
  );
}
