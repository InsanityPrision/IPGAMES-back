import { type Request, type Response } from "express";
import handleGeneralErrors from "../handleGeneralErrors";
import ServerError from "../ServerError/ServerError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the handleGeneralErrors middleware", () => {
  const req = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next = jest.fn();

  describe("When receives a error with status code 404 and message 'Endpoint not found'", () => {
    const error = new ServerError(404, "Endpoint not found");

    test("Then it should call status method with status code 404", () => {
      const expectedStatusCode = 404;

      handleGeneralErrors(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with message 'Endpoint not found'", () => {
      const expectedErrorMesage = "Endpoint not found";

      handleGeneralErrors(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ message: expectedErrorMesage });
    });
  });

  describe("When it receives a error with message 'Sintax error'", () => {
    const error = new Error("Sintax error");

    test("Then it should call status method with status code 500", () => {
      const expectedStatusCode = 500;

      handleGeneralErrors(
        error as ServerError,
        req as Request,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with message 'Server error'", () => {
      const expectedErrorMessage = "Server error";

      handleGeneralErrors(
        error as ServerError,
        req as Request,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenLastCalledWith({
        message: expectedErrorMessage,
      });
    });
  });
});
