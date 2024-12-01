import connectDataBase from "./database/index.js";
import app from "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT;

if (!port) {
  throw new Error("Missing PORT variable");
}

await connectDataBase();

startServer(Number(port), app);
