import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";
import React from "react";

export const socket = socketio.connect("ws://localhost:3500");
export const SocketContext = React.createContext();