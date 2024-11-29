import app from "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT;

if (!port) {
  throw new Error("Missing PORT variable");
}

startServer(Number(port), app);
