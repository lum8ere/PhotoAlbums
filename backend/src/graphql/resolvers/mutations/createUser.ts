import UserModel from "models/user.model";
import { UserAttributes } from "models/user.model";

export const createUser = async (
  _: any,
  { input }: { input: UserAttributes }
): Promise<UserModel> => UserModel.create(input);
