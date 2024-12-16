import { type Model } from "mongoose";
import { type Request, type Response } from "express";
import { type Game } from "../../types";
import GamesController from "../gamesController";
import { type RequestWithGame } from "../types";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the post method of GamesController class", () => {
  describe("When it receives a request with 'Outer Wilds' game", () => {
    const outerWilds: Omit<Game, "_id"> = {
      name: "Outer Wilds",
      price: 22.99,
      isFree: false,
      rate: 5,
      description:
        "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
      developer: "Mobius Digital",
      date: "2020-5-18",
      genders: ["Horror", "Adventure"],
      imageUrl: "/outerwilds.webp",
      imageAlt: "Outer Wilds cover",
    };

    const mockGamesModel: Partial<Model<Omit<Game, "_id">>> = {
      findOne: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue(outerWilds),
    };

    const gamesController = new GamesController(
      mockGamesModel as Model<Omit<Game, "_id">>,
    );

    const req: Partial<Request> = {
      body: outerWilds,
    };
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status 201 method of the response", async () => {
      await gamesController.post(req as RequestWithGame, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call json method of the response with Outer Wilds game", async () => {
      await gamesController.post(req as RequestWithGame, res as Response);

      expect(res.json).toHaveBeenCalledWith({ game: outerWilds });
    });
  });
});
