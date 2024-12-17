import { type Response } from "express";
import { type Model } from "mongoose";
import { type Game } from "../../types";
import { type RequestWithId } from "../types";
import GamesController from "../gamesController";

describe("Given the getById method of gamesController class", () => {
  describe("When it receives a request with in params id '1234356789123456789123456'", () => {
    const outerWilds: Game = {
      _id: "123456789123456789123456",
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
      findById: jest.fn().mockResolvedValue(outerWilds),
    };

    const gamesController = new GamesController(
      mockGamesModel as Model<Omit<Game, "_id">>,
    );

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const req: Partial<RequestWithId> = {
      params: { _id: outerWilds._id },
    };

    test("Then it should call status 200 method of the response", async () => {
      await gamesController.getById(req as RequestWithId, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call json  method of the response with a game with title 'Outer Wilds'", async () => {
      await gamesController.getById(req as RequestWithId, res as Response);

      expect(res.json).toHaveBeenCalledWith({ game: outerWilds });
    });
  });
});
