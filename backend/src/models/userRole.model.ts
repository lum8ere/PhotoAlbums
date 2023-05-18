import { Model, Table, ForeignKey, Column, DataType } from 'sequelize-typescript';
import UserModel from 'models/user.model';
import RoleModel from 'models/role.model';

const { UUID, INTEGER } = DataType;

@Table({
  tableName: 'user_role',
  timestamps: false,
})
export default class UserRoleModel extends Model<UserRoleModel> {
  @ForeignKey(() => UserModel)
  @Column({
    type: UUID,
    allowNull: false,
  })
  user_id!: string;

  @ForeignKey(() => RoleModel)
  @Column({
    type: INTEGER,
    allowNull: false,
  })
  role_id!: number;
}