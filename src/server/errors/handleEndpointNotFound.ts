import { type NextFunction, type Request, type Response } from "express";
import ServerError from "./ServerError";

const handleEndpointNotFound = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError(404, "Endpoint not found");

  next(error);
};

export default handleEndpointNotFound;
