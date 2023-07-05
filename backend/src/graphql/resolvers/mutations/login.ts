import UserModel from 'models/user.model';
import { signToken, verifyPassword } from "utils/index";

export const login = async (_: any, { input }: { input: any }) => {
  const { password, username } = input;

  const result = await UserModel.findOne({ where: { username } });
    
  const isValidPassword = await verifyPassword(result?.password, password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  return {
    user_id: result?.user_id,
    username: result?.username,
    token: signToken({ userId: result?.user_id }),
  };
};