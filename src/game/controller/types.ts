import { type Response, type Request } from "express";

export interface GameControllerStructure {
  get: (_req: Request, res: Response) => Promise<void>;
}
