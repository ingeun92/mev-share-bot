import "dotenv/config";
import * as ExampleRepository from "./hintsRepository.js";
import Logger from "../../middlewares/logger.js";
import EventSource from "eventsource";
import { Response } from "express";

/**** GET *****/

export const getHints = async (res: Response): Promise<any> => {
  const es = new EventSource("https://mev-share.flashbots.net/");
  es.addEventListener("message", (event) => {
    // console.log("Event: ", event.data);
    const data = JSON.parse(event.data);
    Logger.info(data);

    if (data.logs) {
      res.write(`data: ${event.data}\n\n`);
    }
    // res.write(`data: ${event.data}\n\n`);
  });

  process.on("SIGTERM", () => {
    es.close();
  });

  // Listen for SIGINT signal
  process.on("SIGINT", () => {
    es.close();
  });
};

/**** POST *****/

/**** HELPER *****/
