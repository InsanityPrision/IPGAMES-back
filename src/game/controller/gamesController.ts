import { type Response, type Request } from "express";
import { type Model } from "mongoose";
import {
  type RequestWithGame,
  type GameControllerStructure,
  type RequestWithId,
} from "./types";
import { type Game } from "../types";
import ServerError from "../../server/errors/ServerError/ServerError.js";

class GamesController implements GameControllerStructure {
  constructor(private readonly gamesModel: Model<Omit<Game, "_id">>) {}

  get = async (_req: Request, res: Response): Promise<void> => {
    const statusCode = 200;

    const games = await this.gamesModel.find().sort({ name: 1 }).exec();

    res.status(statusCode).json({ games });
  };

  post = async (req: RequestWithGame, res: Response) => {
    const { name } = req.body;

    const sameGame = await this.gamesModel.findOne({ name });

    if (sameGame) {
      const errorCode = 409;
      throw new ServerError(errorCode, "This game is already in data base");
    }

    const newGame = await this.gamesModel.create(req.body);

    res.status(201).json({ game: newGame });
  };

  delete = async (req: RequestWithId, res: Response) => {
    const { _id } = req.params;

    if (_id.length !== 24) {
      throw new ServerError(400, "Id is not correct");
    }

    const deletedGame = await this.gamesModel.findByIdAndDelete(_id);

    if (!deletedGame) {
      throw new ServerError(404, "Failed deleting game");
    }

    res.status(200).json({ game: deletedGame });
  };
}

export default GamesController;
