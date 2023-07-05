import UserModel from "models/user.model";
import { UserAttributes } from "models/user.model";

export const updateUser = async (
  _: any,
  { user_id, input }: { user_id: string; input: Partial<UserAttributes> }
): Promise<UserModel | null> => {
  await UserModel.update(input, { where: { user_id } });
  return await UserModel.findByPk(user_id);
};
