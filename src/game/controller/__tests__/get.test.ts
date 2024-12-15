import { type Request, type Response } from "express";
import { type Model } from "mongoose";
import GamesController from "../gamesController";
import { type Game } from "../../types";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the get method of GamesController class", () => {
  describe("When it receives a response", () => {
    const mockGamesModel: Partial<Model<Omit<Game, "_id">>> = {
      find: jest.fn().mockReturnValue({
        sort: jest.fn().mockReturnValue({
          exec: jest.fn().mockResolvedValue([
            {
              name: "Counter Strike",
            },
          ]),
        }),
      }),
    };
    const gamesController = new GamesController(
      mockGamesModel as Model<Omit<Game, "_id">>,
    );

    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const games = {
      games: [
        {
          name: "Counter Strike",
        },
      ],
    };

    test("Then it should call status method with status code 200", async () => {
      await gamesController.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it shoudl call json method with a game with title 'Counter Strike'", async () => {
      await gamesController.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith(games);
    });
  });
});
