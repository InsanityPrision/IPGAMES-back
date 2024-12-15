import { type Response, type Request } from "express";
import { type Model } from "mongoose";
import { type GameControllerStructure } from "./types";
import { type Game } from "../types";
import ServerError from "../../server/errors/ServerError/ServerError.js";

class GamesController implements GameControllerStructure {
  constructor(private readonly gamesModel: Model<Omit<Game, "_id">>) {}

  get = async (_req: Request, res: Response): Promise<void> => {
    const statusCode = 200;

    const games = await this.gamesModel.find().sort({ name: 1 }).exec();

    res.status(statusCode).json({ games });
  };

  post = async (req: Request, res: Response) => {
    const { name } = req.body as Omit<Game, "_id">;

    const sameGame = await this.gamesModel.findOne({ name });

    if (sameGame) {
      const errorCode = 409;
      throw new ServerError(errorCode, "This game is already in data base");
    }

    const newGame = await this.gamesModel.create(req.body);

    res.status(201).json({ game: newGame });
  };
}

export default GamesController;
