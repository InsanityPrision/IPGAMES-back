import { type Response, type Request } from "express";
import { type Game } from "../types";

export interface GameControllerStructure {
  get: (_req: Request, res: Response) => Promise<void>;
  post: (req: Request<Omit<Game, "_id">>, res: Response) => Promise<void>;
}

export type RequestWithGame = Request<unknown, unknown, Omit<Game, "_id">>;
