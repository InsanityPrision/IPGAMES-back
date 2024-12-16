import request from "supertest";
import app from "../../../server";
import GameModel from "../../model/GameModel";
import connectDataBaseTests from "../../../testsSetup/connectDataBaseTests";
import { type Game } from "../../types";

connectDataBaseTests();

describe("Given the DELETE /games/:id endpoint", () => {
  describe("When receives a request with id", () => {
    test("Then it should response with status 200 and 'Outer Wilds' game", async () => {
      const newGame = await GameModel.create({
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
      });

      const response = await request(app)
        .delete(`/games/${newGame.id}`)
        .expect(200);

      expect(response.body).toMatchObject<{ game: Partial<Game> }>({
        game: {
          name: newGame.name,
        },
      });
    });
  });

  describe("When receives a request with id '123456789123456789123456' inexistent", () => {
    test("Then it should response with status 404 and message: 'Failed deleting game'", async () => {
      const response = await request(app)
        .delete("/games/123456789123456789123456")
        .expect(404);

      expect(response.body).toMatchObject({ message: "Failed deleting game" });
    });
  });

  describe("When receives a request with  id '123456789123456789' incorrect", () => {
    test("Then it should response with status 400 and message: 'Id is not correct'", async () => {
      const response = await request(app)
        .delete("/games/123456789123456789")
        .expect(400);

      expect(response.body).toMatchObject({ message: "Id is not correct" });
    });
  });
});
