import { type Response, type Request } from "express";
import { type Game } from "../types";

export interface GameControllerStructure {
  get: (_req: Request, res: Response) => Promise<void>;
  post: (req: Request, res: Response) => Promise<void>;
  delete: (req: Request, res: Response) => Promise<void>;
  getById: (req: Request, res: Response) => Promise<void>;
}

export type RequestWithGame = Request<unknown, unknown, Omit<Game, "_id">>;

export type RequestWithId = Request<{ _id: string }>;
