import { ethers } from "ethers";
import { z } from "zod";

export const eoaValidation = () => {
  return z.string().refine((value: string) => ethers.isAddress(value), {
    message: "Invalid Address",
  });
};
