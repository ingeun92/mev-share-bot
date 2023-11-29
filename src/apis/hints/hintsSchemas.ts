import { z } from "zod";

import { eoaValidation } from "../../utils/customValidation.js";

/**** GET *****/

export const getExample = z.object({
  exampleKeyRequired: z.string(),
  exampleKeyNotRequired: z.string().optional(),
});

export const getAddressExample = z.object({
  exampleAddress: eoaValidation(),
});

/***** POST  *****/
