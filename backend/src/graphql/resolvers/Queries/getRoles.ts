import RoleModel from "models/role.model";

export const getRoles = async () => {
  const result = await RoleModel.findAll();
  return result;
};

// export const getRoleById = async ({ parent, args, context }: any) => {
//   const result = await RoleModel.findByPk(args.role_id);
//   return result;
// };
