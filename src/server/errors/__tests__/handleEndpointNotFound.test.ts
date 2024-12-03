import { type Request, type NextFunction, type Response } from "express";
import handleEndpointNotFound from "../handleEndpointNotFound";
import ServerError from "../ServerError/ServerError";

describe("Given the handleEndpointNotFound middleware", () => {
  describe("When receives a next function", () => {
    test("Then it should call next function with a error with status code 404 and message: 'Endpoint not found'", () => {
      const req = {};
      const res = {};
      const next = jest.fn();

      const statusCode = 404;
      const errorMessage = "Endpoint not found";

      const expectedError = new ServerError(statusCode, errorMessage);

      handleEndpointNotFound(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(
        expect.objectContaining({
          message: expectedError.message,
          statusCode: expectedError.statusCode,
        }),
      );
    });
  });
});
