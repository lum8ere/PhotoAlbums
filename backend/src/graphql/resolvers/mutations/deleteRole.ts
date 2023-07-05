import RoleModel from "models/role.model";

export const deleteRole = async (
  _: any,
  { role_id }: { role_id: number }
): Promise<RoleModel | null> => {
  const role = await RoleModel.findByPk(role_id);
  if (!role) {
    throw new Error(`Role with ID ${role_id} not found`);
  }
  await role.destroy();
  return role;
};
