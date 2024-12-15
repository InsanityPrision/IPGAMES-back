import morgan from "morgan";
import express from "express";
import gamesRouter from "../game/router/gamesRouter.js";
import handleEndpointNotFound from "./errors/handleEndpointNotFound.js";
import handleGeneralErrors from "./errors/handleGeneralErrors.js";
import { enbaleCors } from "./cors.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));

app.use(express.json());

enbaleCors(app);

app.use("/games", gamesRouter);

app.use(handleEndpointNotFound);
app.use(handleGeneralErrors);

export default app;
