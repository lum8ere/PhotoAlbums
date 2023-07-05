import { verify } from "argon2";

export const verifyPassword = async (hash: any, password: any) => {
  return await verify(hash, password);
};
