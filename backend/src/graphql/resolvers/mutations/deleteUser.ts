import UserModel from "models/user.model";

export const deleteUser = async (
  _: any,
  { user_id }: { user_id: string }
): Promise<UserModel | null> => {
  const user = await UserModel.findByPk(user_id);
  if (!user) {
    throw new Error(`User with ID ${user_id} not found`);
  }
  await user.destroy();
  return user;
};
