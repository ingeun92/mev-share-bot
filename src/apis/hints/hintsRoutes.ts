import Router from "express";
import "express-async-errors";
import * as HintsController from "./hintsController.js";
import * as ZodValidator from "../../middlewares/zodValidator.js";
import * as HintsSchemas from "./hintsSchemas.js";

const hintsRoutes = Router();

/***** GET Routes *****/
hintsRoutes.get("/getHints", HintsController.getHints);

/***** POST Routes *****/

export default hintsRoutes;
