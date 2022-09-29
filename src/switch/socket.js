import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";
import React from "react";

export const socket = socketio.connect("ws://mywebappenvironment.eba-snn38san.us-west-2.elasticbeanstalk.com");
export const SocketContext = React.createContext();
