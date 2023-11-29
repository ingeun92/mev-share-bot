import "dotenv/config";
import * as ExampleRepository from "./exampleRepository.js";

/**** GET *****/

export const getExample = async (): Promise<string> => {
  return "Hello world from /example";
};

export const getHints = async (): Promise<string> => {
  return "Hello world from /example";
};

export const getAddressExample = async (
  exampleAddress: string,
): Promise<string> => {
  return `${exampleAddress} is a valid address`;
};

export const getExampleIds = async (exampleId: number): Promise<object> => {
  const tokenIds = await ExampleRepository.getExampleIds(exampleId);

  return tokenIds;
};

/**** POST *****/

/**** HELPER *****/
