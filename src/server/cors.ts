import cors from "cors";
import { type Express } from "express";

export const enbaleCors = (app: Express): void => {
  if (process.env.NODE_ENV !== "test") {
    const url = process.env.WHITELIST_URLS;
    if (!url) {
      throw new Error("Envaironment variable WHITELIST_URLS does not exist");
    }

    const urls = url.split(",");

    app.use(
      cors({
        origin: urls,
      }),
    );
  }
};
