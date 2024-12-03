import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import app from "../../../server";
import connectDataBase from "../../../database";
import GameModel from "../../model/GameModel";
import { type Game } from "../../types";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const connectionString = server.getUri();

  await connectDataBase(connectionString);
});

afterAll(async () => {
  await server.stop();

  await mongoose.disconnect();
});

describe("Given the GET /games endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with status 200 and a list of games with titles 'Counter Strike' and 'Katana Zero'", async () => {
      const expectedGameName1 = "Counter Strike";
      const expectedGameName2 = "Katana Zero";

      await GameModel.create(
        {
          name: "Counter Strike",
          price: "0",
          isFree: true,
          rate: 4,
          description: "Counter Strike...",
          developer: "Valve",
          date: new Date(),
          genders: [],
        },
        {
          name: "Katana Zero",
          price: "13",
          isFree: false,
          rate: 5,
          description: "Katana Zero...",
          developer: "Devolver Digital",
          date: new Date(),
          genders: [],
        },
      );

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
