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
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

const { STRING, UUID } = DataType;

interface UserAttributes {
    user_id?: string;
    login: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone: string;
}

interface PersonCreationAttributes extends Optional<UserAttributes, 'user_id'> {}

@Table({
    tableName: 'user',
    timestamps: false
})

export default class UserModel extends Model<UserAttributes, PersonCreationAttributes>{

    @PrimaryKey
    @Default(uuidv4)
    @Column({
      type: UUID,
      allowNull: false,
    })
    user_id?: string
    
    @AllowNull(false)
    @NotEmpty
    @Column(STRING)
    login!: string

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
}