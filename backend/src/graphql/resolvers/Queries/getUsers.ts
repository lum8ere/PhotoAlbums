import UserModel from "models/user.model";
import RoleModel from "models/role.model";

export const getUser = async () => {
  const result = await UserModel.findAll({ include: [RoleModel] });
  return result;
};

// export const getUserById = async ({ parent, args, context }: any) => {
//   const result = await UserModel.findByPk(args.user_id);
//   return result;
// };
