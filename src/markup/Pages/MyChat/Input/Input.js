import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="formChat">
    <input
      className="inputChat"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          sendMessage(event);
          setMessage("");
        }
      }}
    />
    <button
      className="sendButtonChat"
      onClick={(e) => {
        sendMessage(e);
        setMessage("");
      }}
    >
      Send
    </button>
  </form>
);

export default Input;
