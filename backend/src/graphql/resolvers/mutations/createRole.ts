import RoleModel from "models/role.model";
import { RoleAttributes } from "models/role.model";

export const createRole = async (
  _: any,
  { input }: { input: RoleAttributes }
): Promise<RoleModel> => RoleModel.create(input);
