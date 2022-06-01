import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainerChat">
      <div className="joinInnerContainerChat">
        <h1 className="headingChat">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInputChat"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInputChat mt-20Chat"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"buttonChat mt-20Chat"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
