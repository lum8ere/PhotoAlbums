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

const { STRING, UUID } = DataType;

interface RoleAttributes {
  role_id: string;
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
  @Default(uuidv4)
  @Column({
    type: UUID,
    allowNull: false,
  })
  role_id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  name!: string;

  @BelongsToMany(() => UserModel, () => UserRoleModel)
  users?: UserModel[];
}
