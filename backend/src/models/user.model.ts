import { 
    Model, 
    DataType, 
    Column, 
    Table,
    PrimaryKey, 
    AllowNull, 
    NotEmpty 
} from 'sequelize-typescript';

const {STRING, UUID} = DataType;

@Table({
    tableName: 'user',
    timestamps: false
})

export default class UserModel extends Model<UserModel>{

    @PrimaryKey
    @Column(UUID)
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

    @AllowNull(false)
    @NotEmpty
    @Column(STRING)
    first_name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column(STRING)
    last_name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column(STRING)
    phone!: string;
}