import express from "express";
import morgan from "morgan";
import cors from "cors";
import gamesRouter from "../game/router/gamesRouter.js";
import handleEndpointNotFound from "./errors/handleEndpointNotFound.js";
import handleGeneralErrors from "./errors/handleGeneralErrors.js";

const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));

if (process.env.NODE_ENV !== "test") {
  const url = process.env.WHITELIST_URLS;
  if (!url) {
    throw new Error("Envaironment variable WHITELIST_URLS does not exist");
  }

  const urls = url.split(",");

  app.use(
    cors({
      origin: urls,
    }),
  );
}

app.use("/games", gamesRouter);

app.use(handleEndpointNotFound);
app.use(handleGeneralErrors);

export default app;
