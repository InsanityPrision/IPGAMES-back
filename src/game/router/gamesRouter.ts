import { Router } from "express";
import GamesController from "../controller/gamesController.js";
import GameModel from "../model/GameModel.js";

const gamesRouter = Router();
const gamesController = new GamesController(GameModel);

gamesRouter.get("/", gamesController.get);
gamesRouter.post("/", gamesController.post);
gamesRouter.delete("/:_id", gamesController.delete);

export default gamesRouter;
