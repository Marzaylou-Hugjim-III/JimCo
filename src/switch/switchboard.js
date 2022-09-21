const { io } = require("socket.io-client");
const socket = io("ws://localhost:3500");
const routeMap = new Map();

socket.on("pong", (message) => {
  console.log("message: ", message);

  switchboard(message);
});

function switchboard(message) {
  const route = routeMap.get(message.clientRoute);
  if (route) {
    route.invoke(message);
  } else {
    throw new Error("route not found", message.clientRoute);
  }
}

class ClientRoute {
  static name = "error";
  static subclasses = new Set();

  constructor() {
    routeMap.set(this.constructor.name, this);
  }

  invoke(message) {
    return;
  }
}

class ExampleRoute extends ClientRoute {
  static name = "example";
  static subclasses = new Set();

  constructor() {
    routeMap.set(this.constructor.name, this);
  }

  invoke(message) {
    console.log("message: ", message);
    return;
  }
}

// const message =
// {
//   route: 'addition',
//   id: socket.id,
//   intendedReciever: 'sender',
//   clientRoute: 'example',
//   payload:
//   {
//     stuff: 'pog',
//   }
// }

ClientRoute.subclasses.forEach(banana => new banana())
