import { type ServerErrorStructure } from "./types";

class ServerError extends Error implements ServerErrorStructure {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message);
  }
}

export default ServerError;
