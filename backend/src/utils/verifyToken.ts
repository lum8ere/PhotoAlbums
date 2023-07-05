import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (token: any) => {
  return jwt.verify(token, 'test'); //FIXME: заменить на process.env.JWT_SECRET
};
