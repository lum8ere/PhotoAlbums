import * as queries from 'graphql/resolvers/Queries/index';
import * as mutation from 'graphql/resolvers/mutations/index';

export const resolvers = {
  Query: {
    ...queries,
  },
  Mutation: {
    ...mutation,
  },
};

// const resolvers = {
//   Query: {
//     users: (): Promise<UserModel[]> =>
//       UserModel.findAll({ include: [RoleModel] }),
//     roles: (): Promise<RoleModel[]> => RoleModel.findAll(),
//   },
//   Mutation: {
//     createUser: (
//       _: any,
//       { input }: { input: UserAttributes }
//     ): Promise<UserModel> => UserModel.create(input),
//     updateUser: async (
//       _: any,
//       { user_id, input }: { user_id: string; input: Partial<UserAttributes> }
//     ): Promise<UserModel | null> => {
//       await UserModel.update(input, { where: { user_id } });
//       return await UserModel.findByPk(user_id);
//     },
//     deleteUser: async (
//       _: any,
//       { user_id }: { user_id: string }
//     ): Promise<UserModel | null> => {
      // const user = await UserModel.findByPk(user_id);
      // if (!user) {
      //   throw new Error(`User with ID ${user_id} not found`);
      // }
      // await user.destroy();
      // return user;
//     },
//     createRole: (
//       _: any,
//       { input }: { input: RoleAttributes }
//     ): Promise<RoleModel> => RoleModel.create(input),
//     updateRole: async (
//       _: any,
//       { role_id, input }: { role_id: number; input: Partial<RoleAttributes> }
//     ): Promise<RoleModel | null> => {
//       await RoleModel.update(input, { where: { role_id } });
//       return await RoleModel.findByPk(role_id);
//     },
//     deleteRole: async (
//       _: any,
//       { role_id }: { role_id: number }
//     ): Promise<RoleModel | null> => {
      // const role = await RoleModel.findByPk(role_id);
      // if (!role) {
      //   throw new Error(`Role with ID ${role_id} not found`);
      // }
      // await role.destroy();
      // return role;
//     },
//     register: (_: any, { input }: { input: any }, context: any): Promise<any> => {
//       const { req, res } = context;
//       return AuthController.signup(req, res);
//     },
//     login: (_: any, { input }: { input: any }, context: any): Promise<any> => {
//       const { req, res } = context;
//       return AuthController.signin(req, res);
//     },
//   },
// };

export default resolvers;