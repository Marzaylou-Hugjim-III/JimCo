import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";
import React from "react";
// "ws://mywebappenvironment.eba-snn38san.us-west-2.elasticbeanstalk.com"
export const socket = socketio.connect("http://localhost:3500");
export const SocketContext = React.createContext();
