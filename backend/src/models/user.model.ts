import { Optional } from "sequelize";
import {
  Model,
  DataType,
  Column,
  Table,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  Default,
  BelongsToMany,
} from "sequelize-typescript";
import { v4 as uuidv4 } from "uuid";
import RoleModel from "models/role.model";
import UserRoleModel from "models/userRole.model";

const { STRING, UUID } = DataType;

interface UserAttributes {
  user_id?: string;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}

interface PersonCreationAttributes
  extends Optional<UserAttributes, "user_id"> {}

@Table({
  tableName: "user",
  timestamps: false,
})
export default class UserModel extends Model<
  UserAttributes,
  PersonCreationAttributes
> {
  @PrimaryKey
  @Default(uuidv4)
  @Column({
    type: UUID,
    allowNull: false,
  })
  user_id?: string;

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  username!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  email!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(STRING)
  password!: string;

  @AllowNull(true)
  @NotEmpty
  @Column(STRING)
  first_name!: string;

  @AllowNull(true)
  @NotEmpty
  @Column(STRING)
  last_name!: string;

  @AllowNull(true)
  @NotEmpty
  @Column(STRING)
  phone!: string;

  // Добавляем связь с таблицей Role через дополнительную таблицу UserRole
  @BelongsToMany(() => RoleModel, () => UserRoleModel)
  roles?: RoleModel[];

  async getRoles(): Promise<RoleModel[]> {
    if (!this.roles) {
      await this.$get("roles");
    }
    return this.roles || [];
  }
}
