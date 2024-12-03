import { type NextFunction, type Request, type Response } from "express";
import chalk from "chalk";
import type ServerError from "./ServerError/ServerError.js";

const handleGeneralErrors = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(chalk.bgRed(error.message));
  console.log(chalk.red(error.stack));

  const statusCode = error.statusCode ?? 500;
  const errorMessage = statusCode === 500 ? "Server error" : error.message;

  res.status(statusCode).json({
    message: errorMessage,
  });
};

export default handleGeneralErrors;
