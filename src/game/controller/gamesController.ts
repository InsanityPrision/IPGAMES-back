import { type Response, type Request } from "express";
import { type Model } from "mongoose";
import { type GameControllerStructure } from "./types";
import { type Game } from "../types";

class GamesController implements GameControllerStructure {
  constructor(private readonly gamesModel: Model<Omit<Game, "id">>) {}

  get = async (req: Request, res: Response): Promise<void> => {
    const statusCode = 200;

    const games = await this.gamesModel.find().exec();

    res.status(statusCode).json({ games });
  };
}

export default GamesController;
