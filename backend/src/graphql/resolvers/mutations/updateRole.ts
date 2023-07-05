import RoleModel from "models/role.model";
import { RoleAttributes } from "models/role.model";

export const updateRole = async (
  _: any,
  { role_id, input }: { role_id: number; input: Partial<RoleAttributes> }
): Promise<RoleModel | null> => {
  await RoleModel.update(input, { where: { role_id } });
  return await RoleModel.findByPk(role_id);
};
