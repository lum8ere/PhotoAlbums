import jwt from "jsonwebtoken";
import "dotenv/config";

export const signToken = (data: any) => {
  return jwt.sign(data, 'test'); //FIXME: заменить на process.env.JWT_SECRET
};
