import Router from "express";
import "express-async-errors";
import * as ExampleController from "./exampleController.js";
import * as ZodValidator from "../../middlewares/zodValidator.js";
import * as ExampleSchemas from "./exampleSchemas.js";

const exampleRoutes = Router();

/***** GET Routes *****/
exampleRoutes.get(
  "/",
  ZodValidator.body(ExampleSchemas.getExample),
  ExampleController.getExample,
);

exampleRoutes.get(
  "/getHints",
  ZodValidator.body(ExampleSchemas.getExample),
  ExampleController.getHints,
);

exampleRoutes.get(
  "/:exampleAddress",
  ZodValidator.params(ExampleSchemas.getAddressExample),
  ExampleController.getAddressExample,
);

/***** POST Routes *****/

export default exampleRoutes;
