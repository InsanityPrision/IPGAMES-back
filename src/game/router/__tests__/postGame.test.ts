import request from "supertest";
import app from "../../../server";
import connectDataBaseTests from "../../../testsSetup/connectDataBaseTests";
import { type Game } from "../../types";
import GameModel from "../../model/GameModel";

connectDataBaseTests();

describe("Given the POST /games endpoint", () => {
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

  describe("When it receives a request", () => {
    test("Then it should response with status 201 and Outer Wilds game", async () => {
      const gameName = "Outer Wilds";

      const response = await request(app)
        .post("/games")
        .send(outerWilds)
        .expect(201);

      const responseBody = response.body as { game: Game };

      expect(responseBody.game).toMatchObject<Partial<Game>>({
        name: gameName,
      });
    });
  });

  describe("When receives a request with Outer Wilds game and already exists in the data base", () => {
    test("Then it should response with status 409 and message 'This game is already in data base'", async () => {
      await GameModel.create(outerWilds);

      const response = await request(app)
        .post("/games")
        .send(outerWilds)
        .expect(409);

      expect(response.body).toEqual({
        message: "This game is already in data base",
      });
    });
  });
});
