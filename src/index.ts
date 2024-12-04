import connectDataBase from "./database/index.js";
import app from "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 3000;
const connectionString = process.env.DATA_BASE;

if (!connectionString) {
  throw new Error("Missing connection string");
}

if (!port) {
  throw new Error("Missing PORT variable");
}

await connectDataBase(connectionString);

startServer(Number(port), app);
