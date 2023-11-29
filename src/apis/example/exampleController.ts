import "dotenv/config";
import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { SuccessResponse } from "../../utils/apiResponse.js";
import Logger from "../../middlewares/logger.js";
import * as ExampleService from "./exampleService.js";

/**** GET *****/

export const getExample: RequestHandler = async (_, res) => {
  const example = await ExampleService.getExample();
  Logger.info("Logger getExample");
  const response = new SuccessResponse(null, example);
  res.status(StatusCodes.OK).send(response);
};

export const getHints: RequestHandler = async (_, res) => {
  const hints = await ExampleService.getHints();
  Logger.info("Logger getHints");
  const response = new SuccessResponse(null, hints);
  res.status(StatusCodes.OK).send(response);
};

export const getAddressExample: RequestHandler = async (req, res) => {
  const { exampleAddress } = req.params;
  const example = await ExampleService.getAddressExample(exampleAddress);
  Logger.info("Logger getTestAddress example");
  const response = new SuccessResponse(null, example);
  res.status(StatusCodes.OK).send(response);
};

export const getExampleIds: RequestHandler = async (_, res) => {
  const example = await ExampleService.getExampleIds(1);
  Logger.info("Logger getTest example");
  const response = new SuccessResponse(null, JSON.stringify(example));
  res.status(StatusCodes.OK).send(response);
};

/***** POST  *****/
