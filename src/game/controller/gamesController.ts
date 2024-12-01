import { type Response, type Request } from "express";
import { type GameControllerStructure } from "./types";
import GameModel from "../model/GameModel.js";

class GamesController implements GameControllerStructure {
  get = async (_req: Request, res: Response): Promise<void> => {
    const statusCode = 200;

    const games = await GameModel.find({});

    res.status(statusCode).json({ games });
  };
}

export default GamesController;
