import React from "react";
import { URL } from "./APIUtils";
import socketio from "socket.io-client";

export const socket = socketio.connect(URL, {
  cors: {
    origin: "*",
  },
  transports: ["websocket"],
});
