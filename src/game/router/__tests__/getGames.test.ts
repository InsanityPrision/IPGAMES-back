import request from "supertest";
import app from "../../../server";
import { type Game } from "../../types";
import GameModel from "../../model/GameModel";
import connectDataBaseTests from "../../../testsSetup/connectDataBaseTests";

connectDataBaseTests();

describe("Given the GET /games endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with status 200 and a list of games with titles 'Counter Strike' and 'Katana Zero'", async () => {
      const expectedGameName1 = "Counter Strike";
      const expectedGameName2 = "Katana Zero";

      await GameModel.create([
        {
          name: "Counter Strike",
          price: 0,
          isFree: true,
          rate: 4,
          description: "Counter Strike...",
          developer: "Valve",
          date: new Date(),
          genders: [],
          imageUrl: "/counter.webp",
          imageAlt: "counter",
        },
        {
          name: "Katana Zero",
          price: 13,
          isFree: false,
          rate: 5,
          description: "Katana Zero...",
          developer: "Devolver Digital",
          date: new Date(),
          genders: [],
          imageUrl: "/katana.webp",
          imageAlt: "katana",
        },
      ]);

      const response = await request(app).get("/games").expect(200);

      const responseBody = response.body as { games: Game[] };

      expect(responseBody.games).toMatchObject<Partial<Game>[]>([
        {
          name: expectedGameName1,
        },
        {
          name: expectedGameName2,
        },
      ]);
    });
  });
});
