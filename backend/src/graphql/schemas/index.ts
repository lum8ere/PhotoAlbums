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
    getUser: [User]
    getRoles: [Role]
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(user_id: String!, input: UpdateUserInput): User
    deleteUser(user_id: String!): User
    createRole(input: CreateRoleInput): Role
    updateRole(role_id: Int!, input: UpdateRoleInput): Role
    deleteRole(role_id: Int!): Role
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

  type User {
    user_id: String
    username: String
    password: String
    token: String
  }
  
  input userInput {
    username: String!
    password: String!
    email: String!
  }
  
  type Mutation {
    register(input: userInput): User
    login(input: userInput): User
  }
`;

export default typeDefs;
