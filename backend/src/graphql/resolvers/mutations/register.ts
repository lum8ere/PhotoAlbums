import UserModel from "models/user.model";
import { signToken, hashPassword } from "utils/index";

export const register = async (_: any, { input }: { input: any }) => {
  const { password, ...rest } = input;

  const hashedPassword = await hashPassword(password);

  const result = await UserModel.create({ ...rest, password: hashedPassword });

  return {
    user_id: result.user_id,
    username: result.username,
    password: result.password,
    email: result.email,
    token: signToken({ userId: result.user_id }),
  };
};
