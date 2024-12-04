import request from "supertest";
import app from "..";
import connectDataBaseTests from "../../testsSetup/connectDataBaseTests";

connectDataBaseTests();

describe("Given the a not existent endpoint", () => {
  const expectedErrorMessage = "Endpoint not found";

  describe("When it receives a request with the method GET and path /gamess", () => {
    test("Then it should respons with status 404 and message 'Endpoint not found", async () => {
      const response = await request(app).get("/gamess").expect(404);

      expect(response.body).toStrictEqual({ message: expectedErrorMessage });
    });
  });

  describe("When it receives a request with the method PATCH and path /games", () => {
    test("Then it should response with status 404 and message 'Endpoint not found'", async () => {
      const response = await request(app).patch("/games").expect(404);

      expect(response.body).toStrictEqual({ message: expectedErrorMessage });
    });
  });
});
