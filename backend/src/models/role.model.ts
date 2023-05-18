import { Optional } from 'sequelize';
import {
  Model,
  DataType,
  Column,
  Table,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  Default,
  BelongsToMany
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import UserModel from 'models/user.model';
import UserRoleModel from 'models/userRole.model';

const { STRING, INTEGER } = DataType;

interface RoleAttributes {
  role_id: number;
  name: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'role_id'> {}

@Table({
  tableName: 'role',
  timestamps: false,
})
export default class RoleModel extends Model<
  RoleAttributes,
  RoleCreationAttributes
> {
  @PrimaryKey
  @Column({
    type: INTEGER,
    allowNull: false,
  })
  role_id!: number;

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  name!: string;

  @BelongsToMany(() => UserModel, () => UserRoleModel)
  users?: UserModel[];
}
