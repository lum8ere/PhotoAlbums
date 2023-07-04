import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    user_id: String
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    phone: String
    roles: [Role]
  }

  type Role {
    role_id: Int
    name: String
  }

  type Query {
    users: [User]
    roles: [Role]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(user_id: String!, input: UpdateUserInput): User
    deleteUser(user_id: String!): User
    createRole(input: CreateRoleInput): Role
    updateRole(role_id: Int!, input: UpdateRoleInput): Role
    deleteRole(role_id: Int!): Role
    signup(input: SignupInput): AuthPayload
    signin(input: SigninInput): AuthPayload
  }

  input CreateUserInput {
    username: String!
    email: String!
    password: String!
    first_name: String
    last_name: String
    phone: String
  }

  input UpdateUserInput {
    username: String
    email: String
    password: String
    first_name: String
    last_name: String
    phone: String
  }

  input CreateRoleInput {
    name: String!
  }

  input UpdateRoleInput {
    name: String
  }

  input SignupInput {
    username: String!
    email: String!
    password: String!
    first_name: String
    last_name: String
    phone: String
    roles: [String]
  }

  input SigninInput {
    username: String!
    password: String!
  }

  type AuthPayload {
    user_id: ID!
    username: String!
    email: String!
    roles: [String]
    accessToken: String!
  }
`;

export default typeDefs;
