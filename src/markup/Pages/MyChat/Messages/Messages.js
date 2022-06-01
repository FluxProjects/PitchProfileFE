import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages }) => (
  <ScrollToBottom className="messagesChat">
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
