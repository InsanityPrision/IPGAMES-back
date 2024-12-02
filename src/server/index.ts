import express from "express";
import morgan from "morgan";
import gamesRouter from "../game/router/gamesRouter.js";

const app = express();
app.disable("x-powered-by");

app.use(morgan("dev"));

app.use("/games", gamesRouter);

export default app;
