import React from "react";

// export const socket = socketio.connect(URL, {
//   cors: {
//     origin: "http://localhost:8080",
//   },
//   transports: ["websocket"],
// });

// export const socket = socketio.connect("http://localhost:8080", {
//   transports: ["websocket"],
// });

// export const SocketContext = React.createContext();

import { URL } from "./APIUtils";
import socketio from "socket.io-client";

export const socket = socketio.connect(URL, {
  cors: {
    origin: "*",
  },
  transports: ["websocket"],
});
// export const socket = socketIOClient(URL);
