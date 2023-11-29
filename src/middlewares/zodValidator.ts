import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { FailureResponse } from "../utils/apiResponse.js";
import { z } from "zod";

export const body = (schema: z.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
    } catch (error) {
      const response = new FailureResponse(error, error.issues[0]);
      return res.status(StatusCodes.BAD_REQUEST).send(response);
    }
    next();
  };
};

export const params = (schema: z.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.params);
    } catch (error) {
      const response = new FailureResponse(error, error.issues[0]);
      return res.status(StatusCodes.BAD_REQUEST).send(response);
    }
    next();
  };
};

export const query = (schema: z.Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.query);
    } catch (error) {
      const response = new FailureResponse(error, error.issues[0]);
      return res.status(StatusCodes.BAD_REQUEST).send(response);
    }
    next();
  };
};
